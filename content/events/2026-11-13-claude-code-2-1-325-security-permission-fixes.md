---
id: 2026-11-13-claude-code-2-1-325-security-permission-fixes
title: "Claude Code 2.1.325：修補 zstd 解碼安全問題與多項 Bash 權限／sandbox 缺口，sandbox 預設改走一般權限流程"
event_at: "2026-11-13T00:00:00Z"
verified_at: "2026-11-14T10:30:00+08:00"
category: agent
vendors: [anthropic]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Claude Code v2.1.325 release notes"
    url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.325"
    publisher: "Anthropic（GitHub）"
impact: evaluate
summary: "Claude Code v2.1.325（GitHub 頁標示 13 Nov 發布）修正 zstd 壓縮回應解碼的安全問題與多項 Bash 權限、sandbox 缺口，並把 sandbox 內 Bash 預設改為走一般權限流程。"
impact_summary: "推論：依賴 sandbox 自動放行 Bash 或排程任務／/loop 無人值守執行 skill 的團隊，升級後可能開始出現權限詢問，需檢查設定。"
next_check: "確認後續版本是否調整 sandbox.autoAllowBashIfSandboxed 預設或補充安全公告。"
next_check_at: "2026-11-27T10:00:00+08:00"
related_events:
  - 2026-11-12-claude-code-2-1-323-code-mode-experimental
---

## 已確認事實

- GitHub release 頁（v2.1.325，標示 13 Nov 發布）列出：修正 zstd 壓縮回應解碼的安全問題；修正部分複合 Bash 指令未詢問即執行的缺口；修正 Bash allow 規則可能執行與規則所指不同程式的情況；另有數項 sandbox 保護修正（worktree 設定與 hook、linked worktree 共用 git 目錄）。
- 變更：sandbox 內的 Bash 指令預設改走一般權限流程；要維持免詢問需設 `sandbox.autoAllowBashIfSandboxed: true`（託管設定亦同）。
- 變更：排程任務與 `/loop` 在執行宣告 `allowed-tools` 或 hooks 的 skill 前會先詢問；無人值守需在 `permissions.allow` 加入 `Skill(name)`。
- 變更：在非專案／未信任的 repo 中，唯讀 git 指令會先詢問。
- 另有大量 MCP、登入、VS Code、Windows／Linux 修正。
- 已讀取該 release 頁全文（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：預設行為變更可能讓既有自動化流程停在等待核准，升級前宜在非正式環境測試。

## 仍待確認

- zstd 問題的嚴重度與是否有 CVE：發布說明未提供，未驗證。
