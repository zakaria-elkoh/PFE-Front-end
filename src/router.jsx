import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./pages/Auth/AuthLayout";
import SignupForm from "./pages/Auth/forms/SignupForm";
import LoginForm from "./pages/Auth/forms/LoginForm";
import Home from "./pages/Home";
import Profile from "./pages/User/Profile";
import Statistic from "./pages/Admin/Dashboard/Statistic";
import DashboardLayout from "./pages/Admin/Dashboard/DashboardLayout";
import Lawyers from "./pages/Admin/Dashboard/Lawyers";
import Users from "./pages/Admin/Dashboard/Users";

const routes = createBrowserRouter([
  {
    path: "*",
    element: <h1>not found</h1>,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      // { path: '/', element: <Navigate to={'/home'} /> },
      // { path: '/profile', element: <Profile /> },
    ],
  },
  {
    path: "/admin/dashboard/",
    element: <DashboardLayout />,
    children: [
      { path: "statistic", element: <Statistic /> },
      { path: "lawyers", element: <Lawyers /> },
      { path: "users", element: <Users /> },
    ],
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <LoginForm /> },
      { path: "signup", element: <SignupForm /> },
    ],
  },
]);

export default routes;
