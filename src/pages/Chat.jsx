import ChatSideBar from "@/components/Chat/ChatSideBar";
import ChatErea from "@/components/Chat/ChatErea";
import { ChatProvider } from "@/contexts/ChatContext";

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

  return (
    // <div className="flex flex-col h-screen max-w-sm mx-auto bg-gray-100">
    //   <div className="flex-grow overflow-y-auto">
    //     <input
    //       type="text"
    //       value={username}
    //       onChange={(e) => setUserName(e.target.value)}
    //     />
    //     <div className="flex flex-col mb-4 gap-4 py-4">
    //       <div className="flex justify-start">
    //         <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
    //           <p className="text-gray-900 text-sm">Hey, how are you?</p>
    //         </div>
    //       </div>
    //       <div className="flex justify-end">
    //         <div className="bg-blue-500 rounded-lg px-4 py-2 max-w-[80%]">
    //           <p className="text-white text-sm">
    //             Im good, thanks! How about you?
    //           </p>
    //         </div>
    //       </div>
    //       <div className="flex justify-start">
    //         <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
    //           <p className="text-gray-900 text-sm">
    //             Im doing great, thanks for asking!
    //           </p>
    //         </div>
    //       </div>

    //       {messages.map((message, index) => {
    //         return (
    //           <div key={index} className="flex justify-start">
    //             <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
    //               <p className="text-gray-900 text-sm">{message}</p>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    //   <form
    //     className="flex justify-center items-center h-16"
    //     onSubmit={handleSubmit}
    //   >
    //     <input
    //       value={message}
    //       onChange={(e) => setMessage(e.target.value)}
    //       type="text"
    //       required
    //       className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-lg mr-4"
    //       placeholder="Type a message..."
    //     />
    //     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    //       Send
    //     </button>
    //   </form>
    // </div>
    // <div className="container mx-auto shadow-lg rounded-lg">
    //   <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
    //     <div className="font-semibold text-2xl">GoingChat</div>
    //     <div className="w-1/2">
    //       <input
    //         type="text"
    //         name=""
    //         id=""
    //         placeholder="search IRL"
    //         className="rounded-2xl bg-gray-100 py-3 px-5 w-full"
    //       />
    //     </div>
    //     <div className="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
    //       RA
    //     </div>
    //   </div>
    //   <div className="flex flex-row justify-between bg-white">
    //     <ChatSideBar />

    //     <div className="w-full px-5 flex flex-col justify-between">
    //       <div className="flex flex-col mt-5">
    //         <div className="flex justify-end mb-4">
    //           <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
    //             Welcome to group everyone !
    //           </div>
    //           <img
    //             src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
    //             className="object-cover h-8 w-8 rounded-full"
    //             alt=""
    //           />
    //         </div>
    //         <div className="flex justify-start mb-4">
    //           <img
    //             src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
    //             className="object-cover h-8 w-8 rounded-full"
    //             alt=""
    //           />
    //           <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
    //             at praesentium, aut ullam delectus odio error sit rem.
    //             Architecto nulla doloribus laborum illo rem enim dolor odio
    //             saepe, consequatur quas?
    //           </div>
    //         </div>
    //         <div className="flex justify-end mb-4">
    //           <div>
    //             <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
    //               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    //               Magnam, repudiandae.
    //             </div>

    //             <div className="mt-4 mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //               Debitis, reiciendis!
    //             </div>
    //           </div>
    //           <img
    //             src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
    //             className="object-cover h-8 w-8 rounded-full"
    //             alt=""
    //           />
    //         </div>
    //         <div className="flex justify-start mb-4">
    //           <img
    //             src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
    //             className="object-cover h-8 w-8 rounded-full"
    //             alt=""
    //           />
    //           <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
    //             happy holiday guys!
    //           </div>
    //         </div>
    //       </div>
    //       <div className="py-5">
    //         <input
    //           className="w-full bg-gray-300 py-5 px-3 rounded-xl"
    //           type="text"
    //           placeholder="type your message here..."
    //         />
    //       </div>
    //     </div>
    //     <div className="w-2/5 border-l-2 px-5">
    //       <div className="flex flex-col">
    //         <div className="font-semibold text-xl py-4">Mern Stack Group</div>
    //         <img
    //           src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
    //           className="object-cover rounded-xl h-64"
    //           alt=""
    //         />
    //         <div className="font-semibold py-4">Created 22 Sep 2021</div>
    //         <div className="font-light">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
    //           perspiciatis!
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <ChatProvider>
      <div className="w-full h-screen">
        <div className="flex h-full">
          <div className="flex-1 bg-gray-100 w-full h-full">
            <div className="main-body px-1 sm:container m-auto sm:w-11/12 h-full flex flex-col">
              {/* <div className="py-4 flex-2 flex flex-row">
              <div className="flex-1">
                <span className="xl:hidden inline-block text-gray-700 hover:text-gray-900 align-bottom">
                  <span className="block h-6 w-6 p-1 rounded-full hover:bg-gray-400">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </span>
                </span>
                <span className="lg:hidden inline-block ml-8 text-gray-700 hover:text-gray-900 align-bottom">
                  <span className="block h-6 w-6 p-1 rounded-full hover:bg-gray-400">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </span>
                </span>
              </div>
              <div className="flex-1 text-right">
                <span className="inline-block text-gray-700">
                  Status:{" "}
                  <span className="inline-block align-text-bottom w-4 h-4 bg-green-400 rounded-full border-2 border-white"></span>{" "}
                  <b>Online</b>
                  <span className="inline-block align-text-bottom">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </span>

                <span className="inline-block ml-8 text-gray-700 hover:text-gray-900 align-bottom">
                  <span className="block h-6 w-6 p-1 rounded-full hover:bg-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                    >
                      <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                    </svg>
                  </span>
                </span>
              </div>
              </div> */}

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
