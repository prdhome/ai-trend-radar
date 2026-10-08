---
id: 2026-10-07-github-secret-detection-model
title: "GitHub 推出專用 AI 機密偵測模型，用於 secret scanning 與 push protection"
event_at: "2026-10-07T00:00:00Z"
verified_at: "2026-10-08T10:30:00+08:00"
category: signal
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Purpose-built model for leaked secret detection"
    url: "https://github.blog/changelog/2026-10-07-purpose-built-model-for-leaked-secret-detection"
    publisher: "GitHub"
impact: monitor
summary: "GitHub 於 2026-10-07 起將既有 secret scanning 切換為微調的專用模型，AI push protection 與 /security-review 檢查仍為預覽階段並消耗 AI Credits。"
impact_summary: "推論：有 GHSP／GHAS 的組織會自動得到新偵測；若加入 push protection 預覽，需留意 AI Credit 計費與預算上限。"
next_check: "AI Credit 計費細節上線與預覽轉 GA。"
next_check_at: "2026-10-22T10:00:00+08:00"
---

## 已確認事實

- GitHub changelog（2026-10-07）：新模型為微調的機密偵測模型，會讀取周邊程式碼以標出可能的憑證（含無固定格式的密碼），不生成程式碼或文字。
- 套用範圍：secret scanning 警示、push protection、Copilot CLI／app 的 `/security-review`。
- 自 2026-10-07 起，既有掃描切換到新模型；GHSP／GHAS 客戶的 AI 偵測警示不另收費。
- AI push protection 與 security review 檢查會消耗 AI Credits；push protection 預覽在頁面中同時被稱為 private 與 public preview。security review 檢查為即將推出的 private preview，預設關閉。
- GHES 3.23 提供 AI 偵測警示（public preview）。管理員可用政策停用並設定 AI Credit 預算；預算警示本身不會停止用量。
- 頁面未提供準確率或誤報率數字，也未給 AI Credits 價格。

## 對我的影響（推論）

- 以下為推論：已在 push protection 私測的使用者在計費生效後會產生費用，除非事先停用。

## 仍待確認

- 偵測準確度與誤報率（官方未提供，未驗證）。
- 預覽階段名稱（private／public）的矛盾說法（未驗證）。
- AI Credit 單價與計費生效日（未驗證）。
