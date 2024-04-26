import { banUser, unbanUser } from "@/services/http";
import { toast } from "sonner";

const UserTr = ({ user, refetch }) => {
  // const isVerified = user.is_verified;

  const handleBan = async (e) => {
    if (e.target.innerText === "Ban") {
      const res = banUser(user.id);

      if (res.error) {
        return toast.error(res.error);
      }

      refetch();

      toast.promise(res, {
        loading: `Banning ${user.name}`,
        success: () => {
          return `${user.name} has been banned`;
        },
        error: "Error",
      });
    } else if (e.target.innerText === "Unban") {
      const res = unbanUser(user.id);

      if (res.error) {
        return toast.error(res.error);
      }

      refetch();

      toast.promise(res, {
        loading: `Unbanning ${user.name}`,
        success: () => {
          return `${user.name} has been unbanned`;
        },
        error: "Error",
      });

      console.log(res);
    }
  };

  return (
    <tr>
      <td className="py-3 px-5 border-b border-blue-gray-50">
        <div className="flex items-center gap-4">
          <img
            src={user.profile_image}
            alt={user.name}
            className="inline-block relative object-cover object-center w-9 h-9 rounded-full"
          />
          <div>
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
              {user.name}
            </p>
            <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
              {user.user_name}
            </p>
          </div>
        </div>
      </td>
      <td className="py-3 px-5 border-b border-blue-gray-50">
        <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
          {user.email}
        </p>
        <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
          Organization
        </p>
      </td>
      <td className="py-3 px-5 border-b border-blue-gray-50">
        {user?.is_banned ? (
          <div className="relative grid items-center font-sans uppercase whitespace-nowrap select-none bg-gradient-to-tr from-red-600 to-red-400 text-white rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit">
            <span className="">banned</span>
          </div>
        ) : user?.is_verified ? (
          <div className="relative grid items-center font-sans uppercase whitespace-nowrap select-none bg-gradient-to-tr from-blue-600 to-blue-400 text-white rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit">
            <span className="">verified</span>
          </div>
        ) : (
          <div className="relative grid items-center font-sans uppercase whitespace-nowrap select-none bg-gradient-to-tr from-orange-600 to-orange-400 text-white rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit">
            <span className="">not verified</span>
          </div>
        )}
      </td>
      <td className="py-3 px-5 border-b border-blue-gray-50">
        <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
          {user.joined_at}
        </p>
      </td>
      <td className="py-3 px-5 border-b border-blue-gray-50">
        <a
          href="#"
          className="block antialiased font-sans text-xs font-semibold text-blue-gray-600"
        >
          Edit
        </a>
        <buttn
          onClick={handleBan}
          className="block antialiased cursor-pointer hover:underline font-sans text-xs font-semibold text-blue-gray-600"
        >
          {user?.is_banned ? "Unban" : "Ban"}
        </buttn>
      </td>
    </tr>
  );
};

export default UserTr;
