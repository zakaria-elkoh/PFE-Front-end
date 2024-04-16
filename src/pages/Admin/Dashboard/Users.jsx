import customAxios from "@/axios/customAxios";
import UserSkeleton from "@/components/dashboardSkeletons/UserSkeleton";
import UserTr from "@/components/shared/UserTr";
import { useQuery } from "@tanstack/react-query";

const Users = () => {
  const fetchLawyers = async () => {
    try {
      const response = await customAxios.get("/admin/users");
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  };

  const {
    data: users,
    error,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["lawyers"],
    queryFn: fetchLawyers,
  });

  return (
    <div className="h-[10000px] pt-10">
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow">
        <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gray-50 text-gray-800 shadow -mt-6 mb-8 p-6">
          <h6 className="block antialiased tracking-normal font-sans text-base font-bold leading-relaxed text-gray-800">
            Users Table
          </h6>
        </div>
        <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                    User
                  </p>
                </th>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                    function
                  </p>
                </th>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                    status
                  </p>
                </th>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                    employed
                  </p>
                </th>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400"></p>
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <>
                  <UserSkeleton />
                  <UserSkeleton />
                  <UserSkeleton />
                  <UserSkeleton />
                  <UserSkeleton />
                </>
              )}
              {users &&
                users.map((user) => <UserTr key={user.id} user={user} />)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
