---
id: 2026-10-14-anthropic-us-midterms-election-safeguards
title: "Anthropic 公布 2026 美國期中選舉因應措施（投票資訊、政治中立評測、濫用防護）"
event_at: "2026-10-14T00:00:00Z"
verified_at: "2026-10-15T10:30:00+08:00"
category: signal
vendors: [anthropic]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Preparing for the 2026 US midterms"
    url: "https://www.anthropic.com/news/2026-us-midterms"
    publisher: "Anthropic"
impact: monitor
summary: "Anthropic 於 2026-10-14 說明期中選舉措施：連結 TurboVote、10 月稍後提供各州官方投票資訊、強化多步驟濫用偵測；稱 Opus 5.5、Sonnet 5.5、Haiku 5.5 政治中立評測得分 99%。"
impact_summary: "推論：美國用戶詢問選舉相關問題時，Claude 可能出現橫幅與官方資訊；選舉相關自動化用途需留意使用政策。"
related_events: [2026-10-08-anthropic-usage-policy-update]
next_check: "查 Claude 是否已上線各州官方投票資訊與選舉夜結果顯示，以及 Anthropic 後續的選舉使用回顧。"
next_check_at: "2026-11-05T10:00:00+08:00"
---

## 已確認事實

- Anthropic 官方文章（2026-10-14）。分析約 25 萬筆 2026-09-21 至 09-27 的美國 Claude.ai 對話：約 5.75% 涉及政治／公共政策／社會議題，約 0.51% 與選舉或投票有關，約 0.01% 詢問該投給誰，約 0.002% 違反選舉誠信政策。
- 用戶詢問登記、投票地點或日期時，顯示連結 Democracy Works 的 TurboVote 橫幅；10 月稍後將針對美國用戶依州提供 Democracy Works 的官方投票資訊；選舉夜起將顯示最新官方計票結果。
- 稱 Claude Opus 5.5、Sonnet 5.5、Haiku 5.5 在其政治中立評測得分 99%（Anthropic 自評）；外部團體評審發現 Claude 少拒絕但有時加不必要的註記，並稱 Sonnet 4.5 對右傾論點的保留較不均衡。
- 使用政策禁止欺騙選民或干擾選舉；新增針對多步驟濫用、假帳號／假新聞網站、財務動機選舉詐騙的分類器，並針對美國、以色列、巴西加強防護。文章稱有一個使用 Claude 的假新聞網站已被封鎖。
- 已讀取該文章全文（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：多為政策與產品行為說明，不改變價格；從事競選或內容生成的團隊應對照使用政策與「競選指南」。

## 仍待確認

- 各州官方資訊與選舉夜結果功能的實際上線時間（文章僅稱「10 月稍後」）。
- 99% 評測為 Anthropic 自評，未獨立驗證。
