---
id: 2026-10-31-claude-code-opus-4-8-fast-mode-deprecated
title: "Claude Code v2.1.316：Opus 4.8 fast mode 棄用，2026-11-30 移除"
event_at: "2026-10-31T00:00:00Z"
verified_at: "2026-11-02T10:30:00+08:00"
category: agent
vendors: [anthropic]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "anthropics/claude-code Release v2.1.316"
    url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.316"
    publisher: "Anthropic（官方 GitHub）"
impact: evaluate
summary: "Claude Code v2.1.316 release notes 宣告 Opus 4.8 的 fast mode 自 2026-10-30 起棄用，2026-11-30 移除，之後請求會報錯而非退回標準 Opus 4.8。"
impact_summary: "推論：仍在 Opus 4.8 上使用 fast mode 的人，需在 11/30 前改用 Opus 5.5 或接受標準速度。"
next_check: "2026-11-30 後確認 Opus 4.8 fast mode 是否如期移除。"
next_check_at: "2026-12-01T10:00:00+08:00"
---

## 已確認事實

- 官方 GitHub release v2.1.316（頁面顯示發布於 10 月 31 日，未標年份，頁尾為 2026）：Opus 4.8 的 fast mode 自 2026-10-30 起棄用，將於 2026-11-30 移除。
- 移除後，Opus 4.8 的 fast mode 請求會回傳錯誤，不會退回標準 Opus 4.8；release notes 建議改用 Opus 5.5 以維持加速。
- 同版另新增 `CLAUDE_CODE_DISABLE_ULTRATHINK`、`CLAUDE_CODE_SUBAGENT_EFFORT` 等環境變數，以及 Claude apps gateway 的 pooled 群組預算。
- 已讀取該 release 頁面全文（WebFetch）。

## 對我的影響（推論）

- 以下為推論：若工作流程依賴 Opus 4.8 fast mode，11/30 後會直接失敗，需提前調整設定或模型。

## 仍待確認

- 官方是否另有公告說明 Opus 5.5 的 fast mode 定價或額度（本次未讀到，未驗證）。
- 發布日期的年份由頁尾推斷，未於頁面明示。
