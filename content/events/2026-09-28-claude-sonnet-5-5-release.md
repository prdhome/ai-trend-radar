---
id: 2026-09-28-claude-sonnet-5-5-release
title: "Anthropic 發布 Claude Sonnet 5.5"
event_at: "2026-09-28T00:00:00+08:00"
verified_at: "2026-10-01T10:30:00+08:00"
category: model
vendors: [anthropic]
status: confirmed
source_type: official
weekly_rank: 2
sources:
  - title: "Introducing Claude Sonnet 5.5"
    url: "https://www.anthropic.com/claude-sonnet-5-5"
    publisher: "Anthropic"
  - title: "Claude Sonnet 5.5: Faster and cheaper mid-range model"
    url: "https://www.heise.de/en/news/Claude-Sonnet-5-5-Faster-and-cheaper-mid-range-model-11468834.html"
    publisher: "heise online"
impact: evaluate
summary: "Anthropic 於 2026-09-28 推出 Claude Sonnet 5.5，官方稱輸出速度比 Sonnet 5 快 30% 以上、每項任務成本最多低 30%，每百萬 token 單價不變（input $2／output $10）。"
impact_summary: "推論：單價不變但 token 用量下降，對以 Sonnet 為預設模型的 agent 工作流可能直接省成本，值得拿自己的工作負載實測。"
next_check: "7 天後查是否有獨立評測驗證「每任務成本最多低 30%」與速度提升，並確認 Terminal-Bench 數字的比較基準。"
next_check_at: "2026-10-08T10:00:00+08:00"
---

## 已確認事實

- Anthropic 於 2026-09-28 發布 Claude Sonnet 5.5（API 模型名 `claude-sonnet-5-5`），為 Claude 5.5 家族繼 Opus 5.5 之後的第二款模型。
- 官方定價（每百萬 token）：input $2、output $10、cache reads $0.20、cache writes $2.50。官方表示單價與 Sonnet 5 相同，「每項任務成本最多低 30%」來自使用較少 token，而非降價。
- 官方稱輸出速度比 Sonnet 5 快 30% 以上；官方頁面列出 Terminal-Bench 4.0 為 70.6%（對照 Sonnet 5 的 10.3%）。
- 官方稱可於 Claude Platform、AWS、Google Cloud 與 Microsoft Azure 使用，並提供 zero data retention 選項；為首款部署類似 Opus 5.5 網路安全防護的 Sonnet 模型。
- 第二來源（heise online）標題同樣報導 Sonnet 5.5 為「更快、更便宜的中階模型」。

## 對我的影響（推論）

- 以下是推論，並非官方說法：單價不變、token 用量減少，意味著把預設模型從 Sonnet 5 換成 5.5 可能降低 agent 工具的實際花費；實際幅度取決於自己的工作負載，需自行實測。

## 仍待確認

- 「每項任務成本最多低 30%」與速度提升為官方宣稱，尚無獨立評測驗證。
- Terminal-Bench 4.0 的 70.6% vs 10.3% 差距極大，比較設定未在已讀內容中說明，未驗證。
- heise online 頁面因網路限制無法直接讀取全文，僅依搜尋結果標題與摘要交叉確認；第三方細節未逐字核對。
