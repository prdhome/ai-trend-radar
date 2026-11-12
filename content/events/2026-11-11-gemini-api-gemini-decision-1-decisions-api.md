---
id: 2026-11-11-gemini-api-gemini-decision-1-decisions-api
title: "Gemini API：Gemini Decision 1 與 Decisions API 發布（輸出 0 token 的校準判斷）"
event_at: "2026-11-11T00:00:00Z"
verified_at: "2026-11-12T10:30:00+08:00"
category: model
vendors: [google]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Gemini API release notes（Nov 11：Gemini Decision 與 Decisions API）"
    url: "https://aistudio.google.com/docs/changelog"
    publisher: "Google"
  - title: "Decisions API 文件"
    url: "https://aistudio.google.com/docs/decisions-api"
    publisher: "Google"
impact: evaluate
summary: "Google 於 2026-11-11 在 Gemini API 更新紀錄宣布 gemini-decision-1 與 Decisions API，回傳二元／選項／量表題的校準機率，輸出固定為 0 token。"
impact_summary: "推論：分類、路由、內容審核類工作流若只需要判斷結果，可評估改用此 API 取代自由文字生成；實際成本需看官方定價頁。"
next_check: "確認 gemini-decision-1 的官方定價、速率上限，以及是否仍為 v1beta／預覽性質。"
next_check_at: "2026-11-19T10:00:00+08:00"
related_events:
  - 2026-10-22-openai-decisions-api-ga
---

## 已確認事實

- Gemini API 更新紀錄（2026-11-11）：發布 `gemini-decision-1` 與 Decisions API，用於跨文字、圖片、音訊、影片與 PDF 的快速、校準後的二元、分類與量表（rubric）判斷；更新紀錄稱這些判斷使用零輸出 token。
- Decisions API 文件：以 Gemini Decision 1 針對輸入評估有型別的問題，回傳校準機率而非生成文字；題型為 yes/no、choice（固定選項擇一）、score（有序量表等級）；同一請求內各題獨立計分。
- 文件列出的限制：每次請求 1–1,000 題（與輸入共用 262,144 token 上下文）；choice 選項 2–255；score 等級 2–255（建議 2–10）；內嵌媒體每請求上限 100 MB（PDF 50 MB），外部 URL 每個 15 MB；不支援 YouTube URL、`gs://`、對話歷史與工具呼叫區塊；需 SDK 3.2 以上。
- 文件稱僅計輸入 token、輸出恆為 0 token；不支援 context caching、Batch API、Flex／Priority 推論。
- 文件稱於 Gemini Developer API（v1beta）提供；更新紀錄與文件均未標示預覽或 GA。
- 已讀取更新紀錄頁與 Decisions API 文件頁（皆經摘要擷取，非逐字全文）。

## 對我的影響（推論）

- 以下為推論：若工作流只需要「是否／屬於哪類／幾分」的結果，此 API 可能比自由文字生成更易接上程式分支與路由；但因不支援快取與 Batch，大量重複輸入的成本可能偏高，需試算。
- 以下為推論：OpenAI 先前也推出同名 Decisions API，兩者介面與校準方式是否可比，需另行驗證。

## 仍待確認

- gemini-decision-1 的定價與速率上限：更新紀錄僅指向定價頁，數字未讀到，未驗證。
- 狀態是否為預覽：文件僅標 v1beta，未驗證。
- 與 OpenAI Decisions API 的功能或品質比較：未驗證。
