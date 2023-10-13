import axios from "@/utils/axios-instance";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { useMemoizedAlert } from "@/components/layout/alert";
import { ErrorResponse, MessageError } from "@/components/types/error-types";
import { registerSchema } from "@/components/validation-schema/auth-schema";

export const useRegister = () => {

    const router = useRouter();
    const addAlertMemo = useMemoizedAlert();

    // Typeguard for error functions
  function isErrorWithResponse(error: any): error is ErrorResponse {
    return (
      error && error.response && typeof error.response.data.error === "string"
    );
  }

  function isErrorWithMessage(error: any): error is MessageError {
    return error && typeof error.message === "string";
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      try {
        //Point Axios to the Register API route.
        const response = await axios.post("/register", {
          username: values.username,
          email: values.email,
          password: values.password,
        });

        if (response.status === 201) {
          addAlertMemo("Registration successful!", "success");
            router.push("/login");
        }
      } catch (error) {
        if (isErrorWithResponse(error)) {
          addAlertMemo("Registration failed. Please try again.", "error");
        } else if (isErrorWithMessage(error)) {
          addAlertMemo("Registration failed. Please try again.", "error");
        } else {
          addAlertMemo("Registration failed.", "error");
        }
      }
    },
  });

  return { formik };

}