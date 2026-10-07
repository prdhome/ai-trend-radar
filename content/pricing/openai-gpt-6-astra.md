---
id: openai-gpt-6-astra
vendor: openai
name: "GPT-6 Astra"
model_id: "gpt-6-astra"
current: true
input: 10
output: 50
cached_input: 1.0
cache_write: 12.5
long_context:
  threshold_tokens: 272000
  input: 20
  output: 75
  cached_input: 2.0
batch_input: 5
batch_output: 25
notes:
  - "官方定義：短上下文為 ≤272K 輸入 token，長上下文為 >272K 輸入 token。"
  - "區域處理（data residency）端點：2026-03-05 以後發布的模型加價 10%；FedRAMP 端點亦加價 10%。"
  - "Ultrafast 服務層級另價：輸入 $60、快取輸入 $6、輸出 $300（短上下文）。"
verified_at: "2026-10-07T21:50:00+08:00"
sources:
  - title: "OpenAI API Pricing"
    url: "https://developers.openai.com/api/docs/pricing"
    publisher: "OpenAI"
related_events:
  - 2026-09-29-openai-ultrafast-mode-gpt-6-astra
---
