import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./pages/Auth/AuthLayout";
import SignupForm from "./pages/Auth/forms/SignupForm";
import LoginForm from "./pages/Auth/forms/LoginForm";
import Home from "./pages/Home";
import Profile from "./pages/User/Profile";
import Statistic from "./pages/Admin/Dashboard/Statistic";
import DashboardLayout from "./pages/Admin/Dashboard/DashboardLayout";
import Lawyers from "./pages/Admin/Dashboard/Lawyers";
import DashUsers from "./pages/Admin/Dashboard/Users";
import Chat from "./pages/Chat";
import UserProfile from "./pages/User/UserProfile";
import Users from "./pages/Connect";
import VerificationRequets from "./pages/Admin/Dashboard/VerificationRequests";
import FavoriteAndSave from "./pages/FavoriteAndSave";
import DashPosts from "./pages/Admin/Dashboard/DashPosts";

const routes = createBrowserRouter([
  {
    path: "*",
    element: <h1>not found</h1>,
  },
  {
    path: "/chat/:id?",
    element: <Chat />,
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
      { path: "verification/requests", element: <VerificationRequets /> },
      { path: "lawyers", element: <Lawyers /> },
      { path: "users", element: <DashUsers /> },
      { path: "posts", element: <DashPosts /> },
    ],
  },
  {
    path: "user/profile",
    element: <UserProfile />,
  },
  {
    path: "/user/favorate-saves",
    element: <FavoriteAndSave />,
  },
  {
    path: "users",
    element: <Users />,
  },
  {
    path: "/profile/:id",
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
