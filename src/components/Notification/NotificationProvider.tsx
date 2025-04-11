import { useState, useCallback } from 'react';
import { NotificationContext } from './NotificationContext';
import './Notification.css';

type Props = {
  children: React.ReactNode;
};

const NotificationProvider: React.FC<Props> = ({ children }) => {
  const [message, setMessage] = useState<string | null>(null);

  const showNotification = useCallback((msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 2500);
  }, []);

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {message && <div className="toast">{message}</div>}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;