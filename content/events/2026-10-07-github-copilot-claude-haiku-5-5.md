---
id: 2026-10-07-github-copilot-claude-haiku-5-5
title: "Claude Haiku 5.5 在 GitHub Copilot 正式提供（逐步推出）"
event_at: "2026-10-07T00:00:00Z"
verified_at: "2026-10-08T10:30:00+08:00"
category: model
vendors: [github, anthropic]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Claude Haiku 5.5 in GitHub Copilot"
    url: "https://github.blog/changelog/2026-10-07-claude-haiku-5-5-in-github-copilot"
    publisher: "GitHub"
impact: evaluate
summary: "GitHub 於 2026-10-07 宣布 Claude Haiku 5.5 在 Copilot GA，適用 Pro、Pro+、Max、Business、Enterprise，逐步推出。"
impact_summary: "推論：Copilot 使用者可在模型選單試用 Haiku 5.5 處理子代理與快速修改；組織管理員需留意預設自動啟用新模型。"
next_check: "推出完成後確認計費倍率與各 client 可用性。"
next_check_at: "2026-10-22T10:00:00+08:00"
related_events:
  - 2026-10-07-claude-haiku-5-5-release
---

## 已確認事實

- GitHub changelog（2026-10-07）：Claude Haiku 5.5 已 GA，定位為子代理、快速編輯、終端機任務等高量工作；GitHub 稱早期測試在許多寫程式任務上可比 Claude Sonnet 5，且步驟與 token 較少。
- 適用方案：Copilot Pro、Pro+、Max、Business、Enterprise。
- 可用 client：VS Code、Visual Studio、Copilot CLI、cloud agent、GitHub Copilot app、github.com、GitHub Mobile、JetBrains、Xcode、Eclipse，於模型選單選用。
- 頁面未載明 premium multiplier；稱在 usage-based billing 下依供應商公開價計費，詳見 Copilot 模型與計費文件。
- Business／Enterprise 由管理員在模型政策管理；預設啟用新模型時會自動啟用，除非已關閉全域預設或明確停用此模型。
- 官方稱推出為逐步進行。

## 對我的影響（推論）

- 以下為推論：若組織不希望新模型自動啟用，需檢查模型政策設定。

## 仍待確認

- 實際計費倍率／點數消耗（頁面未載明，未驗證）。
- 推出完成時間（未驗證）。
