---
id: 2026-11-16-vs-code-retires-local-harness-feb-2027
title: "VS Code 1.146 棄用 Copilot Local harness，2027 年 2 月移除，改用 Copilot harness"
event_at: "2026-11-16T00:00:00Z"
verified_at: "2026-11-17T10:30:00+08:00"
category: agent
vendors: [github, microsoft]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "VS Code retires the Local harness in February 2027"
    url: "https://github.blog/changelog/2026-11-16-vs-code-retires-the-local-harness-in-february-2027"
    publisher: "GitHub Changelog"
impact: action
summary: "GitHub 於 2026-11-16 公告：VS Code 1.146 棄用 Copilot agent 工作階段的 Local harness，將於 2027 年 2 月移除；新工作階段自 VS Code 1.143 起預設已是 Copilot harness。"
impact_summary: "推論：仍使用 Local harness 的使用者與管理員需在 2027 年 2 月前確認自訂設定與權限／sandbox 設定能在 Copilot harness 運作。"
next_check: "2027 年 2 月前後確認 Local harness 是否如期移除，以及移除日期是否更新。"
next_check_at: "2027-02-01T10:00:00+08:00"
related_events: []
---

## 已確認事實

- GitHub Changelog（2026-11-16）：VS Code 1.146 棄用 Local harness（協調模型、上下文與工具的舊版 agent 執行層），預計 2027 年 2 月移除；三個月過渡期內在組織政策允許下仍可用，新功能將集中在 Copilot harness。
- Copilot harness 內建於 VS Code，自 VS Code 1.143 起為新工作階段預設；以 Copilot SDK 建構，與 Copilot CLI、GitHub Copilot app 共用 runtime，不會把檔案移到雲端。
- 使用者：開新工作階段並於 Session Target 選 Copilot；自訂項目不會全部自動轉換，需自行檢查相容性。
- 管理員：檢查 `vscode.temporaryDefaultToLocalHarness` 例外設定；該設定會隨 Local harness 一併移除，保留它無法延續存取。受管 runtime 權限與 sandbox 限制需另行設定。
- 已讀取該 changelog 頁（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：依賴 Local harness 行為的 agent 工作流程，需在移除前完成遷移測試。

## 仍待確認

- 精確移除日期：官方只寫「2027 年 2 月」，未驗證具體日。
