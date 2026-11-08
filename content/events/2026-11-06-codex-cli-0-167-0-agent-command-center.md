---
id: 2026-11-06-codex-cli-0-167-0-agent-command-center
title: "Codex CLI 0.167.0：agent 指揮中心、後端切換、Vertex AI 設定精靈"
event_at: "2026-11-06T00:00:00Z"
verified_at: "2026-11-08T10:30:00+08:00"
category: agent
vendors: [openai, google]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Codex rust-v0.167.0 release notes"
    url: "https://github.com/openai/codex/releases/tag/rust-v0.167.0"
    publisher: "OpenAI（GitHub）"
impact: monitor
summary: "OpenAI 於 2026-11-06 釋出 Codex CLI 0.167.0：新增 `codex agents --no-daemon` agent 指揮中心（標示未讀結果）、工作階段選擇器切換後端、Google Cloud Vertex AI 設定精靈與系統 proxy 選項。"
impact_summary: "推論：同時跑多個 Codex 工作階段或需經 Vertex AI／公司 proxy 使用的團隊可評估升級；屬 CLI 功能更新，無價格或方案變動。"
next_check: "確認 0.167.0 之後的穩定版是否改變這些功能（例如 gcp_setup_wizard 是否仍為需手動啟用）。"
next_check_at: "2026-11-22T10:00:00+08:00"
---

## 已確認事實

- openai/codex GitHub release 頁（rust-v0.167.0，頁面標示 11 月 6 日發布）列出新功能：
- agent 指揮中心：執行 `codex agents --no-daemon` 開啟，指揮中心與工作階段選擇器會標示未讀結果。
- 可在終端機工作階段選擇器切換已連線的後端，且保留草稿。
- 在支援的終端機中預覽本機圖片附件；啟用 `gcp_setup_wizard` 可用 Application Default Credentials 或憑證檔設定 Google Cloud Vertex AI。
- 可在 `/experimental` 選擇採用 macOS／Windows 系統 proxy 設定；核准提示開啟時可展開 patch 細節。
- 另有多項修正（保留切換 provider 後的已存聊天、網路核准提示依端點逐一詢問、context 壓縮計入失敗回應的輸出等）。
- 已讀取該 release 頁全文（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：此為 CLI 功能改進，主要影響重度使用 Codex CLI、多工作階段並行或使用 Vertex AI 的開發者；未涉及計費。

## 仍待確認

- Vertex AI 路徑支援哪些模型與計費：未驗證（發布說明未說明）。
- `gcp_setup_wizard` 是否為實驗性功能：發布說明僅說「啟用」，未驗證其穩定度。
