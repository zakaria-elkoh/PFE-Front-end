import VerifiedIcon from "./shared/VerifiedIcon";

import { removeFollow, storeFollow } from "@/services/http";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { getFirstLetters } from "@/lib/utils";

const FollowerProfile = ({ user }) => {
  return (
    <div className="flex items-center max-w-lg mx-auto p-2 bg-white rounded-lg shadow-md w-full ">
      <div className="flex-1">
        <Link to={`/profile/${user.user_name}`} className="flex items-center">
          <div className="relative">
            <Avatar className="border-2 w-12 h-12 flex justify-center items-center font-bold">
              <AvatarImage src={user.profile_image} />
              <AvatarFallback>{getFirstLetters(user.name)}</AvatarFallback>
            </Avatar>
            <div className="absolute top-[62%] left-[55%]">
              {user?.is_verified && <VerifiedIcon />}
            </div>
          </div>
          <div className="flex flex-col ml-2">
            <a
              href="#"
              className="font-bold text-gray-700 capitalize dark:text-gray-200"
              tabIndex="0"
              role="link"
            >
              {user?.name}
            </a>
            <span className="text-xs text-gray-600 text-left dark:text-gray-300">
              {user?.roles == "lawyer" ? "Lawyer" : null}
            </span>
          </div>
        </Link>
      </div>
      <div className="flex justify-center">
        <buttn
          className="text-blue-500 border border-blue-400 rounded-md px-3 cursor-pointer hover:text-blue-700"
          data-following="false"
          onClick={(e) => {
            if (e.target.textContent === "Following") {
              e.target.textContent = "Follow";
              removeFollow(user?.id);
            } else {
              e.target.textContent = "Following";
              storeFollow(user?.id);
            }
          }}
        >
          Following
        </buttn>
      </div>
    </div>
  );
};

export default FollowerProfile;
