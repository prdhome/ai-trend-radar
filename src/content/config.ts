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
const DAY_ID = /^\d{4}-\d{2}-\d{2}$/;

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
/** 事件涉及的廠商；列舉而非自由文字，篩選與 /vendors/<x>/ 頁才不會因拼法不同而分裂。新增廠商時同步 lib/format.ts 的 VENDOR_LABEL。 */
export const VENDORS = [
  'openai',
  'anthropic',
  'google',
  'github',
  'microsoft',
  'aws',
  'meta',
  'xai',
  'mistral',
  'deepseek',
  'other',
] as const;
export const RUN_RESULTS = ['new_items', 'updates_only', 'no_new_items'] as const;

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
      /** 涉及的廠商（第一個為主要廠商）；多家合作或跨平台事件可列多個。 */
      vendors: z.array(z.enum(VENDORS)).min(1, '至少要標一個廠商（不確定時用 other）'),
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
      /** 下次核對的到期時間；routine 每次先處理到期事件。必須搭配 `next_check` 說明要核對什麼。 */
      next_check_at: isoDateTime.optional(),
      /**
       * 相關事件（同系列後續、同類功能、被引用的替代方案）。只需單向寫在較新的事件上；詳情頁會雙向顯示。
       * 這是編輯判斷，不代表因果關係。
       */
      related_events: z.array(z.string().regex(ID)).default([]),
      /** 格式範例／假資料；頁面會加上「範例」標記。 */
      example: z.boolean().default(false),
    })
    .strict()
    .refine((d) => !d.next_check_at || d.next_check, {
      message: '有 next_check_at 時必須寫 next_check（說明到期要核對什麼）',
      path: ['next_check'],
    }),
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

/**
 * 巡查紀錄：routine 每次執行都寫一筆（同一天多次執行就更新當天檔案），沒有新事件也要寫。
 * 首頁用它區分「routine 有跑但沒新聞」與「routine 沒跑／沒合併」，不再只靠事件的 verified_at 判斷新鮮度。
 */
const runs = defineCollection({
  loader: glob({ pattern: ['*.md', '!README.md'], base: './content/runs' }),
  schema: z
    .object({
      /** 台北日期 YYYY-MM-DD，與檔名相同。 */
      // YAML 會把沒加引號的 2026-10-08 解析成 Date（UTC 午夜），轉回字串再驗格式，寫法不管有沒有引號都能過。
      id: z.preprocess(
        (v) => (v instanceof Date ? v.toISOString().slice(0, 10) : v),
        z.string().regex(DAY_ID, 'id 必須是 YYYY-MM-DD（台北日期），並與檔名相同'),
      ),
      ran_at: isoDateTime,
      result: z.enum(RUN_RESULTS),
      sources_checked: z
        .array(
          z
            .object({
              url: z.url({ protocol: /^https?$/ }),
              /** 這次是否實際讀到內容（不是 HTTP 狀態碼，是 routine 能否讀取並查核）。 */
              ok: z.boolean(),
              note: z.string().optional(),
            })
            .strict(),
        )
        .min(1, '至少列出一個本次檢查的來源'),
      events_added: z.array(z.string().regex(ID)).default([]),
      events_updated: z.array(z.string().regex(ID)).default([]),
    })
    .strict()
    .refine((r) => r.result !== 'new_items' || r.events_added.length > 0, {
      message: 'result: new_items 時 events_added 不可為空',
      path: ['events_added'],
    })
    .refine((r) => r.result !== 'updates_only' || (r.events_added.length === 0 && r.events_updated.length > 0), {
      message: 'result: updates_only 時 events_added 必須為空、events_updated 不可為空',
      path: ['events_updated'],
    })
    .refine((r) => r.result !== 'no_new_items' || (r.events_added.length === 0 && r.events_updated.length === 0), {
      message: 'result: no_new_items 時 events_added／events_updated 都必須為空',
      path: ['result'],
    }),
});

/**
 * 價格表只收官方來源（CLAUDE.md 內容規則第 5 點）：來源網址的主機必須在該廠商的官方網域清單內，否則 build 失敗。
 * 要追蹤新廠商時，先在這裡加官方網域，再新增價格檔。
 */
export const OFFICIAL_PRICING_HOSTS: Partial<Record<(typeof VENDORS)[number], string[]>> = {
  openai: ['openai.com', 'developers.openai.com', 'platform.openai.com', 'help.openai.com'],
  anthropic: ['anthropic.com', 'www.anthropic.com', 'claude.com', 'docs.claude.com', 'platform.claude.com', 'docs.anthropic.com', 'support.claude.com'],
};

/** USD／每百萬 token；官方標「-」或不提供的項目用 null，不要填 0。 */
const price = z.number().nonnegative().nullable();

const pricing = defineCollection({
  loader: glob({ pattern: ['*.md', '!README.md'], base: './content/pricing' }),
  schema: z
    .object({
      /** `<vendor>-<model-slug>`，與檔名相同。 */
      id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
      vendor: z.enum(VENDORS),
      /** 顯示名稱，例如「Claude Opus 5.5」。 */
      name: z.string().min(1),
      /** API 模型 id，例如 gpt-6.1-sol。 */
      model_id: z.string().min(1),
      /** 官方頁面是否把它列為目前主力（latest／flagship）；false 代表舊版或特殊用途，比較表預設收合。 */
      current: z.boolean().default(true),
      /** 標準（同步、全球路由）價格，USD／每百萬 token。 */
      input: z.number().nonnegative(),
      output: z.number().nonnegative(),
      /** 快取命中（OpenAI「cached input」、Anthropic「cache hits and refreshes」）。 */
      cached_input: price,
      /** 快取寫入（OpenAI「cache writes」、Anthropic「5m cache writes」）。 */
      cache_write: price,
      /** 長上下文另價：超過 `threshold_tokens` 個輸入 token 時整個請求適用。官方說明全上下文同價時設 null。 */
      long_context: z
        .object({
          threshold_tokens: z.number().int().positive(),
          input: z.number().nonnegative(),
          output: z.number().nonnegative(),
          cached_input: price,
        })
        .strict()
        .nullable(),
      batch_input: price,
      batch_output: price,
      /** 官方定價頁上與此模型直接相關的說明（例如促銷期限、分詞器差異），一行一則，照原意轉述。 */
      notes: z.array(z.string().min(1)).default([]),
      verified_at: isoDateTime,
      sources: z.array(source).min(1),
      related_events: z.array(z.string().regex(ID)).default([]),
    })
    .strict()
    .superRefine((d, ctx) => {
      const hosts = OFFICIAL_PRICING_HOSTS[d.vendor];
      if (!hosts) {
        ctx.addIssue({ code: 'custom', path: ['vendor'], message: `尚未設定 ${d.vendor} 的官方網域（OFFICIAL_PRICING_HOSTS）` });
        return;
      }
      d.sources.forEach((s, i) => {
        const host = new URL(s.url).hostname;
        if (!hosts.includes(host)) {
          ctx.addIssue({
            code: 'custom',
            path: ['sources', i, 'url'],
            message: `價格只能引用官方來源：${host} 不在 ${d.vendor} 的官方網域清單內`,
          });
        }
      });
    }),
});

export const collections = { events, corrections, decisions, runs, pricing };
