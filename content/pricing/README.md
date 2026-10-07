# content/pricing/

API 價格對照表的資料（`/pricing/` 頁）。一個模型一檔，檔名＝`id`＝`<vendor>-<model-slug>`。

- **只收官方來源**：`sources[].url` 的主機必須在 `src/content/config.ts` 的 `OFFICIAL_PRICING_HOSTS` 內，否則 build 失敗。
  第三方報導的價格不進這裡，只能留在事件內文（標 `reported`）。
- 數字照官方頁抄，單位 USD／每百萬 token；官方標「-」或沒有列的項目填 `null`，不要填 0 或自行推算。
- `notes` 只放官方頁上與該模型直接相關的說明（促銷期限、分詞器、加價層級），照原意轉述。
- `verified_at` 是實際讀取官方頁的時間；超過 7 天 `npm run validate` 會提醒重新核對。
- **價格變動時**：更新數字與 `verified_at`，並在對應事件（或新事件）寫明舊價→新價與來源；不要只改數字不留紀錄。
  若推翻已發布的說法，照 CLAUDE.md 第 6 點走 `content/corrections/`。
- 目前追蹤：OpenAI、Anthropic 的主力 API 模型。新增廠商前先在 `OFFICIAL_PRICING_HOSTS` 加官方網域。

| 欄位 | 官方用語對照 |
| --- | --- |
| `cached_input` | OpenAI「cached input」；Anthropic「cache hits and refreshes」 |
| `cache_write` | OpenAI「cache writes」；Anthropic「5m cache writes」 |
| `long_context` | OpenAI「long context」（>272K 輸入 token）；Anthropic 4.6 以後模型全上下文同價 → `null` |
| `batch_input`／`batch_output` | 兩家 Batch API 價格 |
