---
id: 2026-11-16-claude-code-2-1-326-hooks-sandbox-auto-mode
title: "Claude Code 2.1.326：hook block 語意、sandbox 寫入預設與 auto mode 預設行為調整"
event_at: "2026-11-16T00:00:00Z"
verified_at: "2026-11-17T10:30:00+08:00"
category: agent
vendors: [anthropic]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Claude Code v2.1.326 release notes"
    url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.326"
    publisher: "Anthropic（GitHub）"
impact: evaluate
summary: "Claude Code v2.1.326（GitHub 頁標示 16 Nov 發布）讓 hook 的 \"decision\": \"block\" 在更多情況生效、sandbox 預設不再寫入部分敏感家目錄，並新增 Code Mode 搭配 agent teams。"
impact_summary: "推論：自訂 hooks 或依賴 sandbox 寫入家目錄的流程，升級後可能被擋或需調整設定。"
next_check: "確認後續版本是否調整 hook block 或 sandbox 預設。"
next_check_at: "2026-11-27T10:00:00+08:00"
related_events:
  - 2026-11-13-claude-code-2-1-325-security-permission-fixes
---

## 已確認事實

- GitHub release 頁（v2.1.326，標示 16 Nov 發布，頁面未顯示年份）：Code Mode 可與 agent teams 同時啟用；新增 `OTEL_RESOURCE_INCLUDE_HOST`（預設關閉）；`--allowedTools` 等旗標條目不完整時啟動警告；新增 `/help <command>`。
- 行為變更：hook 的 `"decision": "block"` 在更多情況生效，永遠輸出它的 hook 可能開始阻擋呼叫；未設定模式且組織政策尚未載入的終端機與 VS Code 工作階段改以 auto mode 啟動；macOS／Linux／WSL 的 sandbox 預設不再寫入部分敏感家目錄，需用 `sandbox.filesystem.allowWrite` 開放。
- 修正：並行 MCP 呼叫不再讀到彼此儲存的結果；工作階段崩潰或低記憶體時不再遺失歷史；Bedrock／Vertex／Foundry 壓縮修正。
- 已讀取該 release 頁全文（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：使用自訂 hooks 或 sandbox 的團隊升級前應在非正式環境測試。

## 仍待確認

- 受影響的「敏感家目錄」完整清單：摘要未列出，未驗證。
