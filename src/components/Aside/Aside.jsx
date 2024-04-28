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
        <Li
          to={"/admin/dashboard/statistic"}
          liName="Dashboard"
          icon={
            <i className="fa-solid fa-chart-simple mr-4 font-bold text-xl"></i>
          }
        />
        <Li
          to={"/admin/dashboard/verification/requests"}
          liName="Veri Requests"
          icon={
            <i className="fa-solid fa-code-pull-request mr-4 text-xl font-bold"></i>
          }
        />
        <Li
          to={"/admin/dashboard/lawyers"}
          liName="Lawyers"
          icon={<i className="fa-solid fa-user-tie mr-4 font-bold text-xl"></i>}
        />
        <Li
          to={"/admin/dashboard/users"}
          liName="Users"
          icon={<i className="fa-solid fa-user mr-4 font-bold text-xl"></i>}
        />
        <Li
          to={"/admin/dashboard/posts"}
          liName="Posts"
          icon={
            <i className="fa-solid fa-address-card mr-4 font-bold text-xl"></i>
          }
        />
        {/* <Li to={"/"} liName="My saves" />
        <Li to={"/"} liName="Home" /> */}
        <Li
          to={"/"}
          liName="Home"
          icon={<i className="fa-solid fa-house mr-4 font-bold text-xl"></i>}
        />
        <li
          onClick={() => {
            console.log("logged out");
          }}
          className="flex items-center px-5 cursor-pointer w-full text-center text-gray-700 py-2 rounded-xl transition-all font-bold hover:bg-gray-100 mt-20"
        >
          <i className="fa-solid fa-arrow-right-from-bracket mr-4 font-bold text-2xl"></i>
          Log out
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
