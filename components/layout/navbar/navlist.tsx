import React from "react";

import NavBarMenu from "./navbarmenu";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { Typography, List, ListItem } from "@material-tailwind/react";

import {
  UserCircleIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";


function NavList() {
  const { data: session } = useSession();

  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      {session ? (
        <>
          <Typography
            as="a"
            variant="small"
            color="black"
            className="font-normal"
          >
            <ListItem className="flex items-center gap-2 py-2 pr-4">
              <CubeTransparentIcon className="h-[18px] w-[18px]" />
              Campaign
            </ListItem>
          </Typography>
          <NavBarMenu />
          <Typography
            as="a"
            variant="small"
            color="black"
            className="font-normal"
          >
            <ListItem className="flex items-center gap-2 py-2 pr-4">
              <UserCircleIcon className="h-[18px] w-[18px]" />
              Character Sheet
            </ListItem>
          </Typography>
          <Typography
            as="a"
            variant="small"
            color="black"
            className="font-normal"
          >
            <ListItem className="flex items-center gap-2 py-2 pr-4">
              <UserCircleIcon className="h-[18px] w-[18px]" />
              <Link href={`/user/${(session?.user as any)?.id as any}`}>Dashboard</Link>
            </ListItem>
          </Typography>
        </>
      ) : (
        <></>
      )}
    </List>
  );
}

export default NavList;
