---
id: 2026-11-16-github-copilot-strict-plugin-only-customization
title: "GitHub Copilot 企業管理員可強制客製化只能來自 plugin 或受管設定（strictPluginOnlyCustomization）"
event_at: "2026-11-16T00:00:00Z"
verified_at: "2026-11-17T10:30:00+08:00"
category: agent
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Control where GitHub Copilot customizations come from"
    url: "https://github.blog/changelog/2026-11-16-control-where-github-copilot-customizations-come-from"
    publisher: "GitHub Changelog"
impact: monitor
summary: "GitHub 於 2026-11-16 公告：Enterprise Cloud 管理員可用 strictPluginOnlyCustomization 要求 skills、自訂 agent、hooks、MCP servers、可執行擴充只能來自 plugin 或受管設定。"
impact_summary: "推論：企業內使用者自建的 MCP server、hooks 等可能被管理員設定擋下，需改透過核准的 plugin 發布。"
next_check: "確認該設定在各 Copilot 用戶端（VS Code、CLI 等）的實際涵蓋範圍。"
next_check_at: "2026-12-16T10:00:00+08:00"
related_events: []
---

## 已確認事實

- GitHub Changelog（2026-11-16，Improvement）：企業管理員可要求選定的 Copilot 客製化來自 plugin 或受管設定，而非獨立的使用者／專案設定。
- 受管設定 `strictPluginOnlyCustomization` 阻擋使用者與專案來源的獨立客製化；可套用到全部五類，或個別選擇：skills、自訂 agents、hooks、MCP servers、可執行 Copilot 擴充（含可執行 canvas provider，非 VS Code Marketplace 擴充）。
- 可搭配 `strictKnownMarketplaces` 限制可用的 marketplace 來源；plugin-only 不等於「只能用企業管理的 plugin」，也不是 marketplace 允許清單。
- 適用於 GitHub Enterprise Cloud 管理員，及由企業或其組織授予 Copilot Business／Enterprise 授權的成員。
- 已讀取該 changelog 頁（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：若所屬組織啟用此設定，個人設定檔中的 MCP／hooks 可能失效。

## 仍待確認

- 哪些 Copilot 用戶端已支援此設定：摘要未明列，未驗證。
