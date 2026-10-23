---
id: 2026-10-22-openai-decisions-api-ga
title: "OpenAI Decisions API 正式 GA，單次最多 400 題並支援 prompt caching"
event_at: "2026-10-22T00:00:00Z"
verified_at: "2026-10-23T10:30:00+08:00"
category: agent
vendors: [openai]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "OpenAI Developer Changelog（Oct 22：Decisions API generally available）"
    url: "https://developers.openai.com/changelog"
    publisher: "OpenAI"
  - title: "Decisions 指南"
    url: "https://developers.openai.com/api/docs/guides/decisions"
    publisher: "OpenAI"
impact: evaluate
summary: "OpenAI 於 2026-10-22 宣布 Decisions API 由 public beta 轉為正式 GA，僅支援 gpt-6-luna，單次請求上限由 200 題提高到 400 題。"
impact_summary: "推論：需要大量分類或評分判斷的開發者可重新評估成本；指南列出未快取輸入 $0.10／百萬 token、輸出不計費。"
next_check: "觀察指南的計價與限制是否調整，以及是否支援 gpt-6-luna 以外的模型。"
next_check_at: "2026-11-06T10:00:00+08:00"
related_events:
  - 2026-10-06-openai-decisions-api-beta
  - 2026-10-15-openai-gpt-live-native-decisions
---

## 已確認事實

- Changelog（Oct 22）：Decisions API 已 GA，使用 `gpt-6-luna`，端點 `v1/decisions`。
- 指南載明：`gpt-6-luna` 是唯一支援的模型；每次請求 1–400 題（beta 為 200）；題型為 `predicate`、`choice`、`score`；score 題需 2–10 個有序等級。
- 自 beta 起新增：prompt caching（共用輸入至少 1,024 token）、題目指令內可放圖片、`input_json` 結構化輸入、公開 HTTP(S) 圖片 URL、對話歷史（含函式呼叫）、組織用量回報、與 GPT-Live 原生整合、Private Link。
- 指南計價：未快取輸入 $0.10／百萬 token；快取命中有折扣、快取寫入收費；輸出 token 不收費；區域處理加價與長上下文倍率適用。
- 不支援檔案、音訊、item reference 與 `file_id` 圖片輸入。
- 已讀取 Changelog 與指南頁全文（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：GA 代表可用於正式環境；大量判斷題共用同一份輸入時，快取可能降低成本。
- 以下為推論：目前綁定單一模型，是否適合取決於 gpt-6-luna 的準確度，需自行測試。

## 仍待確認

- 快取折扣的具體倍率與快取寫入價格（本次摘要未取得）。
- 圖片輸入的數量上限（指南未給數字）。
