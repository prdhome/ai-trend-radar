---
id: 2026-10-13-gemini-4-argon-ga
title: "Gemini API：Gemini 4 Argon 正式 GA（gemini-4-argon）"
event_at: "2026-10-13T00:00:00Z"
verified_at: "2026-10-14T10:30:00+08:00"
category: model
vendors: [google]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Gemini API release notes（2026-10-13：Gemini 4 Argon generally available）"
    url: "https://ai.google.dev/gemini-api/docs/changelog"
    publisher: "Google AI for Developers"
  - title: "Gemini 4 Argon model page"
    url: "https://ai.google.dev/gemini-api/docs/models/gemini-4-argon"
    publisher: "Google AI for Developers"
impact: evaluate
summary: "Gemini API 更新紀錄 2026-10-13 列出 gemini-4-argon 正式 GA；模型頁標示 Stable、context 1,048,576 tokens，預設輸出上限 65,536，啟用 long decode 可達 1,048,576。"
impact_summary: "推論：9/30 先行公布的 Argon 現已可用 Gemini API 正式版，需要長輸出或程式／agent 任務的人可開始用自己的工作負載評估。"
related_events: [2026-09-30-gemini-4-argon-announcement]
next_check: "查 Gemini API 定價頁確認 Argon 正式價格（導入價是否沿用 $2／$10）與 long decode 計費。"
next_check_at: "2026-10-21T10:00:00+08:00"
---

## 已確認事實

- Gemini API 更新紀錄 2026-10-13 條目：「Gemini 4 Argon (gemini-4-argon) generally available (GA)」，稱其為最強、面向複雜程式、agent、數學與科學任務的模型；API 變更、價格與遷移請見「What's new in Gemini 4 Argon」。
- 模型頁（頁面更新日 2026-10-13 UTC）：版本 `gemini-4-argon` 標為 Stable；context window 1,048,576 tokens（輸入輸出共用上限）；同步請求預設最大輸出 65,536 tokens，使用 long decode 可達 1,048,576；支援 Batch API、Flex 與 Priority inference；可在 Google AI Studio 試用。
- 模型頁本身未列價格，也未寫 GA 日期；日期以更新紀錄條目為準。

## 對我的影響（推論）

- 以下為推論：GA 代表可用於正式環境的穩定模型 id，原本觀望的 API 使用者可開始比較成本與品質，尤其是長輸出任務。

## 仍待確認

- 正式定價（本次未讀到定價頁）；9/30 公布的導入價 $2／$10 是否延續未驗證。
- long decode 的計費與限制。
- 基準數字仍為 Google 自行公布。
