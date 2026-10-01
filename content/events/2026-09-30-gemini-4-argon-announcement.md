---
id: 2026-09-30-gemini-4-argon-announcement
title: "Google 發布 Gemini 4 Argon（先向受信任資安防禦者開放）"
event_at: "2026-09-30T00:00:00-07:00"
verified_at: "2026-10-01T11:00:00+08:00"
category: model
status: confirmed
source_type: official
weekly_rank: 1
sources:
  - title: "Gemini 4 Argon: our next era of frontier intelligence"
    url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/"
    publisher: "Google"
  - title: "Google unveils Gemini 4 Argon"
    url: "https://www.investing.com/news/stock-market-news/google-unveils-gemini-4-argon-4925869"
    publisher: "Investing.com"
impact: monitor
summary: "Google 於 2026-09-30 公布 Gemini 4 Argon，官方稱輸出上限提升到 100 萬 token，先經 Fairwind Program 提供給受信任的資安防禦者，之後才擴大到付費 API 客戶與 Google AI Ultra 訂閱者。"
impact_summary: "推論：目前一般開發者還用不到，但官方公布的導入價 $2／$10（之後 $4／$20）與 100 萬 output token 值得先記下，待正式開放後再評估。"
next_check: "每週查 Gemini API 更新紀錄與官方部落格，確認 Argon 何時對付費 API 與 AI Ultra 開放，以及導入期定價何時結束。"
---

## 已確認事實

- Google 官方部落格於 2026-09-30 發布「Gemini 4 Argon」，稱其為面向真實世界程式開發、企業知識工作與網路防禦的前沿模型，輸出上限為 100 萬 token（官方稱先前為 6.4 萬）。
- 目前透過 Fairwind Program 向「一組受信任的網路防禦者」推出；官方表示之後會擴大到開發者、企業與一般使用者，從付費 API 客戶與 Google AI Ultra 訂閱者開始。官方頁面未提供公開上線日期。
- 官方公布導入期定價：每百萬 input token $2、output token $10，cached input 較 input 價格低 95%；導入期結束後為 input $4、output $20。
- 官方頁面列出的自家基準：DeepSWE v1.1 77.9%、AutomationBench 51.3%（官方稱排名第一）、CWE-bench v1 68%（官方稱並列第一）、LVBench 91.7%。
- 第二來源（Investing.com）標題同樣報導 Google 發表 Gemini 4 Argon。

## 對我的影響（推論）

- 以下是推論，並非官方說法：在公開開放前，對一般使用者沒有實際影響；導入價與 100 萬 output token 若屬實，可能影響長輸出任務的模型選擇與成本估算，需等正式開放後用自己的工作負載測。

## 仍待確認

- 公開開放日期與導入期長度未說明。
- 所有基準數字皆為 Google 自行公布，尚無獨立評測。
- Investing.com 頁面因網路限制無法讀取全文，僅依搜尋結果標題與摘要交叉確認；其他媒體提到與 GPT-6 Astra 的比較，未經核實，不納入。
