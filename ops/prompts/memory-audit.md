# 提示：內容稽核（每週一次或使用者要求時）

目的：找出「靜默不一致」，不是新增新聞。只開 PR 提出修正，不自行定案。

1. 跑 `npm run validate` 與 `npm run check:urls`，列出所有提醒（過期查核、失效來源）。
2. 對 `verified_at` 超過 48 小時的事件：重新讀原始來源，仍成立就只更新 `verified_at`；不成立就走 correction 流程。
3. 來源失效：保留原標題與 URL，在事件內文「仍待確認」註明需重新核對，不刪除來源。
4. 檢查 `status: confirmed` 的事件是否真的有 `source_type: official` 的來源支持；只有第三方來源者降為 `reported`。
5. 檢查 `content/decisions/` 引用的事件是否已被更正；若是，在 PR 描述提醒使用者重新評估（不改 decision 檔）。
6. PR 描述列出每項發現與建議動作。
