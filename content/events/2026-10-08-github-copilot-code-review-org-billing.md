---
id: 2026-10-08-github-copilot-code-review-org-billing
title: "Copilot code review 新增組織計費選項與觸發者控制"
event_at: "2026-10-08T00:00:00Z"
verified_at: "2026-10-10T10:30:00+08:00"
category: agent
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Copilot code review: New organization billing options and controls"
    url: "https://github.blog/changelog/2026-10-08-copilot-code-review-new-organization-billing-options-and-controls"
    publisher: "GitHub"
impact: monitor
summary: "GitHub 於 2026-10-08 讓組織擁有者可把有授權成員的 Copilot code review 改記到組織帳上，並可限制只有組織／企業提供的授權能觸發審查。"
impact_summary: "推論：用團隊 Copilot 做 PR 審查的組織可避免個人額度耗盡導致審查失敗，也能阻止個人授權用於組織 repo。"
next_check: "官方文件對個人 repo、自動審查與 API 請求的細節是否與頁面描述一致。"
next_check_at: "2026-10-24T10:00:00+08:00"
---

## 已確認事實

- GitHub changelog（2026-10-08，標為 Improvement／copilot）新增兩項 Copilot code review 管理控制。
- 計費：預設（Member）由成員自己的 Copilot 額度支付，額度用完審查會失敗；組織擁有者可改選 Organization，改記到 repo 所屬組織，不消耗成員額度。選 Organization 須先為該組織啟用 AI Credits 付費用量，可選擇設定預算。設定位於組織設定 → Copilot → Policies。
- 觸發控制：預設任何持有付費 Copilot 授權者可在其可存取的 repo 請求審查。組織擁有者與 repo 管理員可開啟「Only allow Copilot code review to be triggered by authorized users」，此時須使用組織或企業提供的授權，個人授權不可用。組織層級開啟後，repo 管理員無法關閉。
- 頁面未列價格、數字或具體生效日。

## 對我的影響（推論）

- 以下為推論：管理者若改為 Organization 計費，需留意 AI Credits 用量與預算；開啟限制後，使用個人授權的外部貢獻者可能無法觸發審查。

## 仍待確認

- 組織計費的單價與 AI Credits 消耗量（頁面未提供，未驗證）。
- 是否已對所有組織推出（頁面未說明，未驗證）。
