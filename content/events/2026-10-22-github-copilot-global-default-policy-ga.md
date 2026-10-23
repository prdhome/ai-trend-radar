---
id: 2026-10-22-github-copilot-global-default-policy-ga
title: "GitHub Copilot 商業版「全域預設政策」開始套用，10/26 前逐步完成"
event_at: "2026-10-22T00:00:00Z"
verified_at: "2026-10-23T10:30:00+08:00"
category: agent
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Global default for Copilot features generally available"
    url: "https://github.blog/changelog/2026-10-22-global-default-for-copilot-features-generally-available"
    publisher: "GitHub"
impact: action
summary: "GitHub 於 2026-10-22 起對 Copilot Business／Enterprise 套用全域預設政策，未設定的 GA 功能將採用所選預設值（啟用、停用或交由組織決定），預計 10/26 前完成。"
impact_summary: "推論：Copilot 管理員應在 10/26 前確認預設值，否則未明確設定的 GA 功能可能依預設自動開啟或關閉。"
next_check: "確認 10/26 後各組織實際套用結果與預設政策文件。"
next_check_at: "2026-10-28T10:00:00+08:00"
related_events:
  - 2026-10-13-github-copilot-managed-settings-enforcement
---

## 已確認事實

- GitHub changelog（2026-10-22）：九月宣布的全域預設政策自 10/22 起強制套用，逐步推出至 10/26，各企業與組織生效時間不同。
- 未設定的 GA 功能將採用選定的全域預設（Enabled、Disabled、Let organizations decide）；這是一次性變更，之後改預設不會影響已設定的政策；已明確設定的選擇會保留。
- 預覽功能仍為 opt-in；預覽功能日後 GA 時，已 opt-in 者保留選擇，否則套用預設。
- 範圍涵蓋「Features & clients」與「MCP servers in Copilot」的合格設定；管理入口為 AI Controls → Copilot → Default policy for new features。
- 已讀取 changelog 條目（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：使用 Copilot Business／Enterprise 的團隊，若從未設定個別功能，行為可能在此期間改變，建議管理員先檢查。

## 仍待確認

- 各功能的合格範圍與例外（需查 GitHub 官方「default availability」文件，本次未讀）。
