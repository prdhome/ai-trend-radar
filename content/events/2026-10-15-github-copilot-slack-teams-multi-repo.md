---
id: 2026-10-15-github-copilot-slack-teams-multi-repo
title: "GitHub 的 Slack／Teams 整合支援單一對話跨多個儲存庫"
event_at: "2026-10-15T00:00:00Z"
verified_at: "2026-10-17T10:30:00+08:00"
category: agent
vendors: [github, microsoft]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Multi-repository support and other improvements for GitHub in Slack and Teams"
    url: "https://github.blog/changelog/2026-10-15-copilot-in-slack-and-teams-adds-model-and-repository-updates"
    publisher: "GitHub Changelog"
impact: monitor
summary: "GitHub 於 2026-10-15 宣布 Slack 與 Teams 中的 @GitHub 可在同一對話跨多個儲存庫工作，並可引用分享的 Slack 訊息與討論串作為上下文。"
impact_summary: "推論：在 Slack／Teams 內派工給 Copilot 的團隊少了切換對話的成本；方案資格頁面未寫明，需自行確認。"
next_check: "查文件是否列出適用方案與計費方式。"
next_check_at: "2026-10-31T10:00:00+08:00"
---

## 已確認事實

- GitHub Changelog（2026-10-15，標為 Improvement）：@GitHub 在 Slack 與 Microsoft Teams 可在一個對話內跨多個儲存庫，例如依討論串上下文在另一個儲存庫建 issue、在前端儲存庫修程式並開 PR、列出跨儲存庫的未結 PR、同時查前後端程式碼找 bug。
- 其他改進：可在訊息任意位置提及 @GitHub；切換儲存庫更順；可使用分享的 Slack 訊息與討論串作為上下文；可靠度提升（錯誤較少、任務啟動較快、中斷後較易恢復）。
- 頁面未說明適用方案、地區或推出時程。
- 已讀取該 changelog 全文（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：以聊天室作為 Copilot 入口的團隊可減少對話切換；實際可靠度提升幅度為官方自述，未驗證。

## 仍待確認

- 適用方案與計費（未驗證）。
- 可靠度改進的實際效果（未驗證）。
