---
id: 2026-10-09-claude-code-2-1-296-sonnet-5-5-cache-price
title: "Claude Code 2.1.296：Sonnet 5.5 快取讀取價降為 $0.10／百萬 token"
event_at: "2026-10-09T00:00:00Z"
verified_at: "2026-10-11T10:30:00+08:00"
category: pricing
vendors: [anthropic]
status: confirmed
source_type: official
weekly_rank: 1
sources:
  - title: "Claude Code CHANGELOG（2.1.296）"
    url: "https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md"
    publisher: "Anthropic（GitHub）"
  - title: "Claude Code releases"
    url: "https://github.com/anthropics/claude-code/releases"
    publisher: "Anthropic（GitHub）"
  - title: "Pricing（Claude API 官方定價頁）"
    url: "https://platform.claude.com/docs/en/about-claude/pricing"
    publisher: "Anthropic"
impact: evaluate
summary: "Claude Code 2.1.296（2026-10-09）更新日誌載明 Sonnet 5.5 快取讀取價由 $0.20 降為 $0.10／百萬 token；官方 API 定價頁現列 Sonnet 5.5 cache hits 為 $0.10（base input 的 0.05 倍）。"
impact_summary: "推論：長對話或大量重複前綴的 Sonnet 5.5 工作負載，快取讀取成本減半，值得重新估算成本。"
next_check: "官方定價頁何時說明此調降的生效日與是否適用所有平台（Bedrock／Vertex 等）。"
next_check_at: "2026-10-25T10:00:00+08:00"
related_events:
  - 2026-09-28-claude-sonnet-5-5-release
---

## 已確認事實

- Claude Code releases 頁列出 v2.1.296（2026-10-09），內容含：subagent frontmatter 的 `autoCompactWindow`、`CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL`、Read 工具 `allow_large` 選項、Bash 權限檢查對 `BASH_ARGV0` 的修正、MCP 工具描述長度上限由 2,048 提高到 4,096 字元。
- 該版更新日誌寫明：Sonnet 5.5 cache reads 定價 $0.10／百萬 token（原為 $0.20）。
- 官方 API 定價頁（讀到全文）目前列 Claude Sonnet 5.5：base input $2、5m cache write $2.50、1h cache write $4、cache hits and refreshes $0.10、output $10（皆每百萬 token），並註明 Opus 5.5 與 Sonnet 5.5 的 cache hit 為 base input 的 0.05 倍。
- 注意：本站 `content/pricing/` 的 Sonnet 5.5 檔案仍記載快取讀取 $0.2，與官方現況不同（本次未修改既有檔案）。

## 對我的影響（推論）

- 以下為推論：重度使用快取的 Sonnet 5.5 工作流程成本下降；Claude Code 內顯示的費用估算也會隨之改變。

## 仍待確認

- 調降的確切生效時間與是否涵蓋第三方雲端平台（未驗證）。
- `content/pricing/` 價格檔需由人類決定是否更新。
