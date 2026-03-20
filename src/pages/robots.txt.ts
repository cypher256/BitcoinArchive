import type { APIRoute } from 'astro';
import { PRIMARY_ORIGIN, getDeploymentConfig } from '../../site-config.mjs';

const { site, base } = getDeploymentConfig();
const sitemapPath = `${base.replace(/\/$/, '')}/sitemap-index.xml`;
const sitemapUrl = new URL(sitemapPath, site).toString();

export const prerender = true;

export const GET: APIRoute = () => {
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${sitemapUrl}`,
    '',
    '# AI/LLM crawlers',
    `# llms.txt: ${PRIMARY_ORIGIN}/llms.txt`,
    `# llms-full.txt: ${PRIMARY_ORIGIN}/llms-full.txt`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
