import { defaultLang, ui, type Lang } from './ui';
import { getCollection, type CollectionEntry } from 'astro:content';

export function getLangFromUrl(url: URL): Lang {
  const pathParts = url.pathname.split('/');
  // URL: /BitcoinArchive/ja/... → pathParts includes 'ja'
  const jaIndex = pathParts.indexOf('ja');
  if (jaIndex !== -1) return 'ja';
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang]?.[key] ?? ui[defaultLang][key];
  };
}

export function localePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'ja') {
    return `/BitcoinArchive/ja${clean}`;
  }
  return `/BitcoinArchive${clean}`;
}

export async function getEntries(lang: Lang): Promise<CollectionEntry<'entries' | 'entries_ja'>[]> {
  const collection = lang === 'ja' ? 'entries_ja' : 'entries';
  const entries = await getCollection(collection);
  return entries.sort((a, b) => new Date(a.data.date).getTime() - new Date(b.data.date).getTime());
}

export async function getEntriesBySource(lang: Lang, source: string) {
  const entries = await getEntries(lang);
  return entries.filter((e) => e.data.source === source);
}

export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === 'ja' ? 'ja-JP' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function formatDateShort(date: Date): string {
  return date.toISOString().slice(0, 10);
}
