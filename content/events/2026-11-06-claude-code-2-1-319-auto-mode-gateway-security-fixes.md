---
id: 2026-11-06-claude-code-2-1-319-auto-mode-gateway-security-fixes
title: "Claude Code 2.1.319：auto mode 在閘道／關閉遙測時改為詢問或拒絕，並修補 Bash 權限繞過與 sandbox 逃逸"
event_at: "2026-11-06T00:00:00Z"
verified_at: "2026-11-08T10:30:00+08:00"
category: agent
vendors: [anthropic]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Claude Code v2.1.319 release notes"
    url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.319"
    publisher: "Anthropic（GitHub）"
impact: evaluate
summary: "Claude Code v2.1.319（2026-11-06）改變 auto mode：遙測或 feature flag 關閉（含 LLM 閘道）時，伺服器無法檢查的呼叫會詢問或拒絕、不再退回內建分類器；新增 permissions.denyInsteadOfPrompting、MCP task 背景執行，並修補 Bash 權限繞過與建立 worktree 的 sandbox 逃逸。"
impact_summary: "推論：在 LLM 閘道或停用遙測環境使用 auto mode 的團隊，升級後行為可能改變（`claude -p` 會以 exit 1 結束）；安全修補建議儘快升級。"
next_check: "確認 auto mode 行為變更是否影響自己的閘道／CI 流程，以及後續版本是否調整。"
next_check_at: "2026-11-22T10:00:00+08:00"
related_events: [2026-10-31-claude-code-opus-4-8-fast-mode-deprecated]
---

## 已確認事實

- GitHub release 頁（v2.1.319，頁面標示 11 月 6 日發布）列出：
- auto mode：遙測或 feature flag 關閉（包含在 LLM 閘道後）時，伺服器無法檢查的呼叫會被詢問或拒絕，不再退回內建分類器；設定 `CLAUDE_CODE_AUTO_MODE_SERVER=0` 可繼續使用分類器（Bedrock、Vertex、Foundry 不變）。
- 修正 `claude -p` 在 auto mode 因無安全檢查而拒絕動作時仍以 exit 0 結束，現在文字與 JSON 輸出皆 exit 1。
- 新增 `permissions.denyInsteadOfPrompting`：原本會等待權限提示的工具呼叫改為拒絕並繼續該回合（終端機工作階段、subagent、teammate）。
- MCP server 以 task 執行工具呼叫時，Claude Code 立即移到背景並於完成時回報；可用 `CLAUDE_CODE_DISABLE_MCP_TASK_BACKGROUND` 改為等待。
- 新增 `CLAUDE_CODE_DISABLE_FEATURE_FLAGS`（停止抓取 feature flag 但不關遙測）與 `/claude-api latency-optimize`。
- 發布說明另列出安全相關修正：Bash 權限檢查可被特製環境變數前綴隱藏部分指令的繞過、`sed` 在 accept-edits／auto mode 可能略過權限檢查、建立 worktree 時的 sandbox 逃逸、`/rewind` 可能經目錄 symlink 還原或刪除檔案。
- 已讀取該 release 頁全文。

## 對我的影響（推論）

- 以下為推論：使用 LLM 閘道或 `DISABLE_TELEMETRY` 並依賴 auto mode 的自動化流程，升級後可能遇到更多詢問或拒絕，以及 `claude -p` 的 exit code 變化。
- 以下為推論：有安全修補，可信任度較低的環境宜儘快升級；版本說明未提供漏洞編號或嚴重度。

## 仍待確認

- 各安全修正的實際嚴重度、是否有 CVE：未驗證（發布說明未提供）。
- 變更對自己環境的實際影響：未驗證，需升級後實測。
