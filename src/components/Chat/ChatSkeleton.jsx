const ChatSkeleton = () => {
  return (
    <div className="animate-pulse rounded-md bg-white dark:bg-gray-900">
      <div className="">
        <div className="w-full">
          <div className="p-3 lg:p-4">
            <div>
              <h1 className="w-56 h-4 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
              <h1 className="w-56 h-4 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
            </div>
            <div>
              <h1 className="w-56 h-4 ml-auto mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
              <h1 className="w-56 ml-auto h-4 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
            </div>
            <div>
              <h1 className="w-56 h-4 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
              <h1 className="w-56 h-4 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
              <h1 className="w-56 h-4 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
            </div>
            <div>
              <h1 className="w-56 h-4 ml-auto mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSkeleton;
