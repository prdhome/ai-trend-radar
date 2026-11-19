---
id: 2026-11-18-codex-cli-0-170-0-realtime-voice-webrtc
title: "Codex CLI 0.170.0：TUI 即時語音通話（WebRTC）、OTel 驗證標頭自動更新、跨環境同名 MCP 實驗支援"
event_at: "2026-11-18T00:00:00Z"
verified_at: "2026-11-19T10:30:00+08:00"
category: agent
vendors: [openai]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Codex rust-v0.170.0 release notes"
    url: "https://github.com/openai/codex/releases/tag/rust-v0.170.0"
    publisher: "OpenAI（GitHub）"
impact: monitor
summary: "OpenAI 於 2026-11-18 釋出 Codex CLI 0.170.0：TUI 新增 WebRTC 即時語音通話協商、OpenTelemetry HTTP exporter 驗證標頭自動更新，並實驗性支援不同環境的同名 MCP server。"
impact_summary: "推論：屬 CLI 功能與修正更新，無價格或方案變動；使用 MCP OAuth 或 Windows sandbox 的人可評估升級。"
next_check: "確認 0.171 系列穩定版是否改變這些功能。"
next_check_at: "2026-11-27T10:00:00+08:00"
related_events:
  - 2026-11-13-codex-cli-0-169-0-side-chat-tabs-custom-providers
---

## 已確認事實

- openai/codex release 頁（rust-v0.170.0，標示 18 Nov）新增：TUI 即時語音通話的 WebRTC 協商；OpenTelemetry HTTP exporter 的驗證標頭自動更新；實驗性支援不同環境中同名的 MCP server。
- 修正：過大的 WebSocket 請求改走 HTTP；MCP OAuth 取消／登入／登出的競態；閒置 Cloud 對話斷線重連；Windows 檔案取代與 sandbox 權限；權限更新與子執行緒不再遺失既有 sandbox 限制；檔案搜尋重複結果。
- 文件：sandbox 文件說明權限設定檔（permission profiles）與檔案系統規則。
- 已讀取 0.170.0 release 頁全文。

## 對我的影響（推論）

- 以下為推論：sandbox 權限相關修正可能影響既有受限環境的行為，升級後宜重測。

## 仍待確認

- 即時語音功能的使用條件與所需方案：release 頁未說明，未驗證。
