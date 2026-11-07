---
id: 2026-11-05-gemini-api-omni-1-2-flash-ga
title: "Gemini API：Gemini Omni 1.2 Flash 正式版（影片輸出價格降 30%）"
event_at: "2026-11-05T00:00:00Z"
verified_at: "2026-11-07T11:00:00+08:00"
category: model
vendors: [google]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Gemini API release notes（Nov 5：Gemini Omni 1.2 Flash GA 等）"
    url: "https://aistudio.google.com/docs/changelog"
    publisher: "Google"
impact: evaluate
summary: "Google 於 2026-11-05 在 Gemini API 更新紀錄宣布 Gemini Omni 1.2 Flash 正式版：影片生成最長 15 秒、影片輸出價格 $12.00／百萬 token（降 30%）、付費層速率上限加倍。"
impact_summary: "推論：使用 Omni 影片生成的團隊可重新試算成本；舊的 1.1 Flash 將於 12/3 轉向 1.2 Flash。"
next_check: "確認 2026-12-03 gemini-omni-1.1-flash 轉向 1.2 Flash 是否如期生效，以及官方定價頁數字。"
next_check_at: "2026-12-03T10:00:00+08:00"
---

## 已確認事實

- Gemini API 更新紀錄（2026-11-05）：Gemini Omni 1.2 Flash 正式發布（GA），支援最長 15 秒影片生成與對話式編輯。
- 首尾幀插值 3–10 秒；每輪延長至總長 30 秒；最多 6 張參考圖可維持角色與主體一致性。
- 影片輸出價格降 30%，為 $12.00／百萬 token；付費層速率上限加倍。
- 自 2026-12-03 起，對 `gemini-omni-1.1-flash` 的請求會路由到 `gemini-omni-1.2-flash`，並以 1.2 Flash 費率計費。
- 同日另有 Office／OpenDocument 輸入格式擴充（PPT、ODP、ODS）與 function response 可回傳更多檔案類型，本檔不展開。
- 已讀取更新紀錄頁（經摘要擷取）；該頁為原 ai.google.dev 更新紀錄 301 轉址目的地。

## 對我的影響（推論）

- 以下為推論：價格下調與配額加倍可能改變影片生成的成本評估；自動轉向代表仍指定 1.1 的程式會在 12/3 後改用 1.2 費率與行為。

## 仍待確認

- 官方定價頁上的實際數字與計費單位：未驗證（僅讀到更新紀錄）。
- 1.2 與 1.1 的輸出品質差異：未驗證。
