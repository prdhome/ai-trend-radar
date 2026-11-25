---
id: 2026-11-25-claude-code-2-1-332-mcp-skills-pre-skill-hook
title: "Claude Code 2.1.332：MCP server 提供的 skills（beta）、PreSkillShellCommand hook、雲端平台預設模型調整"
event_at: "2026-11-25T00:00:00Z"
verified_at: "2026-11-25T10:30:00+08:00"
category: agent
vendors: [anthropic]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Claude Code v2.1.332 release notes"
    url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.332"
    publisher: "Anthropic（GitHub）"
impact: monitor
summary: "Anthropic 於 2026-11-25 釋出 Claude Code 2.1.332：新增 MCP server 提供的 skills（beta）與 PreSkillShellCommand hook 事件，並調整 Bedrock／Agent Platform／Foundry 上的模型別名與預設，另有大量當機與記憶體修正。"
impact_summary: "推論：使用 MCP 或雲端平台（Foundry、Agent Platform）的團隊升級前要檢查模型別名、預設與 OpenTelemetry service.name 的變更是否影響既有設定。"
next_check: "確認 2.1.333 之後是否調整 MCP skills（beta）行為，或 PreSkillShellCommand 的設定相容性。"
next_check_at: "2026-12-02T10:00:00+08:00"
related_events:
  - 2026-11-23-claude-code-2-1-331-code-mode-cloud-platforms-doctor
---

## 已確認事實

- release 頁（v2.1.332，標示 25 Nov，頁面未顯示年份；頁尾為 © 2026）新增：MCP server 提供的 skills（beta，在 `/` 選單顯示為 `server:skill`）、`PreSkillShellCommand` hook 事件（可拒絕 skill 或指令載入時的 inline shell 命令；2.1.331 及更舊版本若設定檔寫了該事件會在啟動時跳出對話框）、OpenTelemetry `assistant_response` 事件（需開啟 response logging）、啟動標頭顯示 Cyber Verification Program 存取層級。
- 模型與雲端平台變更：Google Cloud Agent Platform 與 Microsoft Foundry 的 `sonnet` 別名改為 Sonnet 5.5，Foundry 的 `opus` 別名改為 Opus 5.5，Foundry 預設模型改為 Sonnet 5.5（部署 `claude-sonnet-5-5`）；Amazon Bedrock 的 `sonnet` 維持 Sonnet 4.5；Bedrock Mantle 的 `sonnet` 別名修正為 Sonnet 5（非 5.5）。在 Bedrock Mantle、Agent Platform、Foundry 上移到 Sonnet 5 或 5.5 的終端機與 VS Code session，未設模式時改以 auto mode 啟動（可用 `disableAutoMode: "disable"` 關閉）。
- 其他行為變更：桌面 Code 分頁的 OpenTelemetry 預設 `service.name` 改為 `claude-code-desktop`；`/schedule` 等介面文字由「routine」改稱「cloud scheduled task」（`/routines` 仍可用）；`computer-use` 在啟用 computer use 的 Mac 上成為保留 skill 名稱。
- 修正：多項當機／記憶體問題（hook 無止盡輸出、MCP server 洪水式 stdout、很長的命令比對萬用字元規則等）、Code Mode 多項問題、VS Code 多項問題。
- 已讀取 v2.1.332 release tag 頁全文。

## 對我的影響（推論）

- 以下為推論：若有依賴 `service.name` 為 `claude-code` 的 OTel 篩選，或在 Foundry／Agent Platform 依賴舊別名對應，升級後可能需要調整設定。
- 以下為推論：MCP skills 為 beta，可能影響 `/` 選單的 skill 命名與衝突，先在非關鍵環境試用較穩妥。

## 仍待確認

- MCP skills 的安全與權限邊界：release 頁僅一行描述，未驗證。
- 本次雲端平台預設模型變更的實際影響範圍：未驗證，僅依 release 頁文字。
