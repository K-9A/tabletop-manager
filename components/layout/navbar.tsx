import React from "react";

import Link from "next/link";
import ThemeSwitch from "./dark-mode/theme-switch";

import { useSession, signOut } from "next-auth/react";



import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Chip,
} from "@material-tailwind/react";

import {
  ChevronDownIcon,
  UserCircleIcon,
  CubeTransparentIcon,
  Bars3Icon,
  XMarkIcon,
  FlagIcon,
  ChatBubbleOvalLeftIcon,
  UsersIcon,
  FolderIcon,
  Square3Stack3DIcon,
  RocketLaunchIcon,
  FaceSmileIcon,
  PuzzlePieceIcon,
  GiftIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

import { ColorKey } from "../types/color-key-types";

const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
  black: "bg-black text-white",
};

const navListMenuItems: {
  color: ColorKey;
  icon: any;
  title: React.ReactNode;
  description: string;
}[] = [
  {
    color: "blue",
    icon: FlagIcon,
    title: "About us",
    description: "Learn about our story and our mission statement.",
  },
  {
    color: "orange",
    icon: ChatBubbleOvalLeftIcon,
    title: "Press",
    description: "News and writings, press releases, and resources",
  },
  {
    color: "green",
    icon: UsersIcon,
    title: (
      <div className="flex items-center gap-1">
        Careers{" "}
        <Chip
          size="sm"
          color="green"
          variant="ghost"
          value="We're hiring!"
          className="capitalize"
        />
      </div>
    ),
    description: "We are always looking for talented people. Join us!",
  },
  {
    color: "blue-gray",
    icon: FolderIcon,
    title: "Legal",
    description: "All the stuff that we dan from legal made us add.",
  },
  {
    color: "purple",
    icon: RocketLaunchIcon,
    title: "Products",
    description: "Checkout our products that helps a startup running.",
  },
];

function NavBarMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className={`rounded-lg p-5 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="black"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" color="black" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 text-black"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" />
              Party Sheets
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  const { data: session } = useSession();

  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      {session ? (
        <>
          <Typography
            as="a"
            href="#"
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
            href="#"
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
            href="#"
            variant="small"
            color="black"
            className="font-normal"
          >
            <ListItem className="flex items-center gap-2 py-2 pr-4">
              <UserCircleIcon className="h-[18px] w-[18px]" />
              Account
            </ListItem>
          </Typography>
        </>
      ) : (
        <></>
      )}
    </List>
  );
}

export function NavBar() {
  const [openNav, setOpenNav] = React.useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

  const { data: session } = useSession();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  //Function that transfers the user baack to homepage to flash alert message they logged out
  const handleLogout = () => {
    signOut({
      callbackUrl: `${window.location.origin}/?loggedOut=true`
  });
  };

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-4">
      <div className="flex items-center justify-between text-black">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          Tabletop Manager
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
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

          <div className="w-24 flex justify-center items-center">
            <ListItem className="flex items-center">
              <span className="px-2">
                {isDarkMode ? (
                  <MoonIcon className="h-6 w-6" />
                ) : (
                  <SunIcon className="h-6 w-6" />
                )}
              </span>
              <ThemeSwitch
                isDarkMode={isDarkMode}
                toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
              />
            </ListItem>
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
          {!session ? (
            <>
              <Link href="/login">
                <Button
                  variant="outlined"
                  size="lg"
                  className="bg-white whitespace-nowrap py-3 px-10 text-center w-full"
                >
                  Login
                </Button>
              </Link>

              <Link href="/register">
                <Button
                  variant="gradient"
                  size="lg"
                  className="whitespace-nowrap"
                >
                  Register
                </Button>
              </Link>
            </>
          ) : (
            <Button
              variant="gradient"
              size="lg"
              className="whitespace-nowrap"
              onClick={() => handleLogout()}
            >
              Log Out
            </Button>
          )}
        </div>
        <div className="w-24 flex justify-center items-center text-black">
          <ListItem className="flex items-center">
            <span className="px-2">
              {isDarkMode ? (
                <MoonIcon className="h-6 w-6" />
              ) : (
                <SunIcon className="h-6 w-6" />
              )}
            </span>
            <ThemeSwitch
              isDarkMode={isDarkMode}
              toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
            />
          </ListItem>
        </div>
      </Collapse>
    </Navbar>
  );
}
