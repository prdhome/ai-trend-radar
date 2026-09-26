import { getCollection, type CollectionEntry } from 'astro:content';

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
