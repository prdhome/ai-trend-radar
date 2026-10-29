---
id: 2026-10-28-github-agentic-workflows-ga
title: "GitHub Agentic Workflows 正式發布（GA）"
event_at: "2026-10-28T00:00:00Z"
verified_at: "2026-10-29T10:30:00+08:00"
category: agent
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "GitHub Agentic Workflows generally available"
    url: "https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available"
    publisher: "GitHub"
impact: evaluate
summary: "GitHub 於 2026-10-28 宣布 Agentic Workflows 正式發布，可用 Markdown 撰寫、編譯為 Actions YAML，在 GitHub Actions 內執行編碼代理。"
impact_summary: "推論：想把 issue 分流、CI 失敗分析等工作交給代理的團隊，可評估在既有 Actions 環境中試用，並留意 AI 用量成本。"
next_check: "觀察預設 Copilot CLI 引擎的授權與 AI credit 計費細節。"
next_check_at: "2026-11-28T10:00:00+08:00"
---

## 已確認事實

- GitHub changelog（2026-10-28）：來自 GitHub Next 的開源專案 Agentic Workflows 正式發布（GA），可在 GitHub Actions 內執行編碼代理，處理 issue 分流、CI 失敗分析、文件更新、撰寫測試等。
- 以 Markdown 撰寫，編譯為標準 Actions YAML，沿用既有 runner group 與政策限制；可用 GitHub Copilot 或自帶編碼代理。
- 安全機制：預設唯讀權限、沙盒容器與 Agent Workflow Firewall、safe outputs 流程、套用前的威脅偵測工作。
- 自預覽新增：自架 runner 支援 ARC 與 Docker-in-Docker、`gh aw forecast` 轉正式（含 AI credit 月度支出範圍）、模型路由、每個 workflow 可選模型供應商、微型虛擬機隔離等。
- 在 github.com 的 Free、Team、Enterprise 方案提供；使用預設 Copilot CLI 引擎需 Copilot 授權。
- 已讀取官方 changelog 全文（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：代理在 CI 中執行會產生 AI 用量，導入前宜先用 forecast 估算。

## 仍待確認

- 實際計費費率與各引擎的用量算法（本次未讀文件）。
- 公告中的客戶成效數字為廠商引述，未獨立驗證。
