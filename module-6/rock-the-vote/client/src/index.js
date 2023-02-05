import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/UserProvider.js';
import IssueProvider from './context/issueProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
      <IssueProvider>
        <App />
      </IssueProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

