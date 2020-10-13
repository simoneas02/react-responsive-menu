import React from 'react';
import { NavLink } from 'react-router-dom';

import { mapRoutes } from '../../routes';
import MenuToggle from '../MenuToggle';

import './style.css';

const Menu = ({ open, setOpen }) => (
  <>
    <MenuToggle open={open} setOpen={setOpen} />
    <nav className={`nav-menu ${open ? 'nav-show' : ''}`}>
      <ul className={`menu-list ${open ? 'menu-list-show' : ''}`}>
        {mapRoutes.map(({ path, icon: Component, menu, exact }, index) => (
          <li
            key={index}
            className={`${open ? 'menu-list-item-show' : ''}`}
            onClick={() => setOpen(false)}
          >
            <NavLink
              className="nav-link"
              activeClassName="selected"
              exact={exact}
              rel="noopener noreferrer"
              to={path}
            >
              <Component />
              {menu}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </>
);

export default Menu;
