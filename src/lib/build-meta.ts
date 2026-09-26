/**
 * 頁尾 build metadata（v0.2 §4.1：取代 v0.1 草案的審核者欄位，作為「只有 main 合併內容才會部署」的審核證據）。
 *
 * deploy.yml 在建置前跑 scripts/write-build-meta.mjs，把合併 commit 的 SHA、合併時間、建置時間與來源 PR 連結
 * 寫進 public/build-meta.json（同時隨站發佈於 /build-meta.json）。本機建置沒有這個檔時退回「本機建置」。
 */
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export interface BuildMeta {
  site_built_at: string;
  commit: string | null;
  merged_at: string | null;
  pr_url: string | null;
  commit_url: string | null;
  run_url: string | null;
}

export function getBuildMeta(): BuildMeta {
  const file = resolve(process.cwd(), 'public/build-meta.json');
  if (existsSync(file)) {
    return JSON.parse(readFileSync(file, 'utf8')) as BuildMeta;
  }
  return {
    site_built_at: new Date().toISOString(),
    commit: null,
    merged_at: null,
    pr_url: null,
    commit_url: null,
    run_url: null,
  };
}
