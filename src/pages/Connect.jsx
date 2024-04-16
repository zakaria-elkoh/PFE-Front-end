import customAxios from "@/axios/customAxios";
import { NavBar } from "@/components";
import ConnectProfile from "@/components/ConnectProfile";
import ConnectProfileSkeleton from "@/components/ConnectProfileSkeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
// import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Connect = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [hasMore, setHasMore] = useState(true);

  const fetchUsers = async () => {
    setPageNumber((prev) => prev + 1);
    try {
      const res = await customAxios.get("/users/all?page=" + pageNumber);
      setIsLoading(false);
      setUsers(users.concat(res.data.data));
      if (res.data.data.length === 0) {
        setHasMore(false);
      }
      setError("");
      console.log(res.data);
      console.log("page number", pageNumber);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      setError("Not found");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(pageNumber);

  return (
    <main className="bg-[#ededed]">
      <NavBar />
      <div className="max-w-screen-md mx-auto flex justify-between items-center gap-4 mt-6 bg-green-200">
        <Select className="">
          <SelectTrigger className="max-w-[120px] shadow-sm hover:shadow px-2 h-full">
            <SelectValue placeholder="show" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all" className="pl-2">
              All
            </SelectItem>
            <SelectItem value="following" className="pl-2">
              I am following
            </SelectItem>
          </SelectContent>
        </Select>
        <div className="relative max-w-lg shadow flex-grow hover:shadow-md rounded-lg">
          <input
            type="search"
            id="search-input"
            className="block w-full outline-none p-3 ps-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search..."
            required
          />
          <button
            type="submit"
            id="search-btn"
            name="search"
            className="text-white absolute end-1 bottom-2 shadow-sm bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </div>
      <InfiniteScroll
        dataLength={users.length}
        next={fetchUsers}
        hasMore={hasMore}
        loader={
          <h4 className="py-3 text-center font-semibold text-gray-600">
            Loading...
          </h4>
        }
        className="max-w-screen-md mx-auto gap-3 py-5 grid grid-cols-3"
      >
        {!isLoading ? (
          users.map((user) => <ConnectProfile key={user.id} user={user} />)
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
      </InfiniteScroll>
    </main>
  );
};

export default Connect;
