---
id: 2026-09-22-gpt-6-sol-luna-release
title: "OpenAI 發布 GPT-6 Sol 與 GPT-6 Luna"
event_at: "2026-09-22T00:00:00+08:00"
verified_at: "2026-09-26T20:50:25+08:00"
category: model
status: reported
source_type: third_party
weekly_rank: null
sources:
  - title: "Announcing GPT-6 Sol and GPT-6 Luna in the API, Codex and ChatGPT"
    url: "https://community.openai.com/t/announcing-gpt-6-sol-and-gpt-6-luna-in-the-api-codex-and-chatgpt/1399925"
    publisher: "OpenAI Developer Community"
  - title: "OpenAI's GPT-6 Sol and GPT-6 Luna now available"
    url: "https://github.blog/changelog/2026-09-22-openais-gpt-6-sol-and-gpt-6-luna-now-available/"
    publisher: "GitHub Changelog"
  - title: "OpenAI launches GPT-6 Sol and Luna, boasting lower cost and fewer mistakes"
    url: "https://techcrunch.com/2026/09/22/openai-launches-gpt-6-sol-and-luna/"
    publisher: "TechCrunch"
impact: monitor
summary: "OpenAI 於 2026-09-22 推出 GPT-6 Sol（互動與 agentic coding 用的平衡型模型）與 GPT-6 Luna（輕量、低成本、適合大量小任務）；API 價格較 GPT-5.6 系列促銷價再降 50%，並開放 ChatGPT、Codex、API 等管道。official openai.com 公告頁本次無法直接存取（403），以上依 OpenAI 官方社群公告、GitHub Changelog 與 TechCrunch 報導交叉確認。"
impact_summary: "推論：這是與 Claude Opus 5.5（見 2026-09-22-claude-opus-5-5-release）同一天發布的競品模型更新，兩者都主打「降低成本＋維持或提升效能」；值得在下次比較模型選型時，把 GPT-6 Sol／Luna 的實際任務表現與 Opus 5.5 放在一起評估，而不是只看官方各自宣稱的數字。"
next_check: "openai.com 官方公告頁能否改用其他方式存取（例如換 User-Agent 或走瀏覽器而非直接 curl／WebFetch），若能存取，補上官方逐項定價（每百萬 token 的 input／output 價格），目前只確認到「較 GPT-5.6 促銷價降 50%」這個相對數字。"
---

## 已確認事實

- OpenAI 於 2026-09-22 發布 GPT-6 Sol 與 GPT-6 Luna：Sol 是「互動與 agentic coding 用的平衡型模型」，Luna 是「輕量、低成本、適合大量小任務」的模型，兩者訓練方式沿用 GPT-6 Astra 的方法。
- 依 OpenAI 官方社群公告（community.openai.com，由 OpenAI 社群版主發文），API 價格比 GPT-5.6 系列的促銷價再降 50%；GitHub Copilot changelog 確認 GPT-6 Sol 開放給 Copilot Pro+／Max／Business／Enterprise 方案，GPT-6 Luna 開放給 Copilot Pro／Pro+／Max／Business／Enterprise 方案，可在 VS Code、Visual Studio、Copilot CLI、GitHub.com 等平台使用。
- 依 TechCrunch 報導，Sol 在官方基準測試上的錯誤率約為前代 GPT-5.6 Sol 的一半；Luna 開放給 ChatGPT Free／Go 使用者於桌面版使用，Sol 開放給 ChatGPT Work、Codex 大多數付費帳戶及 API。

## 對我的影響（推論）

- 以下是推論，並非官方說法：GPT-6 Sol／Luna 與 Claude Opus 5.5 同日發布，兩家都在打「降成本、維持或提升效能」這張牌，值得在下一次評估模型選型時把兩者的實測表現放在一起比較，而不是各自只看官方數字。

## 仍待確認

- 這次無法直接存取 openai.com 官方公告頁（`https://openai.com/index/introducing-gpt-6-sol-and-luna/` 回應 403，`https://openai.com/news/`、`https://openai.com/chatgpt/pricing/` 同樣 403），與 `ops/sources.md` 記錄的既有問題一致，疑似 bot 防護擋自動化請求；以上內容依官方社群公告、GitHub Changelog 與 TechCrunch 交叉確認，但尚未有第一手官方頁面核對逐項定價（每百萬 token 的 input／output 美元價格）。
- TechCrunch 報導提到「OpenAI 稱新模型任務表現超越 Anthropic 的 Fable 與 Opus」，這是 OpenAI 一方的宣稱，未經第三方獨立評測驗證，先不當作已確認事實。
