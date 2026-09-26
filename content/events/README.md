# content/events/

一事一檔，檔名 `YYYY-MM-DD-slug.md`，front matter 的 `id` 必須與檔名（不含 `.md`）相同。

- 欄位定義與允許值：`src/content/config.ts`（zod schema；不符會讓 `astro build` 失敗）。
- 內文固定三段：`## 已確認事實`、`## 對我的影響（推論）`、`## 仍待確認`。
- 站內連結寫成 `/events/<id>/`，`npm run validate` 會檢查目標事件存在。
- 「本週重點」＝ `weekly_rank` 不為 `null` 的事件（1–5，數字小的排前面）；**沒有** `content/weekly/` 目錄。
- 不要加「審核者」欄位：審核證據是 PR 紀錄與頁尾 build metadata。
- 目前三個檔案（`example: true`）是格式範例，內容純屬虛構。
