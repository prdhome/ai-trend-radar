---
id: 2026-09-16-claude-cowork-merges-into-chat
title: "Claude Cowork 併入一般對話介面"
event_at: "2026-09-16T00:00:00+08:00"
verified_at: "2026-09-26T20:50:25+08:00"
category: agent
status: confirmed
source_type: official
weekly_rank: 2
sources:
  - title: "Claude Cowork and chat are now one Claude"
    url: "https://claude.com/blog/cowork-is-now-claude"
    publisher: "Anthropic"
impact: evaluate
summary: "Anthropic 於 2026-09-16 宣布 Claude Cowork 與一般對話合併成單一介面：Claude 自動判斷任務該用哪種模式處理，不再需要使用者自己選 Cowork 或 Chat；同時推出 Claude Docs、Claude Slides，Claude Design 也整合進對話中。先在 Pro／Max 方案推出，Team／Free 稍後跟進，Enterprise 管理員會收到至少 30 天的事前通知。"
impact_summary: "推論：目前工作流程裡有依「資料夾根目錄名稱是否為 Cowork」觸發的專案初始化技能，這個判斷基礎（獨立 Cowork 介面）之後可能不存在；等 rollout 實際落到帳號上後，需要重新確認 Cowork 專屬技能的觸發條件是否仍然成立，或該改用一般對話流程。"
next_check: "確認帳號的 Pro／Max 方案是否已收到這次介面合併，以及既有 Cowork 專屬工作流程（如專案資料夾初始化）在合併後的對話介面下是否仍照舊運作。"
---

## 已確認事實

- Anthropic 於 2026-09-16 發布官方公告，宣布 Claude Cowork 與一般對話合併成一個 Claude：使用者不再需要自行判斷一項任務該放進 Cowork 還是 Chat，Claude 會依任務內容自動處理。
- 同日推出 Claude Docs、Claude Slides；Claude Design 現在也整合進一般對話中，可在對話裡直接建立文件、簡報、設計稿，並匯出為 PowerPoint／PDF。
- Rollout 時程：先在 Pro、Max 方案的網頁、桌面、行動版逐步推出；Team、Free 方案稍後跟進；Enterprise 管理員會在異動前至少 30 天收到通知。
- 官方說明既有 Cowork 元素（對話、專案、artifacts、connectors、skills）合併後仍會保留在原本的位置可存取。

## 對我的影響（推論）

- 以下是推論，並非官方說法：目前環境中有一個依資料夾根目錄名稱是否精確等於「Cowork」來觸發的專案初始化技能。如果 Cowork 作為獨立介面的概念被合併掉，這個技能的判斷邏輯未來可能需要調整或已經失去意義，需要在自己帳號實際收到 rollout 後重新驗證。

## 仍待確認

- 官方公告只說「Pro、Max 方案逐步推出」，未給出精確完成日期；需要之後確認自己使用的方案何時實際收到這次介面合併。
- 尚未驗證合併後既有 Cowork 專屬工作流程（如依資料夾名稱觸發的專案初始化）在新介面下的實際行為。
