---
id: 2026-10-01-copilot-dynamic-workflows-preview
title: "GitHub Copilot CLI 與 Copilot app 推出 dynamic workflows（公開預覽）"
event_at: "2026-10-01T00:00:00Z"
verified_at: "2026-10-04T10:30:00+08:00"
category: agent
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Dynamic workflows in Copilot CLI and the Copilot app"
    url: "https://github.blog/changelog/2026-10-01-dynamic-workflows-in-copilot-cli-and-the-copilot-app"
    publisher: "GitHub Changelog"
impact: evaluate
summary: "GitHub 於 2026-10-01 在 Copilot CLI、Copilot app 與 Copilot SDK 推出 dynamic workflows，以程式碼定義多代理流程，公開預覽、所有 Copilot 方案可用。"
impact_summary: "推論：需要可重複、可檢查點暫停的多代理流程（如發佈前檢查、PR 平行審查）時，值得評估；預覽期間行為可能變動。"
next_check: "查 GitHub Changelog 是否宣布 dynamic workflows 正式 GA 或調整計費。"
---

## 已確認事實

- GitHub Changelog 於 2026-10-01 表示，dynamic workflows 已在 Copilot CLI、GitHub Copilot app 與 GitHub Copilot SDK 提供，讓開發者「以程式碼定義編排」來處理複雜的多代理工作。
- 工作流程可結合自動化步驟與代理工作，支援循序、平行或兩者並用；功能包含執行指令與呼叫外部服務、以獨立代理平行執行任務、在階段間傳遞結構化結果、由代理驗證發現、（視用戶端而定）請求使用者輸入，以及在檢查點暫停待審後再繼續。
- 官方說明它與 `/fleet`（由 Copilot 委派並協調子代理）不同，dynamic workflows 依循「以程式碼定義的流程」。
- 適用所有 Copilot 方案；Copilot app 可直接使用，Copilot CLI 需以 `--experimental` 啟用實驗功能。目前為公開預覽，內容可能變動。

## 對我的影響（推論）

- 以下為推論，並非官方說法：若團隊已有固定的審查或發佈流程，可評估用 dynamic workflows 取代手動串接多個代理；預覽階段不宜直接作為關鍵流程的唯一依賴。

## 仍待確認

- 文章未說明預覽期間的用量計費或額度影響（未驗證）。
- 預覽轉 GA 的時程未提（未驗證）。
