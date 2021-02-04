import React from 'react';
import { jsx } from 'slate-hyperscript';
import { Path } from 'slate';
import { useSelected, ReactEditor, useSlate } from 'slate-react';


/**
 * @usage:
 * Active:
 * Transforms.setNodes(editor, { type:'list-item' })
 * Transforms.wrapNodes(editor, { type: 'bulleted-list', children: [] })
 *
 * https://github.com/GitbookIO/slate-edit-list
 * https://gitbookio.github.io/slate-edit-list/
 *
 * indent: 缩进一个单位
 Transforms.wrapNodes(editor, { type: 'bulleted-list', children: [] })
 Transforms.setNodes(editor, { type:'list-item' })

 * dedent: 反向缩进一个单位
 Transforms.unwrapNodes(editor, {
    match: n => n.type === 'bulleted-list' || n.type === 'numbered-list' ,
    split: true,
  })

 */

export default {
  name: 'bulleted-list',
  importer: (el, children) => {
    const nodeName = el.nodeName.toLowerCase();
    if (nodeName === 'ul') {
      return jsx('element', { type: 'bulleted-list' }, children);
    }
  },
  exporter: (node, children) => {
    return `<ul>${children}</ul>`;
  },
  hooks: {
    element: (inContext, { attributes, children, element }) => {
      const path = ReactEditor.findPath(inContext.editor, element);
      return <ul data-depth={path.length} {...attributes}>{children}</ul>;
    }
  }
};