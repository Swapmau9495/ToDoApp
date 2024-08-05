// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { ThemeProvider } from './ThemeContext';
ReactDOM.render(
  <Provider store={store}>
   <ThemeProvider>
    <App />
  </ThemeProvider>,
  </Provider>,
  document.getElementById('root')
);
