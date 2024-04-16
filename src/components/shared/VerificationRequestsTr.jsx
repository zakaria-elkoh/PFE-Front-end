import { banUser, unbanUser } from "@/services/http";
import { toast } from "sonner";

const VerificationRequestsTr = ({
  setIsAcceptPopUpOpened,
  setAcceptRequestId,
  setIsRejectPopUpOpened,
  setRejectRequestId,
  request,
}) => {
  // const handleBan = async (e) => {
  //   if (e.target.innerText === "Ban") {
  //     e.target.innerText = "Unban";
  //     const res = banUser(lawyer.id);

  //     toast.promise(res, {
  //       loading: `Banning ${lawyer.name}`,
  //       success: () => {
  //         return `${lawyer.name} has been banned`;
  //       },
  //       error: "Error",
  //     });
  //   } else if (e.target.innerText === "Unban") {
  //     const res = unbanUser(lawyer.id);
  //     e.target.innerText = "Ban";

  //     toast.promise(res, {
  //       loading: `Unbanning ${lawyer.name}`,
  //       success: () => {
  //         return `${lawyer.name} has been unbanned`;
  //       },
  //       error: "Error",
  //     });

  //     console.log(res);
  //   }
  // };

  return (
    <tr>
      <td className="py-3 px-5 border-b border-blue-gray-50">
        <div className="flex items-center gap-4">
          <img
            src={request?.user.profile_image}
            alt={request?.user.name}
            className="inline-block relative object-cover object-center w-9 h-9 rounded-full"
          />
          <div>
            <span className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
              {request?.user.name}
            </span>
            <span className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
              {request?.user.user_name}
            </span>
          </div>
        </div>
      </td>
      <td className="py-3 px-5 border-b border-blue-gray-50">
        <span className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
          {request?.user.email}
        </span>
        <span className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
          Organization
        </span>
      </td>
      <td className="py-3 px-5 border-b border-blue-gray-50">
        <span className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
          {request?.message}
        </span>
      </td>
      <td className="py-3 px-5 border-b border-blue-gray-50">
        <button
          onClick={() => {
            setIsAcceptPopUpOpened(true);
            setAcceptRequestId(request.id);
          }}
          className="block antialiased cursor-pointer hover:underline font-sans text-xs font-semibold text-blue-gray-600"
        >
          Accept
        </button>
        <button
          onClick={() => {
            setIsRejectPopUpOpened(true);
            setRejectRequestId(request.id);
          }}
          className="block antialiased cursor-pointer hover:underline font-sans text-xs font-semibold text-blue-gray-600"
        >
          Reject
        </button>
      </td>
    </tr>
  );
};

export default VerificationRequestsTr;
