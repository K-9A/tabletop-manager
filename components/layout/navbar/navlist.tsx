import React, { Fragment } from "react";

import Link from "next/link";
import { useSession } from "next-auth/react";

import { List, ListItem } from "@material-tailwind/react";

import {
  UserCircleIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";

function NavList() {
  const { data: session } = useSession();

  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 items-center">
      {session ? (
        <Fragment>
          <Link href={`/campaign-view`}>
            <ListItem className="flex items-center gap-2 py-2 pr-4">
              <div className="flex gap-1 text-base text-black dark:text-gray-300 items-center">
                <CubeTransparentIcon className="flex h-[18px] w-[18px]" />
                Campaigns
              </div>
            </ListItem>
          </Link>

          {/* <NavBarMenu /> */}
          <Link href={`/character-view`}>
            <ListItem className="flex items-center gap-2 py-2 pr-4">
              <div className="flex gap-1 text-base text-black dark:text-gray-300 items-center">
                <UserCircleIcon className="h-[20px] w-[20px]" />
                Character Sheets
              </div>
            </ListItem>
          </Link>

          <Link href={`/user/${(session?.user as any)?.id as any}`}>
            <ListItem className="flex items-center gap-2 py-2 pr-4">
              <div className="flex gap-1 text-base text-black dark:text-gray-300 items-center">
                <UserCircleIcon className="h-[20px] w-[20px]" />
                Dashboard
              </div>
            </ListItem>
          </Link>
        </Fragment>
      ) : (
        <Fragment></Fragment>
      )}
    </List>
  );
}

export default NavList;
