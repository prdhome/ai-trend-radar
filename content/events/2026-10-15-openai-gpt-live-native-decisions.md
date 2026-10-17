---
id: 2026-10-15-openai-gpt-live-native-decisions
title: "OpenAI 讓 GPT-Live 原生呼叫 Decisions API，可在使用者說話時即時決策"
event_at: "2026-10-15T00:00:00Z"
verified_at: "2026-10-17T10:30:00+08:00"
category: agent
vendors: [openai]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "OpenAI Developer Changelog（Oct 15：Native Decisions integration in GPT-Live）"
    url: "https://developers.openai.com/changelog"
    publisher: "OpenAI"
  - title: "Decisions in voice 指南"
    url: "https://developers.openai.com/api/docs/guides/decisions-voice"
    publisher: "OpenAI"
impact: monitor
summary: "OpenAI 於 2026-10-15 在 GPT-Live 加入原生 Decisions 整合：Live 可直接呼叫 Decisions，或用逐字稿事件觸發決策，省去經過應用端的一次往返。"
impact_summary: "推論：做語音代理或數位人的開發者可評估；一般聊天使用者無影響，計價與 beta／GA 狀態文件未寫明。"
next_check: "查指南是否補上計價、速率限制與 beta／GA 狀態。"
next_check_at: "2026-10-31T10:00:00+08:00"
related_events:
  - 2026-10-06-openai-decisions-api-beta
---

## 已確認事實

- Changelog（Oct 15）：GPT-Live 原生整合 Decisions，應用可在使用者說話時行動，或對 Live 的輸出做反應。
- 指南：原生委派（native delegation）讓 Live 直接呼叫 Decisions，「省去經過應用端的一次往返」；自訂委派則是應用端收到通知後自行呼叫 Decisions。
- 兩種用法：委派（在 `session.delegation` 定義選擇題，由 Decisions 選擇，例如是否呼叫 Responses API；結果以 `session.commentary.append` 回報 Live）；逐字稿觸發（`session.triggers`，在 `session.input_transcript.delta`／`session.output_transcript.delta` 事件上執行，可驅動數位人的表情、強度與手勢）。
- 委派類型須在建立 session 時設定、期間不可更改；問題可用 `session.update` 變更。結果以 `decision.event` 傳回，可能亂序，需用 `delegation_id` 或 `source_event_id` 對應。
- 需有可用的 Live 連線與 `api.decisions.write` 權限，不需 Decisions 專用 alpha header。
- 指南未說明速率限制、用量上限、計價，也未說明是 beta 或 GA。
- 已讀取指南頁全文（經摘要擷取）；Changelog 為經摘要擷取的頁面。

## 對我的影響（推論）

- 以下為推論：要做低延遲語音代理、車內或數位人互動的開發者，可評估這個減少往返的做法；一般 ChatGPT 使用者無直接影響。

## 仍待確認

- 計價與是否沿用 Decisions beta 的 $0.10／百萬 token（未驗證）。
- 目前為 beta 或 GA（未驗證）。
