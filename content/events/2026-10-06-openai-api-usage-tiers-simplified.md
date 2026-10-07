---
id: 2026-10-06-openai-api-usage-tiers-simplified
title: "OpenAI API 使用層級由五層簡化為 Build／Launch／Grow 三層"
event_at: "2026-10-06T00:00:00Z"
verified_at: "2026-10-07T10:30:00+08:00"
category: pricing
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "OpenAI Developer Changelog（Oct 6：API usage tiers）"
    url: "https://developers.openai.com/changelog"
    publisher: "OpenAI"
  - title: "Rate limits — Usage tiers"
    url: "https://developers.openai.com/api/docs/guides/rate-limits"
    publisher: "OpenAI"
impact: monitor
summary: "OpenAI 於 2026-10-06 把 API 使用層級從五層簡化為 Build／Launch／Grow 三層，依累計儲值金額自動升級。"
impact_summary: "推論：若使用 OpenAI API，額度與速率上限以新層級表為準；僅使用 ChatGPT 訂閱者無影響。"
next_check: "確認既有組織如何對應到新層級（官方頁未說明）。"
---

## 已確認事實

- Changelog（Oct 6）寫明層級由五層簡化為三層：Build、Launch、Grow，組織隨累計儲值自動升級。
- Rate limits 文件列出：Build——累計儲值 $5、月用量上限 $500；Launch——$100、$5,000；Grow——$500、$200,000。
- 文件所列 gpt-6-luna 速率：Build 5,000 RPM／最高 2,000,000 TPM；Launch 10,000 RPM／10,000,000 TPM；Grow 30,000 RPM／180,000,000 TPM。

## 對我的影響（推論）

- 以下為推論：升級門檻明確且低，高用量所需儲值金額可預期；其他模型的上限需另查文件。

## 仍待確認

- 舊五層組織如何遷移到新層級（未驗證）。
- 其他模型的速率上限（未驗證）。
