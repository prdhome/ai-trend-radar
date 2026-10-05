---
id: 2026-10-02-github-copilot-models-deprecated
title: "GitHub Copilot 棄用 Gemini 3.5／3.6 Flash、Kimi K2.7 Code、Claude Opus 4.7"
event_at: "2026-10-02T00:00:00Z"
verified_at: "2026-10-03T10:30:00+08:00"
category: pricing
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Selected models in GitHub Copilot deprecated"
    url: "https://github.blog/changelog/2026-10-02-selected-models-in-github-copilot-deprecated"
    publisher: "GitHub Changelog"
impact: evaluate
summary: "GitHub 於 2026-10-02 宣布已在所有 Copilot 體驗中棄用四個模型，並建議改用 Gemini 3.8 Flash、Kimi K3 與 Claude Opus 5.5。"
impact_summary: "推論：若工作流程或整合固定指定這些模型，需改用官方建議的替代模型；Enterprise 管理員可能要先開啟模型政策。"
next_check: "查 GitHub Copilot 支援模型清單，確認替代模型的可用性與計費倍率是否變動。"
---

## 已確認事實

- GitHub Changelog 於 2026-10-02 表示，自當日起已在所有 GitHub Copilot 體驗中棄用下列模型，並列出建議替代：Gemini 3.5 Flash → Gemini 3.8 Flash；Gemini 3.6 Flash → Gemini 3.8 Flash；Kimi K2.7 Code → Kimi K3；Claude Opus 4.7 → Claude Opus 5.5。
- 影響範圍包含 Copilot Chat、inline edits、ask 與 agent 模式，以及程式碼補全。
- 官方稱 Copilot Enterprise 管理員可能需要透過模型政策開啟替代模型的存取；使用者需更新工作流程與整合改用受支援的模型，而移除已棄用模型本身不需要動作。

## 對我的影響（推論）

- 以下是推論，並非官方說法：若個人或團隊設定檔、腳本鎖定上述模型名稱，可能失效，應檢查並切換到替代模型。

## 仍待確認

- 文章未說明替代模型的計費倍率或額度差異（未驗證）。
- 是否影響 API 或其他非 Copilot 產品，文章未提及。
