import FollowerProfile from "./FollowerProfile";
import { useQuery } from "@tanstack/react-query";
import customAxios from "@/axios/customAxios";

const Following = () => {
  const getFollowing = async () => {
    const response = await customAxios.get("/myFollowing");
    return response.data.data;
  };

  const {
    data: followings,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["following"],
    queryFn: getFollowing,
  });

  console.log(followings, isLoading, isError, error);

  return (
    <ul className="flex flex-col gap-1">
      {followings?.map((following) => (
        <li key={following.id}>
          <FollowerProfile user={following} />
        </li>
      ))}
      {followings?.length === 0 && (
        <div className="flex items-center justify-center h-40">
          <p className="text-gray-500">No following yet</p>
        </div>
      )}
    </ul>
  );
};

export default Following;
