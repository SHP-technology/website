import { toValue, watchEffect, type MaybeRefOrGetter } from 'vue';
import { siteConfig } from '@/config/site.config';

export interface SeoOptions {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  noIndex?: boolean;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const defaultImage = `${new URL(siteConfig.site.url).origin}/assets/image.png`;

function setMeta(selector: string, attribute: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    const [, name] = selector.match(/="([^"]+)"/) ?? [];
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setJsonLd(data?: SeoOptions['jsonLd']) {
  const id = 'route-structured-data';
  const existing = document.getElementById(id);
  if (!data) {
    existing?.remove();
    return;
  }

  const script = existing ?? document.createElement('script');
  script.id = id;
  script.setAttribute('type', 'application/ld+json');
  script.textContent = JSON.stringify(data);
  if (!existing) document.head.appendChild(script);
}

export function useSeoMeta(options: MaybeRefOrGetter<SeoOptions>) {
  const baseTitle = siteConfig.name;

  watchEffect(() => {
    const seo = toValue(options);
    const fullTitle = seo.title === baseTitle ? baseTitle : `${seo.title} | ${baseTitle}`;
    const pageUrl = new URL(window.location.pathname, siteConfig.site.url).href;
    const image = seo.image ?? defaultImage;

    document.title = fullTitle;
    setMeta('meta[name="description"]', 'name', seo.description);
    setMeta('meta[name="robots"]', 'name', seo.noIndex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    if (seo.keywords) setMeta('meta[name="keywords"]', 'name', seo.keywords);
    setMeta('meta[property="og:title"]', 'property', fullTitle);
    setMeta('meta[property="og:description"]', 'property', seo.description);
    setMeta('meta[property="og:url"]', 'property', pageUrl);
    setMeta('meta[property="og:image"]', 'property', image);
    setMeta('meta[name="twitter:title"]', 'name', fullTitle);
    setMeta('meta[name="twitter:description"]', 'name', seo.description);
    setMeta('meta[name="twitter:image"]', 'name', image);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.href = pageUrl;
    setJsonLd(seo.jsonLd);
  });
}
