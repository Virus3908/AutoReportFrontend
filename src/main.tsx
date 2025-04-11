import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NotificationProvider from './components/Notification/NotificationProvider'; // путь может отличаться

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </React.StrictMode>,
);