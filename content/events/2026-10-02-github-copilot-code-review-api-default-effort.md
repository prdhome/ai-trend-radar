---
id: 2026-10-02-github-copilot-code-review-api-default-effort
title: "GitHub Copilot code review 支援 REST／GraphQL API，預設強度改為 Balanced"
event_at: "2026-10-02T00:00:00Z"
verified_at: "2026-10-05T10:30:00+08:00"
category: agent
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Copilot code review: API support and new default effort level"
    url: "https://github.blog/changelog/2026-10-02-copilot-code-review-api-support-and-new-default-effort-level"
    publisher: "GitHub Changelog"
impact: evaluate
summary: "GitHub 於 2026-10-02 宣布 Copilot code review 可透過 REST 與 GraphQL API 發起並逐次指定審查強度，且預設強度自 9 月 28 日起改為 Balanced。"
impact_summary: "推論：可把 Copilot 審查接進既有腳本或內部工具；預設強度改變可能讓審查行為與耗用與先前不同，需留意。"
next_check: "查 GitHub 文件確認 API 的具體端點與各強度對用量／計費的影響。"
next_check_at: "2026-10-19T10:00:00+08:00"
---

## 已確認事實

- GitHub Changelog 於 2026-10-02 表示，Copilot code review 現可透過 REST 與 GraphQL API 請求，並可在每次請求設定審查強度，方便整合進既有腳本、工作流程與內部工具。
- 文章稱此功能已在 Copilot Pro、Pro+、Max、Business、Enterprise 方案全面可用（generally available）。
- 預設審查強度由「Default」改為「Balanced」，適用於所有新舊儲存庫與組織；先前選擇「Lite」者的設定保留。官方稱此變更於 2026-09-28 生效。
- 強度可在企業、組織、儲存庫或個人層級設定，下層可覆寫上層。

## 對我的影響（推論）

- 以下是推論，並非官方說法：預設改為 Balanced 後，未自行設定的儲存庫審查結果可能與過去不同；偏好較輕量者可改回 Lite。

## 仍待確認

- 文章是否說明各強度的計費或額度差異（未驗證，所讀內容未提及）。
- API 的詳細端點與參數，需看官方文件（未驗證）。
