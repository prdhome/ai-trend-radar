---
id: 2026-11-17-openai-gpt-6-2-astra-sol-api
title: "OpenAI 發布 GPT-6.2 Astra 與 GPT-6.2 Sol（API）"
event_at: "2026-11-17T00:00:00Z"
verified_at: "2026-11-18T10:30:00+08:00"
category: model
vendors: [openai]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "GPT-6.2 Astra model page"
    url: "https://developers.openai.com/api/docs/models/gpt-6.2-astra"
    publisher: "OpenAI"
  - title: "GPT-6.2 Sol model page"
    url: "https://developers.openai.com/api/docs/models/gpt-6.2-sol"
    publisher: "OpenAI"
  - title: "OpenAI API changelog"
    url: "https://developers.openai.com/changelog"
    publisher: "OpenAI"
impact: evaluate
summary: "OpenAI API 更新紀錄於 11/17 列出 GPT-6.2 Astra（輸入 $8／輸出 $40 每百萬 token）與 GPT-6.2 Sol（$2／$10），兩者皆為 1,050,000 token 上下文。"
impact_summary: "推論：Sol 定位日常編碼與 agent 工作流、價格較低，適合先評估取代現行模型；Astra 針對高難度任務，成本高很多。"
next_check: "確認官方定價頁與 ChatGPT／Codex 是否同步提供 GPT-6.2。"
next_check_at: "2026-11-25T10:00:00+08:00"
related_events:
  - 2026-11-05-openai-gpt-6-cyber-model
---

## 已確認事實

- OpenAI API 更新紀錄（developers.openai.com/changelog）11/17 條目：GPT-6.2 Astra 與 GPT-6.2 Sol 上線。
- 兩份模型頁皆未標示發布日期；日期 11/17 取自更新紀錄條目。
- GPT-6.2 Astra：官方描述為「最能勝任最難專案」的模型；上下文 1,050,000 tokens（最大輸入 922,000）、最大輸出 128,000；知識截止 2026-05-18；標準價格每百萬 token 輸入 $8、快取輸入 $0.40、輸出 $40。
- GPT-6.2 Sol：官方描述為日常工作（從編碼到大規模驅動 agent）的首選模型；上下文與輸出上限同 Astra；知識截止 2026-06-01；標準價格輸入 $2、快取輸入 $0.10、輸出 $10。
- 兩者支援 Chat Completions、Responses、Batch（Batch 為標準價 50%）；輸入文字與圖片、輸出文字；Fast mode 為 2 倍價格；超過 272K 輸入 token 的請求費率較高。API 拒絕 reasoning effort 設為 `none`。
- 已讀取兩份模型頁與更新紀錄頁（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：若現有流程使用 GPT-6.1 系列，Sol 的價格差距值得做小規模評測；長上下文（>272K）費率上升需先估算成本。

## 仍待確認

- 官方定價頁（`content/pricing/`）尚未核對；基準測試與實際表現：未驗證。
- 更新紀錄頁摘要未提供更多條目細節，完整發布公告未讀到。
