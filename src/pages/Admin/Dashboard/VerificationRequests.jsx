import customAxios from "@/axios/customAxios";
import VerificationRequestsTr from "@/components/shared/VerificationRequestsTr";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import axios from "axios";
import { toast } from "sonner";
import UserSkeleton from "@/components/dashboardSkeletons/UserSkeleton";

const VerificationRequests = () => {
  const [page, setPage] = useState(1);
  const isVerified = false;
  const [isLoadingAcceptation, setIsLoadingAcceptation] = useState(false);
  const [isLoadingRejection, setIsLoadingRejection] = useState(false);
  const [isRejectPopUpOpened, setIsRejectPopUpOpened] = useState(false);
  const [isAcceptPopUpOpened, setIsAcceptPopUpOpened] = useState(false);
  const [rejectRequestId, setRejectRequestId] = useState(null);
  const [acceptRequestId, setAcceptRequestId] = useState(null);

  const handleAccept = (request_id) => {
    console.log("Accepttttttts", request_id);
    setIsLoadingAcceptation(true);
    customAxios
      .get("/admin/verification/requests/accept", {
        params: { request_id },
      })
      .then((res) => {
        setIsAcceptPopUpOpened(false);
        setIsLoadingAcceptation(false);
        toast.success("Request accepted with success.");
        console.log(res);
        refetch();
      })
      .catch((err) => {
        setIsLoadingAcceptation(false);
        console.error(err);
      });
  };

  const handleReject = (request_id) => {
    console.log("rejecttt", request_id);
    setIsLoadingRejection(true);
    customAxios
      .get("/admin/verification/requests/reject", {
        params: { request_id },
      })
      .then((res) => {
        setIsRejectPopUpOpened(false);
        toast.success("Request rejected with success.");
        setIsLoadingRejection(false);
        console.log(res);
        refetch();
      })
      .catch((err) => {
        console.error(err);
        setIsLoadingRejection(false);
      });
  };

  // const handleReject = (request_id) => {
  //   console.log("Reject", request_id);
  //   customAxios.get('/admin/verification/requests/reject', { params: { request_id } })
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // };

  const fetchVerificationRequests = async (pageParam = 1) => {
    try {
      const response = await customAxios.get(
        `/admin/verification/requests?page=${pageParam}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const {
    data: requests,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["verification-requests", page],
    queryFn: () => fetchVerificationRequests(page),
  });

  return (
    <div className="h-[10000px] pt-10">
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow">
        <div className="flex bg-green-300 items-center relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gray-50 text-gray-800 shadow -mt-6 mb-8 p-6">
          <h6 className="block antialiased tracking-normal font-sans text-base font-bold leading-relaxed text-gray-800">
            Verification Requests
          </h6>
          <div className="flex items-center gap-5 flex-grow bg-red-300">
            <div className="relative max-w-md shadow mx-auto flex-grow hover:shadow-md rounded-lg">
              <input
                type="search"
                id="search-input"
                className="block w-full outline-none p-3 ps-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search..."
                required
              />
              <button
                type="submit"
                id="search-btn"
                name="search"
                className="text-white absolute end-2.5 bottom-2.5 shadow-sm bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
            <select
              id="select-category"
              className="bg-gray-50 outline-none border shadow hover:shadow-md cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            >
              <option value="all" selected>
                All
              </option>
              <option value="Verified">Verified</option>
              <option value="Banned">Banned</option>
              <option value="Not Verified">Not Verified</option>
            </select>
          </div>
        </div>
        <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                    Users
                  </p>
                </th>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                    email
                  </p>
                </th>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                    message
                  </p>
                </th>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                    Action
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <>
                  <UserSkeleton />
                  <UserSkeleton />
                  <UserSkeleton />
                  <UserSkeleton />
                  <UserSkeleton />
                </>
              )}
              {requests?.map((request) => (
                <VerificationRequestsTr
                  setIsRejectPopUpOpened={setIsRejectPopUpOpened}
                  setIsAcceptPopUpOpened={setIsAcceptPopUpOpened}
                  setRejectRequestId={setRejectRequestId}
                  setAcceptRequestId={setAcceptRequestId}
                  rejectRequestId={rejectRequestId}
                  acceptRequestId={acceptRequestId}
                  key={request.user.id}
                  request={request}
                />
              ))}
              {isError && <p>Error: {error.message}</p>}
            </tbody>
          </table>
          <div className="bg-green-300 flex gap-2">
            <div
              onClick={() => setPage(1)}
              className="p-2 bg-red-400 cursor-pointer"
            >
              1
            </div>
            <div
              onClick={() => setPage(2)}
              className="p-2 bg-red-400 cursor-pointer"
            >
              2
            </div>
            <div
              onClick={() => setPage(3)}
              className="p-2 bg-red-400 cursor-pointer"
            >
              3
            </div>
          </div>
        </div>
        {/* pop ups */}
        {/* ============= accept pop up ============= */}
        <AlertDialog open={isAcceptPopUpOpened}>
          {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you wanna Accept {acceptRequestId}?
              </AlertDialogTitle>
              <AlertDialogDescription>
                By accepting this request, this account will be shown as a
                confiermed profile.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setIsAcceptPopUpOpened(false)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  handleAccept(acceptRequestId);
                }}
                className="disabled:cursor-not-allowed"
                disabled={isLoadingAcceptation}
              >
                {isLoadingAcceptation ? "Accepting..." : "Accept"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        {/* ============= reject pop up ============= */}
        <AlertDialog open={isRejectPopUpOpened}>
          {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you wanna Reject {rejectRequestId}?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setIsRejectPopUpOpened(false)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  handleReject(rejectRequestId);
                }}
                disabled={isLoadingRejection}
                className="disabled:cursor-not-allowed"
              >
                {isLoadingRejection ? "Rejecting..." : "Reject"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default VerificationRequests;
