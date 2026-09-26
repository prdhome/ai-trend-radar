/**
 * 內容 schema（PRD v0.2 §4.1、§6.1）。
 *
 * 欄位型別／必填／列舉值由這裡的 zod schema 把關：任何事件檔不符合，`astro check` 與 `astro build` 都會直接失敗，
 * 等於 CI 的第一道 gate。zod 管不到的跨檔案檢查（重複 id、壞內部連結、過期查核、來源 URL 存活）在 scripts/。
 *
 * 刻意「沒有」v0.1 草案的審核者欄位（v0.2 §4.1）：審核證據是「只有 main 會部署」＋ deploy.yml 寫進頁尾的
 * build metadata（site_built_at／commit／PR 連結），不放在內容檔案裡讓任何人自填。
 *
 * Astro 7 從 src/content.config.ts 載入 collections；該檔只 re-export 這裡的定義。
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const ID = /^\d{4}-\d{2}-\d{2}-[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** ISO 8601 且必須帶時區（`Z` 或 `+08:00`），避免「沒寫時區」被當成 UTC 而在台北時間顯示錯一天。 */
const isoDateTime = z.union([
  z.date(),
  z.iso.datetime({ offset: true }).transform((s) => new Date(s)),
]);

const source = z.object({
  title: z.string().min(1),
  url: z.url({ protocol: /^https?$/ }),
  /** 來源名稱（例如「官方部落格」），選填。 */
  publisher: z.string().optional(),
});

export const CATEGORIES = ['model', 'agent', 'pricing', 'signal'] as const;
export const STATUSES = ['confirmed', 'reported', 'unverified', 'corrected'] as const;
export const SOURCE_TYPES = ['official', 'third_party', 'personal_test'] as const;
export const IMPACTS = ['action', 'evaluate', 'monitor', 'none'] as const;

const events = defineCollection({
  loader: glob({ pattern: ['*.md', '!README.md'], base: './content/events' }),
  schema: z
    .object({
      id: z.string().regex(ID, 'id 必須是 YYYY-MM-DD-slug 格式，並與檔名相同'),
      title: z.string().min(1),
      event_at: isoDateTime,
      /** PRD §4 第 5 點：沒有可靠發生日期時設 true，不可用擷取日期冒充事件日期。 */
      date_unknown: z.boolean().default(false),
      verified_at: isoDateTime,
      category: z.enum(CATEGORIES),
      status: z.enum(STATUSES),
      source_type: z.enum(SOURCE_TYPES),
      sources: z.array(source).min(1, '每個事件至少要有一個原始來源（PRD §4 第 1 點）'),
      impact: z.enum(IMPACTS),
      /** [v0.2] 取代 content/weekly/：是否為精選事件。 */
      featured: z.boolean().default(false),
      /** [v0.2] 1–5，非 null 代表本週入選重點；首頁依數字由小到大排序。 */
      weekly_rank: z.number().int().min(1).max(5).nullable().default(null),
      /** 事件卡上的一句已查核事實。 */
      summary: z.string().min(1),
      /** 事件卡上的一句「對我有何影響」（推論）。 */
      impact_summary: z.string().min(1),
      /** 詳情頁「下次需核對的條件」。 */
      next_check: z.string().optional(),
      /** 格式範例／假資料；頁面會加上「範例」標記。 */
      example: z.boolean().default(false),
    })
    .strict(),
});

const corrections = defineCollection({
  loader: glob({ pattern: ['*.md', '!README.md'], base: './content/corrections' }),
  schema: z
    .object({
      id: z.string().regex(ID),
      /** 被更正的事件 id；scripts/validate-content.mjs 會檢查它存在，並用它解除 48 小時過期警告。 */
      event_id: z.string().regex(ID),
      corrected_at: isoDateTime,
      /** 舊說法（保留原文，不靜默刪除）。 */
      previous_claim: z.string().min(1),
      /** 新說法。 */
      corrected_claim: z.string().min(1),
      reason: z.string().min(1),
      sources: z.array(source).min(1),
    })
    .strict(),
});

const decisions = defineCollection({
  loader: glob({ pattern: ['*.md', '!README.md'], base: './content/decisions' }),
  schema: z
    .object({
      id: z.string().regex(ID),
      title: z.string().min(1),
      /** candidate＝Claude 可提出的候選決策；approved／retired 只能由使用者設定（CODEOWNERS＋label gate 保護）。 */
      status: z.enum(['candidate', 'approved', 'retired']),
      decided_at: isoDateTime.optional(),
      related_events: z.array(z.string().regex(ID)).default([]),
      reevaluate_when: z.string().optional(),
    })
    .strict(),
});

export const collections = { events, corrections, decisions };
