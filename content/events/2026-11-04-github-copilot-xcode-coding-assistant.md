---
id: 2026-11-04-github-copilot-xcode-coding-assistant
title: "GitHub Copilot 可用於 Xcode 內建 coding assistant（公開預覽）"
event_at: "2026-11-04T00:00:00Z"
verified_at: "2026-11-05T10:30:00+08:00"
category: agent
vendors: [github, other]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "GitHub Copilot is now available in Xcode's coding assistant"
    url: "https://github.blog/changelog/2026-11-04-github-copilot-is-now-available-in-xcodes-coding-assistant"
    publisher: "GitHub Changelog"
impact: monitor
summary: "GitHub 於 2026-11-04 宣布 Copilot 可在 Xcode 內建 coding assistant 使用，為公開預覽，自 Xcode 27.3 beta 起，所有 Copilot 方案皆支援。"
impact_summary: "推論：Apple 平台開發者若已有 Copilot 訂閱，可在 beta 環境試用，不必另裝擴充功能；穩定性仍需觀察。"
next_check: "確認 Xcode 27.3 正式版上線後是否結束預覽，以及方案／用量規則是否調整。"
next_check_at: "2026-12-05T10:00:00+08:00"
related_events: [2026-11-03-github-copilot-jetbrains-air]
---

## 已確認事實

- GitHub Changelog（2026-11-04）：Copilot 現可直接用於 Xcode 內建 coding assistant；既有的 GitHub Copilot for Xcode 擴充功能仍可另行使用。
- 狀態為公開預覽，自 Xcode 27.3 beta 起提供；需 Xcode 27.3 beta（Apple Developer Downloads）與 macOS Tahoe 26.6 或以上。
- 設定路徑：Xcode > Settings > Intelligence，設定 GitHub Copilot。
- 官方稱所有 GitHub Copilot 方案皆支援。
- 已讀取該 changelog 條目（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：預覽加 beta 軟體，行為可能在正式版前改變，不宜直接納入團隊標準流程。

## 仍待確認

- 用量計費（premium requests 等）是否與其他 IDE 相同：條目摘要未提，未驗證。
- 正式版時程：未驗證。
