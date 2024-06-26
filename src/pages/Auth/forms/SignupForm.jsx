import customAxios from "@/axios/customAxios";
import { useAuth } from "@/contexts/AuthContext";
import { setUserContext } from "@/lib/api";
import signUpSchema from "@/lib/validations/signUpSchema";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
  const { setAuthUser, setIsAuthenticated } = useAuth();
  const [userData, setUserData] = useState({});
  const [profileImage, setProfileImage] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userNameIsToken, setUserNameIsToken] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    try {
      signUpSchema.parse(userData);
      setErrors({});
      return true;
    } catch (error) {
      setErrors(error.formErrors.fieldErrors);
      return false;
    }
  };

  console.log("heere are the errors: ", errors);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log(userData);

    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("user_name", userData.user_name);
    formData.append("role_id", userData.role_id);
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    formData.append("profile_image", profileImage);

    if (validate(userData)) {
      customAxios
        .post("/register", formData)
        .then((res) => {
          console.log(res);
          localStorage.setItem("access_token", res.data.token);
          localStorage.setItem("auth_user", JSON.stringify(res.data.user));
          setUserContext(setAuthUser, setIsAuthenticated);
          setIsSubmitting(false);
          navigate("/");
        })
        .catch((error) => {
          console.log(error.response.data.message);
          setUserNameIsToken(error.response.data.message);
          console.log(errors.userNameIsToken);
        });
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex items-center justify-center px-6 mx-auto">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="text-center mb-8">
            <h1 className="mt-4 text-2xl font-semibold tracking-wide text-center text-gray-800 capitalize md:text-4xl dark:text-white">
              Create Account
            </h1>
            <p className="mt-3 text-gray-500 dark:text-gray-300">
              Get your free account now.
            </p>
          </div>
          <div className="">
            <label
              htmlFor="role"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an option
            </label>
            <select
              id="role"
              onChange={handleChange}
              name="role_id"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected disabled>
                I am a?
              </option>
              <option value="2">Lawyer</option>
              <option value="3">User</option>
            </select>
            <span className="text-red-300 text-sm">{errors.role_id}</span>
          </div>
          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>

            <input
              type="text"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="name"
              name="name"
              onChange={handleChange}
            />
          </div>
          <span className="text-red-300 text-sm">{errors.name}</span>
          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>

            <input
              type="text"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Username"
              name="user_name"
              onChange={handleChange}
            />
          </div>
          <span className="text-red-300 text-sm">{userNameIsToken}</span>
          <span className="text-red-300 text-sm">{errors.user_name}</span>
          <label
            htmlFor="dropzone-file"
            className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-300 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>

            <h2 className="mx-3 text-gray-400">Profile Photo</h2>

            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              name="profile_image"
              onChange={(e) => {
                setProfileImage(e.target.files[0]);
              }}
            />
          </label>
          <div className="relative flex items-center mt-6">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>

            <input
              type="email"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email address"
              autoComplete="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <span className="text-red-300 text-sm">{errors.email}</span>

          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>

            <input
              type="password"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              autoComplete="new-password"
            />
          </div>
          <span className="text-red-300 text-sm">{errors.password}</span>

          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>

            <input
              type="password"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="confirm_password"
              onChange={handleChange}
              placeholder="Confirm Password"
              autoComplete="new-password"
            />
          </div>
          <span className="text-red-300 text-sm">
            {errors.confirm_password}
          </span>

          <div className="mt-6">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <p className="mt-6 text-sm text-center text-gray-400">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-blue-500 focus:outline-none focus:underline hover:underline"
        >
          Log in
        </Link>
        .
      </p>
    </section>
  );
};

export default SignupForm;
