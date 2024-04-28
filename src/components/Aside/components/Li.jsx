import { Link, useLocation } from "react-router-dom";

const Li = ({ to, liName, icon }) => {
  const location = useLocation();

  return (
    <li className="">
      <Link
        className={`w-full block px-5 text-gray-700 py-2 rounded-xl transition-all font-bold ${
          to === location.pathname ? "bg-gray-100" : ""
        } hover:bg-gray-100`}
        to={to}
      >
        {icon}
        {liName}
      </Link>
    </li>
  );
};

export default Li;
