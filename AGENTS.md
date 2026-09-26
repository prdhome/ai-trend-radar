# AGENTS.md — AI Trend Radar

給 Codex 與其他 coding agent 的工作規則。內容撰寫規則與 `CLAUDE.md` 相同，這裡只寫程式碼面的約定。

## 職責（PRD §7）

- 可以做：建站、修改驗證腳本與 UI、修建置問題、建立測試、開 PR。
- 不可以：把設計修改誤當新聞事實、直接對外發布、直接推 `main`、合併 PR、改寫 `content/decisions/`、
  自行加 `decision-approved` label、為了讓 CI 通過而放寬 `.github/` 的保護機制。

## 技術約定

- Astro 靜態輸出（`astro.config.mjs`：`base: '/ai-trend-radar'`、`trailingSlash: 'always'`）。頁面內連結用 `import.meta.env.BASE_URL` 組；
  Markdown 內文的站內連結寫 `/events/<id>/`，建置時由 rehype plugin 自動補 base。
- 內容 schema 只在 `src/content/config.ts` 定義（`src/content.config.ts` 只 re-export）。新增欄位時同步更新
  `content/events/README.md`。
- zod 能表達的檢查放 schema；跨檔案檢查才放 `scripts/validate-content.mjs`（錯誤 exit 1、提醒 exit 0）。
- 外部網路檢查（`scripts/check-urls.mjs`）必須維持 warn-only。
- 介面文字繁體中文；時間一律用 `src/lib/format.ts` 以 Asia/Taipei 顯示。
- 手機優先：不得造成水平捲動，觸控目標至少 36px。

## 驗證指令

```sh
npm ci
npm run check      # zod schema + TypeScript
npm run validate   # 跨檔案檢查
npm run build
```
