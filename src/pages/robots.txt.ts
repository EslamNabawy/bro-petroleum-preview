import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL('https://bro-eg.com')).toString().replace(/\/$/, '');
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
};
