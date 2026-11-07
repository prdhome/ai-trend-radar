---
id: 2026-11-06-gemini-embedding-2-preview-deprecated
title: "Gemini API：gemini-embedding-2-preview 轉向 gemini-embedding-2"
event_at: "2026-11-06T00:00:00Z"
verified_at: "2026-11-07T11:00:00+08:00"
category: model
vendors: [google]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Gemini API release notes（Nov 6：Gemini Embedding 2 Preview deprecation）"
    url: "https://aistudio.google.com/docs/changelog"
    publisher: "Google"
impact: action
summary: "Google 於 2026-11-06 在 Gemini API 更新紀錄宣布 gemini-embedding-2-preview 的請求改路由到 gemini-embedding-2；官方稱 schema、價格與 embedding 空間相同，不需重建索引。"
impact_summary: "推論：仍使用 preview 模型字串的程式應改成 gemini-embedding-2。"
next_check: "確認 preview 模型字串的實際停用日期（條目摘要未列）。"
next_check_at: "2026-12-07T10:00:00+08:00"
---

## 已確認事實

- Gemini API 更新紀錄（2026-11-06）：`gemini-embedding-2-preview` 已標為棄用，請求會路由到 `gemini-embedding-2`，以 Gemini Embedding 2 費率計費。
- 官方建議更新模型字串為 `gemini-embedding-2`；API schema、價格與 embedding 空間相同，無須其他程式修改或重新索引。
- 已讀取更新紀錄頁（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：因路由自動發生，短期不致中斷，但明確改字串可避免日後停用造成的錯誤。

## 仍待確認

- 路由生效日期與 preview 字串最終停用日：條目摘要未提，未驗證。
