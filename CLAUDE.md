# CLAUDE.md — AI Trend Radar

給 Claude Code（含 Claude Code Cloud／Routines）的工作規則。repo 概覽見 `README.md`。

## 內容規則（PRD §4）

1. **保留原始資料**：`inbox/` 原文不改寫、不刪除。
2. **一事一檔**：`content/events/YYYY-MM-DD-slug.md`，`id` 與檔名相同；每個事件至少一個可點開的原始來源 URL。
3. **無來源不刊載**：找不到可靠來源就不新增事件，也不用擷取日期冒充事件日期（沒有可靠日期時設 `date_unknown: true`）。
4. **事實與推論分開**：`status` 用 confirmed／reported／unverified／corrected，`source_type` 用 official／third_party／personal_test；
   內文固定「已確認事實／對我的影響（推論）／仍待確認」三段。不明處標「未驗證」。
5. **價格、額度、資格**優先引用官方定價頁、說明文件或公告；第三方報導只作補充。說法衝突時並列，不強制選勝者。
6. **修正要留紀錄**：推翻舊結論時，把事件 `status` 改為 `corrected`，並提出 `content/corrections/` 紀錄保留舊說法；不靜默刪除。
7. **時間**：ISO 8601 且帶時區，介面顯示 Asia/Taipei。
8. **本週重點**用事件的 `weekly_rank`（1–5）／`featured` 欄位，不建立 `content/weekly/`。
   每個事件標 `vendors`（列舉值見 schema；不確定用 `other`），有後續要查的事件同時寫 `next_check` 與 `next_check_at`。
   同系列後續、同類功能或被引用的事件，在**較新**的事件寫 `related_events`（編輯判斷，不代表因果）。
9. **不要加 `reviewed_by`**：你不是審核者，也不能替使用者簽核。審核證據是 PR 紀錄與部署時的 build metadata。

## 決策與修正（PRD v0.2 §7.1）

- 不得修改已核准的 `content/decisions/`；對訂閱或工具配置的建議只能以 `status: candidate` 的候選決策提出。
- 這條規則是**意圖說明**，真正的防線是 `.github/CODEOWNERS`（`@prdhome` 必須審核）與 `check.yml` 的 `decision-approved` label gate。
  **不得自行加 `decision-approved` label**，也不得修改 CODEOWNERS 或 workflows 來繞過它。

## Git 流程

- 只推分支、只開 PR；**不得直接推 `main`，不得合併自己的 PR**。
- PR 描述需包含：新增／修正了什麼、每個重大主張的來源、哪些仍是推論、是否觸及既有決策。
- 每次巡查都要寫 `content/runs/YYYY-MM-DD.md`（台北日期，同日重跑就更新當天檔案），列出實際檢查的來源與結果。
  沒有值得新增或更正的事件時，`result: no_new_items`，**仍然開 PR**（只含巡查紀錄），首頁才能區分「沒新聞」與「routine 沒跑」。

## 驗證指令

```sh
npm ci && npm run check && npm run validate && npm run build
```

`npm run check:urls` 只提醒，失效來源由人判斷是否標「需重新核對」。

## 禁止

- 寫入 API 金鑰、token、個人敏感資料、私人訂閱金額、公司內部資料。
- 轉貼付費文章全文或受版權保護內容。
- 把第三方傳言升級成已證實事實。
