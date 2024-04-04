const PostSkeleton = () => {
  return (
    <div className="animate-pulse rounded-md bg-white dark:bg-gray-900">
      <div className="">
        <div className="w-full">
          <div className="flex gap-3 p-3 lg:p-4">
            <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div>
              <h1 className="w-56 h-3 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
              <p className="w-full h-2 mt-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>
          </div>
          <div className="px-3 mb-4 lg:px-5 lg:mb-6">
            <p className="w-full h-3 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-full h-3 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-1/2 h-3 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          </div>
          <div className="w-full h-72 bg-gray-300 dark:bg-gray-600"></div>
          <div className="w-full h-12 mt-3 bg-gray-300 dark:bg-gray-600"></div>
        </div>
      </div>
    </div>
  );
};

export default PostSkeleton;
