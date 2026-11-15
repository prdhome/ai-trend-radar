---
id: 2026-11-13-kiro-grok-4-7-govcloud
title: "Kiro 在 AWS GovCloud (US) 提供 Grok 4.7（實驗性支援）"
event_at: "2026-11-13T13:13:00Z"
verified_at: "2026-11-15T10:30:00+08:00"
category: model
vendors: [aws, xai]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Grok 4.7 now available on Kiro in AWS GovCloud (US)"
    url: "https://aws.amazon.com/about-aws/whats-new/2026/11/kiro-grok-4-7-aws-govcloud-us/"
    publisher: "AWS"
impact: monitor
summary: "AWS 於 2026-11-13 宣布 Grok 4.7 可在 AWS GovCloud (US) 的 Kiro IDE 與 CLI 使用，實驗性支援、500K 上下文，信用額度倍率 2.7x（200K 以內）／5.4x（超過 200K）。"
impact_summary: "推論：受 GovCloud 限制的團隊在 Kiro 內多了一個 coding 模型選項，但為實驗性支援且倍率偏高，用量成本需先試算。"
next_check: "確認 Kiro GovCloud 文件上 Grok 4.7 的支援狀態是否離開實驗性。"
next_check_at: "2026-11-29T10:00:00+08:00"
---

## 已確認事實

- AWS What's New（2026-11-13）：Grok 4.7 已在 AWS GovCloud (US) 區域的 Kiro IDE 與 CLI 提供。
- 公告稱其為「SpaceXSI 最強的 coding 與知識工作模型」，並稱相較 Grok 4.6 在 repo 規模的 coding 任務中規劃與錯誤復原更可靠（廠商／AWS 自述，未獨立驗證）。
- 支援為實驗性；上下文 500K token。
- 信用額度倍率：請求 200K token 以內為 2.7x，超過 200K 為 5.4x。
- Kiro 管理員可控制使用者能存取的模型；使用前需更新 IDE／CLI 並重啟，再從模型選擇器選取。
- 已讀取公告全文（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：僅與在 GovCloud (US) 使用 Kiro 的團隊相關；一般商用區域是否已有同模型，本公告未說明。

## 仍待確認

- 「實驗性」的具體限制與預計 GA 時間：未驗證。
- 倍率對應的實際費用：未驗證（公告只給倍率）。
- 模型實際表現：未驗證。
