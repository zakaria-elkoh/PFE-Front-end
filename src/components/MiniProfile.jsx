import VerifiedIcon from "./shared/VerifiedIcon";

import { removeFollow, storeFollow } from "@/services/http";
import { Link } from "react-router-dom";
import { set } from "zod";

const MiniProfile = ({ user, refetch }) => {
  return (
    <div className="max-w-lg mx-auto p-2 bg-white rounded-lg shadow-md w-full">
      <div>
        <Link to={`/profile/${user?.id}`} className="flex items-center">
          <div className="relative">
            <img
              className="object-cover h-12 w-12 rounded-full"
              src={user?.profile_image}
              alt="Avatar"
            />
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
              {user?.name} {"   "}
            </a>
            <span className="text-xs text-gray-600 dark:text-gray-300">
              {user?.roles == "lawyer" ? "Lawyer" : ""}
            </span>
          </div>
        </Link>
      </div>
      {/* <Avatar className="border-2 w-24 h-24">
        <AvatarImage src="https://picsum.photos/200" />
        <AvatarFallback>{getFirstLetters("zakaria elkoh")}</AvatarFallback>
      </Avatar>
      <h2 className="text-center text-2xl font-semibold mt-3">John Doe</h2>
      <p className="text-center text-gray-600 mt-1">Lawyer</p> */}
      <div className="flex justify-center">
        <buttn
          className="text-blue-500 border border-blue-400 rounded-md px-3 cursor-pointer hover:text-blue-700 mt-2"
          data-following="false"
          onClick={(e) => {
            if (e.target.textContent === "Following") {
              e.target.textContent = "Follow";
              removeFollow(user?.id);
              refetch();
            } else {
              e.target.textContent = "Following";
              storeFollow(user?.id);
              setTimeout(() => {
                refetch();
              }, 1000);
            }
          }}
        >
          {user?.is_followed ? "Following" : "Follow"}
        </buttn>
      </div>
    </div>
  );
};

export default MiniProfile;
