import { visit } from 'unist-util-visit';

const ENTRY_CLOSING_MARKER = /^<!--\s*entry-closing\s*-->$/;

/**
 * Turn a semantic Markdown marker into the class used by the page-level
 * closing paragraph style. The marker itself is implementation detail and is
 * removed from the rendered document.
 */
export function remarkEntryClosing() {
  return function transformer(tree) {
    const markers = [];

    visit(tree, 'html', (node, index, parent) => {
      if (
        parent &&
        index != null &&
        ENTRY_CLOSING_MARKER.test(String(node.value ?? '').trim())
      ) {
        markers.push({ index, parent });
      }
    });

    for (const { index, parent } of markers.reverse()) {
      const paragraph = parent.children[index + 1];

      if (!paragraph || paragraph.type !== 'paragraph') {
        throw new Error(
          'The entry-closing marker must be immediately followed by a Markdown paragraph.',
        );
      }

      paragraph.data = paragraph.data || {};
      const properties = paragraph.data.hProperties || {};
      const classNames = Array.isArray(properties.className)
        ? properties.className
        : properties.className
          ? [properties.className]
          : [];

      paragraph.data.hProperties = {
        ...properties,
        className: classNames.includes('entry-closing')
          ? classNames
          : [...classNames, 'entry-closing'],
      };

      parent.children.splice(index, 1);
    }
  };
}

export default remarkEntryClosing;
