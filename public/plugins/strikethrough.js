import React from 'react';
import { jsx } from 'slate-hyperscript';

/**
 * @usage:
 * Editor.addMark(editor,'strikethrough', true)
 */

export default {
  name: 'strikethrough',
  importer: (el, children) => {
    const nodeName = el.nodeName.toLowerCase();
    if (nodeName === 's') {
      return jsx('text', { strikethrough: true }, children);
    }
  },
  exporter: (el) => {
    const s = document.createElement('s');
    s.appendChild(el);
    return s;
  },
  hooks: {
    leaf: (_, { attributes, children, leaf }) => {
      return <s {...attributes}>{children}</s>;
    }
  }
};