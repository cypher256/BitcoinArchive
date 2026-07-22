/// <reference types="astro/client" />

// Globals set by public/scripts/chart-anim.js — a plain (non-module, no d3
// dependency) script loaded via a classic <script src> tag ahead of the
// chart client scripts below, so it can't be `import`ed. Declared here once
// so every chart component's client script can reference `window.BAChartAnim`
// without each repeating an inline type or triggering "property does not
// exist on Window".
interface BAChartAnimReplayOpts {
  duration?: number;
  onFrame?: (progress: number) => void;
  ease?: (progress: number) => number;
  threshold?: number;
}

interface BAChartAnim {
  playOnScroll(el: Element | null, opts?: BAChartAnimReplayOpts): () => void;
}

interface Window {
  BAChartAnim?: BAChartAnim;
}
