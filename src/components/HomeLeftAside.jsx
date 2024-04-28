import VerifiedIcon from "./shared/VerifiedIcon";

const HomeLeftAside = () => {
  const user = JSON.parse(localStorage.getItem("auth_user"));

  return (
    <aside className="w-1/4 h-fit bg-white border border-gray-300 rounded-lg shadow-lg">
      <div className="max-w-md mx-auto p-2 text-center bg-white rounded-lg shadow w-full">
        <div>
          <div className="flex flex-col items-center py-6">
            <div className="relative">
              <img
                className="object-cover h-[150px] w-[150px] rounded-full shadow border-2 border-gray-100"
                src={user?.profile_image}
                alt="Avatar"
              />
            </div>
            <div className="flex flex-col ml-2 mt-2">
              <div className="font-bold text-gray-700 flex gap-2 items-center capitalize dark:text-gray-200">
                {user?.name} {"   "} {user?.is_verified && <VerifiedIcon />}
              </div>
              <span className="text-md text-gray-500 dark:text-gray-300">
                @{user?.user_name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default HomeLeftAside;
