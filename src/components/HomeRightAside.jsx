import customAxios from "@/axios/customAxios";
import MiniProfileSkeleton from "./MiniProfileSkeleton";
import { useQuery } from "@tanstack/react-query";
import MiniProfile from "./MiniProfile";

const HomeRightAside = () => {
  const fetchUsers = async () => {
    try {
      const response = await customAxios.get("/users");
      return response.data.data;
    } catch (error) {
      console.error(error);
      throw new Error("You have followed all users");
    }
  };

  const {
    data: users,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  console.log("users", users);

  return (
    <aside className="w-1/4 px-1 hidden lg:flex flex-col gap-3">
      {error && <p className="text-red-500 text-center">{error}</p>}
      {users &&
        users?.map((user) => (
          <MiniProfile key={user.id} user={user} refetch={refetch} />
        ))}
      {isLoading && (
        <>
          <MiniProfileSkeleton />
          <MiniProfileSkeleton />
          <MiniProfileSkeleton />
          <MiniProfileSkeleton />
        </>
      )}
    </aside>
  );
};

export default HomeRightAside;
