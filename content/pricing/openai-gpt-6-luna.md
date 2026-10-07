---
id: openai-gpt-6-luna
vendor: openai
name: "GPT-6 Luna"
model_id: "gpt-6-luna"
current: true
input: 0.1
output: 0.5
cached_input: 0.01
cache_write: 0.125
long_context:
  threshold_tokens: 272000
  input: 0.2
  output: 0.75
  cached_input: 0.02
batch_input: 0.05
batch_output: 0.25
notes:
  - "官方定義：短上下文為 ≤272K 輸入 token，長上下文為 >272K 輸入 token。"
  - "區域處理（data residency）端點：2026-03-05 以後發布的模型加價 10%；FedRAMP 端點亦加價 10%。"
verified_at: "2026-10-07T21:50:00+08:00"
sources:
  - title: "OpenAI API Pricing"
    url: "https://developers.openai.com/api/docs/pricing"
    publisher: "OpenAI"
related_events:
  - 2026-09-22-gpt-6-sol-luna-release
  - 2026-10-06-openai-decisions-api-beta
---
