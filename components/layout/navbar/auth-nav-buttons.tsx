import React, { Fragment } from "react";
import Link from "next/link";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

import {
  Button,
} from "@material-tailwind/react";

interface SessionActionsProps {
    session: Session | null; // Replace SessionType with the correct type
  }

  //Function that transfers the user back to homepage to flash alert message they logged out
  const handleLogout = () => {
    signOut({
      callbackUrl: `${window.location.origin}/?loggedOut=true`,
    });
};

export const AuthNavButtons: React.FC<SessionActionsProps> = ({ session }) => (
  <Fragment>
    {!session ? (
      <>
        <Link href="/login">
          <Button
            variant="gradient"
            size="sm"
            color="white"
            className="bg-white text-black border-2 border-black px-5 py-3"
          >
            Login
          </Button>
        </Link>

        <Link href="/register">
          <Button
            variant="gradient"
            size="sm"
            className="border-2 border-black px-5 py-3"
          >
            Register
          </Button>
        </Link>
      </>
    ) : (
      <>
        <Button
          variant="gradient"
          size="sm"
          className="whitespace-nowrap"
          onClick={() => handleLogout()}
        >
          Log Out
        </Button>
      </>
    )}
  </Fragment>
);
