---
id: 2026-11-17-openai-responses-background-completion-windows
title: "OpenAI Responses API 背景完成時窗（公開 beta）：2 小時 30%、8 小時 40% 折扣"
event_at: "2026-11-17T00:00:00Z"
verified_at: "2026-11-20T10:15:00+08:00"
category: pricing
vendors: [openai]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "OpenAI API changelog"
    url: "https://developers.openai.com/changelog"
    publisher: "OpenAI"
  - title: "Background mode guide（Discounted completion windows）"
    url: "https://developers.openai.com/api/docs/guides/background"
    publisher: "OpenAI"
impact: evaluate
summary: "OpenAI 於 2026-11-17 在 Responses API 公開 beta 提供 2 小時／8 小時背景完成時窗，模型 token 費率分別比 Standard 低 30%／40%；GPT-6.2 起新模型不提供 Flex 處理。"
impact_summary: "推論：能容忍延遲的長任務可改用折扣時窗取代 Flex／Batch，但需注意與 Batch 共用速率限制且快取不互通。"
next_check: "確認 beta 是否轉 GA、支援模型或折扣是否調整。"
next_check_at: "2026-12-17T10:00:00+08:00"
related_events:
  - 2026-11-17-openai-gpt-6-2-astra-sol-api
---

## 已確認事實

- changelog（Nov 17）：Responses API 公開 beta 可選 2 小時或 8 小時背景完成時窗，費率比 Standard 低 30%（2h）／40%（8h）。
- 指南頁：設 `background: true` 與 `background_options.completion_window` 為 `2h` 或 `8h`；`soonest`（預設）無折扣。須不啟用 stream，且需 Standard 處理（`service_tier: default`）。
- beta 支援 GPT-6.2 Astra、GPT-6.2 Sol、GPT-6.1 Terra、GPT-6 Luna。
- 指南頁說明：自 GPT-6.2 Astra 與 Sol 起，新模型不提供 Flex 處理。
- `2h`／`8h` 與 Batch API 共用 Batch／Background 速率限制；Standard 請求無法重用 `2h`／`8h` 背景請求建立的 prompt cache。
- 已讀取 changelog 頁與指南頁相關段落。

## 對我的影響（推論）

- 以下為推論：以 Flex 為成本手段的工作流在新模型上需改用此機制。

## 仍待確認

- 實際扣款金額須對照官方定價頁：本事件未核對，未驗證。
