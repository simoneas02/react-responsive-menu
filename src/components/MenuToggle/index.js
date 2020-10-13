import React from 'react';

import './style.css';

const MenuToggle = ({ open, setOpen }) => (
  <button className="button-toggle" onClick={() => setOpen(!open)}>
    <div className={`toggle-line ${open ? 'one-open' : 'toggle-line-close'}`} />

    <div className={`toggle-line ${open ? 'two-open' : 'two-close'}`} />

    <div
      className={`toggle-line ${open ? 'three-open' : 'toggle-line-close'}`}
    />
  </button>
);

export default MenuToggle;
