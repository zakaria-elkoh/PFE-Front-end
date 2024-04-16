import customAxios from "@/axios/customAxios";
import { useQuery } from "@tanstack/react-query";

const Statistic = () => {
  const fetchStatistic = async () => {
    try {
      const response = await customAxios.get("/admin/statistic");
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  };

  const {
    data: statistic,
    error,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["statistic"],
    queryFn: fetchStatistic,
  });

  console.log(statistic, error, isLoading, isError);

  // useEffect(() => {
  //   fetchStatistic();
  // }, []);

  return (
    <div className="h-[1000px]">
      {/* <!-- cards --> */}
      <div className="w-full py-6 mx-auto">
        {/* <!-- row 1 --> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {/* <!-- card1 --> */}
          <div className="w-full max-w-full px-3 mb-6">
            <div className="relative flex flex-col min-w-0 break-words bg-white shadow dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="flex-auto p-4">
                <div className="flex flex-row -mx-3">
                  <div className="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                        Today's Money
                      </p>
                      <h5 className="mb-2 font-bold dark:text-white">
                        $53,000
                      </h5>
                      <p className="mb-0 dark:text-white dark:opacity-60">
                        <span className="text-sm font-bold leading-normal text-emerald-500">
                          +55%
                        </span>
                        since yesterday
                      </p>
                    </div>
                  </div>
                  <div className="px-3 text-right basis-1/3">
                    <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-blue-500 to-violet-500">
                      <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- card2 (lawyers) --> */}
          <div className="w-full max-w-full px-3 mb-6">
            <div className="relative flex flex-col min-w-0 break-words bg-white shadow dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="flex-auto p-4">
                <div className="flex flex-row -mx-3">
                  <div className="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                        Totat Lawyers
                      </p>
                      <h5 className="mb-2 font-bold dark:text-white">
                        Not yet
                      </h5>
                      <p className="mb-0 dark:text-white dark:opacity-60">
                        <span className="text-sm font-bold leading-normal text-emerald-500">
                          +3%
                        </span>
                        since last week
                      </p>
                    </div>
                  </div>
                  <div className="px-3 text-right basis-1/3">
                    <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-red-600 to-orange-600">
                      <i className="ni leading-none ni-world text-lg relative top-3.5 text-white"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- card2 (users) --> */}
          <div className="w-full max-w-full px-3 mb-6">
            <div className="relative flex flex-col min-w-0 break-words bg-white shadow dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="flex-auto p-4">
                <div className="flex flex-row -mx-3">
                  <div className="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                        Totat Users
                      </p>
                      <h5 className="mb-2 font-bold dark:text-white">
                        {statistic?.total_users}
                      </h5>
                      <p className="mb-0 dark:text-white dark:opacity-60">
                        <span className="text-sm font-bold leading-normal text-emerald-500">
                          +3%
                        </span>
                        since last week
                      </p>
                    </div>
                  </div>
                  <div className="px-3 text-right basis-1/3">
                    <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-red-600 to-orange-600">
                      <i className="ni leading-none ni-world text-lg relative top-3.5 text-white"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- card3 (posts) --> */}
          <div className="w-full max-w-full px-3 mb-6">
            <div className="relative flex flex-col min-w-0 break-words bg-white shadow dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="flex-auto p-4">
                <div className="flex flex-row -mx-3">
                  <div className="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                        Total Posts
                      </p>
                      <h5 className="mb-2 font-bold dark:text-white">
                        {statistic?.total_posts}
                      </h5>
                      <p className="mb-0 dark:text-white dark:opacity-60">
                        <span className="text-sm font-bold leading-normal text-red-600">
                          -2%
                        </span>
                        since last quarter
                      </p>
                    </div>
                  </div>
                  <div className="px-3 text-right basis-1/3">
                    <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-emerald-500 to-teal-400">
                      <i className="ni leading-none ni-paper-diploma text-lg relative top-3.5 text-white"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- card4 (comments) --> */}
          <div className="w-full max-w-full px-3">
            <div className="relative flex flex-col min-w-0 break-words bg-white shadow dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="flex-auto p-4">
                <div className="flex flex-row -mx-3">
                  <div className="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                        Total Comments
                      </p>
                      <h5 className="mb-2 font-bold dark:text-white">
                        {statistic?.total_comments}
                      </h5>
                      <p className="mb-0 dark:text-white dark:opacity-60">
                        <span className="text-sm font-bold leading-normal text-emerald-500">
                          +5%
                        </span>
                        than last month
                      </p>
                    </div>
                  </div>
                  <div className="px-3 text-right basis-1/3">
                    <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-orange-500 to-yellow-500">
                      <i className="ni leading-none ni-cart text-lg relative top-3.5 text-white"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
