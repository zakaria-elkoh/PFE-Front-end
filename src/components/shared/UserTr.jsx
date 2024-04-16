const UserTr = ({user}) => {

    const isVerified = user.is_verified;

  return (
    <tr>
      <td className="py-3 px-5 border-b border-blue-gray-50">
        <div className="flex items-center gap-4">
          <img
            src={user.profile_image}
            alt={user.name}
            className="inline-block relative object-cover object-center w-9 h-9 rounded-full"
          />
          <div>
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
              {user.name}
            </p>
            <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
              {user.email}
            </p>
          </div>
        </div>
      </td>
      <td className="py-3 px-5 border-b border-blue-gray-50">
        <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
          {user.name}
        </p>
        <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
          Organization
        </p>
      </td>
      <td className="py-3 px-5 border-b border-blue-gray-50">
        {/* <div className="relative grid items-center font-sans uppercase whitespace-nowrap select-none bg-gradient-to-tr from-red-600 to-red-400 text-white rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit">
        <span className="">banned</span>
      </div> */}
        {isVerified ? (
          <div className="relative grid items-center font-sans uppercase whitespace-nowrap select-none bg-gradient-to-tr from-green-600 to-green-400 text-white rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit">
            <span className="">verified</span>
          </div>
        ) : (
          <div className="relative grid items-center font-sans uppercase whitespace-nowrap select-none bg-gradient-to-tr from-orange-600 to-orange-400 text-white rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit">
            <span className="">not verified</span>
          </div>
        )}
      </td>
      <td className="py-3 px-5 border-b border-blue-gray-50">
        <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
          23/04/18
        </p>
      </td>
      <td className="py-3 px-5 border-b border-blue-gray-50">
        <a
          href="#"
          className="block antialiased font-sans text-xs font-semibold text-blue-gray-600"
        >
          Edit
        </a>
      </td>
    </tr>
  );
};

export default UserTr;
