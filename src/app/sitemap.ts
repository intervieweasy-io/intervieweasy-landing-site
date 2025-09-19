import type { MetadataRoute } from 'next';

export const dynamic = 'force-static'; 

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://karyo.app';

  return [
    { url: `${base}/`, lastModified: new Date('2025-09-01'), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/features`, lastModified: new Date('2025-09-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/pricing`, lastModified: new Date('2025-09-01'), changeFrequency: 'monthly', priority: 0.7 },
  
  ];
}
