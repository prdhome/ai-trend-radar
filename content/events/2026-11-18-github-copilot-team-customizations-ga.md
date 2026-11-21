---
id: 2026-11-18-github-copilot-team-customizations-ga
title: "GitHub Copilot 團隊客製化正式推出：可為組織團隊設定預設啟用的 Agent Plugins"
event_at: "2026-11-18T00:00:00Z"
verified_at: "2026-11-21T10:30:00+08:00"
category: agent
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Customize GitHub Copilot for your team"
    url: "https://github.blog/changelog/2026-11-18-customize-github-copilot-for-your-team"
    publisher: "GitHub"
impact: evaluate
summary: "GitHub 於 2026-11-18 宣布團隊客製化（team customizations）對組織團隊正式推出：維護者可選定 Agent Plugins 作為團隊預設，於 VS Code、Copilot app 與 Copilot CLI 對團隊直屬成員預設啟用，適用 Business 與 Enterprise。"
impact_summary: "推論：團隊可統一分發常用 plugin，減少個別設定；管理者仍需確認組織與企業政策不會與團隊預設衝突。"
next_check: "確認 plugins 文件上團隊預設的細節，以及是否擴及更多用戶端。"
next_check_at: "2026-11-28T10:00:00+08:00"
related_events:
  - 2026-11-16-github-copilot-strict-plugin-only-customization
---

## 已確認事實

- GitHub changelog（2026-11-18，Release）：團隊客製化對組織團隊為 generally available。
- 團隊維護者與組織擁有者可在 github.com 的組織團隊頁開啟「Customize Copilot」分頁，從 Copilot 內建 marketplace、企業 marketplace 與團隊自行加入的 marketplace 瀏覽並加入 plugin；也可由含 plugin marketplace 的 GitHub repository 新增 marketplace。
- 選定的 plugin 預設對團隊直屬成員在 VS Code、GitHub Copilot app、Copilot CLI 啟用；子團隊不繼承。
- 成員在政策允許下可自行關閉團隊 plugin。
- 企業與組織政策優先於團隊選擇：允許的 marketplace、必要或封鎖的 plugin 仍由政策強制。
- 適用方案：Copilot Business 與 Copilot Enterprise。
- 已讀取該 changelog 頁（經摘要擷取，非逐字全文）。

## 對我的影響（推論）

- 以下為推論：介於個人設定與全組織政策之間，適合小型團隊統一工具組。
- 以下為推論：子團隊不繼承，大型組織可能需對每個團隊分別設定。

## 仍待確認

- 與 11/16 strictPluginOnlyCustomization 實際搭配的行為：頁面未說明，未驗證。
- 其他用戶端（JetBrains 等）是否支援：頁面僅列三個，未驗證。
