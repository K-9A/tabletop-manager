import React from "react";
import { Typography } from "@material-tailwind/react";

interface ErrorMessageProps {
  message: string | null;
}

//General error message function
const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }): JSX.Element | null => (
  message ? (
    <div className="h-0">
      <Typography color="red" className="text-sm">
        {message}
      </Typography>
    </div>
  ) : null
);


export default ErrorMessage;
