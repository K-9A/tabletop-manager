import React, { useEffect, Fragment } from "react";

import NavBarMenu from "./navbarmenu";
import NavList from "./navlist";
import NavLogo from "./nav-logo";
import { AuthNavButtons } from "./auth-nav-buttons";
import { DarkModeToggle } from "./dark-mode/dark-mode";

import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useSession } from "next-auth/react";

import { Navbar, Collapse, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";



<Fragment>
  <NavBarMenu />
  <NavList />
</Fragment>;

export function NavBar() {
  const [openNav, setOpenNav] = React.useState<boolean>(false);

  //Dark mode selector for icons
  const isDarkMode = useSelector((state: RootState) => state.darkMode);

  const { data: session } = useSession();

    useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    
    <Navbar className="mx-auto max-w-screen-xl px-4 py-4">
      <div className="flex items-center justify-between text-black">
        <NavLogo />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <AuthNavButtons session={session} />

          <div className="w-24 flex justify-center items-center">
            <DarkModeToggle isDarkMode={isDarkMode} />
          </div>
        </div>

        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex flex-col items-center justify-center gap-2 lg:hidden w-full ">
          <AuthNavButtons session={session} />
        </div>

        <div className="w-24 flex justify-center items-center text-black">
          <DarkModeToggle isDarkMode={isDarkMode} />
        </div>
      </Collapse>
    </Navbar>
  );
}
