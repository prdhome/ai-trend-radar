---
id: 2026-11-10-github-copilot-github-app-enterprise-seat-management
title: "GitHub App 可呼叫企業層級 Copilot 席位管理 API"
event_at: "2026-11-10T00:00:00Z"
verified_at: "2026-11-11T10:30:00+08:00"
category: agent
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "GitHub App support for Enterprise Copilot seat management"
    url: "https://github.blog/changelog/2026-11-10-github-app-support-for-enterprise-copilot-seat-management"
    publisher: "GitHub"
impact: monitor
summary: "GitHub 於 2026-11-10 宣布企業 GitHub App 可呼叫企業層級 Copilot 席位管理 API，以新的企業 fine-grained 權限「Enterprise Copilot license management」控制使用者與企業團隊的席位。"
impact_summary: "推論：想用自動化（而非個人 token）管理 Copilot 席位的企業管理員可改用 GitHub App，對個人使用者無影響。"
---

## 已確認事實

- GitHub changelog（2026-11-10，標記為 Improvement）：企業 GitHub App 現在可呼叫企業層級的 Copilot 席位管理 API，控制哪些使用者與企業團隊被分配 Copilot 席位。
- API 記載於 Copilot user management REST API 文件（API 版本 2026-03-10）。
- 新增企業 fine-grained 權限「Enterprise Copilot license management」以授權 App 存取。
- 已讀取該 changelog 頁（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：主要影響有自建席位自動化流程的企業管理員。

## 仍待確認

- 除上述外的資格或限制：頁面未說明，未驗證。
