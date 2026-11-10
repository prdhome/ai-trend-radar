---
id: 2026-11-09-claude-fable-5-2-mythos-5-2-release
title: "Anthropic 發布 Claude Fable 5.2 與 Mythos 5.2：標準價 $8／$40，Fable 對所有用戶開放"
event_at: "2026-11-09T00:00:00Z"
verified_at: "2026-11-10T10:30:00+08:00"
category: model
vendors: [anthropic]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Introducing Claude Fable 5.2 and Claude Mythos 5.2"
    url: "https://www.anthropic.com/claude-fable-and-mythos-5-2"
    publisher: "Anthropic"
impact: evaluate
summary: "Anthropic 於 2026-11-09 發布 Claude Fable 5.2（API ID claude-fable-5-2，所有用戶可用）與同一底層模型的 Mythos 5.2（僅限通過驗證計畫的組織）；標準價 $8／$40（每百萬 token 輸入／輸出），fast mode $16／$80。"
impact_summary: "推論：Anthropic 自己仍建議多數程式與知識工作用 Opus 5.5，Fable 5.2 適合最困難的任務；是否值得升級要用自己的任務比較成本與效果。"
next_check: "確認各訂閱方案的 Fable 用量上限與 launch promotion 細節，以及 Enterprise Frontier Safeguards 的上線時程。"
next_check_at: "2026-11-24T10:00:00+08:00"
---

## 已確認事實

- Anthropic 公告頁（標示 2026-11-09）：Fable 5.2 與 Mythos 5.2 是同一個底層模型；Fable 含更強的網路安全與生物安全防護，對所有用戶開放，Mythos 僅供通過 Cyber／Life Sciences Verification Programs 的組織。
- 價格：標準 $8／百萬輸入 token、$40／百萬輸出 token；可選 fast mode（最高 2.5 倍 token 生成速度）$16／$80。輸出速度較 Fable 5.1／Mythos 5.1 最高快 30%。
- 公告自述基準（Anthropic 自測，Fable 5.2 對 Fable 5.1／Opus 5.5）：FrontierCode 2.0 49.1%／32.4%／45.5%；FrontierSWE v2 69.9%／56.3%／62.3%；OSWorld 2.1 89.3%／83.5%／87.2%。
- 公告稱 Anthropic 仍建議以 Claude Opus 5.5 作為多數程式與知識工作的日常主力，Fable／Mythos 用於最具挑戰的任務。
- 供應：API 模型 ID `claude-fable-5-2`，可用於 AWS、Google Cloud、Microsoft Azure；fast mode 可用於 Claude Code、Claude Platform、Google Cloud、Microsoft Foundry。
- 公告稱 launch promotion：合格方案訂閱者可獲得一到三次 Fable 重置，Pro 與標準 Team 席位的 Fable 最多計入每週用量上限的 50%。
- 安全防護：封鎖的網路安全查詢退回 Opus 4.8、生物查詢退回 Opus 5；Fable 5.2 比 5.1 少封鎖約 55% 的請求。
- 已讀取該公告頁全文（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：價格高於 Opus 級日常使用，應只在 Opus 5.5 做不到的長流程、困難任務上試用；基準數字皆為廠商自測，需用自己的工作負載驗證。
- 推論：訂閱用戶的實際可用量取決於方案上限與促銷條件，需查官方方案頁。

## 仍待確認

- 各方案確切的 Fable 用量上限、「重置」次數與適用方案：公告摘要未逐項列明，未驗證。
- 基準結果的獨立複現：未驗證。
- Enterprise Frontier Safeguards 的正式上線時間：未驗證。
