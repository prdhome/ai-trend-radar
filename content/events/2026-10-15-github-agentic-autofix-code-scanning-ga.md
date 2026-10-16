---
id: 2026-10-15-github-agentic-autofix-code-scanning-ga
title: "GitHub Copilot 的 code scanning agentic autofix 正式 GA，改以 AI Credits 計費"
event_at: "2026-10-15T00:00:00Z"
verified_at: "2026-10-16T10:30:00+08:00"
category: agent
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Agentic autofix for code scanning alerts general availability"
    url: "https://github.blog/changelog/2026-10-15-agentic-autofix-for-code-scanning-alerts-general-availability"
    publisher: "GitHub Changelog"
impact: evaluate
summary: "GitHub 於 2026-10-15 宣布 code scanning 警示的 agentic autofix GA：Copilot 探索檔案、提出修正、重跑 CodeQL 驗證後開 draft PR，用量計入 Code Security 預算的 AI Credits 與 Actions 分鐘。"
impact_summary: "推論：有 GHAS／Code Security 的團隊可評估用它批次清警示，但需先確認 AI Credits 預算與計費設定。"
next_check: "查 GitHub 文件是否公布 AI Credits 單價與支援語言範圍。"
next_check_at: "2026-10-30T10:00:00+08:00"
---

## 已確認事實

- GitHub Changelog（2026-10-15）：agentic autofix 修補 code scanning 警示的流程為探索相關檔案、提出修正、重跑 CodeQL 確認警示關閉，再開 draft PR（含修正摘要、原因與驗證步驟）；可在 PR 留言或 Agents 分頁要求後續修改。
- 僅預設分支上的警示可指派給 Copilot（只出現在 PR 或其他分支的不行）；一次最多選 25 個警示併成一個 PR；也可用 Update a Code Scanning Alert REST API，將 `assignees` 設為 `["copilot-swe-agent[bot]"]`。啟用後「Assign to Copilot」按鈕取代免費的「Generate Fix」。
- 適用於 GitHub Enterprise Cloud（含 data residency）上的 GitHub Code Security 與 GitHub Advanced Security 客戶。
- 啟用需：企業管理員開啟 Advanced Security 政策「Agentic autofix」、組織或儲存庫管理員在 Code Security 設定開啟、並設定 Copilot 計費方式。
- 計費：消耗 Code Security 預算的 AI Credits 加上 GitHub Actions 分鐘；可設 SKU 級預算。頁面未列具體價格，也未提及支援語言。
- 已讀取該 changelog 全文（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：「Generate Fix」被取代為需計費的功能，原本使用免費選項的團隊可能出現新成本；實際花費無官方數據。

## 仍待確認

- AI Credits 的單價與每次修補的典型用量。
- 支援的語言／CodeQL 查詢範圍。
