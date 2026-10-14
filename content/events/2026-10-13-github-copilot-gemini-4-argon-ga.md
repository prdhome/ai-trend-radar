---
id: 2026-10-13-github-copilot-gemini-4-argon-ga
title: "GitHub Copilot：Gemini 4 Argon 正式提供（Pro+、Max、Business、Enterprise）"
event_at: "2026-10-13T00:00:00Z"
verified_at: "2026-10-14T10:30:00+08:00"
category: model
vendors: [github, google]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Gemini 4 Argon in GitHub Copilot"
    url: "https://github.blog/changelog/2026-10-13-gemini-4-argon-in-github-copilot"
    publisher: "GitHub"
impact: evaluate
summary: "GitHub 於 2026-10-13 宣布 Gemini 4 Argon 在 Copilot 正式提供（逐步推出），依 usage-based billing 按供應商公開價計費，適用 Pro+、Max、Business、Enterprise。"
impact_summary: "推論：已使用 Copilot 的付費方案可在模型選單試 Argon；Business／Enterprise 管理員需確認模型政策是否自動啟用。"
related_events: [2026-10-13-gemini-4-argon-ga]
next_check: "查 Copilot models and pricing 文件確認 Argon 實際費率，以及是否擴及其他方案。"
next_check_at: "2026-10-21T10:00:00+08:00"
---

## 已確認事實

- GitHub changelog（2026-10-13，標為 Release）：Gemini 4 Argon 在 GitHub Copilot 「generally available」，定位為複雜程式、agent 與推理任務。
- 官方稱早期測試中在所有程式基準上解決的任務比先前 Gemini 模型多，Copilot CLI 增幅最大（GitHub 自述，未見獨立驗證）。
- 計費：按「provider list pricing under usage-based billing」，頁面未列費率或 premium request 倍率。
- 方案：Copilot Pro+、Max、Business、Enterprise（頁面未提 Free 與 Individual）。
- 客戶端：VS Code、Visual Studio、Copilot CLI、coding agent、GitHub Copilot app、JetBrains、Xcode、Eclipse，於模型選單選取；逐步推出。
- 管理員：Business／Enterprise 經 Copilot 設定中的模型政策管理；預設模型啟用機制下，除非管理員關閉全域預設或明確停用此模型，否則自動啟用。

## 對我的影響（推論）

- 以下為推論：因預設自動啟用，組織若有模型合規要求，應檢查是否需明確停用；實際成本須等費率確認。

## 仍待確認

- 實際費率（頁面未列）。
- Pro 等其他方案是否後續開放。
