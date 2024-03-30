const Users = () => {
  return (
    <div className="h-[10000px] pt-10">
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow">
        <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gray-50 text-gray-800 shadow -mt-6 mb-8 p-6">
          <h6 className="block antialiased tracking-normal font-sans text-base font-bold leading-relaxed text-gray-800">
            Users Table
          </h6>
        </div>
        <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                    User
                  </p>
                </th>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                    function
                  </p>
                </th>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                    status
                  </p>
                </th>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                    employed
                  </p>
                </th>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400"></p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div className="flex items-center gap-4">
                    <img
                      src="/material-tailwind-dashboard-react/img/team-2.jpeg"
                      alt="John Michael"
                      className="inline-block relative object-cover object-center w-9 h-9 rounded-md"
                    />
                    <div>
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
                        John Michael
                      </p>
                      <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                        john@creative-tim.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                    Manager
                  </p>
                  <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                    Organization
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div
                    className="relative grid items-center font-sans uppercase whitespace-nowrap select-none bg-gradient-to-tr from-green-600 to-green-400 text-white rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit"
                    // style="opacity: 1;"
                  >
                    <span className="">online</span>
                  </div>
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
              <tr>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div className="flex items-center gap-4">
                    <img
                      src="/material-tailwind-dashboard-react/img/team-1.jpeg"
                      alt="Alexa Liras"
                      className="inline-block relative object-cover object-center w-9 h-9 rounded-md"
                    />
                    <div>
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
                        Alexa Liras
                      </p>
                      <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                        alexa@creative-tim.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                    Programator
                  </p>
                  <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                    Developer
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div
                    className="relative grid items-center font-sans uppercase whitespace-nowrap select-none bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400 text-white rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit"
                    // style="opacity: 1;"
                  >
                    <span className="">offline</span>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                    11/01/19
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
              <tr>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div className="flex items-center gap-4">
                    <img
                      src="/material-tailwind-dashboard-react/img/team-4.jpeg"
                      alt="Laurent Perrier"
                      className="inline-block relative object-cover object-center w-9 h-9 rounded-md"
                    />
                    <div>
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
                        Laurent Perrier
                      </p>
                      <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                        laurent@creative-tim.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                    Executive
                  </p>
                  <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                    Projects
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div
                    className="relative grid items-center font-sans uppercase whitespace-nowrap select-none bg-gradient-to-tr from-green-600 to-green-400 text-white rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit"
                    // style="opacity: 1;"
                  >
                    <span className="">online</span>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                    19/09/17
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
              <tr>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div className="flex items-center gap-4">
                    <img
                      src="/material-tailwind-dashboard-react/img/team-3.jpeg"
                      alt="Michael Levi"
                      className="inline-block relative object-cover object-center w-9 h-9 rounded-md"
                    />
                    <div>
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
                        Michael Levi
                      </p>
                      <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                        michael@creative-tim.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                    Programator
                  </p>
                  <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                    Developer
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div
                    className="relative grid items-center font-sans uppercase whitespace-nowrap select-none bg-gradient-to-tr from-green-600 to-green-400 text-white rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit"
                    // style="opacity: 1;"
                  >
                    <span className="">online</span>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                    24/12/08
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
              <tr>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div className="flex items-center gap-4">
                    <img
                      src="/material-tailwind-dashboard-react/img/bruce-mars.jpeg"
                      alt="Bruce Mars"
                      className="inline-block relative object-cover object-center w-9 h-9 rounded-md"
                    />
                    <div>
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
                        Bruce Mars
                      </p>
                      <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                        bruce@creative-tim.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                    Manager
                  </p>
                  <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                    Executive
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div
                    className="relative grid items-center font-sans uppercase whitespace-nowrap select-none bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400 text-white rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit"
                    // style="opacity: 1;"
                  >
                    <span className="">offline</span>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                    04/10/21
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
              <tr>
                <td className="py-3 px-5 ">
                  <div className="flex items-center gap-4">
                    <img
                      src="/material-tailwind-dashboard-react/img/team-2.jpeg"
                      alt="Alexander"
                      className="inline-block relative object-cover object-center w-9 h-9 rounded-md"
                    />
                    <div>
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
                        Alexander
                      </p>
                      <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                        alexander@creative-tim.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-5 ">
                  <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                    Programator
                  </p>
                  <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                    Developer
                  </p>
                </td>
                <td className="py-3 px-5 ">
                  <div
                    className="relative grid items-center font-sans uppercase whitespace-nowrap select-none bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400 text-white rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit"
                    // style="opacity: 1;"
                  >
                    <span className="">offline</span>
                  </div>
                </td>
                <td className="py-3 px-5 ">
                  <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                    14/09/20
                  </p>
                </td>
                <td className="py-3 px-5 ">
                  <a
                    href="#"
                    className="block antialiased font-sans text-xs font-semibold text-blue-gray-600"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
