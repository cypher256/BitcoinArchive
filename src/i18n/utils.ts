import { defaultLang, ui, type Lang } from './ui';
import { getJapaneseParticipantDisplayName, participantDisplayNamesJaBySlug } from './participants';
import { tagTranslations } from './tags';
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

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const siteOrigin = import.meta.env.SITE ?? 'https://cypher256.github.io';

export function localePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'ja') {
    return `${base}/ja${clean}`;
  }
  return `${base}${clean}`;
}

/** Absolute URL for hreflang/canonical (e.g. https://bitcoin-archive.pages.dev/about/) */
export function absoluteUrl(path: string, lang: Lang): string {
  return `${siteOrigin}${localePath(path, lang)}`;
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

/** Entries excluding biographies — use for all listing/counting contexts */
export async function getDisplayEntries(lang: Lang): Promise<CollectionEntry<'entries' | 'entries_ja'>[]> {
  const entries = await getEntries(lang);
  return entries.filter((e) => e.data.aftermathType !== 'biography');
}

export async function getBiographyForParticipant(
  lang: Lang,
  participantSlug: string,
): Promise<CollectionEntry<'entries' | 'entries_ja'> | undefined> {
  const entries = await getEntries(lang);
  return entries.find(
    (e) =>
      e.data.aftermathType === 'biography' &&
      e.data.participants[0]?.slug === participantSlug,
  );
}

export function translateParticipantName(name: string, slug: string | undefined, lang: Lang): string {
  if (lang === 'ja') {
    return getJapaneseParticipantDisplayName(name, slug);
  }
  return name;
}

export function translateTag(tag: string, lang: Lang): string {
  if (lang === 'ja') {
    return participantDisplayNamesJaBySlug[tag] ?? tagTranslations[tag] ?? tag;
  }
  return tag;
}
