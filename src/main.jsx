// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster position="middle-center" richColors />
    <App />
  </React.StrictMode>
);
