---
id: 2026-11-17-github-copilot-secret-scanning-cli-app-sdk
title: "Copilot 密鑰掃描（公開預覽）：CLI、app、SDK 與 code review，耗用 AI credits"
event_at: "2026-11-17T00:00:00Z"
verified_at: "2026-11-20T10:15:00+08:00"
category: agent
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Secret scanning on demand for developers and agents"
    url: "https://github.blog/changelog/2026-11-17-secret-scanning-on-demand-for-developers-and-agents"
    publisher: "GitHub"
impact: evaluate
summary: "GitHub 於 2026-11-17 讓 Copilot CLI、app、SDK 與 code review 可在合併前掃描程式變更中的密鑰（公開預覽、預設關閉），用量計入 Secret Protection AI Credit SKU。"
impact_summary: "推論：讓 agent 產生的程式碼在提交前多一道密鑰檢查，但會消耗 AI credits，需先評估用量。"
next_check: "確認 AI credit 費率與 VS Code 支援。"
next_check_at: "2026-12-17T10:00:00+08:00"
related_events:
  - 2026-10-07-github-secret-detection-model
  - 2026-11-17-github-copilot-code-review-adaptive-secret-detection
---

## 已確認事實

- Copilot 的 security review 在啟用後，會以 GitHub secret scanning 偵測器搭配 LLM 審查檢查變更；不掃描 repo 歷史。
- 涵蓋 500+ 種供應商密鑰，加上微調模型偵測無固定格式的憑證。
- 預設關閉；CLI 用 `/settings aiSecretDetection on`，app 於 Settings > Experimental 開啟，code review 於 repo 設定開啟；SDK 需 feature flag 與 GitHub 驗證。
- 不需額外方案；掃描消耗 Secret Protection AI Credit SKU；VS Code 本次未支援。
- 11/18 編輯註記補充 SDK 驗證需求。已讀取該 changelog 頁。

## 對我的影響（推論）

- 以下為推論：大量 agent 工作流下，AI credit 消耗可能顯著。

## 仍待確認

- 每次掃描的 credit 費率：頁面未提供，未驗證。
