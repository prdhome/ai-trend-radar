---
id: 2026-11-03-github-copilot-jetbrains-air
title: "GitHub Copilot 成為 JetBrains Air 的代理選項，支援本機與雲端任務"
event_at: "2026-11-03T00:00:00Z"
verified_at: "2026-11-04T10:30:00+08:00"
category: agent
vendors: [github, other]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "GitHub Copilot is now available in JetBrains Air"
    url: "https://github.blog/changelog/2026-11-03-github-copilot-is-now-available-in-jetbrains-air"
    publisher: "GitHub Changelog"
impact: monitor
summary: "GitHub 於 2026-11-03 宣布 Copilot 可在 JetBrains Air 作為代理選項，透過 Agent Client Protocol 執行本機與雲端任務，沿用既有 Copilot 訂閱。"
impact_summary: "推論：已有 Copilot 訂閱且使用 JetBrains 的團隊，可在不另購 JetBrains AI 額度下試用代理式工作流。"
next_check: "確認 Air 是否補上 Copilot 用量分析與支出上限設定。"
next_check_at: "2026-12-04T10:00:00+08:00"
related_events: [2026-10-10-github-copilot-jetbrains-controls-chat]
---

## 已確認事實

- GitHub Changelog（2026-11-03）：Copilot 現為 JetBrains Air 的代理選項，可委派程式任務、引導執行並檢視結果；整合採用 Agent Client Protocol（ACP），並與既有 JetBrains Copilot 外掛並存。
- 支援本機任務（JetBrains IDE 內安裝 Air 外掛並連結 Copilot 帳號）與雲端任務（經 Air Teams，於 IDE 或瀏覽器啟動）。
- 雲端任務使用 Copilot 方案額度，而非 JetBrains AI credits；每個任務在全新虛擬機的 Docker 容器內執行，流量經 proxy，任務間不保留狀態。
- 雲端任務需要：啟用 Air Teams 的企業 JetBrains 組織帳號、Copilot 訂閱、並由 Air 管理員啟用 Copilot。
- 限制：無法逐任務選擇使用個人或組織方案；Air 的治理與分析功能不含 Copilot 用量；管理員可用治理政策停用 Copilot，但無法在 Air 內設定 Copilot 支出上限。
- 已讀取該 changelog 條目（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：若團隊用 Air 且擔心成本，因 Air 內看不到 Copilot 用量與上限，需另從 GitHub 端的用量指標監控。

## 仍待確認

- 各方案（Free／Pro／Business／Enterprise）實際可用範圍：changelog 摘要未列，未驗證。
