---
id: 2026-11-24-codex-cli-0-172-0-mcp-lazy-start-approval-reviewers
title: "Codex CLI 0.172.0：stdio MCP 首次呼叫才啟動、逐工具 approval reviewer、Bedrock Runtime 選項"
event_at: "2026-11-24T00:00:00Z"
verified_at: "2026-11-24T10:30:00+08:00"
category: agent
vendors: [openai]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Codex rust-v0.172.0 release notes"
    url: "https://github.com/openai/codex/releases/tag/rust-v0.172.0"
    publisher: "OpenAI（GitHub）"
impact: monitor
summary: "OpenAI 於 2026-11-24 釋出 Codex CLI 0.172.0：有快取工具清單的 stdio MCP server 預設首次呼叫才啟動、可為個別 connected app 工具設定 approval reviewer，app-server 客戶端可選 Amazon Bedrock Runtime。"
impact_summary: "推論：MCP 延遲啟動可能縮短啟動時間，但改變既有 MCP 啟動時機，使用者升級後宜留意。"
next_check: "確認 0.172 系列後續版本是否調整 MCP 啟動預設或 code_mode_host_grpc 的棄用。"
next_check_at: "2026-12-01T10:00:00+08:00"
related_events:
  - 2026-11-20-codex-cli-0-171-0-tui-workspace-remote
---

## 已確認事實

- release 頁（rust-v0.172.0，標示 24 Nov 00:03，頁面未顯示年份與時區；比較基準為 rust-v0.171.0）：新增終端機中從搜尋結果與逐字稿開啟已存對話與巢狀 agent、Tab 補全部分 slash 指令參數、Shift+Up/Down 在 task group 間移動。
- 有快取工具清單的選用 stdio MCP server 預設在首次工具呼叫時才啟動；可在 `config.toml` 為個別 connected app 工具設定 approval reviewer；app-server 客戶端可在設定或登入時選 Amazon Bedrock Runtime。
- 修正：`codex exec resume` 還原已存 sandbox 權限與工作目錄、跨作業系統遠端 session 保留工作目錄與可寫路徑、provider 錯誤即時顯示並指出達到的 API 花費上限等。
- 文件：內建 `openai-docs` skill 涵蓋遷移至 GPT-6.2 Astra／Sol。
- 雜項：Code Mode 所有 host 連線改用 gRPC，`code_mode_host_grpc` 設定已棄用。
- 已讀取 0.172.0 release tag 頁。

## 對我的影響（推論）

- 以下為推論：延遲啟動 MCP 與逐工具審核者讓企業配置更細，但行為改變可能影響依賴 MCP 預先啟動的流程。

## 仍待確認

- 延遲啟動對各 MCP server 的實際影響：release 頁未說明，未驗證。
