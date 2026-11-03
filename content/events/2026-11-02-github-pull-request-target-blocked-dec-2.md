---
id: 2026-11-02-github-pull-request-target-blocked-dec-2
title: "GitHub Actions：公開 repo 的 pull_request_target 12/2 起預設封鎖（11/9、11/16 先斷線演練）"
event_at: "2026-11-02T00:00:00Z"
verified_at: "2026-11-03T10:30:00+08:00"
category: signal
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "pull_request_target blocked by default December 2"
    url: "https://github.blog/changelog/2026-11-02-pull_request_target-blocked-by-default-december-2"
    publisher: "GitHub Changelog"
impact: action
summary: "GitHub 於 2026-11-02 公告：自 2026-12-02 起，公開 repo 預設封鎖 pull_request_target 事件，除非 Actions 事件政策明確允許；原訂 11/2 的強制時程已延後。"
impact_summary: "推論：公開 repo 若有依賴 pull_request_target 的 workflow（例如自動標註 fork PR），需在 12/2 前評估並設定允許政策或改寫。"
next_check: "11/9、11/16 斷線演練與 12/2 正式生效後，確認行為與公告一致。"
next_check_at: "2026-12-03T10:00:00+08:00"
---

## 已確認事實

- GitHub Changelog（2026-11-02）：自 2026-12-02 起，GitHub Actions 在公開 repo 預設封鎖 `pull_request_target` 事件，除非適用的 Actions 事件政策明確允許。先前排定的強制日期為 2026-11-02。
- 預設規則會先以 evaluate 模式運作，顯示哪些 workflow 執行會被封鎖。
- 影響範圍：GitHub Free、Team、Enterprise Cloud 的公開 repo；私有與內部 repo、GitHub Enterprise Server 不受影響。
- 斷線演練（brownout）：2026-11-09 與 2026-11-16，16:00–18:00 UTC；期間被封鎖的 `pull_request_target` 執行會失敗並附錯誤註記，結束後規則回到 evaluate 模式。
- 官方理由：該事件在 base repo 脈絡執行並可存取 secrets，執行不受信任的 fork 程式碼可能危及 pipeline 或洩漏 secrets。
- 選項：沿用預設封鎖，或在事件政策中明確允許（可用 workflow 檔案目標只允許特定 workflow）；可先用 Insights 找出會被封鎖的執行。
- 已讀取公告頁（經摘要擷取）；未讀其連結的政策設定文件。

## 對我的影響（推論）

- 以下為推論：本 repo 若為公開且 workflows 用到 `pull_request_target`，演練日可能出現失敗；需檢查（本次未檢查本 repo workflows）。

## 仍待確認

- 政策設定的具體操作步驟（文件頁未讀）。
- 12/2 是否再次延期。
