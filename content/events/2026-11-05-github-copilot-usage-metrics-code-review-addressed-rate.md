---
id: 2026-11-05-github-copilot-usage-metrics-code-review-addressed-rate
title: "Copilot 用量指標 API 新增 code review 留言處理率欄位"
event_at: "2026-11-05T00:00:00Z"
verified_at: "2026-11-06T10:30:00+08:00"
category: agent
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Usage metrics API adds code review details and addressed rate"
    url: "https://github.blog/changelog/2026-11-05-usage-metrics-api-adds-code-review-details-and-addressed-rate"
    publisher: "GitHub Changelog"
impact: monitor
summary: "GitHub 於 2026-11-05 在 Copilot 用量指標 API 的 repos-1-day 報表新增 copilot_code_review 物件，可計算開發者處理 Copilot code review 留言的比率。"
impact_summary: "推論：管理員可量化 Copilot code review 留言是否真的被採納，作為續訂或調整自訂指示的依據。"
next_check: "觀察欄位是否擴及其他報表類型。"
next_check_at: "2026-12-06T10:00:00+08:00"
related_events: [2026-10-23-github-copilot-usage-metrics-totals-by-client]
---

## 已確認事實

- GitHub Changelog（2026-11-05）：企業與組織 `repos-1-day` 報表每列新增 `copilot_code_review` 物件。
- 欄位：`total_comments_evaluated`、`total_comments_addressed`（相除即處理率）、`total_merged_no_human_change_request_after_review`；前兩者可依嚴重度、review tier、留言類型與自訂項目（自訂指示、skills、MCP servers）細分。
- 留言計入其 PR 合併當天，而非 Copilot 發表當天；Copilot 通常不評估 bot 開的 PR 上的留言。
- 與 `pull_requests.total_copilot_applied_suggestions` 不同（後者只算套用的建議）。
- 存取限企業擁有者、帳務管理者、組織擁有者或具 `View Copilot Metrics` 權限者，且需啟用 usage metrics policy。
- 已讀取該 changelog 全文（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：處理率可作為 code review 品質的粗略代理指標，但「處理」定義寬鬆，不等於留言正確。

## 仍待確認

- 「addressed」的精確判定方式：未驗證（changelog 僅稱「以任何方式處理」）。
