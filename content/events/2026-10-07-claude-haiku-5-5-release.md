---
id: 2026-10-07-claude-haiku-5-5-release
title: "Anthropic 發布 Claude Haiku 5.5，輸入 $0.10／百萬 token"
event_at: "2026-10-07T00:00:00Z"
verified_at: "2026-10-08T10:30:00+08:00"
category: model
vendors: [anthropic]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Introducing Claude Haiku 5.5"
    url: "https://www.anthropic.com/claude-haiku-5-5"
    publisher: "Anthropic"
impact: evaluate
summary: "Anthropic 於 2026-10-07 發布 claude-haiku-5-5，≤100k 提示輸入 $0.10／輸出 $0.50 每百萬 token，並首度為 Haiku 級模型加入可調 effort。"
impact_summary: "推論：高量、窄任務（摘要、分類、子代理）可評估換用以降成本；複雜 agentic 寫程式官方仍建議 Sonnet／Opus。"
next_check: "實測品質與官方定價頁是否收錄 Haiku 5.5；月度 API 額度實際上線狀況。"
next_check_at: "2026-10-22T10:00:00+08:00"
related_events:
  - 2026-09-28-claude-sonnet-5-5-release
---

## 已確認事實

- 官方公告（2026-10-07）：模型 ID `claude-haiku-5-5`，稱為 Anthropic 迄今「最便宜、最快、最強的小模型」，並已於 Claude Platform、AWS、Google Cloud、Microsoft Azure 提供。
- 價格（每百萬 token）：提示 ≤100k 時輸入 $0.10／輸出 $0.50／快取讀 $0.01／快取寫 $0.125；>100k 時輸入 $0.50／輸出 $2.50。對照 Haiku 4.5 為 $1／$5。
- 官方稱平均比 Haiku 4.5 便宜約 75%；新分詞器每個任務用的 token 略增，已計入該數字。
- 首個提供可調 effort（Low、Med、High、Xhigh、Max）的 Haiku 級模型。
- 廠商自報基準：Terminal-Bench 4.0 為 39.2%（Sonnet 5.5 為 70.6%）、OSWorld 2.1 離線子集 72.4%。官方表示 Haiku 5.5 適合範圍明確的任務，複雜 agentic 寫程式仍以 Sonnet 5.5／Opus 5.5 為佳。
- 同篇公告另提：Sonnet 5.5 快取讀價由 $0.20 降為 $0.10；Max 5x／20x 與 Team 方案將於本週起提供每月 API 額度（$100／$200／最高 $500 共用）；Python／TypeScript SDK 加入 computer use 與 browser use 的 beta 支援。

## 對我的影響（推論）

- 以下為推論：價格約為 Sonnet 5.5 的 1/20（輸入），適合作為子代理或批次處理模型；實際品質需以自己的工作負載驗證。
- 基準與客戶回饋皆為廠商自述。

## 仍待確認

- 上下文視窗大小（公告頁未載明，未驗證）。
- 官方 API 定價頁是否已同步更新（本次未核對）。
- 每月 API 額度的實際生效時間與資格（未驗證）。
