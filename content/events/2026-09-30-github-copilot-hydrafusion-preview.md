---
id: 2026-09-30-github-copilot-hydrafusion-preview
title: "GitHub Copilot 推出 HydraFusion 多模型協作（研究預覽）"
event_at: "2026-09-30T00:00:00Z"
verified_at: "2026-10-02T10:00:00+08:00"
category: agent
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "HydraFusion in VS Code and the GitHub Copilot app"
    url: "https://github.blog/changelog/2026-09-30-hydrafusion-in-vs-code-and-the-github-copilot-app"
    publisher: "GitHub"
impact: monitor
summary: "GitHub 於 2026-09-30 公布 HydraFusion 在 VS Code 與 GitHub Copilot app 以研究預覽提供，會協調多個模型（單一、串接升級、批評修正三種模式）完成任務。"
impact_summary: "推論：若使用 Copilot 付費方案，可在預覽期試用以觀察品質與成本，但預覽功能行為可能改變，不宜用於關鍵流程。"
next_check: "查 GitHub changelog 是否更新計費（premium request）說明或正式 GA。"
next_check_at: "2026-10-16T10:00:00+08:00"
---

## 已確認事實

- GitHub changelog 於 2026-09-30 發文：HydraFusion 是「協調多個模型」的系統，把任務執行視為最佳化問題，在三種流程中選擇：Single（單一模型直接解）、Cascade（高效率模型先起草，由品質關卡決定是否升級到更強模型）、Critique（一個模型起草、另一個批評、原模型修正一次）。
- 以研究預覽提供於 VS Code 1.140 以上（或 Insiders）與最新版 GitHub Copilot app，並由 GitHub Copilot CLI 擴大而來。
- 僅限 Copilot Pro、Pro+、Business、Enterprise；Business／Enterprise 需由管理員啟用預覽功能。
- 文章未提到新的定價層級；近期更新包含更高透明度、即時進度與長任務的狀態指示。
- 已讀取該 GitHub changelog 全文（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：用多模型串接可能降低成本或提高品質，但實際效果與計費方式文章未說明，需自行試用。

## 仍待確認

- 對 premium request 額度的消耗方式未於文中說明。
- 效能、品質無官方數據。
