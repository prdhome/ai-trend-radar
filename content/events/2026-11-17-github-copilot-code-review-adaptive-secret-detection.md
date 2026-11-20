---
id: 2026-11-17-github-copilot-code-review-adaptive-secret-detection
title: "Copilot code review：Adaptive 審查強度、跨 repo 脈絡、密鑰偵測（預覽），Azure DevOps GA"
event_at: "2026-11-17T00:00:00Z"
verified_at: "2026-11-20T10:15:00+08:00"
category: agent
vendors: [github, microsoft]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Copilot code review: Adaptive effort, secret detection, and more"
    url: "https://github.blog/changelog/2026-11-17-copilot-code-review-adaptive-effort-secret-detection-and-more"
    publisher: "GitHub"
impact: evaluate
summary: "GitHub 於 2026-11-17 為 Copilot code review 加入 Adaptive 審查強度、跨 repo 脈絡與密鑰偵測（皆公開預覽），並讓 Azure DevOps 版 code review GA。"
impact_summary: "推論：想控管審查成本與品質者可試 Adaptive；密鑰偵測可補 PR 階段的檢查，但仍在預覽。"
next_check: "確認各預覽功能是否 GA 及計費方式。"
next_check_at: "2026-12-17T10:00:00+08:00"
related_events:
  - 2026-10-02-github-copilot-code-review-api-default-effort
  - 2026-10-07-github-secret-detection-model
---

## 已確認事實

- Adaptive（公開預覽）：依每個 PR 的複雜度與風險選 Lite、Balanced 或 Max；預設仍為 Balanced，不會超過企業／組織／repo 設定的上限。
- 跨 repo 脈絡（公開預覽，僅公開 repo）。
- 密鑰偵測（公開預覽）：500+ 格式的 regex 偵測加 AI/ML 偵測；於 repo 或組織設定的 Copilot > Code review 啟用。
- Repository Insights 顯示審查意見處理結果；Azure DevOps（Azure Repos）版 Copilot code review GA，透過連結的 Azure 訂閱計費。
- 預覽功能適用 Copilot Pro、Pro+、Max、Business、Enterprise。
- 已讀取該 changelog 頁（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：Adaptive 可能改變每次審查的資源消耗，需觀察實際用量。

## 仍待確認

- 預覽功能的額外計費與 GA 時程：頁面未說明，未驗證。
