---
id: 2026-10-01-github-copilot-computer-use-preview
title: "GitHub Copilot 公開預覽桌面 App 操作（computer use）"
event_at: "2026-10-01T00:00:00Z"
verified_at: "2026-10-03T10:30:00+08:00"
category: agent
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "GitHub Copilot can now interact with desktop apps with computer use"
    url: "https://github.blog/changelog/2026-10-01-github-copilot-can-now-interact-with-desktop-apps"
    publisher: "GitHub Changelog"
impact: evaluate
summary: "GitHub 於 2026-10-01 公布 Copilot CLI 與 Copilot app（macOS、Windows）可在公開預覽中代為操作桌面應用程式。"
impact_summary: "推論：若有沒有 API／CLI 的 GUI 工具要自動化，可評估試用，但預覽階段需留意權限與組織政策。"
next_check: "每週查 GitHub Changelog，確認何時轉為正式版，以及方案與用量限制是否公布。"
---

## 已確認事實

- GitHub Changelog 於 2026-10-01 發布：Copilot 現在可代使用者與桌面應用程式互動，包含讀取可存取的 App 內容與視覺脈絡、點擊控制項、輸入與編輯文字、按鍵、捲動、拖曳，以及跨應用程式的流程。
- 狀態為公開預覽（public preview），適用 GitHub Copilot CLI 與 GitHub Copilot app，平台為 macOS 與 Windows。
- 官方稱可用於沒有 API、命令列或 MCP 整合的舊式或僅有 GUI 的軟體。
- Copilot 控制 App 前會請求核准，使用者可檢視或重設「一律允許」的 App；macOS 會引導開啟 Accessibility 與 Screen Recording 權限；組織管理的設定可完全停用此功能。
- 啟用方式：CLI 用 `/computer on`（`/computer show` 查狀態、`/computer off` 關閉）；Copilot app 於 Settings > Computer Use 啟用，或用 `/computer on`。

## 對我的影響（推論）

- 以下是推論，並非官方說法：此功能對沒有 API 的內部或舊工具可能有用，但預覽階段穩定性與安全性未知，涉及螢幕錄製與輔助使用權限，建議先在非敏感環境試用。

## 仍待確認

- 文章未提供正式版時程、方案限制或計費方式（未驗證）。
- 實際成功率與效能未見官方數字，也無獨立評測。
