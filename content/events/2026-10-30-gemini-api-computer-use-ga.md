---
id: 2026-10-30-gemini-api-computer-use-ga
title: "Gemini API Computer Use 工具正式發布（GA）"
event_at: "2026-10-30T00:00:00Z"
verified_at: "2026-10-31T10:30:00+08:00"
category: agent
vendors: [google]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Gemini API release notes（Oct 30：Computer Use GA）"
    url: "https://ai.google.dev/gemini-api/docs/changelog"
    publisher: "Google"
  - title: "Gemini API Computer Use 文件"
    url: "https://ai.google.dev/gemini-api/docs/computer-use"
    publisher: "Google"
impact: evaluate
summary: "Google 於 2026-10-30 在 Gemini API 更新紀錄宣布 Computer Use 工具在 Interactions API 與 GenerateContent API 正式發布（GA）。"
impact_summary: "推論：做瀏覽器或桌面自動化代理的團隊可評估改用 GA 版本，但仍需沙盒與人工監督。"
next_check: "觀察計費方式與支援模型清單的變動。"
next_check_at: "2026-11-30T10:00:00+08:00"
---

## 已確認事實

- Gemini API 更新紀錄（2026-10-30）：Computer Use 工具在 Interactions API 與 GenerateContent API 皆為 GA。
- 官方文件（最後更新 2026-10-30 UTC）列出支援模型：gemini-4-argon、gemini-3.8-flash（文件建議用於 computer use）、gemini-3.5-flash-lite、gemini-3-flash-preview；環境涵蓋瀏覽器、行動與桌面。
- 文件內含七類可設定的安全政策與選用的 prompt injection 偵測（預設關閉），並警告可能有錯誤與安全漏洞，建議在沙盒中並密切監督。
- 已讀取更新紀錄條目與文件頁（經摘要擷取）；文件頁本身未提 GA 字樣，GA 說法來自更新紀錄。

## 對我的影響（推論）

- 以下為推論：GA 通常意味著介面較穩定，但安全風險仍在，正式導入前需自行測試。

## 仍待確認

- 計費方式（文件僅連到定價頁，未讀）。
- GA 是否適用文件列出的所有模型。
