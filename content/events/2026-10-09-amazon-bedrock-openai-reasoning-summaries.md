---
id: 2026-10-09-amazon-bedrock-openai-reasoning-summaries
title: "Amazon Bedrock 的 OpenAI 模型支援推理摘要（reasoning.summary）"
event_at: "2026-10-09T00:00:00Z"
verified_at: "2026-10-13T10:20:00+08:00"
category: agent
vendors: [aws, openai]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Amazon Bedrock supports reasoning summaries for OpenAI models"
    url: "https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-bedrock-reasoning-summaries-openai/"
    publisher: "AWS What's New"
impact: monitor
summary: "AWS 於 2026-10-09 宣布 Bedrock 透過 Responses API 讓 OpenAI 模型支援 reasoning.summary 參數，回傳人類可讀的推理摘要。"
impact_summary: "推論：在 Bedrock 上使用 OpenAI 模型時，除錯與評估回應較方便；對目前配置無需動作。"
next_check: "核對 OpenAI 文件（developers.openai.com reasoning summaries 一節）與 Bedrock 文件，確認支援的具體模型與區域。"
next_check_at: "2026-10-27T10:00:00+08:00"
---

## 已確認事實

- AWS What's New 於 2026-10-09 發文：Amazon Bedrock 透過 Responses API 支援 OpenAI 模型的 `reasoning.summary` 參數。
- 摘要會放在 reasoning 輸出項目的 `summary` 陣列，與模型答案一同回傳。
- 文章稱適用 Bedrock 上「所有 OpenAI 模型」，支援 in-Region、GEO 跨區與全球跨區推論；適用於提供 OpenAI GPT 模型的所有 AWS 區域。
- 文章未列出具體模型版本與區域清單。

## 對我的影響（推論）

- 以下為推論，非官方說法：這屬於開發者體驗改善，不涉及價格或模型能力變動。

## 仍待確認

- 具體支援的模型與區域清單、摘要是否影響計費（未驗證）。
