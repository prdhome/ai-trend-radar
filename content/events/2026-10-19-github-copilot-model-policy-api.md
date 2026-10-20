---
id: 2026-10-19-github-copilot-model-policy-api
title: "GitHub 推出 Copilot 模型政策 REST API（企業、團隊、應用與組織）"
event_at: "2026-10-19T00:00:00Z"
verified_at: "2026-10-20T10:30:00+08:00"
category: agent
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Copilot model policy API for enterprise, orgs, and teams"
    url: "https://github.blog/changelog/2026-10-19-copilot-model-policy-api-for-enterprise-orgs-and-teams"
    publisher: "GitHub Changelog"
impact: monitor
summary: "GitHub 於 2026-10-19 宣布可用 REST API 讀取（GET）與更新（PATCH）企業、企業團隊、企業應用與組織層級的 Copilot 模型政策，並標為 generally available。"
impact_summary: "推論：管理多個組織的管理員可用腳本批次調整模型政策，例如在模型被棄用時啟用替代模型。"
related_events:
  - 2026-10-13-github-copilot-managed-settings-enforcement
---

## 已確認事實

- GitHub Changelog（2026-10-19）：GET 與 PATCH 端點可取得並更新企業、企業團隊、企業應用與組織的 Copilot 模型政策，標示為 generally available。
- 端點：`/enterprises/{enterprise}/copilot/model-policies`、`/enterprises/{enterprise}/teams/{team_slug}/copilot/model-policies`、`/enterprises/{enterprise}/copilot/apps/model-policies`、`/orgs/{org}/copilot/model-policies`。
- 企業政策可將模型控制委派給組織（organization mode），或委派給團隊與應用（enterprise teams mode）。
- 已讀取該 changelog 全文（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：若你管理 Copilot 組織，這讓模型政策可程式化管理；個人訂閱者不受影響。

## 仍待確認

- 所需方案與 API 權限範圍（文中未列）。
