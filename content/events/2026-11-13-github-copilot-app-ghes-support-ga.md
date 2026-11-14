---
id: 2026-11-13-github-copilot-app-ghes-support-ga
title: "GitHub Copilot app 正式支援 GitHub Enterprise Server（需 1.2.0 以上，無雲端工作階段）"
event_at: "2026-11-13T00:00:00Z"
verified_at: "2026-11-14T10:30:00+08:00"
category: agent
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "GitHub Enterprise Server support in the GitHub Copilot app"
    url: "https://github.blog/changelog/2026-11-13-github-enterprise-server-support-in-the-github-copilot-app"
    publisher: "GitHub Changelog"
impact: monitor
summary: "GitHub 於 2026-11-13 宣布 Copilot app 的 GitHub Enterprise Server（GHES）帳號支援由 opt-in 預覽轉為正式提供，需 app 1.2.0 以上，GHES 不支援雲端工作階段。"
impact_summary: "推論：使用自架 GHES 的團隊可評估在 Copilot app 操作遠端 repo、issue 與 PR；無法使用雲端工作階段是主要限制。"
next_check: "確認 Copilot GHES 文件對方案資格與版本需求的說明。"
next_check_at: "2026-11-28T10:00:00+08:00"
related_events: []
---

## 已確認事實

- GitHub Changelog（2026-11-13，Release）：可在 Copilot app 加入 GitHub Enterprise Server 帳號，處理遠端 repository、issue 與 pull request。
- 該功能原為 opt-in 預覽，現為正式提供（GA）；需 Copilot app 1.2.0 或更新版本。
- 需先以 GitHub.com 或 GHE.com 帳號登入，再到 Settings > Accounts > Add account 選擇 GitHub Enterprise Server。
- 限制：GHES 不提供雲端工作階段（cloud sessions）。
- 公告未提及適用方案或價格。
- 已讀取該 changelog 頁（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：企業內部 GHES 使用者現在可用同一個 app 處理內外部 repo，但雲端執行的 agent 工作流程仍不適用。

## 仍待確認

- 適用的 Copilot 方案與對 GHES 版本的要求：公告未載明，未驗證。
