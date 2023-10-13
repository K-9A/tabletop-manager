import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useSession, getSession } from "next-auth/react";
import { useMemoizedAlert } from "@/components/layout/alert";
import { loginSchema } from "@/components/validation-schema/auth-schema";

export const useLogin = (
  setJustLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const router = useRouter();

  const addAlertMemo = useMemoizedAlert();

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        const result = await signIn("credentials", {
          redirect: false,
          username: values.name,
          password: values.password,
        });

        // Check for errors in the result
        if (result?.error) {
          addAlertMemo(result.error, "error");
          throw new Error(result.error);
        }

        const session = await getSession();
        if (!session || !session.user) {
          router.push("/login");
          return;
        }

        const userId = (session.user as any).id;

        if (userId) {
          router.push(`/user/${userId}`);
          addAlertMemo("Login successful.", "success");
        } else {
          router.push("/login");
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "An unexpected error occurred.";
        formik.setStatus({ apiError: errorMessage });
        addAlertMemo(errorMessage, "error");
      }
    },
  });
  return { formik };
};

export const useRedirectIfLoggedIn = (justLoggedInProp: boolean) => {
  //To make sure alert messages displays properly
  const [localJustLoggedIn, setLocalJustLoggedIn] = useState(justLoggedInProp);
  const addAlertMemo = useMemoizedAlert();

  const { data: session } = useSession();
  const router = useRouter();

  //Client-side user redirection if the user is logged in. This works in tandem with getStaticProps on page level.
  useEffect(() => {
    console.log("Effect running");
    console.log("Session:", session);
    console.log("localJustLoggedIn:", localJustLoggedIn);
    // If there's an active session and the user didn't just login
    if (session && !localJustLoggedIn) {
      addAlertMemo("Already logged in.", "info");
      router.push("/"); // Redirect to the homepage
    }
    if (localJustLoggedIn) {
      setLocalJustLoggedIn(false); // Reset the state so it doesn't interfere with future logins
    }
  }, [session, router, localJustLoggedIn]); // eslint-disable-line react-hooks/exhaustive-deps

  /*
   * Note on ESLint:
   * The `react-hooks/exhaustive-deps` rule is intentionally disabled for this effect.
   * This is because ESLint will flag the absence of the `addAlertMemo` function from
   * the dependency array, even though it's safe to omit due to being a memoized, stable function.
   * Including it would introduce unnecessary re-renders without providing any tangible benefits.
   */
};
