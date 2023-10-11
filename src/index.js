import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from "./shared/context/Context";
import { ProvideAuth } from './shared/auth/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <ProvideAuth>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProvideAuth>
  </ContextProvider>
);