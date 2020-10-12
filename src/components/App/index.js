import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../../routes';
import Menu from '../Menu';

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
