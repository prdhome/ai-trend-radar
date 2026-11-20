---
id: 2026-11-20-codex-cli-0-171-0-tui-workspace-remote
title: "Codex CLI 0.171.0：預設 GPT-6.2 Sol、TUI workspace 預設啟用、codex exec --remote"
event_at: "2026-11-20T00:00:00Z"
verified_at: "2026-11-20T10:15:00+08:00"
category: agent
vendors: [openai]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Codex rust-v0.171.0 release notes"
    url: "https://github.com/openai/codex/releases/tag/rust-v0.171.0"
    publisher: "OpenAI（GitHub）"
impact: monitor
summary: "OpenAI 於 2026-11-20 釋出 Codex CLI 0.171.0：模型目錄加入 GPT-6.2 Sol／Astra（Sol 為預設）、TUI workspace 預設啟用，新增 codex exec --remote、/rc、/remote 與 /statusline。"
impact_summary: "推論：預設模型改為 Sol 可能改變既有使用者的預設行為與用量，升級後宜確認設定。"
next_check: "確認 0.172 系列穩定版是否調整預設或 TUI workspace。"
next_check_at: "2026-11-27T10:00:00+08:00"
related_events:
  - 2026-11-18-codex-cli-0-170-0-realtime-voice-webrtc
  - 2026-11-17-openai-gpt-6-2-astra-sol-api
---

## 已確認事實

- release 頁（rust-v0.171.0，標示 20 November）：模型目錄加入 GPT-6.2 Sol 與 Astra，Sol 為預設。
- TUI workspace 標為穩定並預設啟用（文件預覽、圖片預覽、subagent 逐字稿）。
- 新增：`codex exec --remote <ADDR>`、`/rc` 與 `/remote`（本機遠端控制與裝置配對碼）、`/statusline`（受 `tui_extensions_statusline` 控制）、可設定的 undo／redo 快捷鍵。
- 修正：切換／恢復 session 時保留草稿與佇列、工作目錄變更時保留 permission profile、企業 MCP 登入（IdP 只發 ID token 無 refresh token）等。
- 已讀取 0.171.0 release 頁。

## 對我的影響（推論）

- 以下為推論：預設模型變動可能影響成本與輸出風格。

## 仍待確認

- Sol 預設是否適用所有登入方式或方案：release 頁未說明，未驗證。
