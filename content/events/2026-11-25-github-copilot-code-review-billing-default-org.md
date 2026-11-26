---
id: 2026-11-25-github-copilot-code-review-billing-default-org
title: "GitHub Copilot code review 計費：未設定者 2026-12-30 起預設改由組織付費"
event_at: "2026-11-25T00:00:00Z"
verified_at: "2026-11-26T10:30:00+08:00"
category: pricing
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Copilot code review billing will default to the organization"
    url: "https://github.blog/changelog/2026-11-25-copilot-code-review-billing-will-default-to-the-organization"
    publisher: "GitHub Changelog"
impact: evaluate
summary: "GitHub 於 2026-11-25 宣布：Copilot Business／Enterprise 組織若未選擇 Copilot code review 的計費方式，2026-12-30 起預設由組織而非成員的 Copilot 額度計費。"
impact_summary: "推論：使用 Copilot Business／Enterprise 的組織若不想讓 code review 轉由組織 AI Credits 付費，需在 2026-12-30 前明確選 Member。"
next_check: "2026-12-30 生效後確認預設行為與設定頁顯示是否如公告所述。"
next_check_at: "2026-12-31T10:00:00+08:00"
related_events: []
---

## 已確認事實

- GitHub Changelog（2026-11-25，Improvement）：若尚未選擇如何為有 Copilot 授權的成員計費 Copilot code review，這些 review 將從成員的 Copilot 額度改為由擁有該 repository 的組織計費。
- 時程：即日起至 2026-12-30，未設定者顯示「Default (Member)」並附變更通知；2026-12-30 起未設定者預設為組織計費。
- 沒有啟用 AI Credits 付費用量、有 billing lock 或沒有可計費客戶的帳號，會被設為 Member。既有的 Member 或 Organization 選擇維持不變；無 Copilot 授權成員的設定不變。
- 影響對象：Copilot Business 與 Copilot Enterprise 的組織與企業。要維持現狀，須在 2026-12-30 前於企業或組織的 Copilot 政策設定選 Member；若由企業管理此設定，需企業擁有者操作。
- 組織計費需要 AI Credits 付費用量，可能增加組織支出。公告未提供價格或用量數字。
- 已讀取公告全文。

## 對我的影響（推論）

- 以下為推論：管理 Copilot 帳單的團隊若沒注意，2026-12-30 後 code review 成本可能轉到組織帳單。
- 以下為推論：個人使用者通常不受影響，除非所屬組織採用組織計費。

## 仍待確認

- 生效後實際計費金額與 AI Credits 消耗速率：未驗證，公告無數字。
- 12-30 之後設定頁的實際顯示：未驗證。
