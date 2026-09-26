# 提示：例行事件更新（Claude Code Cloud／Routine）

你正在 `prdhome/ai-trend-radar` repo 工作。先讀 `CLAUDE.md`，規則以該檔為準。

1. 讀 `ops/sources.md` 的官方來源與 `inbox/` 新增的檔案；讀不到的來源記下來，不要用轉載內容補。
2. 對照 `content/events/` 既有事件：同一事件只更新原檔（補來源、改狀態、更新 `verified_at`），不另建重複條目。
3. 新事件依 `content/events/README.md` 格式建檔；`weekly_rank` 最多 5 則，數字小的排前面。
4. 推翻舊結論時：事件 `status` 改 `corrected`，並新增 `content/corrections/` 紀錄（此路徑需要使用者加 label 才能合併，正常）。
5. 對工具配置的建議只能新增 `content/decisions/` 的 `status: candidate` 檔案，不得改動既有 decision。
6. 跑 `npm ci && npm run check && npm run validate && npm run build`，全部通過才開 PR。
7. 開新分支並開 PR，描述包含：新增／修正了什麼、每個重大主張的來源、哪些仍是推論、是否觸及既有決策、讀不到的來源。
8. 沒有值得新增或更正的事件時不開 PR，回報「本次查核無新項目」與已檢查的來源清單。
