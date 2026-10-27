---
id: 2026-10-26-gemini-api-generate-content-storage-default
title: "Gemini API：付費層新專案的 Generate Content API 預設儲存請求"
event_at: "2026-10-26T00:00:00Z"
verified_at: "2026-10-27T10:30:00+08:00"
category: signal
vendors: [google]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Gemini API release notes（Oct 26：Generate Content API storage on by default）"
    url: "https://ai.google.dev/gemini-api/docs/changelog"
    publisher: "Google"
impact: action
summary: "Google 於 2026-10-26 表示，使用 generateContent 等端點的付費層新專案預設 store=true 儲存請求；既有專案維持原設定。"
impact_summary: "推論：處理敏感資料的新專案應在建立時檢查 logging 設定，必要時設定 store=false。"
next_check: "觀察 logs-datasets 文件對儲存範圍與保留期的說明。"
next_check_at: "2026-11-10T10:00:00+08:00"
---

## 已確認事實

- 更新紀錄（Oct 26）：使用 `generateContent`、`streamGenerateContent`、`batchGenerateContent` 的付費層新專案，現在預設儲存請求（`store=true`），與 Interactions API 一致。
- 既有專案維持目前設定。
- 退出方式：每次請求設 `store=false`，或在 Logs and Datasets 的設定面板關閉 Generate Content API logging。
- 已讀取官方更新紀錄該條目（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：新專案若未檢查就送入敏感內容，資料可能被儲存，需視組織政策處理。

## 仍待確認

- 儲存資料的保留期限與用途（本次未讀 logs-datasets 文件）。
- 「新專案」的起算時間點（條目未明說）。
