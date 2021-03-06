import React from 'react';
import { jsx } from 'slate-hyperscript';
import NxSlatePlugin from '@jswork/next-slate-plugin';

/**
 * @usage:
 * Editor.addMark(editor,'code', true)
 */

export default NxSlatePlugin.define({
  id: 'code',
  hotkey: 'mod+c',
  serialize: {
    input: ({ el }, children) => {
      const nodeName = el.nodeName.toLowerCase();
      if (nodeName === 'code') {
        return jsx('text', { code: true }, children);
      }
    },
    output: ({ el, text }) => {
      const code = document.createElement('code');
      code.innerText = text;
      return code;
    }
  },
  render: (_, { attributes, children, leaf }) => {
    return <code {...attributes}>{children}</code>;
  }
});
