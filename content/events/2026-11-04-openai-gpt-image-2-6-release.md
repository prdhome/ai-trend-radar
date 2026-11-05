---
id: 2026-11-04-openai-gpt-image-2-6-release
title: "OpenAI API 推出 GPT-Image-2.6 Sunburst 與 Flare 圖像模型"
event_at: "2026-11-04T00:00:00Z"
verified_at: "2026-11-05T10:30:00+08:00"
category: model
vendors: [openai]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "OpenAI API changelog（Nov 4：GPT-Image-2.6 Sunburst and Flare）"
    url: "https://developers.openai.com/changelog"
    publisher: "OpenAI Developers"
  - title: "GPT-Image-2.6 Sunburst 模型頁"
    url: "https://developers.openai.com/api/docs/models/gpt-image-2.6-sunburst"
    publisher: "OpenAI Developers"
  - title: "GPT-Image-2.6 Flare 模型頁"
    url: "https://developers.openai.com/api/docs/models/gpt-image-2.6-flare"
    publisher: "OpenAI Developers"
impact: evaluate
summary: "OpenAI 於 2026-11-04 在 API 更新紀錄發布 gpt-image-2.6-sunburst 與 gpt-image-2.6-flare，支援複雜度設定、SVG 與動態 GIF 輸出，兩者官方列價相同。"
impact_summary: "推論：使用圖像生成 API 的團隊可實測兩款模型的品質與延遲差異；兩者價格相同，選擇主要看用途。"
next_check: "觀察是否新增 Batch／Responses 等端點支援，或價格調整。"
next_check_at: "2026-12-05T10:00:00+08:00"
---

## 已確認事實

- API 更新紀錄（2026-11-04）：發布 GPT-Image-2.6 Sunburst 與 GPT-Image-2.6 Flare，用於圖像生成與編輯；功能包含可調整的 complexity、SVG 生成、動態 GIF 生成，並為支援的 GPT Image 2.5／2.6 模型加入 markup-guided editing。
- 模型頁：Sunburst 定位「detailed visual work」，Flare 定位「fast iteration」。
- 兩者模型頁列價相同（每百萬 token）：文字輸入 $5（快取 $1.25）、圖像輸入 $8（快取 $2）、圖像輸出 $30。
- 支援端點為 `v1/images/generations` 與 `v1/images/edits`；模型頁列為不支援的包含 Chat Completions、Responses、Batch、Fine-tuning 等。
- 兩個模型頁各自只列單一快照（與模型 ID 同名）；頁面未載明 context window，速率限制依用量層級而定。
- 已讀取更新紀錄與兩個模型頁（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：價格相同，Sunburst 偏品質、Flare 偏速度的差異來自官方定位描述，實際表現需自行測試。

## 仍待確認

- 兩款模型的實測品質、延遲差異：未驗證（官方頁面未互相比較）。
- 與 GPT Image 2.5 的價格與效能比較：未驗證。
