# content/runs/

巡查紀錄：Claude Cloud routine **每次執行都寫一筆**，沒有新事件也要寫（結果填 `no_new_items`）。
首頁的「最後巡查」與「資料新鮮度」以這裡最新一筆的 `ran_at` 為準，用來區分「routine 有跑但沒新聞」與「routine 沒跑／PR 沒合併」。

- 檔名 `YYYY-MM-DD.md`（台北日期），`id` 與檔名相同；同一天跑第二次就更新當天檔案，不另建。
- 欄位定義：`src/content/config.ts` 的 `runs`（zod）。內文可留空，或寫簡短備註（例如讀不到的原因）。
- `sources_checked[].ok` 指 routine **實際讀到並能查核**內容，不是 HTTP 狀態碼；讀不到的寫 `note` 說明原因。
- `result` 與事件清單必須一致：
  - `new_items`：`events_added` 至少一則（可同時有 `events_updated`）
  - `updates_only`：只有 `events_updated`（例如處理到期待查、補來源、改狀態）
  - `no_new_items`：兩者皆空

```yaml
---
id: "2026-10-08"
ran_at: "2026-10-08T10:30:00+08:00"
result: new_items
sources_checked:
  - url: "https://www.anthropic.com/news"
    ok: true
  - url: "https://openai.com/news/"
    ok: false
    note: "403，未改用轉載站補內容"
events_added:
  - 2026-10-07-example-slug
events_updated: []
---
```
