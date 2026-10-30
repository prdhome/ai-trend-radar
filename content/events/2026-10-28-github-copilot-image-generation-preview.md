---
id: 2026-10-28-github-copilot-image-generation-preview
title: "GitHub Copilot 公開預覽圖像生成與編輯，由 GPT Image 2.5 Flare 驅動"
event_at: "2026-10-28T00:00:00Z"
verified_at: "2026-10-30T18:20:00+08:00"
category: model
vendors: [github, openai]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Generate and edit images directly in Copilot"
    url: "https://github.blog/changelog/2026-10-28-generate-and-edit-images-directly-in-copilot"
    publisher: "GitHub"
impact: monitor
summary: "GitHub 於 2026-10-28 在 Copilot 公開預覽圖像生成與編輯，可在 VS Code、Copilot app、Copilot CLI 使用，另依圖像 token 計入 AI credits。"
impact_summary: "推論：需要在專案內產生素材的開發者可試用，管理員可用模型政策關閉。"
next_check: "觀察是否正式 GA 與計費細節。"
next_check_at: "2026-11-30T10:00:00+08:00"
related_events: []
---

## 已確認事實

- GitHub changelog（2026-10-28）：可在任何 Copilot 對話以自然語言生成與編輯圖像，結果在對話中預覽並存入專案；所選推理模型呼叫專用圖像工具，該工具由「GPT Image 2.5 Flare」驅動。
- 公開預覽，適用 Copilot Pro、Pro+、Business、Enterprise；可用於 VS Code、GitHub Copilot app、Copilot CLI。
- 與聊天模型分開計費，依圖像 token 計入方案的 AI credits。
- 組織與企業擁有者可透過 Copilot 模型政策停用圖像生成模型；可選「Made with AI」浮水印，預設關閉。
- 已讀取官方 changelog 全文（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：圖像 token 用量可能快速消耗 credits，需實測。

## 仍待確認

- 每張圖像的 credit 成本。
- 預覽轉 GA 的時程。
