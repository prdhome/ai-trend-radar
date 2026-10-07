/** 訂閱出口（/feed.xml、/events.json）共用：絕對網址與 XML 跳脫。 */
export function absoluteUrl(path: string): string {
  return new URL(`${import.meta.env.BASE_URL}${path}`, import.meta.env.SITE).toString();
}

export function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
