/** 所有介面時間一律以 Asia/Taipei 顯示（PRD §4 第 5 點）；資料本身保留 ISO 8601。 */
const TZ = 'Asia/Taipei';

function parts(d: Date) {
  const fmt = new Intl.DateTimeFormat('en-CA', {
    timeZone: TZ,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  });
  const p = Object.fromEntries(fmt.formatToParts(d).map((x) => [x.type, x.value]));
  return p as Record<'year' | 'month' | 'day' | 'hour' | 'minute', string>;
}

/** YYYY-MM-DD HH:mm（台北時間） */
export function formatDateTime(d: Date): string {
  const p = parts(d);
  return `${p.year}-${p.month}-${p.day} ${p.hour}:${p.minute}`;
}

/** YYYY-MM-DD（台北時間） */
export function formatDate(d: Date): string {
  const p = parts(d);
  return `${p.year}-${p.month}-${p.day}`;
}

export const CATEGORY_LABEL: Record<string, string> = {
  model: '模型',
  agent: 'Agent',
  pricing: '價格政策',
  signal: '待觀察訊號',
};

export const STATUS_LABEL: Record<string, string> = {
  confirmed: '官方已確認',
  reported: '第三方報導',
  unverified: '未驗證',
  corrected: '已更正',
};

export const SOURCE_TYPE_LABEL: Record<string, string> = {
  official: '官方來源',
  third_party: '第三方測試／報導',
  personal_test: '個人觀察',
};

export const IMPACT_LABEL: Record<string, string> = {
  action: '需要行動',
  evaluate: '值得評估',
  monitor: '持續觀察',
  none: '無影響',
};

/** 首頁「資料可能過期」門檻（PRD §3.2）。 */
export const STALE_HOURS = 96;

const WEEKDAY = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];

/** M/D（台北時間），時間線與圖表軸標籤用。 */
export function formatMonthDay(d: Date): string {
  const p = parts(d);
  return `${Number(p.month)}/${Number(p.day)}`;
}

/** 台北日序（見 lib/importance.ts 的 taipeiDayIndex）→ M/D 與星期。日序本身已是台北日期，這裡只做曆法換算。 */
export function dayIndexLabel(idx: number): { md: string; weekday: string; iso: string } {
  const d = new Date(idx * 86400000);
  return {
    md: `${d.getUTCMonth() + 1}/${d.getUTCDate()}`,
    weekday: WEEKDAY[d.getUTCDay()],
    iso: d.toISOString().slice(0, 10),
  };
}
