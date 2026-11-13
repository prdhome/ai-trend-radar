---
id: 2026-11-12-gemini-api-gemini-4-hydrogen-ga
title: "Gemini API：Gemini 4 Hydrogen 正式版（$1.50／$7.50、新增 xhigh 思考等級）"
event_at: "2026-11-12T00:00:00Z"
verified_at: "2026-11-13T10:30:00+08:00"
category: model
vendors: [google]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Gemini API release notes（Nov 12：Gemini 4 Hydrogen GA）"
    url: "https://aistudio.google.com/docs/changelog"
    publisher: "Google"
  - title: "Gemini API models 頁（Gemini 4 系列規格）"
    url: "https://aistudio.google.com/docs/models"
    publisher: "Google"
impact: evaluate
summary: "Google 於 2026-11-12 在 Gemini API 更新紀錄宣布 gemini-4-hydrogen 正式版：免費層可用，付費為每百萬 token 輸入 $1.50、輸出 $7.50，並新增第四個思考等級 xhigh。"
impact_summary: "推論：想在 Gemini 4 系列中找價格較低的選項的團隊可評估 Hydrogen；預設思考等級仍為 high，改用 xhigh 前應先測延遲與成本。"
next_check: "確認 gemini-4-hydrogen 專屬模型頁的完整規格（價格細節、速率上限）。"
next_check_at: "2026-11-27T10:00:00+08:00"
related_events:
  - 2026-11-10-gemini-api-gemini-4-carbon-ga
---

## 已確認事實

- Gemini API 更新紀錄（2026-11-12）：模型 `gemini-4-hydrogen` 正式發布（GA），免費層可用。
- 付費價格：輸入 $1.50／百萬 token、輸出 $7.50／百萬 token。
- 新增第四個思考等級 `xhigh`，與 `low`、`medium`、預設的 `high` 並列。
- 它同時成為 Gemini Managed Agents 中 Antigravity agent 的預設模型。
- Models 頁將其列在 Gemini 4 區，1M token 上下文（與其他 Gemini 4 模型共用）、輸出上限 65K／1M tokens，支援文字、圖片、音訊、影片、PDF；該頁建議新專案使用。
- 已讀取更新紀錄頁與 models 頁（皆為摘要擷取，非逐字全文）。

## 對我的影響（推論）

- 以下為推論：Hydrogen 價格低於同系列 Carbon 的介紹價（$2／$10），適合成本敏感的日常程式與 agent 工作流；實際品質差異需自行測試。
- 以下為推論：預設 Antigravity agent 模型變更，使用 Managed Agents 的團隊成本與行為可能改變。

## 仍待確認

- 專屬模型頁（/docs/models/gemini-4-hydrogen）的完整規格與速率上限：未讀到，未驗證。
- 與 Carbon、其他 Gemini 4 模型的基準測試比較：未驗證。
- Google 官方部落格是否另有發布文章：未讀到。
