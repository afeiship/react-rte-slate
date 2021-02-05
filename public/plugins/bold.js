import React from 'react';
import { jsx } from 'slate-hyperscript';
import NxSlatePlugin from '@jswork/next-slate-plugin';
/**
 * @usage:
 * Editor.addMark(editor,'bold', true)
 */

export default NxSlatePlugin.define({
  id: 'bold',
  serialize: {
    input: (el, children) => {
      const nodeName = el.nodeName.toLowerCase();
      if (nodeName === 'span' && el.style.fontWeight === 'bold') {
        return jsx('text', { bold: true }, children);
      }
    },
    output: ({ el }) => {
      el.style.fontWeight = 'bold';
      return el;
    }
  },
  render: (_, { attributes, children, leaf }) => {
    return <strong {...attributes}>{children}</strong>;
  }
});
