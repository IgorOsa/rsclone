import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import './locales/locales';

ReactDOM.render(
  <Suspense fallback="loading">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);
