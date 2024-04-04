import customAxios from "@/axios/customAxios";
import { NavBar } from "@/components";
import ConnectProfile from "@/components/ConnectProfile";
import ConnectProfileSkeleton from "@/components/ConnectProfileSkeleton";
import { useQuery } from "@tanstack/react-query";

const Connect = () => {
  const fetchUsers = async () => {
    const response = await customAxios.get(`/users`);
    return response.data.data;
  };

  const {
    data: usersData,
    error,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  console.log(usersData, error, isLoading, isError);

  return (
    <main className="bg-[#ededed]">
      <NavBar />
      <div className="max-w-screen-md mx-auto gap-3 py-5 grid grid-cols-3">
        {!isLoading ? (
          usersData?.map((user) => (
            <ConnectProfile key={usersData.id} user={user} />
          ))
        ) : (
          <>
            <ConnectProfileSkeleton />
            <ConnectProfileSkeleton />
            <ConnectProfileSkeleton />
            <ConnectProfileSkeleton />
            <ConnectProfileSkeleton />
            <ConnectProfileSkeleton />
          </>
        )}
        {/* <ConnectProfile />
        <ConnectProfile />
        <ConnectProfile />
        <ConnectProfile />
        <ConnectProfile />
        <ConnectProfile />
        <ConnectProfile /> */}
      </div>
    </main>
  );
};

export default Connect;
