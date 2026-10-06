/**
 * 新聞重要度（importance）：schema 沒有 importance 欄位，也刻意不新增——重要度是「由既有欄位推導的排序訊號」，
 * 不是查核結論，不該讓內容作者手填。整個公式只在 `scoreImportance()` 一處定義，頁面一律透過它取得分數與等級。
 *
 * 分數 0–100 ＝ 影響程度 + 編輯排名 + 精選 + 新近度 − 可信度扣分：
 *
 * | 成分 | 來源欄位 | 分數 |
 * | --- | --- | --- |
 * | 影響程度 | `impact` | action 40／evaluate 28／monitor 16／none 4 |
 * | 編輯排名 | `weekly_rank` | 第 1 名 30、每降一名 −4（第 5 名 14）；未入選 0 |
 * | 精選 | `featured` | +10 |
 * | 新近度 | `event_at` | 與「資料中最新事件日」相差 0 天 20 分，每舊 1 天 −2，最低 0；`date_unknown` 為 0 |
 * | 可信度 | `status` | confirmed 0／reported −6／corrected −8／unverified −12 |
 *
 * 新近度的基準日用「資料中最新的事件日（台北時間）」而不是建置或閱讀時間：靜態站的建置時間不等於閱讀時間，
 * 用資料本身當錨點，同一份內容重新建置時分數不會漂移。
 *
 * 可信度只「扣分」不加分：未證實的事件就算影響大也不該排在已確認事件前面，避免推論看起來像事實。
 */
import type { EventEntry } from './events';
import { formatDate } from './format';

export const IMPORTANCE_LEVELS = ['p1', 'p2', 'p3', 'p4'] as const;
export type ImportanceLevel = (typeof IMPORTANCE_LEVELS)[number];

export const IMPORTANCE_LABEL: Record<ImportanceLevel, string> = {
  p1: '關鍵',
  p2: '重要',
  p3: '關注',
  p4: '參考',
};

/** 各等級的分數下限（含）。 */
export const IMPORTANCE_THRESHOLD: Record<ImportanceLevel, number> = { p1: 60, p2: 42, p3: 26, p4: 0 };

const IMPACT_POINTS: Record<string, number> = { action: 40, evaluate: 28, monitor: 16, none: 4 };
const STATUS_PENALTY: Record<string, number> = { confirmed: 0, reported: -6, corrected: -8, unverified: -12 };

export interface Importance {
  score: number;
  level: ImportanceLevel;
  /** 等級序號 1–4（1 最重要），給 UI 的強度刻度用。 */
  rank: 1 | 2 | 3 | 4;
  label: string;
  /** 各成分分數，詳情頁用來說明「分數怎麼來」。 */
  parts: { impact: number; editorial: number; featured: number; recency: number; confidence: number };
}

/** 台北時間的日序（自 epoch 起第幾天），用來算「相差幾天」不受時區影響。 */
export function taipeiDayIndex(d: Date): number {
  const [y, m, day] = formatDate(d).split('-').map(Number);
  return Math.floor(Date.UTC(y, m - 1, day) / 86400000);
}

/** 新近度基準：資料中最新事件的台北日序；沒有事件時回傳 null。 */
export function referenceDay(events: EventEntry[]): number | null {
  const known = events.filter((e) => !e.data.date_unknown);
  if (known.length === 0) return null;
  return Math.max(...known.map((e) => taipeiDayIndex(e.data.event_at)));
}

export function scoreImportance(event: EventEntry, refDay: number | null): Importance {
  const d = event.data;
  const impact = IMPACT_POINTS[d.impact] ?? 0;
  const editorial = d.weekly_rank !== null ? 34 - 4 * d.weekly_rank : 0;
  const featured = d.featured ? 10 : 0;
  const age = d.date_unknown || refDay === null ? null : Math.max(0, refDay - taipeiDayIndex(d.event_at));
  const recency = age === null ? 0 : Math.max(0, 20 - 2 * age);
  const confidence = STATUS_PENALTY[d.status] ?? 0;

  const score = Math.max(0, Math.min(100, impact + editorial + featured + recency + confidence));
  const level = IMPORTANCE_LEVELS.find((l) => score >= IMPORTANCE_THRESHOLD[l]) ?? 'p4';
  return {
    score,
    level,
    rank: (IMPORTANCE_LEVELS.indexOf(level) + 1) as Importance['rank'],
    label: IMPORTANCE_LABEL[level],
    parts: { impact, editorial, featured, recency, confidence },
  };
}

/** 一次算出所有事件的重要度（共用同一個基準日）。 */
export function importanceMap(events: EventEntry[]): Map<string, Importance> {
  const ref = referenceDay(events);
  return new Map(events.map((e) => [e.id, scoreImportance(e, ref)]));
}

/** 依重要度高到低；同分時較新的在前。 */
export function byImportance(events: EventEntry[], imp: Map<string, Importance>): EventEntry[] {
  return [...events].sort(
    (a, b) => imp.get(b.id)!.score - imp.get(a.id)!.score || b.data.event_at.getTime() - a.data.event_at.getTime(),
  );
}
