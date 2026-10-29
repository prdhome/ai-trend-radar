---
id: 2026-10-28-github-copilot-sdk-becoming-microsoft-copilot-sdk
title: "GitHub Copilot SDK 將轉為 Microsoft Copilot SDK"
event_at: "2026-10-28T00:00:00Z"
verified_at: "2026-10-29T10:30:00+08:00"
category: agent
vendors: [github, microsoft]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "GitHub Copilot SDK is becoming Microsoft Copilot SDK"
    url: "https://github.blog/changelog/2026-10-28-github-copilot-sdk-is-becoming-microsoft-copilot-sdk"
    publisher: "GitHub"
impact: monitor
summary: "GitHub 於 2026-10-28 宣布 Copilot SDK 將分階段轉為 Microsoft Copilot SDK，成為 Microsoft 與 GitHub 產品共用代理基礎的可程式化介面。"
impact_summary: "推論：使用該 SDK 的開發者短期無須變更，但套件名稱與文件日後可能更動，需追蹤遷移。"
next_check: "觀察 repository 搬遷與套件命名變更時程。"
next_check_at: "2026-11-28T10:00:00+08:00"
---

## 已確認事實

- GitHub changelog（2026-10-28）：GitHub Copilot SDK 正轉為 Microsoft Copilot SDK，定位為 Microsoft Copilot harness 的可程式化介面，即 Microsoft 與 GitHub 產品的共用代理基礎。
- SDK repository 將更新以反映搬到 Microsoft 組織；品牌與文件同步更新。
- 遷移分階段進行，過渡期間套件名稱、namespace 與部分文件可能仍稱 GitHub Copilot SDK。
- 現有使用者無須立即變更；支援方式不變（見 github/copilot-sdk 的 SUPPORT.md）。
- 已讀取官方 changelog 全文（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：依賴該 SDK 的服務應鎖定版本並關注後續套件改名。

## 仍待確認

- 具體遷移日期與是否影響授權或 API。
