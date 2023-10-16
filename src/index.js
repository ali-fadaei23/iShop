import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from "./shared/context/Context";
import { ProvideAuth } from './shared/auth/AuthContext';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProvideAuth>
    <ContextProvider>
      <React.StrictMode>
        <HashRouter >
          <App />
        </HashRouter>
      </React.StrictMode>
    </ContextProvider>
  </ProvideAuth>
);