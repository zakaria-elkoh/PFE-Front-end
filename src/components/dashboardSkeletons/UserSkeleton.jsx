const UserSkeleton = () => {
  return (
    <tr className="px-5 py-2">
      <td className="flex items-center gap-3 py-3 px-5 ">
        <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600"></div>
        <div>
          <h1 className="w-20 h-3 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
          <p className="w-full h-2 mt-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        </div>
      </td>
      <td className="py-3 px-5">
        <h1 className="w-full h-3 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
        <p className="w-full h-2 mt-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
      </td>
      <td className="py-3 px-5">
        <h1 className="w-full h-3 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
      </td>
      <td className="py-3 px-5">
        <h1 className="w-full h-3 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
      </td>
      <td className="py-3 px-5">
        <h1 className="w-1/2 h-3 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
        <h1 className="w-1/2 h-3 mx-auto mt-1 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
      </td>
    </tr>
  );
};

export default UserSkeleton;
