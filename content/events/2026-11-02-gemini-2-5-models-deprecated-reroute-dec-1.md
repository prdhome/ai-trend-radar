---
id: 2026-11-02-gemini-2-5-models-deprecated-reroute-dec-1
title: "Gemini 2.5 Pro／Flash 棄用：12/1 起 API 請求自動改路由到 Gemini 3.8 Flash／3.5 Flash-Lite"
event_at: "2026-11-02T00:00:00Z"
verified_at: "2026-11-03T10:30:00+08:00"
category: pricing
vendors: [google]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Gemini API release notes（Nov 2：Gemini 2.5 Pro／Flash 棄用）"
    url: "https://aistudio.google.com/docs/changelog"
    publisher: "Google"
impact: action
summary: "Google 於 2026-11-02 宣布 gemini-2.5-pro 與 gemini-2.5-flash 已無法在 AI Studio 選用，2026-12-01 起 API 請求將分別改路由到 gemini-3.8-flash 與 gemini-3.5-flash-lite，並按新模型費率計費。"
impact_summary: "推論：仍使用 2.5 系列模型字串的專案需在 12/1 前改模型並測試，否則行為與費用會在不通知下改變。"
next_check: "12/1 後確認實際路由與計費是否如公告，並查官方 deprecations 頁是否更動日期。"
next_check_at: "2026-12-02T10:00:00+08:00"
related_events:
  - 2026-10-30-gemini-api-computer-use-ga
---

## 已確認事實

- Gemini API 更新紀錄（2026-11-02）：`gemini-2.5-pro` 已無法在 Google AI Studio 選用；2026-12-01 起其 API 請求會路由到 `gemini-3.8-flash`，並以 Gemini 3.8 Flash 費率計費。
- 同日：`gemini-2.5-flash` 同樣無法在 AI Studio 選用；2026-12-01 起 API 請求路由到 `gemini-3.5-flash-lite`，以 Gemini 3.5 Flash-Lite 費率計費。
- 兩者列出的 breaking changes：function calling 與 `thought_signature` 驗證、`thinking_level` 取代 `thinking_budget`、移除部分取樣參數、不再支援預填（prefilled）模型回合。
- 官方建議在 12/1 前自行更新模型字串並依遷移指南處理。
- 已讀取更新紀錄頁（經摘要擷取）；未讀其連結的 deprecations、定價與遷移指南頁。

## 對我的影響（推論）

- 以下為推論：若程式碼寫死 2.5 系列，12/1 後不改也能運作，但模型換了，輸出品質、延遲與帳單都可能變；breaking changes 也可能讓舊參數的請求失敗。
- 以下為推論：從 Pro 路由到 Flash 級模型，可能是能力或成本取向的降級／改變，需自行評測。

## 仍待確認

- 新舊模型的實際價差（定價頁未讀）。
- 路由生效時間點（時區）與是否有例外或延期。
