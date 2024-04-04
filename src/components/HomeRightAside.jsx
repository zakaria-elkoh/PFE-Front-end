import { useEffect, useState } from "react";
import MiniProfile from "./MiniProfile";
import customAxios from "@/axios/customAxios";
import MiniProfileSkeleton from "./MiniProfileSkeleton";

const HomeRightAside = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    customAxios.get("/users").then((res) => {
      setUsers(res.data.data);
      console.log(res.data.data);
    });
  }, []);

  return (
    <aside className="w-1/4 px-1 hidden lg:flex flex-col gap-3">
      {users.length > 1 ? (
        users?.map((user) => <MiniProfile key={user.id} user={user} />)
      ) : (
        <>
          <MiniProfileSkeleton />
          <MiniProfileSkeleton />
          <MiniProfileSkeleton />
          <MiniProfileSkeleton />
        </>
      )}
      {/* <MiniProfile />
      <MiniProfile /> */}
    </aside>
  );
};

export default HomeRightAside;
