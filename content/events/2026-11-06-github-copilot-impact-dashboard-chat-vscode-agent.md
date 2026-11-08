---
id: 2026-11-06-github-copilot-impact-dashboard-chat-vscode-agent
title: "GitHub Copilot impact dashboard 納入 Chat 與 VS Code Agents 視窗，「Passive users」改名 Chat-first users"
event_at: "2026-11-06T00:00:00Z"
verified_at: "2026-11-08T10:30:00+08:00"
category: signal
vendors: [github, microsoft]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Copilot impact dashboard adds chat and VS Code agent usage"
    url: "https://github.blog/changelog/2026-11-06-copilot-impact-dashboard-adds-chat-and-vs-code-agent-usage"
    publisher: "GitHub Changelog"
impact: monitor
summary: "GitHub 於 2026-11-06 宣布 Copilot impact dashboard 的 Agent adoption 圖納入 Copilot Chat 與 VS Code Agents 視窗（共九種體驗），「Passive users」改稱「Chat-first users」，28 天用量報告 API 新增 chat 與 vscode_agent 欄位。"
impact_summary: "推論：管理 Copilot 席次的企業可看到 Chat 使用也被算入功能參與，評估採用率時需注意分類改名；採用階段與 cohort 大小不變。"
next_check: "確認 API 欄位 chat／vscode_agent 是否擴及 28 天以外的報告。"
next_check_at: "2026-12-08T10:00:00+08:00"
related_events: [2026-10-22-github-copilot-impact-dashboard-industry-comparison]
---

## 已確認事實

- GitHub Changelog（2026-11-06，Improvement）：Agent adoption 圖加入 Copilot Chat 與 VS Code Agents 視窗，追蹤的 Copilot 體驗共九種。
- 「Passive users」cohort 改名「Chat-first users」；Chat 與 VS Code Agents 視窗算作功能參與，但不計入採用階段，Chat-first users 在 API 仍對應 `No Cohort`，cohort 大小不變。
- 企業與組織 28 天用量指標報告在 `copilot_feature_engagement.totals_by_feature` 新增 `chat` 與 `vscode_agent`；較早期間的報告仍只含原本七種功能。
- 使用者在 28 天內至少兩天使用某功能即算參與；可同時算入多個功能，agent mode 的編輯算入 chat。
- 可檢視者：企業擁有者、帳務管理員、組織擁有者與具「View Copilot Metrics」權限的自訂角色；需啟用 Copilot 用量指標政策。
- 已讀取該 changelog 文章（經摘要擷取，非逐字全文）。

## 對我的影響（推論）

- 以下為推論：使用此儀表板衡量導入成效的管理者，改名與新欄位會影響報表解讀與既有 API 解析程式。

## 仍待確認

- 完整原文逐字內容：未驗證（僅讀到摘要擷取結果）。
