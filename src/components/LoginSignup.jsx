import { Link } from "react-router-dom";

const LoginSignup = () => {
  return (
    <div className="flex gap-3 items-center text-white">
      <Link
        to={"/login"}
        className="bg-blue-600 px-3 py-1 font-semibold rounded"
      >
        Log In
      </Link>
      <Link
        to={"/signup"}
        className="hover:bg-gray-200 px-3 py-1 font-semibold text-blue-600 transition rounded"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default LoginSignup;
