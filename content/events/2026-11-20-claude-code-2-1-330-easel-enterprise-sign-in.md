---
id: 2026-11-20-claude-code-2-1-330-easel-enterprise-sign-in
title: "Claude Code 2.1.330：內建圖表工具 easel、Enterprise Admin Console 登入、排程任務與 /loop 最長 30 天"
event_at: "2026-11-20T00:00:00Z"
verified_at: "2026-11-22T10:30:00+08:00"
category: agent
vendors: [anthropic]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Claude Code v2.1.330 release notes"
    url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.330"
    publisher: "Anthropic（GitHub）"
impact: evaluate
summary: "Anthropic 於 2026-11-20 釋出 Claude Code 2.1.330：新增內建圖表 mod easel、可登入 Enterprise Admin Console 管理的組織、循環排程任務與 /loop 最長執行 30 天，並調整多項 rm 指令的核准規則。"
impact_summary: "推論：企業用戶可用組織設定登入；較多 rm 指令會要求核准，自動化流程升級前宜測試。"
next_check: "確認 easel 在 Team／Enterprise 的實際可用範圍與後續版本調整。"
next_check_at: "2026-11-29T10:00:00+08:00"
related_events:
  - 2026-11-19-claude-code-2-1-329-tasks-code-mode-otel
---

## 已確認事實

- v2.1.330 release 頁（標示 20 Nov 22:32，頁面未顯示年份）：新增登入 Anthropic Enterprise Admin Console 管理的組織——`claude auth login` 後套用組織設定並使用其雲端供應商或 gateway。
- 新增 easel（內建 mod）：被要求時或在 MCP metrics 結果下繪製圖表；Pro、Max，及（有提供時）Team、Enterprise 的 macOS 與 Linux 可用，可在 `/config` 關閉自動圖表。
- 變更：循環排程任務與 `/loop` 在工作階段持續執行時最長可跑 30 天（原為 7 天，舊任務仍 7 天）；更多針對根目錄、家目錄、頂層資料夾或工作資料夾的 `rm` 指令會要求核准，無人可答時被拒絕；`deniedMcpServers` 名稱項目只隱藏指定的 claude.ai connector。
- 還原 2.1.329 對 `max_tokens` 超限自動重試的移除。
- 另有大量修正（compaction 後凍結、`ExitWorktree` 誤刪他人使用中的 worktree、並行儲存設定遺失、`/rewind` 還原舊版檔案等）與 self-hosted runner、VS Code 變更。
- 已讀取 v2.1.330 tag 頁全文。

## 對我的影響（推論）

- 以下為推論：把 `rm` 納入自動化腳本的人可能遇到新的核准提示；長時間排程任務的上限放寬可能增加用量。

## 仍待確認

- easel 在 Team／Enterprise 方案的實際供應條件：release 頁僅寫「where available」，未驗證。
