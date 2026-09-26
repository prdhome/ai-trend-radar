#!/usr/bin/env node
// 產生 public/build-meta.json（頁尾 build metadata；v0.2 §4.1 用它取代 reviewed_by 作為審核證據）。
// deploy.yml 在 `astro build` 前呼叫，資料來自 GitHub Actions 環境變數；本機執行則只寫 site_built_at。
//
//   SITE_BUILT_AT  建置時間（ISO 8601；未給則用現在）
//   COMMIT_SHA     合併進 main 的 commit
//   MERGED_AT      該 commit 的 committer 時間（＝合併時間）
//   PR_URL         該 commit 所屬 PR 的網址
//   REPO_URL / RUN_URL
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT } from './lib/content.mjs';

const env = (k) => (process.env[k] && process.env[k].trim()) || null;
const commit = env('COMMIT_SHA');
const repoUrl = env('REPO_URL');

const meta = {
  site_built_at: env('SITE_BUILT_AT') ?? new Date().toISOString(),
  commit,
  merged_at: env('MERGED_AT'),
  pr_url: env('PR_URL'),
  commit_url: commit && repoUrl ? `${repoUrl}/commit/${commit}` : null,
  run_url: env('RUN_URL'),
};

mkdirSync(join(ROOT, 'public'), { recursive: true });
writeFileSync(join(ROOT, 'public/build-meta.json'), JSON.stringify(meta, null, 2) + '\n');
console.log(JSON.stringify(meta, null, 2));
