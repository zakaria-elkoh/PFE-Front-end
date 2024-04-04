const MiniProfileSkeleton = () => {
  return (
    <div className="flex gap-3 p-4 lg:p-4">
      <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600"></div>
      <div>
        <h1 className="w-56 h-3 mt-3 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
        <p className="w-full h-2 mt-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
      </div>
    </div>
  );
};

export default MiniProfileSkeleton;
