---
id: 2026-10-27-github-copilot-server-to-server-auth-preview
title: "GitHub Copilot 支援 GitHub App 的 server-to-server 驗證（公開預覽）"
event_at: "2026-10-27T00:00:00Z"
verified_at: "2026-10-28T10:30:00+08:00"
category: agent
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "GitHub Copilot supports server-to-server authentication"
    url: "https://github.blog/changelog/2026-10-27-github-copilot-supports-server-to-server-authentication"
    publisher: "GitHub"
impact: evaluate
summary: "GitHub 於 2026-10-27 宣布 Copilot 支援安裝在組織上的 GitHub App 以 server-to-server 驗證（公開預覽），用量計入組織且受組織政策與預算控管。"
impact_summary: "推論：用 Copilot SDK 開發服務或代理的團隊，可不綁定個別使用者憑證；組織管理員需留意 App 授權與用量歸屬。"
next_check: "觀察是否進入正式發布，以及文件對計費與權限的說明。"
next_check_at: "2026-11-27T10:00:00+08:00"
---

## 已確認事實

- GitHub changelog（2026-10-27）：Copilot 支援安裝於組織的 GitHub App 進行 server-to-server 驗證，狀態為公開預覽。
- 以 Copilot SDK 建構的服務或代理可代表組織發出請求，不需登入使用者的憑證。
- 設定：GitHub App 取得唯讀的 `Copilot Requests` 組織權限，安裝後將短效 installation access token 交給 Copilot SDK。
- 用量歸屬並計費給擁有該安裝的組織；組織的模型政策、預算與支出控制適用。
- 組織擁有者可檢視有權限的 App、在 AI 用量 CSV 報表以 `app_client_id` 欄位找到 App 用量，並可暫停或解除安裝 App 以停止存取。
- 已讀取官方 changelog 全文（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：自動化或內部代理場景可改用組織層級驗證，但需審視 App 權限與預算上限。

## 仍待確認

- 正式發布時間與預覽期間是否有額外限制。
- 具體計費費率（公告指向文件，本次未讀）。
