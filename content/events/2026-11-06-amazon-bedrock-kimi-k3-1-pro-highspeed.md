---
id: 2026-11-06-amazon-bedrock-kimi-k3-1-pro-highspeed
title: "Amazon Bedrock 上架 Moonshot AI Kimi K3.1 Pro (Highspeed)"
event_at: "2026-11-06T00:00:00Z"
verified_at: "2026-11-09T10:30:00+08:00"
category: model
vendors: [aws, other]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Kimi K3.1 Pro (Highspeed) now available on Amazon Bedrock"
    url: "https://aws.amazon.com/about-aws/whats-new/2026/11/moonshot-ai-kimi-k3-1-pro-on-amazon-bedrock"
    publisher: "AWS"
impact: monitor
summary: "AWS 於 2026-11-06 宣布 Moonshot AI 的開放權重多模態 agentic 模型 Kimi K3.1 Pro (Highspeed) 已上架 Amazon Bedrock，上下文 1M token，透過跨區域推論提供。"
impact_summary: "推論：用 Bedrock 的團隊多了一個開放權重的 agentic／coding 候選模型可評估，但官方公告未給價格。"
next_check: "確認 Bedrock 模型文件與定價頁上的 Kimi K3.1 Pro (Highspeed) 價格與配額。"
next_check_at: "2026-11-23T10:00:00+08:00"
---

## 已確認事實

- AWS What's New（2026-11-06）：Kimi K3.1 Pro (Highspeed) 已在 Amazon Bedrock 提供。
- 在所有提供 Amazon Bedrock 的 AWS 區域，可透過跨區域推論（cross-Region inference）使用。
- 上下文視窗 1M token；公告稱為開放權重、原生多模態的 agentic 模型，並強調較高的每秒輸出 token 數。
- 支援明確的 prompt caching；公告稱模型運行於與 Bedrock 上其他專有模型相同的安全邊界內。
- Moonshot AI 自述其為迄今最強模型（3 兆參數級），在 coding、3D 創作、金融研究等有進步（廠商自述，未獨立驗證）。
- 公告未列價格。已讀取公告全文（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：若已在 Bedrock 上部署 agent／coding 工作流，可把它列入候選模型比較；實際成本與品質需自行測試。

## 仍待確認

- 價格、配額與各區域實際可用性：未驗證（公告未列，模型文件頁未讀）。
- Moonshot AI 自述的能力提升：未驗證。
