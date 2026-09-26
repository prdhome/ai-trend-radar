# 官方查核來源清單

Claude Cloud 巡查時優先讀這裡列出的官方頁面，再看 `inbox/` 使用者提供的連結。
價格、額度與資格一律以官方頁為準；第三方報導只作補充，並在事件標 `source_type: third_party`。

> 這份清單是**待使用者確認的初稿**：Day 0 手動 Cloud session 要先驗證每個來源 Claude Cloud 讀得到（PRD v0.2 §8）；
> 讀不到的來源在「狀態」欄標「無法存取」，不要改用轉載站補內容。

| 追蹤對象 | 類型 | 來源 | 狀態 |
| --- | --- | --- | --- |
| Anthropic／Claude | 公告 | https://www.anthropic.com/news | 可存取（2026-09-26，curl 200） |
| Claude Code | 文件／更新紀錄 | https://code.claude.com/docs/en/overview | 可存取（2026-09-26，curl 200） |
| Claude 方案與定價 | 定價頁 | https://claude.com/pricing | 可存取（2026-09-26，curl 200） |
| OpenAI | 公告 | https://openai.com/news/ | 待 Day 0 session 實測（curl 403，疑似 bot 防護擋自動化請求，非確認無法存取） |
| ChatGPT | 版本說明 | https://help.openai.com/en/articles/6825453-chatgpt-release-notes | 待 Day 0 session 實測（curl 403，疑似 bot 防護擋自動化請求，非確認無法存取） |
| Codex | 文件 | https://developers.openai.com/codex | 可存取（2026-09-26，curl 200） |
| ChatGPT 方案與定價 | 定價頁 | https://openai.com/chatgpt/pricing/ | 待 Day 0 session 實測（curl 403，疑似 bot 防護擋自動化請求，非確認無法存取） |
| GitHub Copilot | 更新紀錄 | https://github.blog/changelog/label/copilot/ | 可存取（2026-09-26，curl 200） |

新增來源時：寫清楚類型（公告／文件／定價頁／更新紀錄），並在第一次成功讀取後把狀態改為「可存取（YYYY-MM-DD）」。

> 2026-09-26 更新：上表狀態是 hub 用 `curl` 做的基本可達性檢查，不是 Claude Cloud 實際瀏覽的結果——
> curl 沒有瀏覽器指紋，OpenAI 網域的三個來源回應 403 大概率是 bot 防護擋自動化請求，不代表 Claude Cloud
> 也讀不到。Day 0 手動 Cloud session（PRD v0.2 §8）要做的第一件事，就是拿這三個「待實測」的來源實際驗證
> 一次；如果 Claude Cloud 也讀不到，再考慮官方 RSS／sitemap 或改標「無法存取」。
