#!/usr/bin/env node
// 跨檔案內容檢查（PRD v0.2 §6.1：zod schema 管不到的部分）。
//
//   ERROR（exit 1，擋 CI）：重複 id、id 與檔名不符、內部連結／event_id／related_events 指向不存在的事件
//   WARN （exit 0，只提醒）：verified_at 超過 48 小時且沒有對應 correction
//
// 外部來源 URL 存活檢查另見 scripts/check-urls.mjs（warn-only）。
// 測試用：RADAR_NOW=2026-09-26T12:00:00+08:00 可固定「現在時間」。
import { appendFileSync } from 'node:fs';
import { readCollection, report } from './lib/content.mjs';

const STALE_HOURS = 48;
const now = process.env.RADAR_NOW ? new Date(process.env.RADAR_NOW) : new Date();
if (Number.isNaN(now.getTime())) {
  console.error(`RADAR_NOW 不是合法時間：${process.env.RADAR_NOW}`);
  process.exit(2);
}

const events = readCollection('events');
const corrections = readCollection('corrections');
const decisions = readCollection('decisions');
const errors = [];
const warnings = [];
const err = (msg, file) => { errors.push({ msg, file }); report('error', msg, file); };
const warn = (msg, file) => { warnings.push({ msg, file }); report('warn', msg, file); };

// 1. 重複 id（跨 events／corrections／decisions 各自檢查）＋ id 必須等於檔名
function checkIds(entries, label) {
  const seen = new Map();
  for (const e of entries) {
    const id = e.data.id;
    if (typeof id !== 'string' || !id) continue; // 缺欄位由 zod 報
    if (id !== e.stem) err(`${label} id「${id}」與檔名「${e.stem}.md」不一致`, e.file);
    if (seen.has(id)) err(`${label} id「${id}」重複（另見 ${seen.get(id)}）`, e.file);
    else seen.set(id, e.file);
  }
  return new Set(seen.keys());
}
const eventIds = checkIds(events, '事件');
checkIds(corrections, 'correction');
checkIds(decisions, 'decision');

// 2. 內部連結：Markdown 內文的 `/events/<id>/` 連結，以及 correction.event_id、decision.related_events
const LINK = /\]\(\s*<?\/events\/([^/)\s>#?]*)\/?[^)]*\)/g;
for (const e of [...events, ...corrections, ...decisions]) {
  for (const m of e.body.matchAll(LINK)) {
    if (!eventIds.has(m[1])) err(`內部連結指向不存在的事件：/events/${m[1]}/`, e.file);
  }
}
for (const c of corrections) {
  if (c.data.event_id && !eventIds.has(c.data.event_id)) {
    err(`event_id「${c.data.event_id}」指向不存在的事件`, c.file);
  }
}
for (const d of decisions) {
  for (const id of d.data.related_events ?? []) {
    if (!eventIds.has(id)) err(`related_events 的「${id}」指向不存在的事件`, d.file);
  }
}

// 3. 查核過期提醒：verified_at 超過 48 小時、且沒有對應 correction（只提醒，不擋 CI）
const corrected = new Set(corrections.map((c) => c.data.event_id).filter(Boolean));
for (const e of events) {
  const v = e.data.verified_at ? new Date(e.data.verified_at) : null;
  if (!v || Number.isNaN(v.getTime())) continue; // 格式錯誤由 zod 報
  const hours = (now.getTime() - v.getTime()) / 3_600_000;
  if (hours > STALE_HOURS && !corrected.has(e.data.id)) {
    warn(
      `verified_at 已超過 ${STALE_HOURS} 小時（${Math.floor(hours)} 小時前），且沒有對應的 correction；審核時請確認內容仍然成立`,
      e.file,
    );
  }
}

// 摘要：寫進 GitHub Actions job summary，審核者在 PR 的 Checks 頁就看得到
const summary = [
  '## 內容跨檔案檢查',
  '',
  `- 事件 ${events.length} 則、correction ${corrections.length} 則、decision ${decisions.length} 則`,
  `- ❌ 錯誤 ${errors.length} 項（擋合併）`,
  `- ⚠️ 提醒 ${warnings.length} 項（不擋合併，請審核者留意）`,
  '',
  ...errors.map((x) => `- ❌ \`${x.file}\`：${x.msg}`),
  ...warnings.map((x) => `- ⚠️ \`${x.file}\`：${x.msg}`),
  '',
].join('\n');
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary);

console.log(`\n內容檢查完成：${errors.length} 個錯誤、${warnings.length} 個提醒。`);
process.exit(errors.length > 0 ? 1 : 0);
