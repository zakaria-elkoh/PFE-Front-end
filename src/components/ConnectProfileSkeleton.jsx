const ConnectProfileSkeleton = () => {
  return (
    <div className="flex flex-col items-center gap-3 p-4 lg:p-4">
      <div className="h-[130px] w-[130px] rounded-full bg-gray-300 dark:bg-gray-600"></div>
      <div>
        <h1 className="w-48 h-3 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
        <p className="w-1/2 mx-auto h-2 mt-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
      </div>
      <p className="w-[44px] mx-auto h-2 mt-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
    </div>
  );
};

export default ConnectProfileSkeleton;
