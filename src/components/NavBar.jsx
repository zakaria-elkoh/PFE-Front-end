import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import ProfileNotificationDropdown from "./ProfileNotificationDropdown";
import LoginSignup from "./LoginSignup";
import Logo from "./shared/Logo";
import MobileNav from "./MobileNav";

const NavBar = () => {
  const { isAuthenticated, setIsAuthenticated, authUser, setAuthUser } =
    useAuth();

  return (
    <nav
      // eslint-disable-next-line react/no-unknown-property
      x-data="{ isOpen: true }"
      className="sticky top-0 z-50 bg-white shadow dark:bg-gray-800"
    >
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Logo />
            </Link>

            <MobileNav />
          </div>

          <div
            // eslint-disable-next-line react/no-unknown-property
            x-cloak:className="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']"
            className="absolute hidden lg-block inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"
          >
            <ul className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-12">
              <li>
                <Link
                  className="block px-3 py-2 mx-1 mt-2 font-semibold text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  to={"/admin/dashboard/statistic"}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  className="block px-3 py-2 mx-1 mt-2 font-semibold text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  to={"/profile"}
                >
                  Profile
                </Link>
              </li>
            </ul>
            {isAuthenticated ? (
              <ProfileNotificationDropdown />
            ) : (
              <LoginSignup />
            )}
          </div>
        </div>
      </div>
  
    </nav>
  );
};

export default NavBar;
