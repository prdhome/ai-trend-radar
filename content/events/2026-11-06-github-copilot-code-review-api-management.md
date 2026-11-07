---
id: 2026-11-06-github-copilot-code-review-api-management
title: "Copilot code review：API 管理設定與精簡的 review 概覽"
event_at: "2026-11-06T00:00:00Z"
verified_at: "2026-11-07T11:00:00+08:00"
category: agent
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Copilot code review API management and review overview updates"
    url: "https://github.blog/changelog/2026-11-06-copilot-code-review-api-management-and-review-overview-updates"
    publisher: "GitHub Changelog"
impact: monitor
summary: "GitHub 於 2026-11-06 宣布 Copilot code review 設定可由 REST／GraphQL API 管理（企業到儲存庫層級），並更新 review 概覽與多項修正；適用 Pro、Pro+、Max、Business、Enterprise。"
impact_summary: "推論：管理多個組織的管理員可用 API 統一設定 review；API 對 GitHub Apps／fine-grained PAT 有限制。"
next_check: "確認 API 文件「Configuring Copilot code review with the API」的端點細節。"
next_check_at: "2026-12-07T10:00:00+08:00"
related_events: [2026-10-02-github-copilot-code-review-api-default-effort, 2026-10-08-github-copilot-code-review-org-billing]
---

## 已確認事實

- GitHub Changelog（2026-11-06）：可透過 REST 與 GraphQL API 管理 Copilot code review 設定，涵蓋企業、組織、儲存庫層級；企業管理的設定組織不可覆寫。
- API 可辨識 Copilot 的 review／留言、review effort，以及留言引用的 skills、MCP servers 與自訂指示。
- review 概覽改為精簡版：發現置頂、未審查檔案合併為「Files not reviewed」、thumbs-down 可選原因。
- 其他：review session 顯示消耗的 AI credits；自動請求規則支援 bypass 清單；Balanced effort 使用三個 reviewer 模型再由另一模型整合；失敗或逾時的 review 重試一次。
- 限制：企業與組織設定端點不支援 GitHub Apps 與 fine-grained PAT；儲存庫端點支援兩者。
- 適用方案：Pro、Pro+、Max、Business、Enterprise。
- 已讀取該 changelog 條目（經摘要擷取，未逐字全文）。

## 對我的影響（推論）

- 以下為推論：以 API 集中管理可減少逐組織手動設定，但需以 classic PAT 或具權限的使用者權杖操作。

## 仍待確認

- 各端點路徑與權限細節：未驗證，需讀 API 文件。
