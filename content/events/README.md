# content/events/

一事一檔，檔名 `YYYY-MM-DD-slug.md`，front matter 的 `id` 必須與檔名（不含 `.md`）相同。

- 欄位定義與允許值：`src/content/config.ts`（zod schema；不符會讓 `astro build` 失敗）。
- 內文固定三段：`## 已確認事實`、`## 對我的影響（推論）`、`## 仍待確認`。
- 站內連結寫成 `/events/<id>/`，`npm run validate` 會檢查目標事件存在。
- 「本週重點」＝ `weekly_rank` 不為 `null` 的事件（1–5，數字小的排前面）；**沒有** `content/weekly/` 目錄。
- 不要加「審核者」欄位：審核證據是 PR 紀錄與頁尾 build metadata。
- `vendors`：涉及的廠商（列舉值見 schema，第一個為主要廠商；不確定用 `other`），首頁篩選與 `/vendors/<x>/` 頁用。
- `related_events`：相關事件 id（同系列後續、同類功能、被引用的替代方案），只寫在較新的事件上，詳情頁會雙向顯示；`npm run validate` 檢查目標存在。
- `next_check_at`：下次核對的到期時間（ISO 8601 帶時區），必須搭配 `next_check`；首頁「到期待查」依此排序，routine 每次先處理到期事件。
