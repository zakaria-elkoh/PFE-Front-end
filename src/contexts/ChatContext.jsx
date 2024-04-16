import customAxios from "@/axios/customAxios";
import { createContext, useContext, useEffect, useState } from "react";

export const ChatContext = createContext();

export const useChat = () => {
  return useContext(ChatContext);
};

export const ChatProvider = ({ children }) => {
  const [chatUsers, setChatUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [messagesIsLoading, setMessagesIsLoading] = useState(true);
  const [currentChatUser, setCurrentChatUser] = useState({});
  const [currentChatMessages, setCurrentChatMessages] = useState([]);


  

  useEffect(() => {
    setMessagesIsLoading(true);
    customAxios
      .get(`/users/${currentChatUser.id}/messages`)
      .then((res) => {
        setMessagesIsLoading(false);
        setCurrentChatMessages(res.data.data);
      })
      .catch((error) => {
        setMessagesIsLoading(false);
        console.log(error);
      });
    }, [currentChatUser]);
    
    useEffect(() => {
      customAxios
      .get(`/users/messages/users`)
      .then((res) => {
        setChatUsers(res.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const value = {
    chatUsers,
    setChatUsers,
    currentChatUser,
    setCurrentChatUser,
    currentChatMessages,
    setCurrentChatMessages,
    isLoading,
    setIsLoading,
    setMessagesIsLoading,
    messagesIsLoading,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
