---
id: 2026-11-16-github-copilot-models-deprecated-nov-16
title: "GitHub Copilot 於 2026-11-16 正式棄用 Claude Opus 4.8、Claude Opus 5、GPT-5.6 Terra"
event_at: "2026-11-16T00:00:00Z"
verified_at: "2026-11-17T10:30:00+08:00"
category: pricing
vendors: [github, anthropic, openai]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "GitHub Copilot models deprecated on November 16, 2026"
    url: "https://github.blog/changelog/2026-11-16-github-copilot-models-deprecated-on-november-16-2026"
    publisher: "GitHub Changelog"
impact: evaluate
summary: "GitHub 於 2026-11-16 公告：Claude Opus 4.8、Claude Opus 5 與 GPT-5.6 Terra 已在多數 Copilot 體驗中棄用，建議改用 Claude Opus 5.5、GPT-6.1 Sol 或 GPT-6 Luna。"
impact_summary: "推論：仍固定指定這些模型的工作流程或整合現在可能失效，需改用替代模型。"
next_check: "確認替代模型的計費倍率與 Enterprise 政策啟用情況，並留意 12/14 的下一批棄用。"
next_check_at: "2026-12-01T10:00:00+08:00"
related_events:
  - 2026-10-15-github-copilot-models-deprecation-nov-16
  - 2026-11-13-github-copilot-models-deprecation-dec-14
---

## 已確認事實

- GitHub Changelog（2026-11-16）：下列模型已在多數 Copilot 體驗（Chat、inline edits、ask 與 agent 模式、程式碼補全）棄用，該棄用先前於 2026-10-15 預告。建議替代：Claude Opus 4.8 → Claude Opus 5.5；Claude Opus 5 → Claude Opus 5.5；GPT-5.6 Terra → GPT-6.1 Sol 或 GPT-6 Luna。
- Claude Opus 4.8 仍對年繳方案的個人 Copilot 訂閱者提供。
- Claude Opus 5 已從模型選單移除，但仍可作為既有授權存取下的 runtime 拒答備援（refusal fallback）。
- Enterprise 與 Business 在預設模型啟用下自動取得替代模型，除非管理員關閉全域預設或明確停用；全域預設關閉時，管理員可在 Copilot 設定的模型政策開啟。
- 既有 Enterprise 模型政策仍適用；移除棄用模型本身不需動作。
- 已讀取該 changelog 頁（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：若自動化或整合寫死舊模型 ID，會在此日後出錯，應改用替代模型並檢查計費倍率。

## 仍待確認

- 替代模型的計費倍率是否與舊模型相同：頁面未提，未驗證。
