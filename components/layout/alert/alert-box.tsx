import React, { Fragment, useState, useEffect } from "react";
import { Alert } from "@material-tailwind/react";
import { useAlert } from "./alert-context";
import { AlertColor } from "@/components/types/alert-types";
import { InfoIcon, CheckmarkIcon, ExclaimIcon } from "./svg-icons";

export default function AlertBox() {
  const alertContext = useAlert();

  if (!alertContext) {
    throw new Error("useAlert must be used within an AlertProvider");
  }

  const { alerts, removeAlert } = alertContext;

  // Set open state based on whether there are alerts
  const [open, setOpen] = useState(false);

  // Assuming alerts is an array, you can map over it to display multiple alerts.
  // For now only one alert will be handled.
  const firstAlert = alerts[0];

  // This effect sets the 'open' state to true when there's a new alert.
  useEffect(() => {
    if (firstAlert) {
      setOpen(true);
    }
  }, [firstAlert]);

  // This effect handles the timeout to auto-close the alert.
  useEffect(() => {
    if (open) {
      const timerId = setTimeout(() => {
        setOpen(false);
        if (firstAlert) {
          removeAlert(firstAlert.message);
        }
      }, 3000); // 2 seconds

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [open, firstAlert, removeAlert]);

  let alertColor: AlertColor;
  let AlertIcon: React.ComponentType; // This specifies the type as a React component

  switch (firstAlert?.type) {
    case "success":
      alertColor = "green";
      AlertIcon = CheckmarkIcon;
      break;
    case "error":
      alertColor = "red";
      AlertIcon = ExclaimIcon;
      break;
    case "info":
      alertColor = "blue";
      AlertIcon = InfoIcon;
      break;
    default:
      alertColor = "blue"; // Default fallback color
      AlertIcon = InfoIcon; // Default fallback icon
  }

  return (
    <Fragment>
      {firstAlert?.message && (
        <Alert
          icon={<AlertIcon />}
          color={alertColor}
          open={open}
          onClose={() => setOpen(false)}
        >
          {firstAlert.message || "Default placeholder message"}
        </Alert>
      )}
    </Fragment>
  );
}
