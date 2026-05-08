/**
 * astro-ja-section.mjs — locate `labels.ja: { ... }` blocks in .astro files.
 *
 * Background:
 *   .astro components ship reader-facing JA labels in TS code, typically as
 *   a `labels = { en: { ... }, ja: { ... } } as const` map. JA prose checks
 *   need to scan everything inside the `ja:` block — including English-only
 *   lines such as `block1: 'Block 1'` (a value that will display to JA UI
 *   readers and must follow the same conventions as JA-character-bearing
 *   lines).
 *
 *   A naive "skip lines without JA characters" filter misses exactly those
 *   lines. Use these helpers instead: identify the `ja:` block by source
 *   structure (with brace tracking after string/comment masking), then a
 *   line counts as in-scope if it falls inside any such block OR contains
 *   JA characters (the latter catches JA prose elsewhere — e.g. inside
 *   <script>, <style>, or template body).
 */

/**
 * Returns 1-based [{ startLine, endLine }] inclusive ranges, one per
 * `ja: { ... }` block found in `content`.
 */
export function findJaSectionLineRanges(content) {
  let masked = content;
  // Order matters: handle multi-line constructs first so they don't get
  // partly interpreted as something else.
  masked = masked.replace(/`(?:[^`\\]|\\.)*`/gs, (m) => m.replace(/[^\n]/g, ' '));
  masked = masked.replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '));
  masked = masked.replace(/\/\/[^\n]*/g, (m) => ' '.repeat(m.length));
  masked = masked.replace(/'(?:[^'\\\n]|\\.)*'/g, (m) => "'" + ' '.repeat(m.length - 2) + "'");
  masked = masked.replace(/"(?:[^"\\\n]|\\.)*"/g, (m) => '"' + ' '.repeat(m.length - 2) + '"');

  const ranges = [];
  const re = /\bja\s*:\s*\{/g;
  let m;
  while ((m = re.exec(masked)) !== null) {
    let depth = 1;
    let i = m.index + m[0].length;
    while (i < masked.length && depth > 0) {
      const c = masked[i];
      if (c === '{') depth++;
      else if (c === '}') depth--;
      i++;
    }
    const startLine = masked.slice(0, m.index).split('\n').length;
    const endLine = masked.slice(0, i).split('\n').length;
    ranges.push({ startLine, endLine });
  }
  return ranges;
}

export function lineInJaSection(lineNum, ranges) {
  for (const { startLine, endLine } of ranges) {
    if (lineNum >= startLine && lineNum <= endLine) return true;
  }
  return false;
}
