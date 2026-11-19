---
id: 2026-11-19-claude-code-2-1-328-auto-mode-cloud-platforms
title: "Claude Code 2.1.328：auto mode 擴及 Bedrock／Vertex／Foundry，無權限模式的互動工作階段預設 auto"
event_at: "2026-11-19T00:00:00Z"
verified_at: "2026-11-19T10:30:00+08:00"
category: agent
vendors: [anthropic]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Claude Code releases (v2.1.328)"
    url: "https://github.com/anthropics/claude-code/releases"
    publisher: "Anthropic（GitHub）"
impact: evaluate
summary: "Anthropic 於 2026-11-19 釋出 Claude Code 2.1.328：auto mode 擴及 Amazon Bedrock、Google Cloud、Microsoft Foundry 與 Claude apps gateway 上的 Opus 4.6／Sonnet 4.6，未設定權限模式的互動工作階段改為預設 auto mode。"
impact_summary: "推論：使用雲端平台供應商或依賴權限提示的人，升級前應確認新的預設行為是否符合現有安全設定。"
next_check: "確認 2.1.329 之後是否調整 auto mode 預設行為。"
next_check_at: "2026-11-27T10:00:00+08:00"
related_events:
  - 2026-11-17-claude-code-2-1-327-mcp-status-auto-mode
---

## 已確認事實

- anthropics/claude-code GitHub releases 頁列出 v2.1.328（19 Nov）：auto mode 可用於 Amazon Bedrock、Google Cloud Agent Platform、Microsoft Foundry 與 Claude apps gateway 上的 Claude Opus 4.6 與 Sonnet 4.6；未指定權限模式的互動工作階段改為以 auto mode 啟動。
- `mcp_tool` hooks 支援 `"onFailure": "block"`，hook 失敗時會阻擋動作；新增環境變數 `CLAUDE_CODE_DISABLE_DEFERRED_TOOL_RESUME`；self-hosted runner 新增 `--repository-folder`、`--hook-label`、`--metadata`。
- 修正：zsh 的 `echo ====` 類指令、自動 compaction 重建 system prompt、Esc 在權限提示中遺失、排程任務儲存會清除其他任務等問題。
- 已讀取 releases 列表頁（經摘要擷取，未讀單一 tag 頁）。

## 對我的影響（推論）

- 以下為推論：預設改為 auto mode 可能改變互動工作階段的核准流程，企業或共用環境需自行確認。

## 仍待確認

- 「預設 auto mode」的適用條件（方案、模型、平台）：僅讀到摘要，未驗證完整文件。
