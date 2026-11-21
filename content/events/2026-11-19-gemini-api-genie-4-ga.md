---
id: 2026-11-19-gemini-api-genie-4-ga
title: "Gemini API：Genie 4 正式版——即時互動世界生成（影片＋音訊串流）"
event_at: "2026-11-19T00:00:00Z"
verified_at: "2026-11-21T10:30:00+08:00"
category: model
vendors: [google]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Gemini API release notes（Nov 19：Genie 4 GA、Tool retrieval）"
    url: "https://aistudio.google.com/docs/changelog"
    publisher: "Google"
impact: evaluate
summary: "Google 於 2026-11-19 在 Gemini API 更新紀錄宣布 genie-4 正式版：經 Interactions API 即時生成可操控的世界，24 fps 影片加 48 kHz 立體聲；付費影片輸出約 $17.50／百萬 token（約 $0.10／秒）。同日 Interactions API 推出工具檢索預覽。"
impact_summary: "推論：做互動內容或模擬原型的團隊可試用，但以影片秒數計價的成本需先試算；工具檢索預覽對大型工具集的 agent 可能減少上下文負擔。"
next_check: "確認 genie-4 專屬文件的限制（連線時長、速率）與工具檢索脫離預覽的時間。"
next_check_at: "2026-11-28T10:00:00+08:00"
related_events:
  - 2026-11-18-gemini-api-gemini-4-neon-ga
---

## 已確認事實

- Gemini API 更新紀錄（2026-11-19）：`genie-4` 正式發布（GA），為經 Interactions API（`v1beta`）提供的即時互動世界生成。
- 透過 WebRTC 與 WebSockets 串流可操控的 24 fps、16:9 影片與 48 kHz 立體聲音訊；世界可由文字、參考圖片或兩者種子生成，並以 WASD／方向鍵與連線中的文字即時操控。
- 付費價格：輸入 $1.50／百萬 token、文字輸出 $9.00／百萬 token、影片輸出 $17.50／百萬 token（約 $0.10／秒）。
- 同日另有「Tool retrieval（Preview）」：Interactions API 可搜尋工具庫並按需載入函式 schema；以 `defer_loading: true` 標記工具並加入 `tool_search` 工具，或設 `execution: "client"` 自訂檢索；遠端 MCP server 亦支援 `defer_loading`；適用 Gemini 3.6 及之後，含所有 Gemini 4 模型。
- 已讀取更新紀錄頁（經摘要擷取，非逐字全文）。

## 對我的影響（推論）

- 以下為推論：即時串流且依秒計價，長時間互動的成本可能累積快速。
- 以下為推論：工具檢索可減少每次請求需附帶的工具定義，對工具很多的 agent 較有利，但仍為預覽。

## 仍待確認

- genie-4 專屬文件、使用限制與免費層：未讀到，未驗證。
- 輸出品質與延遲的實測：未驗證。
