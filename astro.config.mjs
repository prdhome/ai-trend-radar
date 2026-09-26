// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages 專案站：https://prdhome.github.io/ai-trend-radar/
const SITE = 'https://prdhome.github.io';
const BASE = '/ai-trend-radar';

/**
 * 事件 Markdown 內的站內連結一律寫成 `/events/<id>/`（scripts/validate-content.mjs 依此格式檢查連結目標是否存在），
 * 建置時再補上 GitHub Pages 的 base path，內容檔不必知道部署在哪個子路徑。
 */
function rehypePrefixBase() {
  /** @param {any} node */
  const walk = (node) => {
    if (node.type === 'element' && node.tagName === 'a') {
      const href = node.properties?.href;
      if (typeof href === 'string' && href.startsWith('/') && !href.startsWith('//') && !href.startsWith(BASE + '/')) {
        node.properties.href = BASE + href;
      }
    }
    for (const child of node.children ?? []) walk(child);
  };
  return (/** @type {any} */ tree) => walk(tree);
}

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  output: 'static',
  markdown: {
    rehypePlugins: [rehypePrefixBase],
  },
});
