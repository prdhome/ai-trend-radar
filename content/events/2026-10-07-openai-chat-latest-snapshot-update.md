---
id: 2026-10-07-openai-chat-latest-snapshot-update
title: "OpenAI API 的 chat-latest 別名更新為 ChatGPT 最新 Instant 模型"
event_at: "2026-10-07T00:00:00Z"
verified_at: "2026-10-10T10:30:00+08:00"
category: model
vendors: [openai]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "OpenAI developer changelog"
    url: "https://developers.openai.com/changelog"
    publisher: "OpenAI"
  - title: "chat-latest model page"
    url: "https://developers.openai.com/api/docs/models/chat-latest"
    publisher: "OpenAI"
impact: monitor
summary: "OpenAI 於 2026-10-07 更新 chat-latest 快照，指向 ChatGPT 最新模型，並建議正式環境改用 GPT-6 系列。"
impact_summary: "推論：依賴 chat-latest 的應用行為可能無預警改變，正式環境應改釘選 GPT-6 系列模型。"
next_check: "chat-latest 實際指向的模型名稱與後續更新頻率。"
next_check_at: "2026-10-24T10:00:00+08:00"
---

## 已確認事實

- OpenAI 開發者 changelog（10/7）：`chat-latest` 快照現在指向 Plus、Pro、Business、Enterprise 使用者在 ChatGPT 可用的最新模型，底層快照會定期更新；官方建議正式 API 使用 GPT-6 系列。
- 模型頁：chat-latest 是 ChatGPT 最新 Instant 模型的別名；上下文 400,000 tokens（輸入最多 272,000、輸出 128,000）；知識截止 2025-08-31；價格每百萬 token 輸入 $5、快取輸入 $0.50、輸出 $30；支援 Chat Completions 與 Responses；只有別名，無法釘選固定版本。
- 模型頁寫明因底層模型會變動，行為可能隨時間改變，需要穩定目標請用 GPT-6 Astra。

## 對我的影響（推論）

- 以下為推論：chat-latest 適合測試最新 ChatGPT 行為，不適合需要可重現結果的正式流程。

## 仍待確認

- 此次更新後 chat-latest 具體對應哪個模型（頁面未明說，未驗證）。
- 模型頁價格為 2026-10-10 讀取時的內容，未確認是否隨快照更新調整。
