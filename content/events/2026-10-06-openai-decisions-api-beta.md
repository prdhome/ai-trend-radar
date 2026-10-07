---
id: 2026-10-06-openai-decisions-api-beta
title: "OpenAI 推出 Decisions API（beta），搭配 gpt-6-luna"
event_at: "2026-10-06T00:00:00Z"
verified_at: "2026-10-07T10:30:00+08:00"
category: model
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "OpenAI Developer Changelog（Oct 6：Decisions API）"
    url: "https://developers.openai.com/changelog"
    publisher: "OpenAI"
  - title: "Decisions guide"
    url: "https://developers.openai.com/api/docs/guides/decisions"
    publisher: "OpenAI"
impact: evaluate
summary: "OpenAI 於 2026-10-06 推出 Decisions API（beta，POST /v1/decisions），僅支援 gpt-6-luna，輸入計價 $0.10／百萬 token。"
impact_summary: "推論：若有分類、路由、排序類的 API 工作，可評估改用；一般聊天訂閱使用者無影響。"
next_check: "GA 時間與是否支援更多模型。"
---

## 已確認事實

- Changelog（Oct 6）與官方指南寫明：Decisions API 為 beta，端點 `POST /v1/decisions`，將文字與圖片轉為有型別的答案，官方稱比 Responses API 快約 10 倍。
- 目前僅支援 `gpt-6-luna`；題型有 Predicate（機率）、Choice（選項＋信心）、Score（分級評分）。
- 指南列價：輸入 $0.10／百萬 token，僅收輸入 token，無快取讀寫或輸出費用；區域處理加價與長上下文倍率另計。
- 圖片須為 inline base64 data URL；支援 ZDR 與符合資格客戶的 HIPAA；有美國與歐洲資料駐留。
- 指南稱 GA「expected soon」。

## 對我的影響（推論）

- 以下為推論：適合高量、低延遲的分類／路由情境；「快 10 倍」為官方自述，實際效果依任務而定。

## 仍待確認

- 實測速度與準確度（未驗證）。
- GA 日期與其他模型支援（未驗證）。
