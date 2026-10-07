---
id: 2026-10-06-anthropic-cyber-verification-program-expansion
title: "Anthropic 擴大 Cyber Verification Program，整併為三層存取"
event_at: "2026-10-06T00:00:00Z"
verified_at: "2026-10-07T10:30:00+08:00"
category: signal
vendors: [anthropic]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Expanding the Cyber Verification Program"
    url: "https://www.anthropic.com/news/cyber-verification-program"
    publisher: "Anthropic"
impact: monitor
summary: "Anthropic 於 2026-10-06 宣布把 Project Glasswing 與原 CVP 整併為 Defense／Red Team／Specialized 三層存取的 Cyber Verification Program。"
impact_summary: "推論：只影響需要資安專用能力（滲透測試、漏洞分析）的組織；個人訂閱配置無需動作。"
next_check: "若日後需要資安用途的 Claude 存取，再回頭讀公告確認申請資格與流程。"
related_events:
  - 2026-09-30-gemini-4-argon-announcement
---

## 已確認事實

- 公告日期 2026-10-06：Anthropic 將 Project Glasswing 與原 Cyber Verification Program 整併為單一計畫，分三層。
- Defense Access：防禦性工作（事件應變、惡意程式逆向、漏洞分析），含企業、非營利、大學、政府、關鍵基礎設施、開源維護者與個別研究者；審核約數日。
- Red Team Access：加入授權滲透測試與紅隊；對象為組織內紅隊、政府團隊與滲透測試公司，個人不符資格；審核需數週，審核期間先給 Defense Access；造成實體傷害或大規模中斷的行為仍即時阻擋。
- Specialized Access：針對航空作業系統、電網、電信等安全關鍵系統，限經與美國政府協同審核的組織；Glasswing 成員自動轉入。
- 公告列出：Glasswing 夥伴於 2026 年 4–7 月找出 129,000+ 個已驗證漏洞；Anthropic 開源掃描另有 5,500 個；33,000+ 為 critical／high。
- 公告稱各層可使用 Claude Opus 5.5、Claude Sonnet 5.5、Claude Mythos 5.1 及未來模型；CyScenarioBench 中 Defense 層 50 次試驗有 46 次在某處被阻擋，Red Team 層完成 34/50 且未被阻擋（廠商自報數字）。

## 對我的影響（推論）

- 以下為推論，非官方說法：除非工作涉及資安測試，否則對個人使用沒有直接影響；僅作為模型使用政策的訊號追蹤。

## 仍待確認

- 各層實際申請表單、資格細節與費用（未驗證，僅讀公告全文）。
- 公告中的基準測試數字未經第三方驗證。
