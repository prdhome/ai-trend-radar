---
id: 2026-11-13-codex-cli-0-169-0-side-chat-tabs-custom-providers
title: "Codex CLI 0.169.0：多個 side-chat 分頁、舊任務搜尋、終端機自訂模型供應商"
event_at: "2026-11-13T00:00:00Z"
verified_at: "2026-11-14T10:30:00+08:00"
category: agent
vendors: [openai]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Codex rust-v0.169.0 release notes"
    url: "https://github.com/openai/codex/releases/tag/rust-v0.169.0"
    publisher: "OpenAI（GitHub）"
impact: monitor
summary: "OpenAI 於 2026-11-13 釋出 Codex CLI 0.169.0：新增多個 side-chat 分頁、在 agent 指揮中心搜尋舊任務、可在終端機新增或編輯自訂模型供應商，並提供 macOS／Linux 的 opt-in 雲端對話支援。"
impact_summary: "推論：同時管理多個 Codex 工作階段或使用自訂供應商的人可評估升級；屬 CLI 功能更新，無價格或方案變動。"
next_check: "確認後續穩定版（0.171 系列）是否改變這些功能。"
next_check_at: "2026-11-27T10:00:00+08:00"
related_events:
  - 2026-11-06-codex-cli-0-167-0-agent-command-center
---

## 已確認事實

- openai/codex GitHub release 頁（rust-v0.169.0，頁面標示 13 Nov 發布）新增：多個 side-chat 分頁（可重開已存的本機 side chat）；在 agent 指揮中心依名稱、提示預覽或工作目錄搜尋舊任務；全螢幕逐字稿可摺疊已完成的活動；可在終端機新增／編輯自訂模型供應商（含裝置碼登入）；Ctrl+S 儲存診斷 ZIP；macOS 與 Linux 的 opt-in 雲端連線（傳送圖片、選模型與推理強度、封存／還原對話）。
- 修正：`codex exec` 在未信任目錄預設停用專案設定與 MCP server，除非加 `--trust`；Windows sandbox 與中斷回合的多項修正。
- 同日的 0.168.0 另列有 TUI side-conversation 窗格、animated GIF 圖片生成等（依 release 列表摘要，未逐一核對）。
- 已讀取 0.169.0 release 頁（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：`codex exec` 預設不載入未信任目錄的設定，可能讓 CI 或腳本中依賴專案設定的流程需要加 `--trust`。

## 仍待確認

- 0.168.0 的完整內容：僅讀到彙整列表，未讀其 release 頁全文。
