import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site';

const ROUTES = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/elixir', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/staycation', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/more', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/thank-you', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/privacy', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/shipping-returns', priority: 0.2, changeFrequency: 'yearly' },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency:
      route.changeFrequency as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: route.priority,
  }));
}
