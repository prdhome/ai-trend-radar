---
id: 2026-10-08-anthropic-cyber-mission
title: "Anthropic 推出 Cyber Mission：關鍵基礎設施防禦計畫與開源 OSS Scanner"
event_at: "2026-10-08T00:00:00Z"
verified_at: "2026-10-09T10:30:00+08:00"
category: signal
vendors: [anthropic]
status: confirmed
source_type: official
weekly_rank: null
sources:
  - title: "Introducing the Anthropic Cyber Mission"
    url: "https://www.anthropic.com/news/anthropic-cyber-mission"
    publisher: "Anthropic"
impact: monitor
summary: "Anthropic 於 2026-10-08 宣布長期資安防禦計畫 Cyber Mission，含 11 家 founding partners 的 Critical Infrastructure Defense Program，以及免費、選擇加入的開源 OSS Scanner。"
impact_summary: "推論：對一般使用者無直接動作；開源維護者可評估加入 OSS Scanner，資安業者可關注 CIDP 名額。"
next_check: "追蹤 OSS Scanner 實際開放方式與 CIDP 擴大到更多夥伴的消息。"
next_check_at: "2026-10-23T10:00:00+08:00"
related_events:
  - 2026-10-06-anthropic-cyber-verification-program-expansion
---

## 已確認事實

- 公告日期 2026-10-08：Anthropic 稱 Cyber Mission 是協助防禦者保護軟體與系統的長期工作，目前聚焦關鍵基礎設施與開源軟體。
- Critical Infrastructure Defense Program（CIDP）：針對電網、水務、交通等營運技術（OT）與政府系統，讓受信任的資安業者取得前沿 Claude 模型、現場工程師與威脅研究；founding partners 共 11 家（Accenture、Booz Allen、CrowdStrike、Deloitte、Dragos、Hitachi、Insane Cyber、Nozomi Networks、Palo Alto Networks、PwC、Rockwell Automation）；先從小型群組開始，企業可填表登記興趣。
- OSS Scanner：免費、選擇加入的服務（受 Google OSS-Fuzz 啟發），對加入的專案定期用 Anthropic 最強模型掃描；報告含概念驗證、說明與（若有）修補建議。報告由模型產生、未經人工審閱，可能有誤（如嚴重度）；Anthropic 預期真陽性率超過 90%（廠商自述目標）。
- 資金與支援：資助 Python Software Foundation、Alpha-Omega 與 OpenSSF（Linux Foundation）、Apache Software Foundation；支援 Akrites 與 Gold Eagle；8 月成立的 Defender Advantage Fund（0xDAF）支撐 OSS Scanner 免費；維護者可經 Claude for Open Source 申請免費 Claude Max。
- Project Glasswing 已併入擴大後的 Cyber Verification Program。
- 已讀取上述公告全文（WebFetch 摘要擷取）。

## 對我的影響（推論）

- 以下為推論，非官方說法：個人訂閱配置無需動作；若維護開源專案，可評估是否接受模型自動產生、未經人工審的漏洞報告。

## 仍待確認

- OSS Scanner 的實際加入條件與開放時程（公告稱可經連結申請，細節未驗證）。
- 真陽性率 >90% 為預期值，未經第三方驗證。
