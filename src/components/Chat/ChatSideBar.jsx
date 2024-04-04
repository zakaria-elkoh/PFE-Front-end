import { useChat } from "@/contexts/ChatContext";
import SideBarUserProfile from "./SideBarUserProfile";
import MiniProfileSkeleton from "../MiniProfileSkeleton";
import { useState } from "react";

const ChatSideBar = () => {
  const { chatUsers, isLoading } = useChat();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // setSearchValue(e.target.value);
    // setSearchValue(e.target.value);
    // setFilteredUsers(
    //   chatUsers.filter((user) => user.name.includes(searchValue))
    // );
    // if (!searchValue) setFilteredUsers(chatUsers);
  };
  console.log(searchValue, "searchValue");

  // useContext(() => {
  //   console.log("changed");
  //   setFilteredUsers(
  //     chatUsers.filter((user) => user.name.includes(searchValue))
  //   );
  //   setFilteredUsers(chatUsers);
  //   console.log(filteredUsers, searchValue);
  // }, [searchValue]);

  return (
    <div className="sidebar hidden lg:flex w-1/3 flex-2 flex-col pr-2">
      <div className="search flex-2 pb-2 px-2">
        <input
          type="text"
          className="outline-none block w-full bg-transparent border-b-2 border-gray-200 bg-white shadow rounded-t-sm py-3 px-4"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="flex-1 h-full overflow-auto px-2">
        {chatUsers
          ?.filter((user) => user.name.includes(searchValue))
          .map((user, index) => (
            <SideBarUserProfile key={index} user={user} />
          ))}
        {isLoading && (
          <>
            <MiniProfileSkeleton />
            <MiniProfileSkeleton />
            <MiniProfileSkeleton />
            <MiniProfileSkeleton />
          </>
        )}
      </div>
    </div>
  );
};

export default ChatSideBar;
