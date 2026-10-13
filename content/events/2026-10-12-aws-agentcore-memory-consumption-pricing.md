---
id: 2026-10-12-aws-agentcore-memory-consumption-pricing
title: "Amazon Bedrock AgentCore 短期記憶改為依用量計價"
event_at: "2026-10-12T00:00:00Z"
verified_at: "2026-10-13T10:20:00+08:00"
category: pricing
vendors: [aws]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Amazon Bedrock AgentCore short-term memory moves to consumption-based pricing"
    url: "https://aws.amazon.com/about-aws/whats-new/2026/10/agentcore-memory-consumption-based-pricing"
    publisher: "AWS What's New"
impact: monitor
summary: "AWS 於 2026-10-12 宣布 Bedrock AgentCore 短期記憶（STM）由「每事件固定費率」改為依用量計價：寫入 $1.00/GB、讀取 $0.20/GB、儲存 $0.10/GB-月。"
impact_summary: "推論：若未來用 AgentCore 做頻繁、小量事件的 agent，成本模型會改變；目前未使用，無需動作。"
next_check: "閱讀 AgentCore 官方定價頁（https://aws.amazon.com/bedrock/agentcore/pricing/）核對數字與生效日。"
next_check_at: "2026-10-27T10:00:00+08:00"
---

## 已確認事實

- AWS What's New 於 2026-10-12 發文：Amazon Bedrock AgentCore memory 的短期記憶（STM）改為依用量計價，取代先前「每事件固定費率」。
- STM 三個計價維度：寫入（ingestion）$1.00／GB、讀取（retrieval）$0.20／GB、儲存 $0.10／GB-月。
- 寫入與讀取以每個事件計費，計費大小下限 12 KB、上限 64 KB；儲存依事件實際大小計費。
- 文章稱多數工作負載成本下降，小 payload 情境降幅最大；可用較短的 TTL 控制儲存成本。
- 長期記憶（long-term memory）計價不變。適用於所有提供 AgentCore Memory 的 AWS 區域。
- 文章未另載生效日期，僅有發文日期。

## 對我的影響（推論）

- 以下為推論，非官方說法：12 KB 計費下限表示極小事件仍以 12 KB 計；是否划算取決於實際事件大小與頻率。

## 仍待確認

- 生效日期與舊費率數字（未驗證，本次只讀到公告頁，未讀 AgentCore 定價頁）。
