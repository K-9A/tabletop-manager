import React from "react";
import {
    Typography,
    MenuItem,
    Chip,
  } from "@material-tailwind/react";

import {
    FlagIcon,
    ChatBubbleOvalLeftIcon,
    UsersIcon,
    FolderIcon,
    RocketLaunchIcon,
  } from "@heroicons/react/24/outline";

  

  import { ColorKey } from "../../types/color-key-types";

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


  export const NavRender = navListMenuItems.map(
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