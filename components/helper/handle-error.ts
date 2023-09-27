import {
    isErrorWithMessage,
    isErrorWithResponse,
  } from "@/components/types/error-typeguard";

const handleError = (error: any, res: any) => {
    // Use type guards to narrow the error type
    if (isErrorWithResponse(error)) {
      res.status(500).json({ success: false, message: error.response.data.error });
      console.error("Database error:", error);
    } else if (isErrorWithMessage(error)) {
      res.status(500).json({ success: false, message: error.message });
      console.error("Database error:", error);
    } else {
      res.status(500).json({ success: false, message: "An unexpected error occurred." });
      console.error("Database error:", error);
    }
  };

  export default handleError;