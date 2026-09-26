// 讀 content/ 底下的 Markdown front matter，供 scripts/ 的跨檔案檢查共用。
// 欄位型別／必填由 src/content/config.ts（zod）負責，這裡只做「讀得到就好」的寬鬆解析。
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';
import { parse } from 'yaml';

export const ROOT = new URL('../../', import.meta.url).pathname;

const FM = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;

/** @returns {{ file: string, stem: string, data: Record<string, any>, body: string }[]} */
export function readCollection(dir) {
  const abs = join(ROOT, 'content', dir);
  if (!existsSync(abs)) return [];
  return readdirSync(abs)
    .filter((f) => f.endsWith('.md') && f !== 'README.md')
    .sort()
    .map((f) => {
      const raw = readFileSync(join(abs, f), 'utf8');
      const m = raw.match(FM);
      let data = {};
      if (m) {
        try {
          data = parse(m[1]) ?? {};
        } catch {
          data = {};
        }
      }
      return { file: `content/${dir}/${f}`, stem: basename(f, '.md'), data, body: m ? m[2] : raw };
    });
}

const inActions = process.env.GITHUB_ACTIONS === 'true';

/** 同時輸出人看的訊息與 GitHub Actions annotation（會顯示在 PR 的 Files changed／Checks）。 */
export function report(level, message, file) {
  const tag = level === 'error' ? '✖ ERROR' : '⚠ WARN ';
  console.log(`${tag} ${file ? `${file}: ` : ''}${message}`);
  if (inActions) {
    const esc = (s) => String(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
    console.log(`::${level === 'error' ? 'error' : 'warning'}${file ? ` file=${file}` : ''}::${esc(message)}`);
  }
}
