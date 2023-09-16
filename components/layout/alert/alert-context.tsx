// AlertContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface Alert {
  message: string;
  type: 'success' | 'error' | 'info'; // add more types as needed
}

interface AlertContextType {
  alerts: Alert[];
  addAlert: (message: string, type: 'success' | 'error' | 'info') => void;
  removeAlert: (message: string) => void;
}


const AlertContext = createContext<AlertContextType | null>(null);

export const useAlert = () => {
  return useContext(AlertContext);
};

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const addAlert = (message: string, type: 'success' | 'error' | 'info') => {
    setAlerts([...alerts, { message, type }]);
  };

  const removeAlert = (message: string) => {
    setAlerts(alerts.filter(alert => alert.message !== message));
  };

  return (
    <AlertContext.Provider value={{ alerts, addAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
