import { getCollection, type CollectionEntry } from 'astro:content';
import { formatDate } from './format';
import { taipeiDayIndex } from './importance';

export type EventEntry = CollectionEntry<'events'>;

/** 依事件日期新到舊。 */
export async function getEvents(): Promise<EventEntry[]> {
  const all = await getCollection('events');
  return all.sort((a, b) => b.data.event_at.getTime() - a.data.event_at.getTime());
}

/** v0.2 §6.2：本週重點是對 events 的查詢（weekly_rank 不為 null，依數字排序，最多 5 則），不是獨立目錄。 */
export function weeklyHighlights(events: EventEntry[]): EventEntry[] {
  return events
    .filter((e) => e.data.weekly_rank !== null)
    .sort((a, b) => (a.data.weekly_rank ?? 99) - (b.data.weekly_rank ?? 99))
    .slice(0, 5);
}

/** PRD §3.2：待查事項最多 3 項，只收未驗證事件。 */
export function pendingChecks(events: EventEntry[]): EventEntry[] {
  return events.filter((e) => e.data.status === 'unverified').slice(0, 3);
}

export function latestVerifiedAt(events: EventEntry[]): Date | null {
  if (events.length === 0) return null;
  return new Date(Math.max(...events.map((e) => e.data.verified_at.getTime())));
}

export interface WeekGroup {
  /** 週一（台北時間）YYYY-MM-DD，作為 key。 */
  key: string;
  /** 例如「9/28–10/4」；明確區間，不寫「本週」，因為靜態建置時間不等於閱讀時間。 */
  label: string;
  events: EventEntry[];
}

/** 週一～週日分組（Asia/Taipei；GitHub Actions 跑在 UTC，所以先轉成台北日期再算星期）。新到舊。 */
export function groupByWeek(events: EventEntry[]): WeekGroup[] {
  const groups = new Map<string, WeekGroup>();
  for (const e of events) {
    const [y, m, d] = formatDate(e.data.event_at).split('-').map(Number);
    const day = new Date(Date.UTC(y, m - 1, d));
    const mon = new Date(day.getTime() - ((day.getUTCDay() + 6) % 7) * 86400000);
    const sun = new Date(mon.getTime() + 6 * 86400000);
    const key = mon.toISOString().slice(0, 10);
    const md = (x: Date) => `${x.getUTCMonth() + 1}/${x.getUTCDate()}`;
    if (!groups.has(key)) groups.set(key, { key, label: `${md(mon)}–${md(sun)}`, events: [] });
    groups.get(key)!.events.push(e);
  }
  return [...groups.values()].sort((a, b) => b.key.localeCompare(a.key));
}

export interface DayGroup {
  /** 台北日序；`date_unknown` 的事件歸在 null。 */
  day: number | null;
  events: EventEntry[];
}

/** 依台北日期分組（新到舊），日期未知的事件放最後。時間線用。 */
export function groupByDay(events: EventEntry[]): DayGroup[] {
  const groups = new Map<number | null, EventEntry[]>();
  for (const e of events) {
    const key = e.data.date_unknown ? null : taipeiDayIndex(e.data.event_at);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(e);
  }
  return [...groups.entries()]
    .map(([day, list]) => ({ day, events: list }))
    .sort((a, b) => (b.day ?? -Infinity) - (a.day ?? -Infinity));
}
