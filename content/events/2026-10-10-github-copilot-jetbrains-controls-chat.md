---
id: 2026-10-10-github-copilot-jetbrains-controls-chat
title: "Copilot for JetBrains 新增企業預設模型、診斷 Fix 動作與 MCP 啟動控制"
event_at: "2026-10-10T00:00:00Z"
verified_at: "2026-10-11T10:30:00+08:00"
category: agent
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "New controls and chat improvements in Copilot for JetBrains"
    url: "https://github.blog/changelog/2026-10-10-new-controls-and-chat-improvements-in-copilot-for-jetbrains"
    publisher: "GitHub"
impact: monitor
summary: "GitHub 於 2026-10-10 釋出 Copilot for JetBrains 更新：管理員可設定新對話的預設 agent 模型、診斷選單新增 Fix 動作，並可關閉 MCP 伺服器自動啟動；同時終止支援 JetBrains IDE 2025.1。"
impact_summary: "推論：用 JetBrains 的團隊可統一預設模型並避免 MCP 工具自動啟動；仍在 IDE 2025.1 的使用者需升級到 2025.2 以上。"
next_check: "官方文件是否補充企業預設模型的方案限制與設定方式。"
next_check_at: "2026-10-25T10:00:00+08:00"
---

## 已確認事實

- GitHub changelog（2026-10-10，標為 Release）說明 Copilot for JetBrains 的更新，透過最新版 GitHub Copilot JetBrains plugin 提供。
- 企業管理：管理員可用 managed settings 把任一可用的 Copilot agent 模型設為新對話的預設；使用者仍可自行改選其他模型。
- 診斷選單新增 Fix 動作：開啟 inline chat 請 Copilot 修復問題，有 agent mode 時使用 agent mode，否則使用 ask mode。
- 新設定可停用 Copilot 與 Claude 的 MCP 伺服器自動啟動，由使用者決定何時啟用已設定的工具。
- 另有帳號切換與標示改善、對話依回合分組與導覽、使用者訊息可複製或編輯，以及語言伺服器啟動、模型／provider 切換、MCP 設定等可靠性修正。
- 終止支援：JetBrains IDE 2025.1，需 2025.2 或以上。
- 頁面未列方案限制或價格。

## 對我的影響（推論）

- 以下為推論：若團隊以 JetBrains 為主，可透過預設模型設定統一成本與品質；MCP 自動啟動開關可降低意外載入外部工具的風險。

## 仍待確認

- 企業預設模型是否限特定方案（頁面未說明，未驗證）。
- 是否已對所有使用者推出（頁面未說明，未驗證）。
