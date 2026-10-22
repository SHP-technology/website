import { siteConfig } from '@/src/config/site.config';

/**
 * Normalizes baseUrl to ensure trailing slash
 */
export const baseUrl = siteConfig.site.url.endsWith('/')
  ? siteConfig.site.url
  : `${siteConfig.site.url}/`;

/**
 * Builds full URL given a path
 */
export function getCanonicalUrl(path = ''): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${baseUrl}${cleanPath}`;
}

/**
 * Standard BreadcrumbList JSON-LD schema
 */
export function buildBreadcrumbSchema(
  items: Array<{ name: string; path?: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      ...(item.path ? { item: getCanonicalUrl(item.path) } : {}),
    })),
  };
}
