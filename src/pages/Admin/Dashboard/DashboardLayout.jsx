import Aside from "@/components/Aside/Aside";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Toaster } from "sonner";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { authUser } = useAuth();

  console.log("auttttt", authUser.roles.includes("user"));

  useEffect(() => {
    if (!localStorage.getItem("auth_user")) {
      navigate("/login");
    } else if (!authUser.roles.includes("admin")) {
      navigate("/");
    }
  }, []);

  if (!localStorage.getItem("auth_user")) {
    return false;
  } else if (!authUser.roles.includes("admin")) {
    return false;
  }

  return (
    <div className="bg-gray-100 flex p-3">
      <Aside />
      <div className="flex-1 px-2">
        <Toaster position="top-center" />
        {/* <nav className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
          <p>Dashboard</p>
          <div className="flex items-center gap-3">
            <Avatar className="border-2">
              <AvatarImage />
              <AvatarFallback>{getFirstLetters(authUser.name)}</AvatarFallback>
            </Avatar>
            <div>
              <p>{authUser.name}</p>
              <p>@{authUser.user_name}</p>
            </div>
          </div>
        </nav> */}
        <div className="max-w-screen-xl bg-white p-3 rounded-lg shadow mx-auto flex justify-between items-center sticky top-3 z-50">
          <h2 className="font-semibold text-3xl text-gray-800">Search:</h2>
          <div className="flex items-center gap-5 flex-grow">
            <div className="relative max-w-md shadow mx-auto flex-grow hover:shadow-md rounded-lg">
              <input
                type="search"
                id="search-input"
                className="block w-full outline-none p-4 ps-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search..."
                required
              />
              <button
                type="submit"
                id="search-btn"
                name="search"
                className="text-white absolute end-2.5 bottom-2.5 shadow-sm bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
            <select
              id="select-category"
              className="bg-gray-50 outline-none border shadow hover:shadow-md cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            >
              <option defaultValue="all" selected>
                All
              </option>
              <option defaultValue="Verified">Verified</option>
              <option defaultValue="Banned">Banned</option>
              <option defaultValue="Not Verified">Not Verified</option>
            </select>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
