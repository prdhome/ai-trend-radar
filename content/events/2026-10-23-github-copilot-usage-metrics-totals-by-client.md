---
id: 2026-10-23-github-copilot-usage-metrics-totals-by-client
title: "Copilot 用量指標 API 新增 totals_by_client，納入 OpenCode 等工具的用量"
event_at: "2026-10-23T00:00:00Z"
verified_at: "2026-10-24T10:30:00+08:00"
category: agent
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Usage metrics API adds usage from tools like OpenCode"
    url: "https://github.blog/changelog/2026-10-23-usage-metrics-api-adds-usage-from-tools-like-opencode"
    publisher: "GitHub Changelog"
impact: monitor
summary: "GitHub 於 2026-10-23 在 Copilot 用量指標 API 新增 totals_by_client，以伺服器端計數納入 OpenCode、Claude Code、Codex 等以 Copilot 為模型供應者的工具用量。"
impact_summary: "推論：管理員能看到先前因缺少編輯器遙測而漏算的第三方工具用量，評估 Copilot 配額消耗時較完整。"
next_check: "觀察 client 清單是否擴充，以及未辨識的 other 比例。"
next_check_at: "2026-11-23T10:00:00+08:00"
related_events: [2026-10-22-github-copilot-usage-metrics-custom-names]
---

## 已確認事實

- GitHub Changelog（2026-10-23）：企業、組織、企業使用者、組織使用者報表（1 日與 28 日版本）新增 `totals_by_client` 陣列。
- 每筆代表一個 client，例如 `opencode`、`claude_code`、`codex`、`zed`、`copilot_cli`、`github_app`、`cloud_agent`、`code_review`、`vscode`、`jetbrains`；未辨識者歸入 `other`。
- 每個 client 提供成功請求數、不同 session 數、prompt／output token 與每請求平均 token，並依模型與選擇方式（使用者選擇、auto、產品選擇）細分。
- 以 Copilot 為模型供應者的工具常不送編輯器遙測，過去不會出現在 `totals_by_ide`；改以伺服器端計數。
- 注意事項：code review 與 cloud agent 請求標為 `product_selected`，code review 模型顯示 `unknown`；`request_count` 為模型呼叫數而非 prompt 數；client 依請求帶的整合 ID 判斷，屬盡力分類而非身分驗證。
- 變更為新增欄位，既有欄位不變；無用量時陣列為空。需啟用 Copilot usage metrics policy，並為企業擁有者、帳務管理者、組織擁有者或具「View Copilot Metrics」自訂角色者。
- 已讀取該 changelog 條目（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：若團隊同時用第三方工具接 Copilot 模型，這個欄位可用來估算實際消耗；因 client 為盡力分類，不宜作為計費或稽核依據。

## 仍待確認

- 此用量是否影響 premium request 計費或配額（changelog 摘要未提及，未驗證）。
