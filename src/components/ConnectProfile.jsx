import { removeFollow, storeFollow } from "@/services/http";
import VerifiedIcon from "./shared/VerifiedIcon";
import { Link } from "react-router-dom";

const ConnectProfile = ({ user }) => {
  return (
    <div className="max-w-md mx-auto p-2 text-center bg-white rounded-lg shadow-md w-full">
      <div>
        <Link
          to={`/profile/${user?.id}`}
          className="flex flex-col items-center"
        >
          <div className="relative">
            <img
              className="object-cover h-[130px] w-[130px] rounded-full shadow"
              src={user?.profile_image}
              alt="Avatar"
            />
          </div>
          <div className="flex flex-col ml-2 mt-2">
            <div
              href="#"
              className="font-bold text-gray-700 flex gap-2 items-center capitalize dark:text-gray-200"
            >
              {user?.name} {"   "} {user?.is_verified && <VerifiedIcon />}
            </div>
            <span className="text-md text-gray-500 dark:text-gray-300 capitalize">
              {user?.roles}
            </span>
          </div>
        </Link>
      </div>
      <div className="flex justify-center">
        <buttn
          className="text-blue-500 border border-blue-400 rounded-md px-3 cursor-pointer hover:text-blue-700 mt-2"
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
          {user?.is_followed ? "Following" : "Follow"}
        </buttn>
      </div>
    </div>
  );
};

export default ConnectProfile;
