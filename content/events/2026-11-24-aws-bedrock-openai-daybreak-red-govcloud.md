---
id: 2026-11-24-aws-bedrock-openai-daybreak-red-govcloud
title: "Amazon Bedrock 在 AWS GovCloud (US) 以 bedrock-runtime 端點提供 OpenAI Daybreak Red（GPT-5.6 Cyber）"
event_at: "2026-11-24T00:00:00Z"
verified_at: "2026-11-27T11:00:00+08:00"
category: model
vendors: [aws, openai]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Amazon Bedrock adds bedrock-runtime endpoint support for OpenAI Daybreak Red in AWS GovCloud (US)"
    url: "https://aws.amazon.com/about-aws/whats-new/2026/11/gpt-daybreak-red-runtime-govcloud/"
    publisher: "AWS What's New"
impact: monitor
summary: "AWS 於 2026-11-24 公告：符合資格的客戶可在 AWS GovCloud (US) 的 Amazon Bedrock 透過 bedrock-runtime 端點使用 OpenAI 資安模型 Daybreak Red（GPT-5.6 Cyber），需先加入 OpenAI Daybreak 存取計畫。"
impact_summary: "推論：只與已通過 Daybreak 資格、且在 GovCloud 作業的資安團隊有關；一般開發者無法直接使用。"
next_check: "觀察是否擴及 GovCloud 以外區域，或存取條件是否放寬。"
next_check_at: "2026-12-27T10:00:00+08:00"
---

## 已確認事實

- AWS What's New（2026-11-24）：Amazon Bedrock 在 AWS GovCloud (US) 新增 bedrock-runtime 端點對 OpenAI Daybreak Red（GPT-5.6 Cyber）的支援，限符合資格的客戶。
- 用途：授權的資安工作，例如漏洞研究、漏洞重現與修補開發；公告稱此模型拒答門檻較低，並搭配更強的身分驗證、監控與存取控制。
- 資料處理：公告稱推論資料不用於訓練，客戶不必選擇與 OpenAI 分享資料。
- 存取流程：須先加入 OpenAI 的 Daybreak 存取計畫，向 OpenAI 或 AWS 帳號團隊確認資格，OpenAI 核准後再與 AWS 帳號團隊申請存取。
- bedrock-runtime 端點透過 US Gov Geo 跨區推論（CRIS）設定檔提供；公告頁未列個別區域，區域與 bedrock-mantle 端點細節在 AWS 文件。
- 已讀取該公告頁全文（經 WebFetch 摘要）。

## 對我的影響（推論）

- 以下為推論：此為特定政府雲端與受管制資安客戶的可用性擴充，對一般訂閱與工具配置沒有直接影響。

## 仍待確認

- 價格與配額：公告頁未提及，未驗證。
- AWS 文件頁（model card）內容未讀，區域細節未驗證。
- 與既有 OpenAI `gpt-6-cyber` 事件的模型關係：命名不同（GPT-5.6 Cyber），未驗證是否同一模型。
