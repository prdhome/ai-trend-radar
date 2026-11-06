---
id: 2026-11-05-openai-gpt-6-cyber-model
title: "OpenAI API 推出 GPT-6-Cyber，需 Daybreak Red 與額外模型核准"
event_at: "2026-11-05T00:00:00Z"
verified_at: "2026-11-06T10:30:00+08:00"
category: model
vendors: [openai]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "GPT-6-Cyber 模型頁"
    url: "https://developers.openai.com/api/docs/models/gpt-6-cyber"
    publisher: "OpenAI Developers"
  - title: "Daybreak 存取計畫指南"
    url: "https://developers.openai.com/api/docs/guides/daybreak"
    publisher: "OpenAI Developers"
  - title: "OpenAI API changelog"
    url: "https://developers.openai.com/changelog"
    publisher: "OpenAI Developers"
impact: monitor
summary: "OpenAI 於 2026-11-05 在 API 更新紀錄列出 gpt-6-cyber（資安漏洞調查、重現與修補驗證），需 Daybreak Red 存取並另經模型核准；列價每百萬 token 輸入 $20、輸出 $100。"
impact_summary: "推論：一般開發者無法直接使用；只有已通過 Daybreak Red 的資安團隊才需評估，且需先處理 SSO／MFA 與 IP allowlist。"
next_check: "觀察是否放寬存取條件或調整價格。"
next_check_at: "2026-12-06T10:00:00+08:00"
---

## 已確認事實

- API 更新紀錄（2026-11-05）：新增 `gpt-6-cyber`，用於調查漏洞、在授權測試環境重現漏洞與驗證修補；首次請求前需完成設定。
- 模型頁：存取需 Daybreak Red 與核准；context window 1,050,000 token（輸入最多 922,000、輸出最多 128,000）；文字與圖像輸入、文字輸出。
- 模型頁列價（每百萬 token）：輸入 $20、快取輸入 $2、快取寫入 $25（30 分鐘）／$50（12 小時）、輸出 $100（標準短 context 價格）。
- 支援 Chat Completions 與 Responses；Realtime、Batch、fine-tuning 等端點不支援。頁面未列發布或淘汰日期。
- Daybreak 指南：GPT-6-Cyber 需 Daybreak Red 加額外模型核准，請求使用 `access_programs.cyber: daybreak_red`；需組織擁有者為專案啟用 Daybreak Red、IP allowlist；使用 ZDR 的專案需設定 Private Safety Processing。Daybreak Red 組織須對 API 組織強制 SSO 並透過 IdP 強制 MFA。
- 已讀取更新紀錄、模型頁與 Daybreak 指南（經摘要擷取，非逐字全文）。

## 對我的影響（推論）

- 以下為推論：此模型針對受管制的資安用途，對一般開發工作流程沒有直接影響；列價高於一般通用模型，僅在有資安審查需求時才值得申請。

## 仍待確認

- 申請流程、核准標準與時程：未驗證（頁面僅要求洽客戶團隊）。
- 與 GPT-5.6-Cyber 等既有資安模型的能力差異：未驗證。
