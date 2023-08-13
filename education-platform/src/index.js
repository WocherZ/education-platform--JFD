import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import reportWebVitals from './reportWebVitals';
import { store} from './store';
import { Provider } from "react-redux";

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
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
);

reportWebVitals();
