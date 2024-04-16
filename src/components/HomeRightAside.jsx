import { useEffect, useState } from "react";
import MiniProfile from "./MiniProfile";
import customAxios from "@/axios/customAxios";
import MiniProfileSkeleton from "./MiniProfileSkeleton";

const HomeRightAside = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    customAxios
      .get("/users")
      .then((res) => {
        setLoading(false);
        setUsers(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        setLoading(false);
        setError("You have followed all users");
        console.log(error);
      });
  }, []);

  return (
    <aside className="w-1/4 px-1 hidden lg:flex flex-col gap-3">
      {error && <p className="text-red-500 text-center">{error}</p>}
      {!error &&
        users?.map((user) => <MiniProfile key={user.id} user={user} />)}
      {loading && (
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
