import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { FcHome, FcPhone, FcFlashOn, FcIdea } from 'react-icons/fc';

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Portfolio from './components/Pages/Portfolio';
import ErrorPage from './components/Pages/ErrorPage';

export const mapRoutes = [
  {
    path: '/',
    exact: true,
    menu: 'Home',
    component: Home,
    icon: FcHome,
  },
  {
    path: '/about',
    exact: true,
    menu: 'About',
    component: About,
    icon: FcFlashOn,
  },
  {
    path: '/contact',
    exact: true,
    menu: 'Contact',
    component: Contact,
    icon: FcPhone,
  },
  {
    path: '/portfolio',
    exact: true,
    menu: 'Portfolio',
    component: Portfolio,
    icon: FcIdea,
  },
];

const Routes = () => (
  <Switch>
    {mapRoutes.map(({ exact, path, component: Component }) => (
      <Route key={path} exact={exact} path={path}>
        <Component />
      </Route>
    ))}
    <Route>
      <ErrorPage />
    </Route>
  </Switch>
);
export default Routes;
