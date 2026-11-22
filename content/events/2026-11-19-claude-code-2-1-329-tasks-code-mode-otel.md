---
id: 2026-11-19-claude-code-2-1-329-tasks-code-mode-otel
title: "Claude Code 2.1.329：/tasks 納入排程任務與 fork、Code Mode 可搭配 OpenTelemetry、trust dialog 標示 hooks 來源"
event_at: "2026-11-19T00:00:00Z"
verified_at: "2026-11-22T10:30:00+08:00"
category: agent
vendors: [anthropic]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Claude Code v2.1.329 release notes"
    url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.329"
    publisher: "Anthropic（GitHub）"
impact: monitor
summary: "Anthropic 於 2026-11-19 釋出 Claude Code 2.1.329：/tasks 納入排程任務、/loop wakeup、goal 與 fork，Code Mode 可在啟用 OpenTelemetry 時開啟，trust dialog 會標示資料夾 hooks 的宣告位置，並調整已儲存排程任務與 max_tokens 重試行為。"
impact_summary: "推論：使用排程任務或自訂 max_tokens 上限（經 gateway）的人升級前應確認行為變更。"
next_check: "確認後續版本是否調整 2.1.329 對已儲存排程任務的處理。"
next_check_at: "2026-11-29T10:00:00+08:00"
related_events:
  - 2026-11-19-claude-code-2-1-328-auto-mode-cloud-platforms
---

## 已確認事實

- v2.1.329 release 頁（標示 19 Nov，22:14，頁面未顯示年份）列出：trust dialog 新增警告，說明資料夾的 hooks 宣告於何處；`/tasks` 納入本工作階段的排程任務、`/loop` wakeup、goal 與 fork（按 x 可停止）；Code Mode 可在 OpenTelemetry events／metrics 啟用時開啟（tracing 仍會關閉它）。
- 變更：新工作階段中，多數由舊版儲存的排程任務需重新排程（以 `--resume` 回到原工作階段仍會執行）；`/code-review` 無目標時改為對照預設分支審查整個分支。
- 移除 2.1.326 的 `max_tokens` 錯誤自動重試；gateway 後模型輸出上限較低時，需自行設定 `CLAUDE_CODE_MAX_OUTPUT_TOKENS`。
- 另有大量修正（`~/.claude.json` 被重設、macOS Keychain 重複登出、`/teleport` 取代目前對話、self-hosted runner `--push-outcome-on-release` 可能刪除分支等）。
- 已讀取 v2.1.329 tag 頁全文。

## 對我的影響（推論）

- 以下為推論：依賴已儲存排程任務的人升級後可能需要重新建立；經 gateway 使用的人可能因移除自動重試而遇到 max_tokens 錯誤。

## 仍待確認

- 2.1.330 已將「移除 max_tokens 自動重試」還原（見該版事件），2.1.329 的行為只存在一版；未驗證實際受影響範圍。
