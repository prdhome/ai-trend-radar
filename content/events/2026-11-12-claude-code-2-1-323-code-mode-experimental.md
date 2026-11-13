---
id: 2026-11-12-claude-code-2-1-323-code-mode-experimental
title: "Claude Code 2.1.323：實驗性 Code Mode、plugin engines 版本限制，並修補多項 Bash 權限／sandbox 問題"
event_at: "2026-11-12T00:00:00Z"
verified_at: "2026-11-13T10:30:00+08:00"
category: agent
vendors: [anthropic]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Claude Code v2.1.323 release notes"
    url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.323"
    publisher: "Anthropic（GitHub）"
impact: evaluate
summary: "Claude Code v2.1.323（GitHub 頁標示 11 月 12 日發布）新增實驗性、需手動開啟的 Code Mode（Claude 以 JavaScript 呼叫工具）、plugin.json 的 engines[\"claude-code\"] 版本限制，並修正多項 Bash 權限檢查與 sandbox 問題。"
impact_summary: "推論：用 allow 規則（如 Bash(ls*)）或 sandbox 的團隊，升級後部分指令會開始詢問權限；Code Mode 為實驗功能，不宜直接用於正式流程。"
next_check: "確認 Code Mode 文件頁與後續版本是否調整功能或預設值。"
next_check_at: "2026-11-27T10:00:00+08:00"
related_events:
  - 2026-11-06-claude-code-2-1-319-auto-mode-gateway-security-fixes
---

## 已確認事實

- GitHub release 頁（v2.1.323，標示 12 Nov 發布）新增 Code Mode：實驗性、需自行開啟，由 Claude 撰寫 JavaScript 來呼叫工具；發布說明指向 https://code.claude.com/docs/en/code-mode 說明開啟方式，組織也可關閉。
- 新增 `plugin.json` 的 `engines["claude-code"]`：版本不在範圍內的 plugin 不會被安裝、更新或載入，安裝／更新會選符合範圍的最新版。
- `claude plugin validate` 新增對 plugin TypeScript hook 的型別檢查（`--strict` 時有發現即失敗）。
- 長時間 hook 在 `claude -p` 與 SDK 工作階段每 30 秒送一次進度心跳。
- 新增 `CLAUDE_CODE_DISABLE_AGENT_PROGRESS_SUMMARIES`，設為 1 可關閉 subagent 進度摘要。
- 修正 `--permission-mode auto`／`defaultMode: auto` 在 auto mode 不可用時以較寬鬆模式啟動的問題，現在改為 Manual 模式。
- 發布說明列出多項 Bash 權限與 sandbox 修正，例如 `Bash(ls*)` 這類帶附著萬用字元的 allow 規則在某些情況略過提示、`sudo`／`env` 包裝下 deny／ask 規則漏判、`sandbox.excludedCommands` 在某些情況讓未列出的指令在 sandbox 外執行；另有變更如「don't ask again」對疑似含機密的規則僅限當次 session。
- 已讀取該 release 頁全文。Code Mode 文件頁（code.claude.com/docs/en/code-mode）回 404，未讀到。

## 對我的影響（推論）

- 以下為推論：依賴寬鬆 Bash allow 規則的自動化流程，升級後可能出現新的權限詢問。
- 以下為推論：Code Mode 為實驗功能，行為與安全邊界尚無文件可核對，評估時應先在隔離環境試用。

## 仍待確認

- Code Mode 的實際運作方式、限制與關閉方式：文件頁讀不到，未驗證。
- 各項安全相關修正的嚴重度、是否有 CVE：未驗證（發布說明未提供）。
