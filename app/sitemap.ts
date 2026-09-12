import { MetadataRoute } from 'next';
import { servicesData } from '@/src/data/services';
import { portfolioData } from '@/src/data/portfolio';
import { jobsData } from '@/src/data/jobs';
import { siteConfig } from '@/src/config/site.config';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.site.url.endsWith('/')
    ? siteConfig.site.url.slice(0, -1)
    : siteConfig.site.url;

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/demo',
    '/careers',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.9,
  }));

  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const portfolioRoutes = portfolioData.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const careerRoutes = jobsData.map((job) => ({
    url: `${baseUrl}/careers/${job.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...portfolioRoutes, ...careerRoutes];
}
