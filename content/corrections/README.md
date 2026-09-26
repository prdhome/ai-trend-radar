# content/corrections/

對已發布事件的修正紀錄。舊說法保留在 `previous_claim`，不靜默刪除。

- 檔名 `YYYY-MM-DD-slug.md`；`event_id` 指向被更正的事件（`npm run validate` 會檢查存在）。
- 有對應 correction 的事件，不再觸發「verified_at 超過 48 小時」提醒。
- 受 `.github/CODEOWNERS` 與 `check.yml` 的 `decision-approved` label gate 保護。
- 欄位定義見 `src/content/config.ts` 的 `corrections` collection。
