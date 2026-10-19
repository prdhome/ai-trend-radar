---
id: 2026-10-16-claude-design-standalone-closing
title: "Claude Code 2.1.302 提示：獨立版 Claude Design（claude.ai/design）將於 2026-12-14 前關閉"
event_at: "2026-10-16T00:00:00Z"
verified_at: "2026-10-19T10:30:00+08:00"
category: agent
vendors: [anthropic]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Claude Code CHANGELOG（2.1.302）"
    url: "https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md"
    publisher: "Anthropic（GitHub）"
  - title: "Claude Code releases"
    url: "https://github.com/anthropics/claude-code/releases"
    publisher: "Anthropic（GitHub）"
impact: monitor
summary: "Claude Code 2.1.302（2026-10-16）更新日誌載明，`/design-sync` 與 `/design-login` 會提示獨立版 Claude Design（claude.ai/design）將於 2026-12-14 前關閉。"
impact_summary: "推論：仍把設計專案放在獨立站的使用者，需在期限前確認匯出或遷移；遷移細節官方來源尚未讀到。"
next_check: "查 Anthropic 說明文件對遷移方式、資料保留與關閉日期的正式說明。"
next_check_at: "2026-11-02T10:00:00+08:00"
related_events:
  - 2026-09-16-claude-cowork-merges-into-chat
---

## 已確認事實

- Claude Code 官方 CHANGELOG（2.1.302，GitHub releases 標示 2026-10-16）：「Added a notice to `/design-sync` and `/design-login` that standalone Claude Design (claude.ai/design) closes by December 14, 2026」。
- 同一版另有 `/design consent`、`/design revoke` 在雲端 session 失敗時改指向 claude.ai/design/settings 的修正。
- 已讀取 CHANGELOG 原文與 GitHub releases 頁（後者經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：若有人在 claude.ai/design 獨立站保存專案或設計系統，應在 2026-12-14 前處理；此處只確認「關閉日期提示」，並未確認功能是否併入其他產品。

## 仍待確認

- 關閉的確切時間點、遷移與匯出方式、資料保留政策（官方說明文件未讀到；搜尋結果中的第三方說法未採用）。
- 設計功能在 Claude 其他介面的後續形態（未驗證）。
