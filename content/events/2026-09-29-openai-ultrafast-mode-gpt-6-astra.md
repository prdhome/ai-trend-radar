---
id: 2026-09-29-openai-ultrafast-mode-gpt-6-astra
title: "OpenAI API 新增 Ultrafast 服務層級（GPT-6 Astra）"
event_at: "2026-09-29T00:00:00Z"
verified_at: "2026-10-02T10:00:00+08:00"
category: signal
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Ultrafast mode（OpenAI API 文件）"
    url: "https://developers.openai.com/api/docs/guides/ultrafast-mode"
    publisher: "OpenAI"
  - title: "OpenAI API 更新紀錄"
    url: "https://developers.openai.com/changelog"
    publisher: "OpenAI"
impact: evaluate
summary: "OpenAI 更新紀錄於 2026-09-29 列出 GPT-6 Astra 的 Ultrafast 模式；官方文件稱它是 OpenAI API 中最快的服務層級，以速度優先於成本。"
impact_summary: "推論：對延遲敏感、需要大量工具呼叫的代理程式可能值得評估，但價格倍率在文件中未見，需先查定價表再決定。"
next_check: "查 OpenAI 定價頁確認 Ultrafast 的實際價格，並留意是否擴大到 EU／其他區域處理。"
---

## 已確認事實

- OpenAI 開發者更新紀錄在 2026-09-29 條目列出「Ultrafast Mode for GPT-6 Astra」（縮短輸出 token 之間的間隔，新服務層級）。
- 官方文件稱 Ultrafast 是「OpenAI API 中最快的服務層級」，以速度優先於成本，搭配持久 WebSocket 連線、頻繁工具呼叫的應用效果最佳；HTTP 與 WebSocket 皆支援。
- 設定方式：`model` 設為 `gpt-6-astra`、`service_tier` 設為 `ultrafast`。GPT-5.6 Sol 僅為預覽存取。
- 預設速率上限：Tier 1–3 為 500,000 TPM、Tier 4 為 1,000,000 TPM、Tier 5 為 5,000,000 TPM；更高需聯繫 OpenAI 帳號團隊。
- 區域限制：僅支援美國資料駐留與全球處理，不支援 EU 或其他非美國區域端點。
- 讀取方式：以 WebFetch 取得文件與更新紀錄頁內容（為工具產生的摘要，非逐字全文）；速率上限、區域限制與模型名稱已於第二次擷取中逐字核對。官方原文為「broadly available for GPT-6 Astra, with preview access for GPT-5.6 Sol」，GPT-5.6 Sol 為文件原文用字，非轉錄錯誤，與既有 gpt-6-1-sol 事件無關。

## 對我的影響（推論）

- 以下為推論：若工作流程是長串工具呼叫的代理任務，延遲下降可能有感；但有資料駐留要求（如 EU）者目前不適用。

## 仍待確認

- 文件內容未寫出價格倍率或具體費率（僅提到有獨立的 input／cached input／cache write／output 價格），需對照官方定價頁。
- 速度提升幅度沒有官方數字。
- 事件時間僅依更新紀錄的日期（2026-09-29）設為 00:00Z，官方未提供確切時刻，時區為假設。
