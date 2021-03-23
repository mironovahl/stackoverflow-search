import React from 'react';
import { Provider } from 'react-redux';

import logo from './logo.svg';
import Routes from './routes';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
