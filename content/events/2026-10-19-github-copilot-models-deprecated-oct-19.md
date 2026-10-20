---
id: 2026-10-19-github-copilot-models-deprecated-oct-19
title: "GitHub Copilot 於 2026-10-19 棄用 GPT-5.5、GPT-5.4、Gemini 3.7 Flash、Grok 4.5 等六個模型"
event_at: "2026-10-19T00:00:00Z"
verified_at: "2026-10-20T10:30:00+08:00"
category: pricing
vendors: [github, openai, google, xai]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "GitHub Copilot models deprecated on October 19, 2026"
    url: "https://github.blog/changelog/2026-10-19-github-copilot-models-deprecated-on-october-19-2026"
    publisher: "GitHub Changelog"
impact: evaluate
summary: "GitHub 於 2026-10-19 在多數 Copilot 體驗棄用 Gemini 3.7 Flash、GPT-5.5、GPT-5.4、GPT-5.4 mini、GPT-5 mini 與 Grok 4.5，並列出建議替代模型。"
impact_summary: "推論：若工作流程或整合固定指定這些模型，需改用建議的替代模型；Enterprise 管理員可能要先在模型政策中啟用替代模型。"
next_check: "確認替代模型在你使用的方案與 IDE 中可選，並核對其 premium request 倍率。"
next_check_at: "2026-10-27T10:00:00+08:00"
related_events:
  - 2026-10-15-github-copilot-models-deprecation-nov-16
---

## 已確認事實

- GitHub Changelog（2026-10-19）：該日起棄用下列模型，並建議替代：Gemini 3.7 Flash → Gemini 3.8 Flash；GPT-5.5、GPT-5.4 → GPT-6.1 Sol；GPT-5.4 mini、GPT-5 mini → GPT-6 Luna；Grok 4.5 → Grok 4.7。
- 文中稱棄用涵蓋多數 Copilot 體驗，包括 Copilot Chat、inline edits、ask 與 agent 模式及程式碼補全；該棄用已於 2026-09-18 預告。
- 官方稱使用者應更新工作流程與整合；移除被棄用模型本身不需動作。
- Copilot Enterprise 管理員可能需在 Copilot 設定的模型政策中啟用替代模型；啟用後，新模型會出現在 VS Code 與 github.com 的 Copilot Chat 模型選擇器。
- 已讀取該 changelog 全文（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：固定指定舊模型的設定與整合已失效或需改用替代模型；替代模型的計費倍率與行為可能不同。

## 仍待確認

- 替代模型的 premium request 倍率是否與被棄用模型相同（文中未提）。
