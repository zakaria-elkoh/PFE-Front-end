import { getFirstLetters } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import VerifiedIcon from "./shared/VerifiedIcon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const MiniProfile = () => {
  return (
    <div className="max-w-lg mx-auto p-2 bg-white rounded-lg shadow-md w-full">
      <div>
        <div className="flex items-center">
          <div className="relative">
            <img
              className="object-cover h-12 rounded-full"
              src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
              alt="Avatar"
            />
            <div className="absolute top-[65%] left-[58%]">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <VerifiedIcon />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>we confirm that this is a real profile</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className="flex flex-col ml-2">
            <a
              href="#"
              className="font-bold text-gray-700 capitalize dark:text-gray-200"
              tabIndex="0"
              role="link"
            >
              zakaria elkoh
            </a>
            <span className="text-xs text-gray-600 dark:text-gray-300">
              Lawyer
            </span>
          </div>
        </div>
      </div>
      {/* <Avatar className="border-2 w-24 h-24">
        <AvatarImage src="https://picsum.photos/200" />
        <AvatarFallback>{getFirstLetters("zakaria elkoh")}</AvatarFallback>
      </Avatar>
      <h2 className="text-center text-2xl font-semibold mt-3">John Doe</h2>
      <p className="text-center text-gray-600 mt-1">Lawyer</p> */}
      <div className="flex justify-center">
        <a href="#" className="text-blue-500 hover:text-blue-700 mt-2">
          Follow
        </a>
      </div>
    </div>
  );
};

export default MiniProfile;
