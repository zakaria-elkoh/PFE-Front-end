import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { logOut } from "@/lib/api";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";
import { getFirstLetters } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const ProfileNotificationDropdown = () => {
  const navigate = useNavigate();
  const { authUser, setAuthUser, setIsAuthenticated } = useAuth();

  return (
    <div className="flex items-center gap-5 mt-4 lg:mt-0">
      <a
        className=" text-gray-800 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
        tabIndex="0"
        role="link"
        aria-label="twitter link"
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
        </svg>
      </a>

      <Popover>
        <PopoverTrigger className="bg-green-200 rounded-full">
          <button
            className="p-2 bg-gray-100 rounded-full  text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
            aria-label="show notifications"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </PopoverTrigger>
        <PopoverContent className="px-2 py-3">
          <h2 className="mb-4">Place content for the popover here.</h2>
          <div className="flex flex-col gap-2">
            <div className="px-3 py-2 bg-gray-100 rounded-sm">
              notifications 1
            </div>
            <div className="px-3 py-2 bg-gray-100 rounded-sm">
              notifications 2
            </div>
            <div className="px-3 py-2 bg-gray-100 rounded-sm">
              notifications 3
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <button
        type="button"
        className="flex items-center focus:outline-none"
        aria-label="toggle profile dropdown"
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="rounded-full w-8 h-8"
              size="icon"
              variant="ghost"
            >
              <Avatar className="border-2">
                <AvatarImage
                  src={authUser.profile_image}
                  className="outline-none"
                />
                <AvatarFallback>
                  {getFirstLetters(authUser.name)}
                </AvatarFallback>
              </Avatar>
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <Link to={"/user/profile"} className="w-full h-full px-2 py-1.5">
                My profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Link
                to={"/user/favorate-saves"}
                className="w-full h-full px-2 py-1.5"
              >
                My fave
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer px-2 py-1.5">
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer px-2 py-1.5"
              onClick={() => {
                logOut(setAuthUser, setIsAuthenticated);
                navigate("/login");
              }}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
          {authUser.name}
        </h3>
      </button>
    </div>
  );
};

export default ProfileNotificationDropdown;
