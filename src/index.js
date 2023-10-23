import './index.css';
import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextProvider } from "./shared/context/Context";
import { ProvideAuth } from './shared/auth/AuthContext';


const Theme = createTheme({
  typography: {
    fontFamily: "Fonarto"
  },
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={Theme}>
    <ProvideAuth>
      <ContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ContextProvider>
    </ProvideAuth>
  </ThemeProvider>
);