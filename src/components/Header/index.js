import React, { useState } from 'react';
import Menu from '../Menu';

import './style.css';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`header ${open ? 'header-show' : ''}`}>
      <h1>Logo</h1>
      <Menu open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
