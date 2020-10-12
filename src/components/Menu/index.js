import React from 'react';
import { Link } from 'react-router-dom';

import { mapRoutes } from '../../routes';

const Menu = () => (
  <ul>
    {mapRoutes.map(({ path, icon: Component, menu }, index) => (
      <li key={index}>
        <Link rel="noopener noreferrer" to={path}>
          <Component />
          {menu}
        </Link>
      </li>
    ))}
  </ul>
);

export default Menu;
