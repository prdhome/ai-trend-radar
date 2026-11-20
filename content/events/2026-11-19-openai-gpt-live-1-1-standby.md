---
id: 2026-11-19-openai-gpt-live-1-1-standby
title: "OpenAI GPT-Live-1.1：多語發音與轉錄改善，WebRTC 新增 Standby 待機計價"
event_at: "2026-11-19T00:00:00Z"
verified_at: "2026-11-20T10:15:00+08:00"
category: model
vendors: [openai]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "OpenAI API changelog"
    url: "https://developers.openai.com/changelog"
    publisher: "OpenAI"
  - title: "GPT-Live-1.1 model page"
    url: "https://developers.openai.com/api/docs/models/gpt-live-1.1"
    publisher: "OpenAI"
impact: evaluate
summary: "OpenAI 於 2026-11-19 釋出 gpt-live-1.1（全雙工語音模型），改善多語發音、口音一致性與轉錄；WebRTC session 閒置時可進入 Standby，模型頁列價為 Active $0.05／分鐘、Standby $0.02／分鐘。"
impact_summary: "推論：做語音客服或助理的團隊可比較 1.1 與 1 的轉錄品質，並評估 Standby 對長時間待機 session 的成本影響。"
next_check: "確認 gpt-live-1 的後續生命週期與 1.1 價格是否調整。"
next_check_at: "2026-12-19T10:00:00+08:00"
related_events:
  - 2026-10-16-openai-gpt-live-prompt-to-voice
---

## 已確認事實

- API changelog（Nov 19）：GPT-Live-1.1 改善多語語音對話的發音、口音一致性與轉錄；在既有 Live session 設定使用 `gpt-live-1.1`。
- Standby：GPT-Live-1 與 1.1 的 WebRTC session 在閒置時暫停推論，有人說話時恢復。
- 模型頁：音訊與文字輸入輸出，支援串流與 function calling；只支援 Live endpoint（`v1/live/sessions`）。
- 模型頁價格：依時長計費，Active $0.05／分鐘；Standby $0.02／分鐘（WebRTC、推論暫停時）；後端模型與工具用量另計。
- 已讀取 changelog 頁與模型頁。模型頁未列發布日期，事件日期採 changelog 條目日期。

## 對我的影響（推論）

- 以下為推論：Standby 費率低於 Active，長時間掛線但少說話的場景可能降低成本；實際節省取決於通話型態。

## 仍待確認

- 1.1 與 1 的品質差異數據：官方頁未提供，未驗證。
