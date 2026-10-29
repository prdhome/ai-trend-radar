---
id: 2026-10-28-github-copilot-fusion-ga
title: "GitHub Copilot Fusion 正式發布：依 effort 等級路由並協調多模型"
event_at: "2026-10-28T00:00:00Z"
verified_at: "2026-10-29T10:30:00+08:00"
category: model
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Route and orchestrate models with GitHub Copilot Fusion"
    url: "https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion"
    publisher: "GitHub"
impact: evaluate
summary: "GitHub 於 2026-10-28 宣布 Copilot Fusion 正式發布，在模型選單選 Fusion 並選 effort 等級，由 Copilot 為每個提示路由與協調模型；限時對付費方案用量 7 折。"
impact_summary: "推論：想省成本又不想手選模型的使用者可試 Fusion；成效數據為 GitHub 自述，需自行驗證。"
next_check: "觀察限時折扣結束日與更多用戶端支援。"
next_check_at: "2026-11-28T10:00:00+08:00"
related_events:
  - 2026-10-14-github-copilot-hydrafusion-max
---

## 已確認事實

- GitHub changelog（2026-10-28）：Copilot Fusion 在模型選單選擇後再選 effort（Standard／High／Max），結合 Project HydraFusion 的多模型協調與 Copilot auto 模型選擇。
- 工作流程有 Single、Cascade（高效率模型起草、品質檢查決定採用或升級）、Critique（一模型起草、另一模型審閱、原模型修訂）。
- GitHub 自述：Artificial Analysis Coding Agent Index 中 Fusion Max 得 60 分，與 Claude Code 搭配 Opus 5.5 Max 相差兩分內；平均每任務 API 成本約減半、token 約減半、耗時約少 40%。
- Fusion 只使用企業／組織模型政策已啟用的模型；管理員可針對 Fusion 停用特定模型，並以 Enterprise managed settings 設為預設。
- 依各被使用模型的標準費率計費；限時對付費 Copilot 方案用戶提供模型成本 30% 折扣。
- 適用所有 Copilot 方案，於 VS Code、GitHub Copilot app、Copilot CLI、JetBrains；其他用戶端稱將陸續支援。研究預覽的 auto／HydraFusion／HydraFusion Max 選擇自動轉為對應 Fusion 等級。
- 已讀取官方 changelog 全文（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：效能與成本數據來自 GitHub 自己的評測，不等同獨立驗證。

## 仍待確認

- 30% 折扣的結束日期。
- 評測方法細節與第三方重現。
