import { useEffect, useState } from 'react';

const useOnlineStatus = () => {
  const [online, setOnline] = useState(window.navigator.onLine);

  const handleOnline = () => setOnline(true);
  const handleOffline = () => setOnline(false);

  useEffect(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return online;
};

export default useOnlineStatus;
