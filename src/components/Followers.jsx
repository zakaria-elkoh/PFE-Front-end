import FollowerProfile from "./FollowerProfile";
import { useQuery } from "@tanstack/react-query";
import customAxios from "@/axios/customAxios";
import { useParams } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Followers = () => {
  let user_id = useParams().id;
  console.log("user_id", user_id);

  if (location.pathname === "/user/profile") {
    user_id = useAuth().authUser.id;
  }

  const getFollowing = async () => {
    const response = await customAxios.get(`/${user_id}/followers`);
    return response.data.data;
  };

  const {
    data: followers,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["followers"],
    queryFn: getFollowing,
  });

  console.log(followers, isLoading, isError, error);

  return (
    <ul className="flex flex-col gap-1">
      {followers?.map((follower) => (
        <li key={follower.id}>
          <FollowerProfile user={follower} />
        </li>
      ))}
      {followers?.length === 0 && (
        <div className="flex items-center justify-center h-40">
          <p className="text-gray-500">No followers yet</p>
        </div>
      )}
      {/* <li>
        <FollowerProfile user={authUser} />
      </li>
      <li>
        <FollowerProfile user={authUser} />
      </li>
      <li>
        <FollowerProfile user={authUser} />
      </li> */}
    </ul>
  );
};

export default Followers;
