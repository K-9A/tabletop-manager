import { useCallback } from 'react';
import { useAlert } from "./alert-context";
import { AlertType } from '@/components/types/alert-types';

//Custom hook so that alerts can be used to avoid unnenecessaary re-renders.
function useMemoizedAlert() {

    const alertContext = useAlert();

  if (!alertContext) {
    throw new Error("useAlert must be used within an AlertProvider");
  }

  const { addAlert } = alertContext;

  return useCallback(
    (message: string, type: AlertType) => {
      addAlert(message, type);
    },
    [addAlert]
  );
}

export default useMemoizedAlert;