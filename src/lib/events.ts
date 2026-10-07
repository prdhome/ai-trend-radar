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

export type RunEntry = CollectionEntry<'runs'>;

/** 巡查紀錄，新到舊。 */
export async function getRuns(): Promise<RunEntry[]> {
  const all = await getCollection('runs');
  return all.sort((a, b) => b.data.ran_at.getTime() - a.data.ran_at.getTime());
}

/** 排了 `next_check_at` 的事件，依到期時間早到晚（最先到期的在前）。「是否已到期」要在閱讀當下判斷，這裡不過濾。 */
export function recheckQueue(events: EventEntry[]): EventEntry[] {
  return events
    .filter((e) => e.data.next_check_at)
    .sort((a, b) => a.data.next_check_at!.getTime() - b.data.next_check_at!.getTime());
}

/** 依廠商分組（事件可屬多個廠商），只回傳有事件的廠商，依事件數多到少。 */
export function groupByVendor(events: EventEntry[]): { vendor: string; events: EventEntry[] }[] {
  const groups = new Map<string, EventEntry[]>();
  for (const e of events) {
    for (const v of e.data.vendors) {
      if (!groups.has(v)) groups.set(v, []);
      groups.get(v)!.push(e);
    }
  }
  return [...groups.entries()]
    .map(([vendor, list]) => ({ vendor, events: list }))
    .sort((a, b) => b.events.length - a.events.length || a.vendor.localeCompare(b.vendor));
}

/**
 * 某事件的相關事件：自己 `related_events` 指向的＋別的事件指向自己的（雙向），依事件日期新到舊。
 * `related_events` 只需寫在較新的事件上，舊事件的詳情頁也會出現後續事件。
 */
export function relatedOf(
  event: EventEntry,
  events: EventEntry[],
): { event: EventEntry; direction: 'earlier' | 'same' | 'later' }[] {
  const out = new Set(event.data.related_events);
  const byId = new Map(events.map((e) => [e.id, e]));
  const result = new Map<string, EventEntry>();
  for (const id of out) if (byId.has(id) && id !== event.id) result.set(id, byId.get(id)!);
  for (const e of events) if (e.id !== event.id && e.data.related_events.includes(event.id)) result.set(e.id, e);
  return [...result.values()]
    .sort((a, b) => b.data.event_at.getTime() - a.data.event_at.getTime())
    .map((e) => {
      // 依台北日期比較；任一方日期未知時無法判斷先後，視為同期。
      const diff =
        e.data.date_unknown || event.data.date_unknown
          ? 0
          : taipeiDayIndex(e.data.event_at) - taipeiDayIndex(event.data.event_at);
      return { event: e, direction: diff > 0 ? 'later' : diff < 0 ? 'earlier' : 'same' } as const;
    });
}

export type DecisionEntry = CollectionEntry<'decisions'>;

/** 決策，依狀態（approved → candidate → retired）再依 decided_at 新到舊。 */
export async function getDecisions(): Promise<DecisionEntry[]> {
  const order = { approved: 0, candidate: 1, retired: 2 } as const;
  const all = await getCollection('decisions');
  return all.sort(
    (a, b) =>
      order[a.data.status] - order[b.data.status] ||
      (b.data.decided_at?.getTime() ?? 0) - (a.data.decided_at?.getTime() ?? 0),
  );
}

/**
 * 待決策事件：影響程度為「需要行動／值得評估」，且還沒有任何 approved／candidate 決策引用。
 * retired 決策不算：退役代表當初的結論已不適用，事件應回到待決策。
 */
export function undecidedEvents(events: EventEntry[], decisions: DecisionEntry[]): EventEntry[] {
  const covered = new Set(
    decisions.filter((d) => d.data.status !== 'retired').flatMap((d) => d.data.related_events),
  );
  return events.filter((e) => ['action', 'evaluate'].includes(e.data.impact) && !covered.has(e.id));
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
