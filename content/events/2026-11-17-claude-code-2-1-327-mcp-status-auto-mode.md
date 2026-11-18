---
id: 2026-11-17-claude-code-2-1-327-mcp-status-auto-mode
title: "Claude Code 2.1.327：auto mode 忽略更多廣泛 allow 規則、mcp add-json 從 stdin 讀取"
event_at: "2026-11-17T00:00:00Z"
verified_at: "2026-11-18T10:30:00+08:00"
category: agent
vendors: [anthropic]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Claude Code v2.1.327 release notes"
    url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.327"
    publisher: "Anthropic（GitHub）"
impact: evaluate
summary: "Claude Code v2.1.327（GitHub 頁標示 17 Nov 發布）新增 `claude mcp add-json <name> -`、`attributionProject` 設定，並讓 auto mode 忽略更多廣泛 allow 規則。"
impact_summary: "推論：依賴 `Bash(pnpm dlx *)` 這類廣泛 allow 規則搭配 auto mode 的流程，升級後可能多出確認提示。"
next_check: "確認後續版本是否再調整 auto mode 或 shell 預先啟動行為。"
next_check_at: "2026-11-27T10:00:00+08:00"
related_events:
  - 2026-11-16-claude-code-2-1-326-hooks-sandbox-auto-mode
---

## 已確認事實

- GitHub release 頁（v2.1.327，標示 17 Nov 23:17 發布，頁面未顯示年份）新增：`/install-github-app` 變更 repo 前先確認；`claude mcp add-json <name> -` 從 stdin 讀 JSON（不在 session 內可用）；`attributionProject` 設定（Claude apps gateway 計費群組）；`/tui classic`；`/status` 列出損壞的 agent／skill／command 檔與永遠不匹配的 hook matcher。
- 行為變更：auto mode 忽略更多廣泛 allow 規則（例：`Bash(pnpm dlx *)`）；變數展開成極長文字的 Bash 指令會被拒絕；權限提示方向鍵停在 No；第一個 Bash 指令可在核准前先跑 shell 啟動檔，可用 `CLAUDE_CODE_DISABLE_SHELL_HEAD_START=1` 關閉。
- 修正：project scope 的 `claude mcp add/remove` 不再刪除 `.mcp.json` 其他頂層鍵；`/export` 覆寫前詢問；多項 session 恢復遺失訊息問題。
- 頁面註明完整清單超過 200 條，僅讀取摘要列出的部分。

## 對我的影響（推論）

- 以下為推論：使用 auto mode 或自動化 `.mcp.json` 管理的團隊，升級後應檢查行為。

## 仍待確認

- 完整 200+ 條更新內容：未讀完，未驗證。
