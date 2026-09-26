# content/decisions/

使用者核准的個人決策（例如訂閱與工具配置）與重新評估條件。

- 受 `.github/CODEOWNERS`（`@prdhome` 必須審核）與 `check.yml` 的 `decision-approved` label gate 雙重保護。
- Claude／Codex 只能新增 `status: candidate` 的候選決策 PR，不得自行把狀態改成 `approved`，也不得改寫已核准內容。
- 欄位定義見 `src/content/config.ts` 的 `decisions` collection。
