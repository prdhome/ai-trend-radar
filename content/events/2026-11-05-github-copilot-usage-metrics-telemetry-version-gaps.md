---
id: 2026-11-05-github-copilot-usage-metrics-telemetry-version-gaps
title: "Copilot 用量指標 API 標示缺少遙測與版本過舊的使用者"
event_at: "2026-11-05T00:00:00Z"
verified_at: "2026-11-06T10:30:00+08:00"
category: agent
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Usage metrics API flags telemetry and version gaps"
    url: "https://github.blog/changelog/2026-11-05-usage-metrics-api-flags-telemetry-and-version-gaps"
    publisher: "GitHub Changelog"
impact: none
summary: "GitHub 於 2026-11-05 在 Copilot 用量指標 API 新增 client_telemetry_present、usage_metrics_requirements 等欄位，標示缺少編輯器遙測或 IDE／擴充版本低於最低要求的使用者。"
impact_summary: "推論：管理員能找出報表資料不完整的使用者並要求升級，讓用量統計更可信。"
related_events: [2026-10-23-github-copilot-usage-metrics-totals-by-client, 2026-11-05-github-copilot-usage-metrics-code-review-addressed-rate]
---

## 已確認事實

- GitHub Changelog（2026-11-05）：使用者報表（1 日與 28 日）新增 `client_telemetry_present`（false 代表偵測到活動但無編輯器遙測事件）與 `usage_metrics_requirements`（各 IDE／擴充相對最低版本為 met／unmet／unknown）。
- 1 日報表與 28 日報表的每日項目新增 `missing_client_telemetry_user_count` 與 `below_usage_metrics_minimum_user_count`。
- 無遙測的使用者仍算活躍，但缺少程式碼行數、功能與模型細分；兩個計數可能重疊，不可相加，也不可跨日加總估算不重複人數。
- 空值代表資料不可得，非 false 或 0；發布前的日期無值。
- 存取限企業擁有者、帳務管理者、組織擁有者或具 `View Copilot Metrics` 權限者，且需啟用 usage metrics policy。
- 已讀取該 changelog 全文（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：屬報表可觀測性的小幅改進，對一般個人使用者無影響。

## 仍待確認

- 各 IDE／擴充的最低版本清單：未驗證（changelog 未列出）。
