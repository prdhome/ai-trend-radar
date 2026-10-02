---
id: 2026-09-29-openai-agents-api-computer-use
title: "OpenAI Agents API 新增 computer use（OpenAI 託管瀏覽器）"
event_at: "2026-09-29T00:00:00Z"
verified_at: "2026-10-02T10:00:00+08:00"
category: agent
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Computer use（Agents API 文件）"
    url: "https://developers.openai.com/api/docs/guides/agents-api/tools/computer-use"
    publisher: "OpenAI"
  - title: "OpenAI API 更新紀錄"
    url: "https://developers.openai.com/changelog"
    publisher: "OpenAI"
impact: monitor
summary: "OpenAI 更新紀錄於 2026-09-29 列出 Agents API 新增 computer use，讓代理在 OpenAI 託管的瀏覽器中完成任務。"
impact_summary: "推論：可替代自架瀏覽器自動化來做網站測試與資料蒐集，但官方文件未載明價格與地區，暫不宜納入工作流程。"
next_check: "查文件或更新紀錄是否補上定價、可用地區與支援模型清單。"
---

## 已確認事實

- OpenAI 開發者更新紀錄在 2026-09-29 條目列出「Computer Use in Agents API」：代理可在 OpenAI 託管的瀏覽器中完成任務。
- 官方文件說明：應用程式啟動瀏覽器 session、追蹤事件並向代理下達任務；可處理網站存取（origin）核准與登入流程（含電子郵件、密碼、驗證碼）；可選擇以 `include_screenshots: true` 擷取畫面。
- 啟用需 Agents API 的 `computer_use` 工具，並設定 `environment.type: "openai_hosted"` 與 `desktop.enabled: true`；文件範例使用 `gpt-6-astra`。
- 限制：僅主代理可要求瀏覽器驗證，子代理不行；不支援 passkey 或 QR code 登入；官方提醒截圖可能含敏感資料，只應顯示給授權使用者。
- 已讀取上述文件頁與更新紀錄頁全文（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：把登入憑證交給託管瀏覽器有資安與合規考量，使用前需評估；與自架方案的取捨要自行測試。

## 仍待確認

- 文件未載明定價、地區可用性與正式上線日期；除 `gpt-6-astra` 範例外，是否支援其他模型未說明。
