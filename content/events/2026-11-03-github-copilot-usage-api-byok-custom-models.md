---
id: 2026-11-03-github-copilot-usage-api-byok-custom-models
title: "Copilot 用量指標 API 分開回報 BYOK 與企業自訂模型"
event_at: "2026-11-03T00:00:00Z"
verified_at: "2026-11-04T10:30:00+08:00"
category: agent
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "BYOK and enterprise custom models in the Copilot usage API"
    url: "https://github.blog/changelog/2026-11-03-byok-and-enterprise-custom-models-in-the-copilot-usage-api"
    publisher: "GitHub Changelog"
impact: monitor
summary: "GitHub 於 2026-11-03 讓 Copilot 用量指標 API 將本機 BYOK 與企業自訂模型用量與 Copilot 託管模型分開回報。"
impact_summary: "推論：管理員可區分自帶金鑰／自訂模型與 Copilot 託管模型的使用，利於治理與成本追蹤。"
next_check: "觀察 BYOK 欄位是否擴及更多 client，以及遙測停用造成的低估情形。"
next_check_at: "2026-12-04T10:00:00+08:00"
related_events: [2026-10-23-github-copilot-usage-metrics-totals-by-client]
---

## 已確認事實

- GitHub Changelog（2026-11-03）：用量指標 API 現在分開回報兩類 BYOK：本機 BYOK（開發者在 Copilot CLI 或 GitHub Copilot app 直連自己的供應商金鑰或本機模型）與企業自訂模型（管理員於 GitHub 設定，請求經 GitHub 轉送）。
- 本機 BYOK 新增欄位：`used_local_byok`、`totals_by_local_byok`（依 `byok_kind` 與 `surface` 細分）、`daily_／weekly_／monthly_active_local_byok_users`；涵蓋 Ollama、Foundry Local、LM Studio、llama-server。
- 企業自訂模型：`totals_by_client` 的模型項目新增布林欄位 `is_custom_enterprise_model`，由伺服器端觀察，涵蓋包含 IDE 在內所有 client。
- 既有總量不變；本機 BYOK 為既有 CLI／app 總量的子集。本機 BYOK 依賴 client 遙測，停用遙測時會低估，部分本機供應商不回報 token；自訂模型計數無此限制。
- 同名模型同時作為託管與自訂使用時會成為兩筆；未辨識的自訂模型名稱顯示為 `unknown`；此版本之前的報表日期沒有 `is_custom_enterprise_model`。
- 權限需求：企業擁有者、帳務管理者、組織擁有者，或具「View Copilot Metrics」權限者，且須啟用 Copilot usage metrics policy。
- 已讀取該 changelog 條目（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：BYOK 數據可能低估，不宜單獨作為稽核或計費依據。

## 仍待確認

- 本機 BYOK 用量是否影響 premium request 計費：changelog 摘要未提及，未驗證。
