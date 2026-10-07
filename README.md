# AI Trend Radar

手機優先的個人 AI 趨勢儀表板：把散落的 AI 新聞整理成「有日期、有原始來源、看得出對我有何影響」的事件卡。
以這個 GitHub repo 為資料與版本主體，Astro 靜態輸出，GitHub Pages 託管。

- 網址（啟用 Pages 後）：<https://prdhome.github.io/ai-trend-radar/>
- 規格：AI Trend Radar MVP PRD v0.2（修訂自 v0.1）

## 更新流程

```
原始來源／inbox → Claude Cloud 整理候選事件 → 分支＋PR → CI（check.yml）＋人工審核 → 合併 main → deploy.yml 部署 Pages
```

- 網站只顯示**合併進 `main` 並成功部署**的內容，不宣稱即時。
- 每次巡查都開 PR（沒有新事件時只含 `content/runs/` 巡查紀錄）；首頁超過 48 小時沒有巡查紀錄就顯示「資料可能過期」。
- 頁尾顯示 `site_built_at`、合併 commit 與來源 PR 連結（取代內容檔的 `reviewed_by`；誰核准了什麼，以 PR 紀錄為準）。

## 目錄

| 路徑 | 用途 |
| --- | --- |
| `inbox/` | 使用者放入的 URL／研究筆記，原文保留，不上站 |
| `content/events/` | 一事一檔（`YYYY-MM-DD-slug.md`），Dashboard 主體；「本週重點」＝ `weekly_rank` 不為 null 的事件 |
| `content/decisions/` | 使用者核准的個人決策（CODEOWNERS＋label gate 保護）；`/decisions/` 頁顯示決策與「待決策事件」 |
| `content/corrections/` | 已發布資訊的修正紀錄（CODEOWNERS＋label gate 保護） |
| `content/pricing/` | API 價格對照表資料（只收官方定價頁，schema 檢查網域） |
| `content/runs/` | 每次 routine 巡查的紀錄（檢查了哪些來源、結果），沒有新事件也寫；首頁「最後巡查」與新鮮度依此判斷 |
| `ops/sources.md` | 官方查核來源清單 |
| `ops/prompts/` | Claude Cloud 更新／稽核提示 |
| `src/content/config.ts` | zod 內容 schema（型別錯誤會讓 build 失敗） |
| `src/` | Astro 頁面與樣式 |
| `scripts/` | zod 管不到的跨檔案檢查、URL 存活檢查、build metadata |
| `.github/workflows/check.yml` | PR：schema＋跨檔案檢查＋build＋受保護路徑 label gate |
| `.github/workflows/deploy.yml` | main：build＋部署 Pages，寫入 build metadata |

沒有 `content/weekly/`（v0.2 §6.2：避免與 events 雙份資料漂移）。

## 網站頁面與訂閱出口

| 路徑 | 內容 |
| --- | --- |
| `/` | 總覽儀表板 |
| `/events/<id>/` | 事件詳情（含相關事件、相關決策、下次核對） |
| `/vendors/<vendor>/` | 單一廠商的全部事件 |
| `/pricing/` | OpenAI／Anthropic API 價格對照（官方定價頁；3:1 混合單價為計算值） |
| `/decisions/` | 已核准／候選決策，以及尚無決策的「需要行動／值得評估」事件 |
| `/feed.xml` | Atom feed（最新 50 則；`updated` 為查核時間，重新查核或更正時閱讀器會再次標為更新） |
| `/events.json` | 全部事件的結構化匯出（含推導重要度） |

## 本機開發

需要 Node.js 22 以上（CI 用 24）。

```sh
npm ci
npm run dev          # http://localhost:4321/ai-trend-radar/
npm run check        # astro check：zod schema + TypeScript
npm run validate     # 跨檔案檢查：重複 id、壞內部連結（錯誤）；verified_at > 48h 無 correction（提醒）
npm run check:urls   # 來源 URL 存活檢查（只提醒，永遠 exit 0）
npm run build        # 輸出 dist/
```

`RADAR_NOW=2026-09-26T12:00:00+08:00 npm run validate` 可固定「現在時間」測試過期提醒。

## CI 涵蓋什麼

| 檢查 | 失敗時 |
| --- | --- |
| `astro check`（zod schema：欄位、型別、列舉、URL 格式、至少一個來源） | ❌ 擋合併 |
| 重複 `id`、`id` 與檔名不符、內部連結／`event_id`／`related_events` 指向不存在事件 | ❌ 擋合併 |
| `verified_at` 超過 48 小時且無 correction | ⚠️ 只提醒（job summary） |
| `next_check_at` 已到期、最新巡查紀錄超過 48 小時、價格 `verified_at` 超過 7 天 | ⚠️ 只提醒（job summary） |
| 價格來源不在該廠商官方網域清單 | ❌ 擋合併 |
| 巡查紀錄的 `events_added`／`events_updated` 指向不存在事件 | ❌ 擋合併 |
| 來源 URL 存活 | ⚠️ 只提醒 |
| `astro build` | ❌ 擋合併 |
| PR 觸及 `content/decisions/**`／`content/corrections/**` 卻沒有 `decision-approved` label | ❌ 擋合併 |

## 一次性 repo 設定（需 repo 擁有者操作）

1. Settings → Pages → Source 選 **GitHub Actions**。
2. Settings → Branches／Rulesets 保護 `main`：必須透過 PR、必須通過 `check` 兩個 job、**Require review from Code Owners**。
3. 建立 `decision-approved` label，僅由擁有者手動加上。

## 事件格式

見 `content/events/README.md` 與 `src/content/config.ts`。內文固定三段：已確認事實／對我的影響（推論）／仍待確認。
