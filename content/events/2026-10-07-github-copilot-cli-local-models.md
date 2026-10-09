---
id: 2026-10-07-github-copilot-cli-local-models
title: "GitHub Copilot CLI 的 /model 可探索本機 Ollama 模型"
event_at: "2026-10-07T00:00:00Z"
verified_at: "2026-10-09T10:30:00+08:00"
category: agent
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Discover local models in GitHub Copilot CLI"
    url: "https://github.blog/changelog/2026-10-07-discover-local-models-in-github-copilot-cli"
    publisher: "GitHub"
impact: monitor
summary: "GitHub 於 2026-10-07 更新日誌指出，Copilot CLI 1.0.94-0 起 /model 會列出執行中的本機 Ollama 模型，需手動確認後才加入。"
impact_summary: "推論：想在 Copilot CLI 試本機模型的人少一步設定；但選本機模型不等於離線或關閉遙測。"
next_check: "追蹤 GitHub 預告的「本機模型智慧路由」何時上線。"
next_check_at: "2026-10-23T10:00:00+08:00"
related_events:
  - 2026-10-07-github-copilot-local-sandboxing-ga
---

## 已確認事實

- GitHub 更新日誌 2026-10-07（Improvement）：自 CLI 版本 1.0.94-0 起，`/model` 會列出執行中本機 Ollama 實例支援的模型，與已設定模型和 Copilot 雲端模型並列。
- 探索不會自動加入：選取後須確認提供者與端點，再選「Add and use for this session」或「Add without switching」；可在當前工作階段使用而不必重啟。
- 需求：Ollama 與模型須已安裝；模型須支援 tool calling 與 streaming；提供者連線失敗時選單會顯示原因。
- 選本機模型不會啟用離線模式或關閉 GitHub 遙測；離線模式須明確設 `COPILOT_OFFLINE=true`，且遠端提供者即使在離線模式仍可能經網路收到提示與程式碼脈絡。
- GitHub 預告「與本機模型的智慧路由」將推出，詳情在 Microsoft Command Line 部落格，上線時間未定。
- 已讀取上述更新日誌全文（WebFetch 摘要擷取）。

## 對我的影響（推論）

- 以下為推論，非官方說法：對重視隱私者有吸引力，但須自行確認資料流向，不能把「本機模型」當成資料不外送的保證。

## 仍待確認

- 智慧路由的上線時間與計費方式（未驗證；僅讀 GitHub 更新日誌，未讀 Microsoft 部落格）。
