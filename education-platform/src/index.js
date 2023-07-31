import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import reportWebVitals from './reportWebVitals';

import './styles/reset.css';
import './styles/common.css';

const theme = createTheme(
  {
    palette: {
      mode: 'light',
      primary: {
        main: '#9DEAE2',
      },
      secondary: {
        main: '#f52000',
      },
    }
  }
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
);

reportWebVitals();
