---
id: 2026-10-21-openai-api-project-service-tier-restrictions
title: "OpenAI API 專案與組織可限制可用的 service tier"
event_at: "2026-10-21T00:00:00Z"
verified_at: "2026-10-22T10:30:00+08:00"
category: pricing
vendors: [openai]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "OpenAI API changelog（2026-10-21 條目）"
    url: "https://developers.openai.com/changelog"
    publisher: "OpenAI"
  - title: "Error codes guide"
    url: "https://developers.openai.com/api/docs/guides/error-codes"
    publisher: "OpenAI"
impact: monitor
summary: "OpenAI 開發者 changelog（2026-10-21）載明：Platform 設定中可把專案限制在特定 service tier，組織設定也可對所有專案限制 service tier。"
impact_summary: "推論：用 API 的團隊可藉此避免專案誤用較貴的 priority 等級，但既有請求若未明指 tier 可能因解析到被禁用的 tier 而失敗。"
next_check: "官方文件是否補充設定入口與各 tier 價差的完整說明。"
next_check_at: "2026-11-05T10:00:00+08:00"
related_events: [2026-10-06-openai-api-usage-tiers-simplified]
---

## 已確認事實

- OpenAI 開發者 changelog 於 2026-10-21 有一則 Feature 條目：專案可在 Platform 設定中限制為特定 service tier，組織設定可對所有專案限制 service tier。
- Error codes 指南載明：限制適用於 `default`、`flex`、`priority` 三種 tier；專案不能啟用被組織封鎖的 tier；未帶 `service_tier` 或設為 `auto` 的請求，若解析到被禁用的 tier 也會失敗；`fast` 視同 `priority`；Scale Tier 不在此專案政策內。
- 已讀取上述兩頁（經摘要擷取）；changelog 條目日期取自該頁。

## 對我的影響（推論）

- 以下為推論：這是成本與治理控制功能，不改變價格本身；有多專案的組織可用來集中管控。
- 以下為推論：啟用限制前應確認現有請求是否依賴 `auto`。

## 仍待確認

- 設定的具體操作路徑與權限需求（本次未查證）。
- 是否影響 Codex 等工具的請求（未驗證）。
