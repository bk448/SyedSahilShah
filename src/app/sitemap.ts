import { MetadataRoute } from 'next';
import { DIVISIONS, FORMS_DATABASE, COUNTRIES_DATABASE } from '@/lib/taxData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://expattax-us.com';
  const currentDate = new Date().toISOString();

  // Core static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: currentDate, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/forms`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/countries`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/deadlines`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/pricing`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/faqs`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/book-consultation`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/request-quote`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
  ];

  // Dynamic Division pages
  const divisionPages: MetadataRoute.Sitemap = DIVISIONS.map((d) => ({
    url: `${baseUrl}/divisions/${d.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // Dynamic Form pages
  const formPages: MetadataRoute.Sitemap = FORMS_DATABASE.map((f) => ({
    url: `${baseUrl}/forms/${f.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // Dynamic Country pages
  const countryPages: MetadataRoute.Sitemap = COUNTRIES_DATABASE.map((c) => ({
    url: `${baseUrl}/countries/${c.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [...staticPages, ...divisionPages, ...formPages, ...countryPages];
}
