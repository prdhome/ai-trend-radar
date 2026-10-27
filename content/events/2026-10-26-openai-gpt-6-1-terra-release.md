---
id: 2026-10-26-openai-gpt-6-1-terra-release
title: "OpenAI 發布 GPT-6.1 Terra：輸入 $1／輸出 $5 的輕量低價模型，100 萬 token 上下文"
event_at: "2026-10-26T00:00:00Z"
verified_at: "2026-10-27T10:30:00+08:00"
category: model
vendors: [openai]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "OpenAI API Changelog（Oct 26：Released GPT-6.1 Terra）"
    url: "https://developers.openai.com/changelog"
    publisher: "OpenAI"
  - title: "GPT-6.1 Terra 模型頁"
    url: "https://developers.openai.com/api/docs/models/gpt-6.1-terra"
    publisher: "OpenAI"
impact: evaluate
summary: "OpenAI 於 2026-10-26 在 API 發布 gpt-6.1-terra，模型頁列價為輸入 $1／輸出 $5（每百萬 token），上下文 1,050,000、最大輸出 128,000。"
impact_summary: "推論：定位為低價輕量模型，視覺理解、電腦操作與文字任務量大的開發者可評估是否取代較貴的模型。"
next_check: "觀察 ChatGPT 是否提供此模型、定價頁是否調整與其他限制變動。"
next_check_at: "2026-11-10T10:00:00+08:00"
related_events:
  - 2026-09-29-gpt-6-1-sol-release
---

## 已確認事實

- Changelog（Oct 26）：發布 GPT-6.1 Terra，適用 `v1/responses` 與 `v1/chat/completions`，定位為視覺推理、精準電腦操作與自然寫作的快速高效模型。
- 模型頁：model ID `gpt-6.1-terra`；上下文 1,050,000、最大輸入 922,000、最大輸出 128,000；輸入為文字與圖片、輸出僅文字；知識截止 2026-06-01。
- reasoning effort 支援 `none`、`low`、`medium`（預設）、`high`、`xhigh`、`max`。
- 價格（每百萬 token）：輸入 $1、快取輸入 $0.05、輸出 $5；快取寫入 $1.25（保留 30 分鐘）或 $2.50（保留 12 小時）。
- 超過 272K 輸入 token 的請求，輸入與快取費率 2 倍、輸出 1.5 倍（整個請求）；Batch 與 Flex 比 Standard 便宜 50%；區域處理加價 10%；Fast mode 為 Standard 的 2 倍。
- 不支援 Realtime、Fine-tuning、Embeddings 等端點；工具呼叫須使用 Responses API。
- Standard 速率限制：Build 5,000 RPM／1M TPM；Launch 10,000 RPM／4M TPM；Grow 15,000 RPM／40M TPM。
- 已讀取 Changelog 與模型頁全文（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：價格遠低於旗艦等級模型時，高流量的視覺或電腦操作工作流可能因此降低成本，但品質需自行測試。
- 以下為推論：長上下文加價規則使超過 272K 的請求成本明顯上升，使用前要估算。

## 仍待確認

- 與同系列其他模型的實測品質與速度差異（頁面未提供基準）。
- ChatGPT 中是否提供（本次未查到）。
