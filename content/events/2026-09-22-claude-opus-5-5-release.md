---
id: 2026-09-22-claude-opus-5-5-release
title: "Anthropic 發布 Claude Opus 5.5"
event_at: "2026-09-22T00:00:00+08:00"
verified_at: "2026-09-26T16:41:11+08:00"
category: model
status: confirmed
source_type: official
weekly_rank: 1
sources:
  - title: "Introducing Claude Opus 5.5"
    url: "https://www.anthropic.com/claude-opus-5-5"
    publisher: "Anthropic"
  - title: "Claude Opus 5.5 is now available in GitHub Copilot"
    url: "https://github.blog/changelog/2026-09-22-claude-opus-5-5-is-now-available-in-github-copilot"
    publisher: "GitHub Changelog"
impact: evaluate
summary: "Anthropic 於 2026-09-22 推出 Claude Opus 5.5，官方稱典型工作負載下運行成本比 Opus 5 降低 40%、輸出速度提升超過 30%；GitHub Copilot 同日宣布支援。"
impact_summary: "推論：cache reads 費用降低 60% 加上執行速度提升，會降低 agent 工具多輪大型程式庫上下文迭代的 API 成本，值得評估將預設模型換成 Opus 5.5。"
next_check: "7 天後查是否有第三方獨立評測驗證官方宣稱的 40% 成本降低與超過 30% 速度提升在真實使用情境下成立。"
---

## 已確認事實

- Anthropic 於 2026-09-22 推出 Claude 5.5 家族首款模型 Claude Opus 5.5。官方表示，多數任務表現達到 Claude Fable 5.1 水準，典型工作負載下運行成本比前代 Opus 5 降低 40%，輸出速度提升超過 30%。
- API 定價：每百萬 input token 從 $5 降為 $4，output token 從 $25 降為 $20；cache reads 從每百萬 token $0.50 降為 $0.20，降幅為 60%。
- GitHub Copilot 於同日（2026-09-22）宣布支援 Claude Opus 5.5。GitHub CPO Mario Rodriguez 表示，在 VS Code 中，它用少於一半的步驟數解決了比 Opus 5 更多的終端任務。

## 對我的影響（推論）

- 以下是推論，並非官方說法：cache reads 費用降低 60% 加上執行速度提升，會降低在 Claude Code／GitHub Copilot 這類 agent 工具裡做多輪大型程式庫上下文迭代的 API 成本，值得評估把預設模型換成 Opus 5.5。

## 仍待確認

- 目前只核對了官方公告頁本身，尚無第三方獨立評測驗證官方宣稱的「40% 成本降低／超過 30% 速度提升」是否在真實使用情境下成立；7 天後查是否已有第三方評測驗證這些數字。
