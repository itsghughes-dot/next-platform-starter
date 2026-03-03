import { ALL_MATCHES } from '@/data/matches';

const BASE = 'https://worsteleven.com';

export default function sitemap() {
  const matchPages = ALL_MATCHES.map((m) => ({
    url: `${BASE}/match/${m.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/match`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    ...matchPages,
  ];
}
