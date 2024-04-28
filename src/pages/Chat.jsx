import ChatSideBar from "@/components/Chat/ChatSideBar";
import ChatErea from "@/components/Chat/ChatErea";
import { ChatProvider } from "@/contexts/ChatContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  // Pusher.logToConsole = true;

  // const pusher = new Pusher("195003c70303e43407b4", {
  //   cluster: "eu",
  // });

  // const channel = pusher.subscribe("chat");
  // channel.bind("message", function (data) {
  //   console.log("from pusher", data);
  //   setMessages([...messages, data.message]);
  // });
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("auth_user")) {
      navigate("/login");
    }
  }, []);

  if (!localStorage.getItem("auth_user")) {
    return false;
  }

  return (
    <ChatProvider>
      <div className="w-full h-screen">
        <div className="flex h-full">
          <div className="flex-1 bg-gray-100 w-full h-full">
            <div className="main-body px-1 sm:container m-auto sm:w-11/12 h-full flex flex-col">
              <div className="main flex-1 flex flex-col">
                <div className="hidden lg:block heading flex-2">
                  <h1 className="text-3xl lg:text-4xl text-gray-700 py-3 pl-2">
                    Chat
                  </h1>
                </div>

                <div className="flex-1 flex h-full">
                  <ChatSideBar />
                  <ChatErea />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ChatProvider>
  );
};

export default Chat;
