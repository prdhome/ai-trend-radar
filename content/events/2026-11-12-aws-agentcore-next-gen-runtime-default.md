---
id: 2026-11-12-aws-agentcore-next-gen-runtime-default
title: "Amazon Bedrock AgentCore：新一代 runtime 成為新建 runtime 預設"
event_at: "2026-11-12T05:00:00Z"
verified_at: "2026-11-15T10:30:00+08:00"
category: agent
vendors: [aws]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "The next generation AgentCore runtime is now the default"
    url: "https://aws.amazon.com/about-aws/whats-new/2026/11/new-agentcore-runtime-default/"
    publisher: "AWS"
impact: monitor
summary: "AWS 於 2026-11-12 宣布 Bedrock AgentCore 新建 runtime 預設改用新一代 runtime：以快照還原 session、閒置縮至零，2 GB 映像 P75 啟動由 29.7 秒降到 2 秒內。"
impact_summary: "推論：已在 AgentCore 上跑 agent 的團隊，新建 runtime 會自動走新版；既有 runtime 要自行設 platformVersion 遷移，需評估成本與相容性。"
next_check: "確認 AgentCore 定價頁與開發指南上新一代 runtime 的計費方式，以及其餘區域何時成為預設。"
next_check_at: "2026-11-29T10:00:00+08:00"
related_events:
  - 2026-10-12-aws-agentcore-memory-consumption-pricing
---

## 已確認事實

- AWS What's New（2026-11-12）：Amazon Bedrock AgentCore 的新 runtime 預設使用新一代 AgentCore runtime。
- 新版以「已初始化 agent 的快照」還原每個 session；依負載調整運算與記憶體，閒置 agent 縮至零。
- 每個 session 仍在各自硬體隔離的 Firecracker microVM 中執行。
- 公告數字：session 最高 8 vCPU／32 GB 記憶體；支援最大 10 GB 容器映像；2 GB 映像的 session 啟動 P75 在 2 秒內（前代為 29.7 秒）；多輪 agent 每 session 計費記憶體最多可降 68%（AWS 自述）。
- 既有 runtime 維持舊版直到自行遷移；遷移或在尚非預設的區域使用新版，需在建立／更新時設 `platformVersion` 為 `V2`；要讓新 runtime 留在舊版則設 `V1`。
- 公告列出 19 個預設區域，含 US East（維吉尼亞北部、俄亥俄）、US West（奧勒岡）、法蘭克福、倫敦、東京、新加坡、首爾、雪梨等。
- 已讀取公告全文（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：若在 AgentCore 上部署 agent，新建的 runtime 會自動採用新版行為（快照還原、縮至零），上線前應確認 session 狀態與冷啟動假設仍成立。
- 啟動時間與記憶體計費的改善是 AWS 自述數字，實際效益取決於工作負載。

## 仍待確認

- 新一代 runtime 的實際計費與已有的記憶體／消耗計費的關係：未驗證（定價頁未讀）。
- 未列在 19 個區域內的 AgentCore 區域何時成為預設：未驗證。
- 「最多降低 68%」的測試條件：未驗證。
