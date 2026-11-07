import type { APIRoute } from 'astro';
import { locales, localePath, projects, services } from '../lib/localized';

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL('https://bro-eg.com')).toString().replace(/\/$/, '');
  const paths = locales.flatMap((locale) => ['', 'about', 'services', 'projects', 'hseq', 'careers', 'contact', 'privacy', 'terms', ...services.map((service) => `services/${service.slug}`), ...projects.map((project) => `projects/${project.slug}`)].map((path) => localePath(locale, path)));
  const body = paths.map((path) => `  <url><loc>${base}${path}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`, { headers: { 'content-type': 'application/xml; charset=utf-8' } });
};
