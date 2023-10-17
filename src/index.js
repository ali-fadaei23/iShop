import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from "./shared/context/Context";
import { ProvideAuth } from './shared/auth/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProvideAuth>
    <ContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ContextProvider>
  </ProvideAuth>
);