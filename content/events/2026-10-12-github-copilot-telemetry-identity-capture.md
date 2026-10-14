---
id: 2026-10-12-github-copilot-telemetry-identity-capture
title: "Copilot 用戶端遙測：managed settings 可附使用者身分並細分內容擷取類別"
event_at: "2026-10-12T00:00:00Z"
verified_at: "2026-10-14T10:30:00+08:00"
category: agent
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Client telemetry user attribution and configurable capture"
    url: "https://github.blog/changelog/2026-10-12-client-telemetry-user-attribution-and-configurable-capture"
    publisher: "GitHub"
impact: monitor
summary: "GitHub 於 2026-10-12 讓企業管理員在 managed settings 以 telemetry.capture.identity 將 Copilot 活動對應到使用者，並可分別控制 prompts、responses 等五類內容擷取（預設皆關）。"
impact_summary: "推論：企業可做稽核與使用歸因，但開啟內容類擷取可能收集原始碼與路徑，需最小化啟用。"
next_check: "查官方 managed settings 文件確認各擷取類別細節與支援範圍。"
next_check_at: "2026-10-28T10:00:00+08:00"
---

## 已確認事實

- GitHub changelog（2026-10-12，標為 Improvement）。
- `telemetry.capture.identity` 為 OpenTelemetry 資料加入 `user.name`（目前為 GitHub 登入名）、`process.user.name`（本機 OS 帳號）、`host.name`（機器名稱）；預設關閉，與既有的假名使用者識別碼分開。
- 另有五類可獨立控制、預設皆關：`prompts`、`responses`、`toolArguments`、`toolOutput`、`policyDetail`（如 sandbox 檔案路徑）。managed 值覆蓋本機設定、SDK 設定與環境變數；舊的 `captureContent` 仍作為五類內容的簡寫，不會啟用 identity。
- 適用 Copilot CLI、GitHub Copilot app，以及使用 Agent Host 的 VS Code 工作階段。
- GitHub 提醒：prompt、工具與政策擷取可能含原始碼、檔案內容、指令、工具結果與路徑，建議只開稽核必要的類別並送往核准的收集端點。

## 對我的影響（推論）

- 以下為推論：個人使用者通常不受影響；若所屬組織啟用，工作內容可能被記錄，宜向管理員確認政策。

## 仍待確認

- 發布時程與方案限制（文章未說明）。
