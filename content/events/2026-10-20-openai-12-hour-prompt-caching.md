---
id: 2026-10-20-openai-12-hour-prompt-caching
title: "OpenAI Responses API 新增 12 小時 prompt caching（快取寫入 2.5 倍輸入價）"
event_at: "2026-10-20T00:00:00Z"
verified_at: "2026-10-21T10:30:00+08:00"
category: pricing
vendors: [openai]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "OpenAI API changelog（2026-10-20 條目）"
    url: "https://developers.openai.com/changelog"
    publisher: "OpenAI"
  - title: "Prompt caching guide"
    url: "https://developers.openai.com/api/docs/guides/prompt-caching"
    publisher: "OpenAI"
impact: evaluate
summary: "OpenAI 開發者 changelog（2026-10-20）宣布 Responses API 可選 12 小時 prompt caching；指南載明以 prompt_cache_options.ttl 設為 \"12h\"，快取寫入為未快取輸入價的 2.5 倍（預設 30 分鐘為 1.25 倍），讀取價不變。"
impact_summary: "推論：請求間隔數小時、但共用長前綴的工作負載，可能因快取命中而降低成本，但每次 12h 寫入較貴，需自行估算損益。"
next_check: "官方指南何時列出完整支援模型清單，以及 12h 快取是否擴及 Responses API 以外。"
next_check_at: "2026-11-04T10:00:00+08:00"
related_events: []
---

## 已確認事實

- OpenAI 開發者 changelog 於 2026-10-20 有一則標示 Feature、API 為 v1/responses 的條目：可在 API 選擇 12 小時 prompt caching；條目載明快取寫入成本為輸入 token 價格的 2.5 倍。
- Prompt caching 指南（讀到全文）載明：
  - 在 Responses API 使用 GPT-5.6 或更新模型時，可把 `prompt_cache_options.ttl` 設為 `"12h"`；也可在單一明確 breakpoint 以 `prompt_cache_breakpoint.ttl` 覆寫。不支援的值回傳 400 `invalid_request_error`；舊的 `prompt_cache_retention` 參數不控制此設定。
  - 預設仍為 `"30m"`；12 小時為「最短」存活時間，不是刪除期限，也不改變資料保留政策上限。
  - 計價：12h 快取寫入為未快取輸入價的 2.5 倍（30 分鐘預設為 1.25 倍）；快取讀取兩者相同，為 0.1 倍（GPT-6.1 Sol 為 0.05 倍）。這些是總寫入費率，不是額外加價。
  - 將既有 30 分鐘前綴升級為 12 小時會產生新的 12 小時寫入費，不抵扣先前的寫入。
  - 用量回報在 `cache_write_tokens_details` 下新增 `ttl_12h_tokens` 與 `ttl_30m_tokens`。
- 指南頁本身未標示日期；事件日期取自 changelog 條目。

## 對我的影響（推論）

- 以下為推論：若同一長前綴在數小時內被重複使用（例如長時間 agent 工作階段、內部知識庫問答），12h 快取可能比 30 分鐘快取更省；若前綴只用一兩次，2.5 倍寫入費反而更貴。
- 以下為推論：Codex 或其他以 Responses API 為底的工具是否受益，需另行確認。

## 仍待確認

- 完整支援模型清單（指南僅以 GPT-5.6 以上、範例為 gpt-6.1-sol 說明，未驗證其他模型）。
- 是否適用 Azure、Bedrock 等第三方平台上的 OpenAI 模型（未驗證）。
