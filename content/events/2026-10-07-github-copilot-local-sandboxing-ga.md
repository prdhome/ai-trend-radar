---
id: 2026-10-07-github-copilot-local-sandboxing-ga
title: "GitHub Copilot 本機沙箱（local sandboxing）正式 GA"
event_at: "2026-10-07T00:00:00Z"
verified_at: "2026-10-08T10:30:00+08:00"
category: agent
vendors: [github, microsoft]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Local sandboxing for GitHub Copilot now generally available"
    url: "https://github.blog/changelog/2026-10-07-local-sandboxing-for-github-copilot-now-generally-available"
    publisher: "GitHub"
impact: evaluate
summary: "GitHub 於 2026-10-07 宣布 Copilot 本機沙箱 GA，可限制代理在本機能讀寫的檔案、網路與憑證，支援 Windows、macOS、Linux。"
impact_summary: "推論：在本機跑 Copilot 代理的團隊可評估啟用，並用企業政策強制要求沙箱。"
next_check: "文件中的限制與設定細節。"
next_check_at: "2026-10-22T10:00:00+08:00"
---

## 已確認事實

- GitHub changelog（2026-10-07）：本機沙箱在開發者機器上以受限的執行邊界運行 Copilot 的工具與指令，並依開發者或組織政策限制檔案系統、網路、憑證等能力。
- 平台：Windows、macOS、Linux；以 Microsoft eXecution Container（MXC）將共通政策對應到各 OS 原生控制。
- 適用 client：GitHub Copilot CLI、GitHub Copilot app，以及使用 Agent Host 的 VS Code session。
- 可限制檔案目錄、網際網路／區網存取、Git 與 GitHub CLI 憑證，並涵蓋本機 MCP 與 language server（視支援）。
- 可用企業管理設定強制沙箱，開發者無法削弱。
- 頁面稱隨 GitHub Copilot 提供、無額外費用，未列出具體方案層級。

## 對我的影響（推論）

- 以下為推論：可降低代理誤刪檔或外洩憑證的風險，但實際防護範圍須以文件與自身測試確認。

## 仍待確認

- 具體系統需求與限制（頁面未載明，未驗證）。
- 各方案是否都可用（未驗證）。
