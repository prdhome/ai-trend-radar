---
id: 2026-10-08-gemini-api-model-and-deep-research-deprecations
title: "Gemini API 淘汰 3.7／3.5 Flash 並自動轉向新版，舊版 Deep Research 將於 10/23 停用"
event_at: "2026-10-08T00:00:00Z"
verified_at: "2026-10-10T10:30:00+08:00"
category: model
vendors: [google]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Gemini API changelog"
    url: "https://ai.google.dev/gemini-api/docs/changelog"
    publisher: "Google"
impact: evaluate
summary: "Gemini API 更新紀錄（2026-10-08）：gemini-3.7-flash 與 gemini-3.5-flash 被淘汰並自動轉向新版，舊 Deep Research 預覽將於 2026-10-23 關閉。"
impact_summary: "推論：寫死舊模型 ID 的呼叫會在不改程式的情況下改用新模型，行為與成本可能改變；使用舊 Deep Research agent 的專案須在 10/23 前遷移。"
next_check: "2026-10-23 舊 Deep Research agent 是否如期關閉，以及自動轉向模型的價格差異。"
next_check_at: "2026-10-23T10:00:00+08:00"
---

## 已確認事實

- Gemini API changelog 10/8 條目：`gemini-3.7-flash` 由 `gemini-3.8-flash` 取代，對舊模型的請求自動轉向新模型。
- `gemini-3.5-flash` 由 `gemini-3.6-flash` 取代，請求自動轉向；開發者也可改用 `gemini-3.8-flash`。
- `deep-research-pro-preview-12-2025` 已棄用，將於 2026-10-23 關閉；請在 `interactions.create` 的 `agent` 參數改用 `deep-research-preview-04-2026` 或 `deep-research-max-preview-04-2026`。
- 本事件資料來自單一更新紀錄頁；頁面未列新舊模型價格差異。

## 對我的影響（推論）

- 以下為推論：自動轉向代表輸出品質、延遲與帳單可能在無部署變更下改變，建議明確釘選模型並回歸測試。

## 仍待確認

- 新舊模型的價格與能力差異（頁面未提供，未驗證）。
- 自動轉向的生效時間點（頁面僅列 10/8 條目，未驗證）。
