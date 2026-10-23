---
id: 2026-10-22-github-copilot-usage-metrics-custom-names
title: "Copilot 用量指標 API 顯示自訂 skills、agents、MCP 伺服器名稱"
event_at: "2026-10-22T00:00:00Z"
verified_at: "2026-10-23T10:30:00+08:00"
category: agent
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Custom skills, agents, and MCP servers in usage metrics API"
    url: "https://github.blog/changelog/2026-10-22-custom-skills-agents-and-mcp-servers-in-usage-metrics-api"
    publisher: "GitHub"
impact: monitor
summary: "GitHub 於 2026-10-22 讓 Copilot 用量指標 API 顯示客戶自訂 skills、custom agents、MCP 伺服器、slash command 與 plugin 的名稱，每筆清單上限由 5 提高到 25。"
impact_summary: "推論：管理員可看出內部自訂工具的採用情況；名稱可能含內部資訊，分享報表前需檢查。"
next_check: "觀察 IDE 內建聊天是否也開始回報名稱。"
next_check_at: "2026-11-20T10:00:00+08:00"
related_events: []
---

## 已確認事實

- GitHub changelog（2026-10-22）：`totals_by_skill`、`totals_by_custom_agent`、`totals_by_mcp`、`totals_by_slash_cmd`、`totals_by_plugin` 現在顯示設定的名稱，不再歸入 "other"／"custom"；企業與組織報表皆適用。
- 每筆記錄的清單上限由 5 提高到 25，其餘合併為 "other"。
- 名稱來源包含 Copilot CLI、GitHub Copilot app、ACP 整合（如 JetBrains）與 Copilot SDK，部分需最低版本；IDE 內建聊天遙測不回報名稱。
- 名稱修剪並限制 128 字元；像檔案路徑的名稱仍歸入 "other"／"custom"；僅發布後處理的日期才有名稱。
- 資料來自客戶端遙測，可能低估；需啟用 Copilot usage metrics policy 並具檢視權限。
- 已讀取 changelog 條目（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：有自建 MCP 或 agents 的組織可用來追蹤推行成效。

## 仍待確認

- 各客戶端的最低版本要求（本次未查證）。
