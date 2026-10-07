---
id: 2026-10-01-github-copilot-dynamic-workflows-preview
title: "GitHub Copilot CLI 與 Copilot app 推出 dynamic workflows（公開預覽）"
event_at: "2026-10-01T00:00:00Z"
verified_at: "2026-10-05T10:30:00+08:00"
category: agent
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Dynamic workflows in Copilot CLI and the Copilot app"
    url: "https://github.blog/changelog/2026-10-01-dynamic-workflows-in-copilot-cli-and-the-copilot-app"
    publisher: "GitHub Changelog"
impact: evaluate
summary: "GitHub 於 2026-10-01 公布 Copilot CLI、Copilot app 與 Copilot SDK 的 dynamic workflows，可用程式碼定義多代理編排，目前為公開預覽、所有 Copilot 方案可用。"
impact_summary: "推論：需要可重複、可暫停審核的多步驟代理流程時值得試用，但預覽階段內容可能變動，不宜直接用於正式流程。"
next_check: "每週查 GitHub Changelog，確認何時轉為正式版，以及 CLI 是否不再需要 experimental 旗標。"
next_check_at: "2026-10-12T10:00:00+08:00"
---

## 已確認事實

- GitHub Changelog 於 2026-10-01 表示，Copilot CLI、GitHub Copilot app 與 GitHub Copilot SDK 引入 dynamic workflows，讓開發者以程式碼定義編排，以取得複雜多代理工作所需的可靠性與可觀測性。
- dynamic workflow 是結合自動化步驟與代理參與的程式，步驟可循序或平行執行，流程邏輯存在於 GitHub Copilot extension 中；能力包含執行指令／工具／服務呼叫、以獨立代理平行處理、在階段間傳遞結構化結果、由多個子代理交叉驗證、（在支援處）請求使用者輸入，以及在檢查點暫停供審核後再繼續。
- 官方列舉的用途包括發版檢查、多檔案平行審查、對已合併 PR 做跨模型一致性驗證、大規模程式碼樣式搜尋、實作研究與規劃，以及可暫停的長時間／高成本作業。
- 可用性：所有 Copilot 方案；Copilot app 預設啟用，Copilot CLI 需使用 `--experimental` 旗標或 `/experimental on`。狀態為公開預覽，內容可能變動。

## 對我的影響（推論）

- 以下是推論，並非官方說法：若已在用 Copilot CLI 做多步驟任務，可小範圍試用以比較與自行串接腳本的差異；預覽性質代表介面與行為可能改變。

## 仍待確認

- 文章未說明用量／計費是否因平行多代理而增加（未驗證）。
- 正式版時程未公布。
