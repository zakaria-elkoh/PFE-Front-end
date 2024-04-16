import customAxios from "@/axios/customAxios";
import LawyerTr from "@/components/shared/LawyerTr";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import UserSkeleton from "@/components/dashboardSkeletons/UserSkeleton";

const Lawyers = () => {
  // const fetchLawyers = async () => {
  //   try {
  //     const response = await customAxios.get("/admin/lawyers");
  //     return response.data.data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);

  console.log(page);

  const fetchLawyers = async (pageParam = 1) => {
    try {
      const response = await customAxios.get(
        `/admin/lawyers?page=${pageParam}`
      );
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  };

  const {
    data: lawyers,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["lawyers", page],
    queryFn: () => fetchLawyers(page),
  });

  console.log(lawyers, error, isLoading, isError);

  return (
    <div className="h-[10000px] pt-10">
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow">
        <div className="flex bg-green-300 items-center relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gray-50 text-gray-800 shadow -mt-6 mb-8 p-6">
          <h6 className="block antialiased tracking-normal font-sans text-base font-bold leading-relaxed text-gray-800">
            Lawyers Table
          </h6>
          <div className="flex items-center gap-5 flex-grow bg-red-300">
            <div className="relative max-w-md shadow mx-auto flex-grow hover:shadow-md rounded-lg">
              <input
                type="search"
                id="search-input"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="block w-full outline-none p-3 ps-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search..."
                required
              />
              <button
                type="submit"
                id="search-btn"
                name="search"
                onClick={() => fetchLawyers(searchValue)}
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
                    Lawyer
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
                  <UserSkeleton />
                </>
              )}
              {lawyers?.map((lawyer) => (
                <LawyerTr key={lawyer.id} lawyer={lawyer} refetch={refetch} />
              ))}
              {isError && <p>Error: {error.message}</p>}
            </tbody>
          </table>
          <div className="bg-re200 p-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() =>
                      setPage((prev) => (prev === 1 ? 1 : prev - 1))
                    }
                    disabled={true}
                    className={
                      page === 1
                        ? `opacity-50 cursor-not-allowed`
                        : `cursor-pointer`
                    }
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    onClick={() => setPage(1)}
                    className="cursor-pointer"
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    onClick={() => setPage(2)}
                    className="cursor-pointer"
                  >
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    onClick={() => setPage(3)}
                    className="cursor-pointer"
                  >
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    onClick={() => setPage((prev) => prev + 1)}
                    className="cursor-pointer"
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lawyers;
