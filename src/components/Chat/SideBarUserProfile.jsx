import { useChat } from "@/contexts/ChatContext";
import VerifiedIcon from "../shared/VerifiedIcon";

const SideBarUserProfile = ({ user }) => {
  const { setCurrentChatUser, setMessagesIsLoading, setCurrentChatMessages } = useChat();

  const handleClick = (userObj) => {
    console.log(userObj, "user");
    setCurrentChatUser(userObj);
  };

  return (
    <div
      onClick={() => {handleClick(user); setMessagesIsLoading(true); setCurrentChatMessages([]);}}
      className="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-2 rounded p-4 flex shadow-md"
    >
      <div className="flex-2">
        {/* <div className="w-12 h-12 relative">
          <img
            className="w-12 h-12 rounded-full mx-auto"
            src={user?.profile_image}
            alt="chat-user"
          />
          <span className="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
        </div> */}
        <div className="relative">
          <img
            className="object-cover h-12 w-12 rounded-full"
            src={user?.profile_image}
            alt="Avatar"
          />
          <div className="absolute top-[62%] left-[55%]">
            {user?.is_verified && <VerifiedIcon />}
          </div>
        </div>
      </div>
      <div className="flex-1 px-2">
        <div className="truncate w-32">
          <span className="text-gray-800 font-semibold capitalize">
            {user?.name}
          </span>
        </div>
        <div>
          <small className="text-gray-600">Yea, Sure!</small>
        </div>
      </div>
      <div className="flex-2 text-right">
        <div>
          <small className="text-gray-500">15 April</small>
        </div>
      </div>
    </div>
  );
};

export default SideBarUserProfile;
