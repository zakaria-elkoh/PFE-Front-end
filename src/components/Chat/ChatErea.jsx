import SendBox from "./SendBox";
import ReceiverMessage from "./ReceiverMessage";
import SenderMessage from "./SenderMessage";
import { ScrollArea } from "../ui/scroll-area";
import { useChat } from "@/contexts/ChatContext";
import { useAuth } from "@/contexts/AuthContext";
import ChatSkeleton from "./ChatSkeleton";

const ChatErea = () => {
  const { currentChatUser, currentChatMessages, messagesIsLoading } = useChat();
  const { authUser } = useAuth();

  const chatArea = document.querySelector(".divdiv");
  window.onload = () => {
    chatArea.scrollTop = chatArea.scrollHeight;
  };

  return (
    <div className="chat-area flex-1 flex flex-col">
      <div className="flex-3">
        <h2 className="text-xl py-2 border-b-2 capitalize border-gray-200">
          Chatting with <b>{currentChatUser.name}</b>
        </h2>
      </div>
      <div className="messages flex-1 bg-white shadow rounded-lg">
        {currentChatUser && currentChatMessages && (
          <ScrollArea className="messages h-[600px] rounded-md border p-4">
            <div className="divdiv">{messagesIsLoading && <ChatSkeleton />}</div>
            <div className="divdiv">
              {currentChatMessages.map((message, index) => {
                return message.sender_id !== authUser.id ? (
                  <SenderMessage key={index} message={message} />
                ) : (
                  <ReceiverMessage key={index} message={message} />
                );
              })}
            </div>
          </ScrollArea>
        )}
      </div>
      <div className="flex-2 pt-4 pb-10">
        <SendBox />
      </div>
    </div>
  );
};

export default ChatErea;
