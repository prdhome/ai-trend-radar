---
id: 2026-10-26-github-copilot-assisted-permissions-ga
title: "GitHub Copilot 輔助權限（assisted permissions）正式提供"
event_at: "2026-10-26T00:00:00Z"
verified_at: "2026-10-28T10:30:00+08:00"
category: agent
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "GitHub Copilot assisted permissions generally available"
    url: "https://github.blog/changelog/2026-10-26-github-copilot-assisted-permissions-generally-available"
    publisher: "GitHub"
impact: evaluate
summary: "GitHub 於 2026-10-26 宣布輔助權限在 Copilot CLI、Copilot app 與 VS Code 正式提供：由 LLM 判斷請求，明確安全者自動放行，其餘需人工核准。"
impact_summary: "推論：可減少核准提示，但自動放行取決於模型分類，高敏感環境應評估是否啟用或由管理員限制。"
next_check: "觀察 GitHub 文件對判斷準則的說明與後續擴及其他 IDE。"
next_check_at: "2026-11-27T10:00:00+08:00"
---

## 已確認事實

- GitHub changelog（2026-10-26）：輔助權限在 Copilot CLI、Copilot app、Visual Studio Code 正式提供。
- 運作方式：Copilot 請求執行指令、存取檔案系統路徑或開啟 URL 時，由 LLM 評估；被分類為「明確安全」者自動進行，其餘需使用者核准。
- 啟用：CLI 執行 `/permissions` 選 assisted；Copilot app 於模式選擇器的 Tool permissions 選 Assisted；VS Code 於權限選擇器選 Assisted permissions。
- 企業控管：管理員可用 enterprise-managed 設定封鎖 Allow All 但保留 Assisted，或單獨停用 Assisted；可設定新工作階段預設模式；預設不可用或被政策禁止時，工作階段以手動核准啟動。
- 已讀取官方 changelog 全文（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：自動放行的安全性取決於 LLM 分類結果，官方公告未提供誤判率。

## 仍待確認

- 「明確安全」的具體判斷準則（公告指向文件，本次未讀）。
