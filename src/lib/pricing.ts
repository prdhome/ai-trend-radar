import { getCollection, type CollectionEntry } from 'astro:content';

export type PricingEntry = CollectionEntry<'pricing'>;

/** 依廠商、再依輸入價高到低（同廠商內旗艦在前）。 */
export async function getPricing(): Promise<PricingEntry[]> {
  const all = await getCollection('pricing');
  return all.sort((a, b) => a.data.vendor.localeCompare(b.data.vendor) || b.data.input - a.data.input);
}

/**
 * 混合單價（計算值，不是官方價格）：假設輸入:輸出 token = 3:1，USD／每百萬 token。
 * 只是讓「輸入便宜但輸出貴」與相反的模型能放在同一把尺上比較；實際成本依工作負載的輸入輸出比例而定。
 */
export const BLEND_RATIO = { input: 3, output: 1 } as const;
export function blended(p: { input: number; output: number }): number {
  const { input: i, output: o } = BLEND_RATIO;
  return (p.input * i + p.output * o) / (i + o);
}

/** $2、$0.10、$0.125：至少兩位小數，但保留官方寫到的位數，不四捨五入掉。 */
export function usd(n: number | null | undefined): string {
  if (n === null || n === undefined) return '—';
  if (Number.isInteger(n)) return `$${n}`;
  const s = String(n);
  const decimals = s.split('.')[1]?.length ?? 0;
  return `$${n.toFixed(Math.max(2, decimals))}`;
}

/** 對數座標位置（0–100%），價格跨三個數量級，線性座標會把便宜模型擠成一點。 */
export const LOG_DOMAIN = { min: 0.1, max: 100 } as const;
export function logPos(n: number): number {
  const { min, max } = LOG_DOMAIN;
  const v = Math.min(Math.max(n, min), max);
  return ((Math.log10(v) - Math.log10(min)) / (Math.log10(max) - Math.log10(min))) * 100;
}
