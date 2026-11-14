---
id: 2026-11-13-github-copilot-models-deprecation-dec-14
title: "GitHub Copilot 預告 2026-12-14 棄用 Claude Fable 5、Claude Haiku 4.5、Gemini 3.8 Flash 等六個模型"
event_at: "2026-11-13T00:00:00Z"
verified_at: "2026-11-14T10:30:00+08:00"
category: pricing
vendors: [github, anthropic, google, xai]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Upcoming deprecation of selected GitHub Copilot models in December"
    url: "https://github.blog/changelog/2026-11-13-upcoming-deprecation-of-selected-github-copilot-models-in-december"
    publisher: "GitHub Changelog"
impact: evaluate
summary: "GitHub 於 2026-11-13 預告：2026-12-14 起在所有 Copilot 體驗棄用 Claude Fable 5、Claude Haiku 4.5、Gemini 3.8 Flash、Gemini 4 Argon、Grok 4.6 與 Kimi K3。"
impact_summary: "推論：若工作流程或整合固定指定這些模型，需在 12/14 前改用建議替代模型；Kimi K3 尚無官方建議替代。"
next_check: "2026-12-14 後確認六個模型已自 Copilot 移除，並核對替代模型可用性；留意 Kimi K3 替代模型公告。"
next_check_at: "2026-12-15T10:00:00+08:00"
related_events:
  - 2026-10-15-github-copilot-models-deprecation-nov-16
---

## 已確認事實

- GitHub Changelog（2026-11-13）：下列模型於 2026-12-14 起在所有 Copilot 體驗棄用，建議替代為：Claude Fable 5 → Claude Fable 5.2；Claude Haiku 4.5 → Claude Haiku 5.5；Gemini 3.8 Flash → Gemini 4 Hydrogen；Gemini 4 Argon → Gemini 4 Carbon；Grok 4.6 → Grok 4.7；Kimi K3 → 「待公布」。
- Claude Haiku 4.5：年繳方案的個人 Copilot 訂閱者可繼續使用。
- Enterprise 與 Business 客戶在預設模型啟用下會自動取得建議替代，除非管理員已關閉全域預設或明確停用該模型；全域預設關閉時，管理員可在 Copilot 設定的模型政策開啟替代模型。
- 官方稱使用者應在棄用日前更新工作流程與整合，移除模型本身不需動作。
- 已讀取該 changelog 頁（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：固定指定舊模型的設定會在 12/14 後失效；替代模型的倍率或行為可能不同。

## 仍待確認

- 替代模型的計費是否與被棄用模型相同：頁面未提，未驗證。
- Kimi K3 的替代模型：官方尚未公布。
