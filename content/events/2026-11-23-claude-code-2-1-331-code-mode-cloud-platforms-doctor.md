---
id: 2026-11-23-claude-code-2-1-331-code-mode-cloud-platforms-doctor
title: "Claude Code 2.1.331：Code Mode 支援 Bedrock／Foundry 等平台、claude doctor 連線檢查、11/30 起 managed marketplace 預設自動更新"
event_at: "2026-11-23T00:00:00Z"
verified_at: "2026-11-24T10:30:00+08:00"
category: agent
vendors: [anthropic]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Claude Code v2.1.331 release notes"
    url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.331"
    publisher: "Anthropic（GitHub）"
impact: monitor
summary: "Anthropic 於 2026-11-23 釋出 Claude Code 2.1.331：終端機 Code Mode 支援 Amazon Bedrock、Google Cloud Agent Platform、Microsoft Foundry、Claude Platform on AWS；新增 claude doctor API 連線檢查；11/30 起 managed marketplace 預設自動更新。"
impact_summary: "推論：使用受管設定（managed settings）或 Windows 登錄檔政策的團隊，升級前宜先檢查設定與 11/30 的自動更新預設變更。"
next_check: "確認 11/30 起 managed extraKnownMarketplaces 自動更新預設是否如公告生效。"
next_check_at: "2026-12-01T10:00:00+08:00"
related_events:
  - 2026-11-20-claude-code-2-1-330-easel-enterprise-sign-in
---

## 已確認事實

- release 頁（v2.1.331，標示 23 Nov 21:34，頁面未顯示年份與時區）：終端機 session 的 Code Mode 支援 Amazon Bedrock、Google Cloud 的 Agent Platform、Microsoft Foundry 與 Claude Platform on AWS。
- 新增 `claude doctor` 的 API 連線區段（回報 API 是否可達與 HTTP 狀態或錯誤）、plugin manifest 的 `optionalDependencies`、`CLAUDE_CODE_DISABLE_RESPONSE_COMPRESSION`、`claude_code.llm_request` span 的 `gen_ai.*` 屬性、Claude apps gateway 的 `oidc.groups_jsonpath`。
- 行為變更：`PermissionDenied` hook 的 `retry: true` 只在使用者要求該呼叫時才讓 Claude 重試；部分對話框預設選項順序調整。
- 預告：2026-11-30 起，managed `extraKnownMarketplaces` 的 plugin marketplace 預設自動更新，可用 `"autoUpdate": false` 退出。
- Windows：`HKLM` 登錄檔政策優先於 `managed-settings.json`，設定值損壞可能導致無法啟動。
- 修正包含 MCP 工具呼叫最長卡 30 分鐘、rewind 在還原失敗後誤刪檔案等。
- 已讀取 v2.1.331 release tag 頁。

## 對我的影響（推論）

- 以下為推論：若團隊透過 managed settings 配置 marketplace，11/30 後 plugin 可能在未手動更新下變動，需評估是否關閉自動更新。

## 仍待確認

- 11/30 後自動更新的實際行為：僅為預告，未驗證。
- release 頁未顯示年份與時區，事件日期依頁面日期與版本序列判定。
