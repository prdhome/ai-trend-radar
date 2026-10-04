---
id: 2026-10-02-copilot-code-review-api-default-effort
title: "Copilot code review 支援 REST／GraphQL API，預設強度改為 Balanced"
event_at: "2026-10-02T00:00:00Z"
verified_at: "2026-10-04T10:30:00+08:00"
category: agent
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Copilot code review: API support and new default effort level"
    url: "https://github.blog/changelog/2026-10-02-copilot-code-review-api-support-and-new-default-effort-level"
    publisher: "GitHub Changelog"
impact: monitor
summary: "GitHub 於 2026-10-02 宣布可透過 REST 與 GraphQL API 請求 Copilot code review，且預設審查強度自 Lite 改為 Balanced（2026-09-28 起生效）。"
impact_summary: "推論：既有使用預設值的倉庫，審查行為與資源消耗可能與先前不同；可考慮把審查接進自家腳本。"
next_check: "查 Copilot 文件確認 Balanced 是否影響進階請求（premium requests）計費。"
---

## 已確認事實

- GitHub Changelog 於 2026-10-02 表示，開發者可透過 REST 與 GraphQL API 請求 Copilot code review，並可選擇性指定審查強度，以便整合進既有腳本、工作流程與內部工具。
- 「Default」審查強度現在對新舊倉庫與組織一律使用 Balanced（先前為 Lite），該變更於 2026-09-28 生效；先前明確選擇 Lite 的使用者維持原設定。
- 設定可在企業、組織、倉庫或個人四個層級調整，下層可覆寫上層。
- 適用方案：Copilot Pro、Pro+、Max、Business、Enterprise。

## 對我的影響（推論）

- 以下為推論，並非官方說法：未明確設定強度的倉庫，審查結果的深度與耗時可能改變；若在意一致性，可明確指定強度。

## 仍待確認

- 文章未說明 Balanced 與 Lite 在計費或額度上的差異（未驗證）。
