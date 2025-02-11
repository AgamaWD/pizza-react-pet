import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router";

import configureStore from './redux/store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <Provider store={configureStore} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

