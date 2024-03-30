import customAxios from "@/axios/customAxios";
import { useAuth } from "@/contexts/AuthContext";
import { setUserContext } from "@/lib/api";
import loginSchema from "@/lib/validations/loginSchema";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [userNameEmail, setUserNameEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const logInData = {
    user_name_email: userNameEmail,
    password: password,
  };

  const validate = () => {
    try {
      loginSchema.parse(logInData);
      setErrors({});
      return true;
    } catch (error) {
      setErrors(error.formErrors.fieldErrors);
      return false;
    }
  };

  const { setAuthUser, setIsAuthenticated } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (validate()) {
      customAxios
        .post("/login", logInData, config)
        .then((res) => {
          localStorage.setItem("access_token", res.data.token);
          localStorage.setItem("auth_user", JSON.stringify(res.data.user));
          setUserContext(setAuthUser, setIsAuthenticated);
          setIsSubmitting(false);
          navigate("/");
        })
        .catch((error) => {
          setIsSubmitting(false);
          setErrors({ back_res: error.response.data.message });
        });
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center w-full max-w-md px-6 mx-auto">
      <div className="flex-1">
        <div className="text-center">
          <h1 className="mt-4 text-2xl font-semibold tracking-wide text-center text-gray-800 capitalize md:text-3xl dark:text-white">
            welcome Back
          </h1>
          <p className="mt-3 text-gray-500 dark:text-gray-300">
            Sign in to access your account
          </p>
        </div>

        <div className="mt-8">
          <form onSubmit={handleLogin}>
            {/* email or password */}
            <div>
              <label
                htmlFor="user_name_email"
                className={`block mb-2 text-sm ${
                  errors.user_name_email ? "text-red-500" : "text-gray-600"
                } dark:text-gray-200`}
              >
                Email or Username:
              </label>
              <input
                type="text"
                value={userNameEmail}
                onChange={(e) => setUserNameEmail(e.target.value)}
                name="user_name"
                autoComplete="current-email"
                id="user_name"
                placeholder="example@example.com"
                className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                  errors.user_name_email ? "border-red-500" : "border-gray-200"
                } rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
              />
              {errors.user_name_email && (
                <span className="text-red-500 text-left text-sm">
                  {errors.user_name_email}
                </span>
              )}
              {errors.back_res && (
                <span className="text-red-500 text-left text-sm">
                  {errors.back_res}
                </span>
              )}
            </div>

            {/* password */}
            <div className="mt-6">
              <div className="flex justify-between mb-2">
                <label
                  htmlFor="password"
                  className={`text-sm text-gray-600 ${
                    errors.password ? "text-red-500" : "text-gray-600"
                  } dark:text-gray-200`}
                >
                  Password:
                </label>
                <a
                  href="#"
                  className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                name="password"
                autoComplete="current-password"
                id="password"
                placeholder="Your Password"
                className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                  errors.password ? "border-red-500" : "border-gray-200"
                } rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
              />
              {errors.password && (
                <span className="text-red-500 text-left text-sm">
                  {errors.password}
                </span>
              )}
            </div>

            <div className="mt-6">
              <button
                disabled={isSubmitting}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 disabled:cursor-wait disabled:bg-blue-300"
              >
                {isSubmitting ? (
                  <div role="status">
                    Sign in...
                    <svg
                      aria-hidden="true"
                      className="inline w-6 h-6 ml-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                ) : (
                  "Sign in"
                )}
              </button>
            </div>
          </form>

          <p className="mt-6 text-sm text-center text-gray-400">
            Don&#x27;t have an account yet?{" "}
            <Link
              to="/signup"
              className="text-blue-500 focus:outline-none focus:underline hover:underline"
            >
              Sign up
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
