# 提示：例行事件更新（Claude Code Cloud／Routine）

你正在 `prdhome/ai-trend-radar` repo 工作。先讀 `CLAUDE.md`，規則以該檔為準。

1. **先處理到期待查**：找出 `next_check_at` 已到（≤ 現在）的事件，依 `next_check` 重新核對。查到新資訊就更新事件（補來源、改狀態、更新 `verified_at`）；
   仍未有結果就把 `next_check_at` 往後排（通常 +7 天）；問題已解決就移除 `next_check`／`next_check_at`。推翻舊結論照第 5 點處理。
2. 讀 `ops/sources.md` 的官方來源與 `inbox/` 新增的檔案；讀不到的來源記下來，不要用轉載內容補。
3. 對照 `content/events/` 既有事件：同一事件只更新原檔（補來源、改狀態、更新 `verified_at`），不另建重複條目。
4. 新事件依 `content/events/README.md` 格式建檔：必填 `vendors`；有後續要查的寫 `next_check` ＋ `next_check_at`（依內容訂日期，例如「7 天後」「GA 預計時間」，沒有線索時預設 `verified_at` +14 天）。與既有事件屬同系列後續、同類功能或被引用時，在新事件寫 `related_events`。`weekly_rank` 最多 5 則，數字小的排前面。
5. 推翻舊結論時：事件 `status` 改 `corrected`，並新增 `content/corrections/` 紀錄（此路徑需要使用者加 label 才能合併，正常）。
6. 對工具配置的建議只能新增 `content/decisions/` 的 `status: candidate` 檔案，不得改動既有 decision。
7. **寫巡查紀錄** `content/runs/YYYY-MM-DD.md`（台北日期，格式見 `content/runs/README.md`）：`ran_at`、`result`、本次實際檢查的每個來源（`ok` 是否讀到、讀不到寫 `note`）、`events_added`／`events_updated`。
8. 跑 `npm ci && npm run check && npm run validate && npm run build`，全部通過才開 PR。
9. 開新分支並開 PR，描述包含：新增／修正了什麼、每個重大主張的來源、哪些仍是推論、是否觸及既有決策、讀不到的來源、處理了哪些到期待查。
10. 沒有值得新增或更正的事件時，`result: no_new_items`，**仍開 PR**（只含巡查紀錄），標題寫「巡查紀錄 YYYY-MM-DD：本次查核無新項目」。
