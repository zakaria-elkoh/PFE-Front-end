import Logo from "../shared/Logo";
import Li from "./components/Li";

const Aside = () => {
  return (
    <aside className="w-80 h-[calc(100vh-16px)] sticky top-0  rounded-xl bg-white shadow-md p-4">
      <div className="text-center py-3">
        <Logo />
      </div>

      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

      <ul className="flex flex-col gap-2 mt-3">
        <Li to={"/admin/dashboard/statistic"} liName="Dashboard" />
        <Li to={"/admin/dashboard/lawyers"} liName="Lawyers" />
        <Li to={"/admin/dashboard/users"} liName="Users" />
        <Li to={"/"} liName="Home" />
        <li
          onClick={() => {
            console.log("logged out");
          }}
          className="cursor-pointer w-full block text-center text-gray-700 py-2 rounded-xl transition-all font-bold hover:bg-gray-100 mt-20"
        >
          Log out
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
