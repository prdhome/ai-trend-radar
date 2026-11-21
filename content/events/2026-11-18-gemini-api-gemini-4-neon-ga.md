---
id: 2026-11-18-gemini-api-gemini-4-neon-ga
title: "Gemini API：Gemini 4 Neon 正式版（$3／$15、1M 上下文），並支援多模態檔案切片"
event_at: "2026-11-18T00:00:00Z"
verified_at: "2026-11-21T10:30:00+08:00"
category: model
vendors: [google]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Gemini API release notes（Nov 18：Gemini 4 Neon GA）"
    url: "https://aistudio.google.com/docs/changelog"
    publisher: "Google"
impact: evaluate
summary: "Google 於 2026-11-18 在 Gemini API 更新紀錄宣布 gemini-4-neon 正式版：付費每百萬 token 輸入 $3.00、輸出 $15.00，支援四種思考等級與 1M 上下文；同日新增 Office 檔案直傳與內容切片。"
impact_summary: "推論：需要複雜軟體工程或知識工作能力的團隊可評估 Neon，並與 Hydrogen 等較低價型號比較成本；檔案切片可能降低長文件的 token 成本。"
next_check: "確認 gemini-4-neon 專屬模型頁的規格與速率上限。"
next_check_at: "2026-11-28T10:00:00+08:00"
related_events:
  - 2026-11-12-gemini-api-gemini-4-hydrogen-ga
  - 2026-11-18-github-copilot-gemini-4-neon-ga
---

## 已確認事實

- Gemini API 更新紀錄（2026-11-18）：模型 `gemini-4-neon` 正式發布（GA），定位為複雜軟體工程、知識工作與科學工作流。
- 付費價格：輸入 $3.00／百萬 token、輸出 $15.00／百萬 token。
- 支援四個思考等級（`low`、`medium`、預設 `high`、`xhigh`）、統一 1M token 上下文，長解碼最高 1M token。
- 同日新增多模態檔案處理與切片：Word、PowerPoint、Excel 與 OpenDocument 格式可直接傳入 API；文件、試算表、影片與音訊可依頁範圍、工作表、儲存格範圍、時間區間或內容層切片，僅處理並計費所選內容。
- 已讀取更新紀錄頁（經摘要擷取，非逐字全文）。

## 對我的影響（推論）

- 以下為推論：價格高於 Hydrogen（$1.50／$7.50），適合需要較強能力的任務；是否值得需自行測試。
- 以下為推論：切片功能對長文件與影音工作流可能節省成本。

## 仍待確認

- 專屬模型頁的完整規格、速率上限與免費層可用性：未讀到，未驗證。
- 與其他 Gemini 4 模型的基準比較：未驗證。
