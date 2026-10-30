---
id: 2026-10-28-github-copilot-automations-triggers-cost-controls
title: "Copilot Automations 新增 API 觸發、24 個 GitHub 事件觸發、自訂 MCP 與用量上限"
event_at: "2026-10-28T00:00:00Z"
verified_at: "2026-10-30T18:20:00+08:00"
category: agent
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "New tools, triggers, and cost controls for Copilot Automations"
    url: "https://github.blog/changelog/2026-10-28-new-tools-triggers-and-cost-controls-for-copilot-automations"
    publisher: "GitHub"
impact: evaluate
summary: "GitHub 於 2026-10-28 為 Copilot Automations 新增 REST API 觸發、24 個 GitHub 事件觸發、可串接自動化、20 個新工具與自訂 MCP，並可設定每次／每日／每週／每月 AI credit 上限。"
impact_summary: "推論：想用事件驅動自動化的團隊可評估，且新增的 credit 上限有助控管成本。"
next_check: "觀察 credit 消耗實況與更多觸發類型。"
next_check_at: "2026-11-30T10:00:00+08:00"
related_events:
  - 2026-10-28-github-copilot-agent-merge-in-pull-requests
---

## 已確認事實

- GitHub changelog（2026-10-28）：適用 Copilot Pro、Pro+、Max、Business、Enterprise，可在有寫入權限的任何 repo 建立 automation。
- 新增 API 觸發（透過 GitHub REST API，範例含 Jira、Sentry、PagerDuty 場景）與 24 個 GitHub 事件觸發（issues、PR、discussions、安全警示）。
- 可用「Can be triggered by」設定讓其他 automation 觸發，並新增「Automation run succeeded／failed」觸發以串接。
- 新增 20 個 GitHub 工具，並支援自訂 MCP server，可逐一選擇各 automation 可用的工具。
- 成本控制：可設定每次、每日、每週、每月的 AI credit 上限；單次達上限即停止，其餘期間達上限則不啟動新執行；未設上限者行為不變。
- 已讀取官方 changelog 全文（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：事件觸發加串接可能放大 credit 消耗，建議先設定上限再擴大使用。

## 仍待確認

- 各類執行的實際 credit 消耗量。
