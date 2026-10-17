---
id: 2026-10-16-openai-gpt-live-prompt-to-voice
title: "OpenAI 開放 prompt-to-voice 給所有 API 客戶，並新增 9 個 GPT-Live 語音"
event_at: "2026-10-16T00:00:00Z"
verified_at: "2026-10-17T10:30:00+08:00"
category: model
vendors: [openai]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "OpenAI Developer Changelog（Oct 16：Prompt-to-voice 與新語音）"
    url: "https://developers.openai.com/changelog"
    publisher: "OpenAI"
  - title: "Custom voices 指南"
    url: "https://developers.openai.com/api/docs/guides/custom-voices"
    publisher: "OpenAI"
impact: monitor
summary: "OpenAI 於 2026-10-16 讓所有 API 客戶可用文字描述建立自訂語音（建立免費，僅限 GPT-Live），並新增 9 個德、法、印地、日、韓語的 GPT-Live 語音。"
impact_summary: "推論：做多語語音產品的開發者可評估；語音只能用在 GPT-Live，無法用於 TTS 或 Realtime API。"
next_check: "查是否擴及 Text to Speech／Realtime API，或調整每組織 100 個語音上限。"
next_check_at: "2026-10-31T10:00:00+08:00"
related_events:
  - 2026-10-15-openai-gpt-live-native-decisions
---

## 已確認事實

- Changelog（Oct 16）：prompt-to-voice 開放給所有 API 客戶，可透過 API 或語音 Playground 以文字描述建立自訂語音，並在 GPT-Live session 重複使用；建立語音免費，產生語音依一般 GPT-Live session 計費。
- 同日新增 9 個 GPT-Live 語音：德語 Nuri、Juni、Flitz；法語 Brise、Sillage；印地語 Nira；日語 Harema、Shida；韓語 Noeul（語音清單頁未另行讀取，依 Changelog）。
- 指南：以 `/v1/audio/voices` 傳 `type: prompt`、名稱與描述建立，可選 `script_hint`（至多 2,000 字元）；回傳語音 ID 等資料，不回傳音訊；每個組織至多 100 個 prompt 生成語音。
- prompt 生成語音只能用在 GPT-Live，不適用 Text to Speech、Realtime、Chat Completions。
- 以錄音建立語音僅限符合資格客戶（需聯絡業務）；透過 `/v1/audio/voices` 建立語音與 Zero Data Retention 不相容。
- 已讀取 custom voices 指南全文與 Changelog（皆經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：需要品牌化或多語客服語音的開發者可低成本試作；若仰賴 ZDR 則此功能不適用。

## 仍待確認

- 新語音的實際品質（未驗證）。
- 是否會擴及其他音訊 API（未驗證）。
