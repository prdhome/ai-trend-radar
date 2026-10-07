/**
 * 全部事件的結構化匯出（給其他工具或腳本串接）。欄位與 content schema 相同，另附事件頁網址與推導出的重要度。
 * 時間一律 ISO 8601（UTC）；重要度是排序訊號，不是查核結論（見 lib/importance.ts）。
 */
import type { APIRoute } from 'astro';
import { getEvents } from '../lib/events';
import { importanceMap } from '../lib/importance';
import { absoluteUrl } from '../lib/feed';

export const GET: APIRoute = async () => {
  const events = await getEvents();
  const imp = importanceMap(events);
  const body = {
    version: 1,
    generated_at: new Date().toISOString(),
    home_page_url: absoluteUrl(''),
    feed_url: absoluteUrl('feed.xml'),
    note: 'summary 是已查核事實；impact_summary 是推論。status 表示可信度（confirmed／reported／unverified／corrected）。',
    events: events.map((e) => {
      const d = e.data;
      const i = imp.get(e.id)!;
      return {
        id: e.id,
        url: absoluteUrl(`events/${e.id}/`),
        title: d.title,
        event_at: d.date_unknown ? null : d.event_at.toISOString(),
        date_unknown: d.date_unknown,
        verified_at: d.verified_at.toISOString(),
        category: d.category,
        vendors: d.vendors,
        status: d.status,
        source_type: d.source_type,
        impact: d.impact,
        importance: { score: i.score, level: i.level },
        weekly_rank: d.weekly_rank,
        featured: d.featured,
        summary: d.summary,
        impact_summary: d.impact_summary,
        sources: d.sources,
        next_check: d.next_check ?? null,
        next_check_at: d.next_check_at?.toISOString() ?? null,
        related_events: d.related_events,
        example: d.example,
      };
    }),
  };
  return new Response(JSON.stringify(body, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
