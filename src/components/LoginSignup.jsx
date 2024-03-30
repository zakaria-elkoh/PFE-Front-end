import { Link } from "react-router-dom";

const LoginSignup = () => {
  return (
    <div className="flex gap-3">
      <Link to={"/login"}>Login</Link>
      <Link to={"/signup"}>Signup</Link>
    </div>
  );
};

export default LoginSignup;
