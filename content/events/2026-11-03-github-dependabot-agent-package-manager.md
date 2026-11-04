---
id: 2026-11-03-github-dependabot-agent-package-manager
title: "Dependabot 版本更新支援 Agent Package Manager（APM）"
event_at: "2026-11-03T00:00:00Z"
verified_at: "2026-11-04T10:30:00+08:00"
category: agent
vendors: [github]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Dependabot version updates support Agent Package Manager"
    url: "https://github.blog/changelog/2026-11-03-dependabot-version-updates-support-agent-package-manager"
    publisher: "GitHub Changelog"
impact: monitor
summary: "GitHub 於 2026-11-03 宣布 Dependabot 版本更新支援 APM，可為 apm.yml 宣告的 git 相依（代理技能、prompt、指令）開更新 PR。"
impact_summary: "推論：用 APM 管理 agent skills／instructions 的團隊，可用既有 Dependabot 流程追蹤更新。"
next_check: "確認 GHES 3.24 實際上線，以及是否擴及安全性更新。"
next_check_at: "2026-12-04T10:00:00+08:00"
---

## 已確認事實

- GitHub Changelog（2026-11-03）：Dependabot 版本更新支援 Agent Package Manager（APM），用於維持 AI agent 的 skills、prompts 與 instructions 為最新版。
- Dependabot 會為 `apm.yml` 內支援的 git 相依開 PR，且若存在 `apm.lock.yaml` 會一併重新產生。
- 設定方式：在 `.github/dependabot.yml` 加入 `apm` 條目，指定 `apm.yml` 所在目錄與更新排程。
- 僅涵蓋版本更新，不含安全性更新。
- github.com 上所有方案正式可用（GA）；GitHub Enterprise Server 3.24 也將提供。
- 已讀取該 changelog 條目（經摘要擷取）。

## 對我的影響（推論）

- 以下為推論：自動更新的 agent 指令屬供應鏈風險面，合併前仍需人工審查內容。

## 仍待確認

- GHES 3.24 的確切釋出時程：changelog 摘要未提供，未驗證。
