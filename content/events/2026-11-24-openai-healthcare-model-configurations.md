---
id: 2026-11-24-openai-healthcare-model-configurations
title: "OpenAI Responses API 新增 healthcare 模型配置（gpt-6.2-astra／sol-healthcare 等）"
event_at: "2026-11-24T00:00:00Z"
verified_at: "2026-11-25T10:30:00+08:00"
category: pricing
vendors: [openai]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "OpenAI API 定價頁（Healthcare model configurations）"
    url: "https://developers.openai.com/api/docs/pricing"
    publisher: "OpenAI"
  - title: "OpenAI developers changelog"
    url: "https://developers.openai.com/changelog"
    publisher: "OpenAI"
impact: evaluate
summary: "OpenAI 開發者 changelog 於 2026-11-24 列出 Responses API 的 healthcare 模型配置：把選定模型與面向臨床問題的 harness 搭配，web search 使用專屬醫療索引；定價頁列出 gpt-6.2-astra／sol-healthcare 等四個配置的價格。"
impact_summary: "推論：醫療相關應用的團隊可評估這些配置，但價格高於對應基礎模型的情況與資格條件須自行對照官方頁，尚未驗證。"
next_check: "確認 healthcare 配置的存取資格、促銷價（頁面稱至少到 2026-12-31）是否延長或調整。"
next_check_at: "2026-12-31T10:00:00+08:00"
---

## 已確認事實

- changelog 頁（標示 Nov 24, 2026）：Responses API 新增 healthcare 模型配置，把選定模型與一組 harness 搭配以回答臨床問題，web search 取自專屬醫療索引。
- 定價頁 Markdown 版（標準層，USD／每百萬 token，短上下文輸入／輸出）：gpt-6.2-astra-healthcare $8／$40（長上下文 $16／$60）；gpt-6.2-sol-healthcare $2／$10（長上下文 $4／$15）；gpt-6-astra-healthcare $10／$50；gpt-6.1-sol-healthcare $2／$10。Fast 層價格約為標準層兩倍。
- 定價頁稱 healthcare 配置（含 GPT-6.2 Astra、GPT-6.2 Sol、GPT-6 Astra、GPT-6.1 Sol）的促銷價「至少到 2026 年 12 月 31 日」。
- 該頁未載明 healthcare 配置的存取條件或資格要求（與標為 Trusted Access 的 Cyber、Life Sciences 模型不同）。
- 已讀取 changelog 頁與定價頁 Markdown 版；changelog 各項目沒有獨立網址，故以頁面為來源。

## 對我的影響（推論）

- 以下為推論：對醫療場景的應用，這提供官方預設的臨床 harness 與醫療索引，但是否優於自建流程尚無資料。

## 仍待確認

- 存取資格、地區限制與資料處理條款：頁面未說明，未驗證。
- 配置的臨床品質或評測結果：官方頁未提供，未驗證。
