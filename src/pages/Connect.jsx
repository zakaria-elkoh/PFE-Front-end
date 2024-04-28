import customAxios from "@/axios/customAxios";
import { NavBar } from "@/components";
import ConnectProfile from "@/components/ConnectProfile";
import ConnectProfileSkeleton from "@/components/ConnectProfileSkeleton";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";

const Connect = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  // const [userType, setUserType] = useState("all");
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("auth_user")) {
      navigate("/login");
    }
  }, []);

  if (!localStorage.getItem("auth_user")) {
    return false;
  }

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

  const handleSearch = async () => {
    const userType = document.getElementById("select").value;
    setUsers([]);
    setIsLoading(true);
    try {
      const res = await customAxios.get(
        "/users/all/search?searchValue=" +
          searchValue +
          "&usersType=" +
          userType
      );
      setUsers(res.data.data);
      setIsLoading(false);
      setError("");
    } catch (error) {
      setIsLoading(false);
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
      <div className="max-w-screen-md mx-auto flex justify-between items-center gap-4 mt-6">
        {/* <Select className="">
          <SelectTrigger
            onClick={() => console.log("sdafsfa")}
            className="max-w-[120px] shadow-sm hover:shadow px-2 h-full"
          >
            <SelectValue placeholder="show" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              onClick={() => console.log("sdafsfa")}
              value="all"
              className="pl-2"
            >
              All
            </SelectItem>
            <SelectItem value="lawyers" className="pl-2">
              Lawyers
            </SelectItem>
            <SelectItem value="users" className="pl-2">
              Users
            </SelectItem>
          </SelectContent>
        </Select> */}
        <select
          onChange={handleSearch}
          id="select"
          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block max-w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="all">All</option>
          <option value="lawyer">Lawyers</option>
          <option value="user">Users</option>
        </select>
        <div className="relative max-w-lg shadow flex-grow hover:shadow-md rounded-lg">
          <input
            onChange={(e) => setSearchValue(e.target.value)}
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
            onClick={handleSearch}
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
          <>
            <h4></h4>
            <h4 className="py-3 text-center font-semibold text-gray-600">
              Loading...
            </h4>
          </>
        }
        className="max-w-screen-md mx-auto gap-3 py-5 grid grid-cols-3"
      >
        {!isLoading ? (
          users?.length > 0 ? (
            users?.map((user) => <ConnectProfile key={user.id} user={user} />)
          ) : (
            <>
              <h2></h2>
              <h2 className="text-center font-semibold text-gray-600 py-12">
                No users found
              </h2>
            </>
          )
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
