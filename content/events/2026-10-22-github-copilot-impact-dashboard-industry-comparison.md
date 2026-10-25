---
id: 2026-10-22-github-copilot-impact-dashboard-industry-comparison
title: "Copilot impact dashboard 新增「產業比較」，需 opt-in 才參與"
event_at: "2026-10-22T00:00:00Z"
verified_at: "2026-10-25T10:30:00+08:00"
category: agent
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Industry comparisons in the Copilot impact dashboard"
    url: "https://github.blog/changelog/2026-10-22-industry-comparisons-in-the-copilot-impact-dashboard"
    publisher: "GitHub"
impact: monitor
summary: "GitHub 於 2026-10-22 在 Copilot impact dashboard 新增 Industry comparison，企業可與參與 opt-in 的同業匿名彙總基準比較 agentic 採用率與 PR 合併率。"
impact_summary: "推論：Copilot 企業管理員可用它評估採用程度，但參與即貢獻自家彙總資料，需先確認資料政策。"
next_check: "確認 GitHub 官方文件對參與資料範圍的說明，以及功能是否已有足夠參與者顯示排名。"
next_check_at: "2026-11-25T10:00:00+08:00"
---

## 已確認事實

- GitHub changelog（2026-10-22）：Copilot impact dashboard 新增「Industry comparison」區塊，企業與非企業所屬組織可與參與的同業匿名彙總基準比較 Copilot agentic 採用與 leverage。
- 比較指標：agent-first 或 multi-agent 使用者比例，以及 agentic 與非 agentic 使用者的 PR 合併率差異；對照同業中位數與前 10%，期間為 28 天。
- 可選公司規模區間與十個產業之一（或全產業）；產業群組太小時會放寬為同規模全產業，並標示。
- 參與為 opt-in、預設關閉；可從 dashboard 或企業／組織 Copilot 政策設定，兩處共用同一政策，關閉即停止貢獻與檢視。
- 排名須有足夠企業 opt-in 才顯示，初期可能只見中位數或較廣的同業群組；所有使用者皆為 agent-first 時隱藏排名。
- 每日更新；退出後立即停止比較並自下次更新排除資料；彙總基準不含識別資料，30 天後刪除。
- 僅出現在 dashboard，不在 usage metrics API、NDJSON 匯出或下載中。
- 已讀取該 changelog 條目（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：對使用 Copilot Business／Enterprise 的團隊，這提供外部基準但非必要；是否 opt-in 屬資料治理決定。

## 仍待確認

- 官方文件對「貢獻資料」的精確範圍（未讀 docs.github.com）。
- 功能上線初期實際有多少同業參與、何時才顯示排名（未驗證）。
