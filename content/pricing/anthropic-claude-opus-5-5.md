---
id: anthropic-claude-opus-5-5
vendor: anthropic
name: "Claude Opus 5.5"
model_id: "claude-opus-5-5"
current: true
input: 4
output: 20
cached_input: 0.2
cache_write: 5
long_context: null
batch_input: 2
batch_output: 10
notes:
  - "快取命中為基本輸入價 0.05 倍。"
  - "Fast mode（研究預覽）另價：輸入 $8、輸出 $40。"
  - "Claude 4.6 以後的模型 1M token 上下文全程同價。"
  - "Claude 4.7 以後的模型使用新分詞器，同樣文字約多產生 30% token（依內容而定）；跨廠商比較每百萬 token 單價時需留意。"
  - "1 小時快取寫入為基本輸入價 2 倍；指定美國境內推論（inference_geo）全項目 ×1.1。"
verified_at: "2026-10-07T21:50:00+08:00"
sources:
  - title: "Pricing - Claude Platform Docs"
    url: "https://platform.claude.com/docs/en/about-claude/pricing"
    publisher: "Anthropic"
related_events:
  - 2026-09-22-claude-opus-5-5-release
---
