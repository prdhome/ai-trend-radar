---
id: 2026-10-22-github-copilot-visual-studio-september-update
title: "Copilot in Visual Studio 九月更新：BYOM 預覽、PR 探索與 NuGet 弱點修復"
event_at: "2026-10-22T00:00:00Z"
verified_at: "2026-10-25T10:30:00+08:00"
category: agent
vendors: [github, microsoft]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "GitHub Copilot in Visual Studio — September update"
    url: "https://github.blog/changelog/2026-10-22-github-copilot-in-visual-studio-september-update-2"
    publisher: "GitHub"
impact: evaluate
summary: "GitHub 於 2026-10-22 發布 Copilot in Visual Studio 九月更新：BYOM（預覽）改走新的 Agent (Preview)、Git agent 可探索 PR、NuGet 弱點可由 Error List 交給 Copilot 修復。"
impact_summary: "推論：用 Visual Studio 並已設定 Ollama 等自備模型者，更新後需重新設定，且舊 Ask／Agent 模式不再支援 BYOM。"
next_check: "確認 BYOM 在 Agent (Preview) 的 GA 時程與 Visual Studio 官方 release notes。"
next_check_at: "2026-11-25T10:00:00+08:00"
---

## 已確認事實

- GitHub changelog（2026-10-22）：Copilot in Visual Studio 九月更新，涵蓋 PR 探索、自選模型與 NuGet 弱點修復。
- Git agent：在 Copilot Chat 選 Git agent 並附加 PR，回傳含相關留言與檔案連結的摘要；需連接 Git 提供者的 MCP server，支援 GitHub 與 Azure DevOps。
- BYOM（預覽）：可用 Copilot 或自有模型部署，不論是否登入 GitHub；Community、Professional、Enterprise 版預設開啟；支援 Microsoft Foundry、OpenAI、Anthropic、Ollama。
- 破壞性變更：BYOM 現在需要新的 Agent (Preview)（基於 GitHub Copilot SDK 的 harness），舊的 Ask 與 Agent 模式不再支援 BYOM；先前設定的 Ollama 模型需重新加入。
- NuGet Audit 警告提供修復動作，開啟 agent 模式的 Copilot Chat 並透過 NuGet MCP server 修復；需登入 Copilot 並在工具選單啟用 NuGet MCP server。
- 適用所有 Copilot 方案（Free、Student、Pro、Pro+、Max、Business、Enterprise）。
- 已讀取該 changelog 條目（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：使用自備模型的 Visual Studio 使用者應在更新前後確認設定；企業可能需評估 BYOM 預設開啟對模型治理的影響。

## 仍待確認

- Visual Studio 官方 release notes 的版本號與細節（未讀）。
- BYOM 預設開啟在 Business／Enterprise 是否受組織政策管控（未驗證）。
