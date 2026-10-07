/**
 * Atom feed：最新 50 則事件（依事件日期）。`updated` 用 verified_at，事件被重新查核或更正時閱讀器會再次標為更新。
 * 內容保留「已查核事實／推論」的區分與可信度狀態，避免在 RSS 閱讀器裡把推論讀成事實。
 */
import type { APIRoute } from 'astro';
import { getEvents } from '../lib/events';
import { absoluteUrl, escapeXml } from '../lib/feed';
import { CATEGORY_LABEL, IMPACT_LABEL, STATUS_LABEL, VENDOR_LABEL } from '../lib/format';

const LIMIT = 50;

export const GET: APIRoute = async () => {
  const events = (await getEvents()).slice(0, LIMIT);
  const updated = events.length
    ? new Date(Math.max(...events.map((e) => e.data.verified_at.getTime())))
    : new Date(0);
  const home = absoluteUrl('');
  const self = absoluteUrl('feed.xml');

  const entries = events.map((e) => {
    const d = e.data;
    const url = absoluteUrl(`events/${e.id}/`);
    const status = d.status === 'confirmed' ? '' : `[${STATUS_LABEL[d.status]}] `;
    const html = [
      `<p><strong>${escapeXml(STATUS_LABEL[d.status])}</strong>・${escapeXml(CATEGORY_LABEL[d.category])}・${d.vendors.map((v) => escapeXml(VENDOR_LABEL[v])).join('／')}${d.date_unknown ? '・日期未知' : ''}</p>`,
      `<p>${escapeXml(d.summary)}</p>`,
      `<p><em>推論：${escapeXml(d.impact_summary.replace(/^推論[:：]\s*/, ''))}（${escapeXml(IMPACT_LABEL[d.impact])}）</em></p>`,
      `<p>來源：</p><ul>${d.sources.map((s) => `<li><a href="${escapeXml(s.url)}">${escapeXml(s.title)}</a></li>`).join('')}</ul>`,
    ].join('');
    return [
      '  <entry>',
      `    <id>${escapeXml(url)}</id>`,
      `    <title>${escapeXml(status + d.title)}</title>`,
      `    <link rel="alternate" type="text/html" href="${escapeXml(url)}"/>`,
      `    <updated>${d.verified_at.toISOString()}</updated>`,
      d.date_unknown ? '' : `    <published>${d.event_at.toISOString()}</published>`,
      `    <category term="${d.category}" label="${escapeXml(CATEGORY_LABEL[d.category])}"/>`,
      ...d.vendors.map((v) => `    <category term="vendor:${v}" label="${escapeXml(VENDOR_LABEL[v])}"/>`),
      `    <summary>${escapeXml(d.summary)}</summary>`,
      `    <content type="html">${escapeXml(html)}</content>`,
      '  </entry>',
    ]
      .filter(Boolean)
      .join('\n');
  });

  const xml = [
    '<?xml version="1.0" encoding="utf-8"?>',
    '<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="zh-Hant-TW">',
    '  <title>AI Trend Radar</title>',
    '  <subtitle>模型、Coding Agent 與訂閱政策的查核後變化</subtitle>',
    `  <id>${escapeXml(home)}</id>`,
    `  <link rel="alternate" type="text/html" href="${escapeXml(home)}"/>`,
    `  <link rel="self" type="application/atom+xml" href="${escapeXml(self)}"/>`,
    `  <updated>${updated.toISOString()}</updated>`,
    '  <author><name>AI Trend Radar</name></author>',
    ...entries,
    '</feed>',
    '',
  ].join('\n');

  return new Response(xml, { headers: { 'Content-Type': 'application/atom+xml; charset=utf-8' } });
};
