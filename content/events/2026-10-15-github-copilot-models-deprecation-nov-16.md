---
id: 2026-10-15-github-copilot-models-deprecation-nov-16
title: "GitHub Copilot 預告 2026-11-16 棄用 Claude Opus 4.8、Claude Opus 5、GPT-5.6 Terra"
event_at: "2026-10-15T00:00:00Z"
verified_at: "2026-10-16T10:30:00+08:00"
category: pricing
vendors: [github, anthropic, openai]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Upcoming deprecation of selected GitHub Copilot models in mid-November"
    url: "https://github.blog/changelog/2026-10-15-upcoming-deprecation-of-selected-github-copilot-models-in-mid-november"
    publisher: "GitHub Changelog"
impact: evaluate
summary: "GitHub 於 2026-10-15 預告：2026-11-16 起在所有 Copilot 體驗棄用 Claude Opus 4.8、Claude Opus 5 與 GPT-5.6 Terra，建議改用 Claude Opus 5.5、GPT-6.1 Sol 或 GPT-6 Luna。"
impact_summary: "推論：若工作流程或整合固定指定這些模型，需在 11/16 前改用建議的替代模型。"
next_check: "2026-11-16 後確認三個模型已自 Copilot 移除，並核對替代模型的可用性與計費倍率。"
next_check_at: "2026-11-17T10:00:00+08:00"
related_events:
  - 2026-10-02-github-copilot-models-deprecated
---

## 已確認事實

- GitHub Changelog（2026-10-15）：自 2026-11-16 起，在所有 Copilot 體驗（Chat、inline edits、ask 與 agent 模式、程式碼補全）棄用下列模型：Claude Opus 4.8 → Claude Opus 5.5；Claude Opus 5 → Claude Opus 5.5；GPT-5.6 Terra → GPT-6.1 Sol 或 GPT-6 Luna。
- Claude Opus 4.8 部分：年繳方案的個人 Copilot 訂閱者仍保有存取。
- Enterprise 與 Business 客戶在預設模型啟用下會自動取得建議替代，除非管理員已關閉全域預設或停用該模型；全域預設關閉時，管理員可經 Copilot 設定的模型政策開啟替代模型。
- 官方稱使用者應在棄用日前更新工作流程與整合，移除模型本身不需動作。
- 已讀取該 changelog 全文（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：固定指定舊模型的設定會在 11/16 後失效；替代模型的倍率或行為可能不同。

## 仍待確認

- 替代模型的 premium request 倍率是否與被棄用模型相同（文中未提）。
- 年繳個人方案保有 Opus 4.8 存取的期限（文中未說明）。
