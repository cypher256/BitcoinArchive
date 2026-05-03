/**
 * editor-note.ts — render the frontmatter `editorNote` field safely.
 *
 * The `editorNote` field is plain text by contract, but we want to support
 * one piece of light formatting: inline markdown links `[text](url)` should
 * render as real `<a>` elements when present. Doing this with `set:html`
 * naively would re-introduce an HTML-injection sink in a frontmatter field
 * that is not otherwise sanitized.
 *
 * `renderEditorNote()` is the safe path:
 *
 *   1. HTML-escape the entire input first so any stray `<script>`, attribute
 *      injection attempts, or pre-escaped HTML in the source string are
 *      rendered as literal text.
 *   2. Then convert `[label](url)` patterns to `<a href="…">…</a>`. The label
 *      and URL are already HTML-escaped by step 1.
 *   3. Reject non-allowlisted URL schemes. Only internal site paths (`/…`)
 *      and `http(s)://` are permitted; anything else (e.g. `javascript:`,
 *      `data:`, `vbscript:`) leaves the markdown literal in place rather
 *      than producing a clickable element.
 *
 * The function returns a string that is safe to pass to Astro's `set:html`.
 */

const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => HTML_ESCAPES[c]);
}

function isAllowedUrl(rawUrl: string): boolean {
  // Internal site paths.
  if (rawUrl.startsWith('/')) return true;
  // Absolute http(s) URLs.
  if (/^https?:\/\//i.test(rawUrl)) return true;
  // Anchor-only links.
  if (rawUrl.startsWith('#')) return true;
  return false;
}

export function renderEditorNote(input: string): string {
  const escaped = escapeHtml(input);
  // After HTML escaping, the markdown link punctuation `[`, `]`, `(`, `)` is
  // unaffected, so the same regex still matches.
  return escaped.replace(
    /\[([^\]]+)\]\(([^)\s]+)\)/g,
    (match, label, url) => {
      if (!isAllowedUrl(url)) return match;
      // `url` and `label` are already HTML-escaped at this point.
      return `<a href="${url}">${label}</a>`;
    },
  );
}
