import { useChat } from "@/contexts/ChatContext";
import { storeMessage } from "@/services/http";
import { useState } from "react";

const SendBox = () => {
  const [message, setMessage] = useState("");
  const { currentChatUser, setCurrentChatMessages } = useChat();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await storeMessage(currentChatUser.id, message);
    setCurrentChatMessages((prev) => [...prev, data]);
    setMessage("");
  };

  return (
    <form
      className="write bg-white shadow flex rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="flex-3 flex content-center items-center text-center p-4 pr-0">
        <span className="block text-center text-gray-400 hover:text-gray-800">
          <svg
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="h-6 w-6"
          >
            <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </span>
      </div>
      <div className="flex-1">
        <input
          required
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          className="w-full block outline-none py-4 px-4 bg-transparent"
          rows="1"
          placeholder="Type a message..."
          autoFocus
        />
      </div>
      <div className="flex-2 p-2 flex content-center items-center">
        <div className="flex-1">
          <button className="bg-blue-500 text-white rounded-full p-2 ml-2 hover:bg-blue-600 focus:outline-none">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SendBox;
