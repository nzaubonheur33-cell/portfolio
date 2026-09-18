import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
import '../css/input.css'; // Tailwind directives
import { ThemeProvider } from './ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
