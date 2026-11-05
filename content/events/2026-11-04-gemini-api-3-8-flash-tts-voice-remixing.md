---
id: 2026-11-04-gemini-api-3-8-flash-tts-voice-remixing
title: "Gemini API：Gemini 3.8 TTS 支援語音混音（voice remixing）"
event_at: "2026-11-04T00:00:00Z"
verified_at: "2026-11-05T10:30:00+08:00"
category: model
vendors: [google]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Gemini API release notes（Nov 4：Voice remixing for Gemini 3.8 TTS）"
    url: "https://aistudio.google.com/docs/changelog"
    publisher: "Google"
impact: monitor
summary: "Google 於 2026-11-04 在 Gemini API 更新紀錄宣布 Gemini 3.8 TTS 支援以自然語言指令修改既有語音並存成新語音，可用 POST /v1beta/voices 建立。"
impact_summary: "推論：需要品牌專屬語音的語音應用可評估此功能，但官方條目未說明限制與計費。"
next_check: "確認 voices 端點的計費、配額與是否離開 beta。"
next_check_at: "2026-12-05T10:00:00+08:00"
---

## 已確認事實

- Gemini API 更新紀錄（2026-11-04）：可用自然語言指令修改既有預設或自訂設計的語音，產生新的已儲存語音。
- 建立方式：使用 `gemini-3.8-flash-tts` 呼叫 `POST /v1beta/voices`，或在 Google AI Studio 中混音；之後可用 Gemini 3.8 Flash TTS 或 Flash-Lite TTS 合成語音。
- 已讀取更新紀錄頁（經摘要擷取）；該網址為原 ai.google.dev 更新紀錄的 301 轉址目的地。

## 對我的影響（推論）

- 以下為推論：端點位於 v1beta，介面可能變動，不宜直接用於正式環境。

## 仍待確認

- 計費、語音儲存數量上限、語言支援：條目未提，未驗證。
