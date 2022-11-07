import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import { ApiContextProvider } from './apiContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiContextProvider>
      <App />
    </ApiContextProvider>
  </React.StrictMode>
);
