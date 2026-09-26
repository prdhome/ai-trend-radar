#!/usr/bin/env node
// 外部來源 URL 存活檢查（PRD v0.2 §6.1）：一律 warn-only，永遠 exit 0。
// 新聞網站暫時 503、擋機器人或逾時都很常見，不能因此擋住內容 PR 合併；失效的來源由審核者判斷是否要標「需重新核對」。
//
// 每個 URL：HEAD（不支援時退回 GET），最多 3 次，指數退避＋jitter。
import { appendFileSync } from 'node:fs';
import { readCollection, report } from './lib/content.mjs';

const TIMEOUT_MS = 10_000;
const MAX_ATTEMPTS = 3;
const BASE_DELAY_MS = 500;
const CONCURRENCY = 4;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function probe(url) {
  let last = '';
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    for (const method of ['HEAD', 'GET']) {
      try {
        const res = await fetch(url, {
          method,
          redirect: 'follow',
          signal: AbortSignal.timeout(TIMEOUT_MS),
          headers: { 'user-agent': 'ai-trend-radar-link-check/1.0 (+https://github.com/prdhome/ai-trend-radar)' },
        });
        await res.body?.cancel();
        if (res.ok) return { ok: true, status: res.status };
        last = `HTTP ${res.status}`;
        // 405/403 常見於只擋 HEAD 的網站 → 同一輪改用 GET；其他狀態碼直接進退避
        if (method === 'HEAD' && (res.status === 405 || res.status === 403)) continue;
        // 4xx（除 408/429）重試也不會好
        if (res.status >= 400 && res.status < 500 && res.status !== 408 && res.status !== 429) {
          return { ok: false, status: res.status, reason: last };
        }
        break;
      } catch (e) {
        last = e?.name === 'TimeoutError' ? `逾時（${TIMEOUT_MS / 1000}s）` : String(e?.cause?.code ?? e?.message ?? e);
        break;
      }
    }
    if (attempt < MAX_ATTEMPTS) {
      const backoff = BASE_DELAY_MS * 2 ** (attempt - 1);
      await sleep(backoff + Math.random() * backoff);
    }
  }
  return { ok: false, reason: last };
}

const targets = [];
for (const dir of ['events', 'corrections']) {
  for (const e of readCollection(dir)) {
    for (const s of e.data.sources ?? []) if (s?.url) targets.push({ file: e.file, url: s.url });
  }
}

const results = [];
let i = 0;
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (i < targets.length) {
      const t = targets[i++];
      results.push({ ...t, ...(await probe(t.url)) });
    }
  }),
);

const bad = results.filter((r) => !r.ok);
for (const r of bad) report('warn', `來源 URL 可能失效（${r.reason}）：${r.url}`, r.file);
console.log(`\n來源 URL 檢查：${results.length} 個，${bad.length} 個可能失效（僅提醒，不擋 CI）。`);

if (process.env.GITHUB_STEP_SUMMARY) {
  appendFileSync(
    process.env.GITHUB_STEP_SUMMARY,
    ['## 來源 URL 存活檢查（warn-only）', '', `- 檢查 ${results.length} 個，⚠️ ${bad.length} 個可能失效`, '',
      ...bad.map((r) => `- ⚠️ \`${r.file}\`：${r.url}（${r.reason}）`), ''].join('\n'),
  );
}
process.exit(0);
