import React, { useState, useRef } from 'react';
import FocusLock from 'react-focus-lock';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import { Menu } from '../Menu';
import { Burguer } from '../Burguer';

export function BurguerMenu({ content }) {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = 'main-menu';

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <FocusLock disabled={!open}>
        <Burguer open={open} setOpen={setOpen} aria-controls={menuId} />
        <Menu content={content} open={open} setOpen={setOpen} id={menuId} />
      </FocusLock>
    </div>
  );
}
