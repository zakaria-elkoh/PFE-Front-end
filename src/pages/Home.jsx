import customAxios from "@/axios/customAxios";
import AddPost from "@/components/AddPost";
import HomeLeftAside from "@/components/HomeLeftAside";
import HomeRightAside from "@/components/HomeRightAside";
import NavBar from "@/components/NavBar";
import Post from "@/components/Post";
import PostSkeleton from "@/components/PostSkeleton";
import AddBtn from "@/components/shared/AddBtn";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const { isAuthenticated, authUser } = useAuth();
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async () => {
    setPosts([]);
    try {
      const res = await customAxios.get("/posts/search?search=" + searchValue);
      setPosts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPosts = async () => {
    setPageNumber(pageNumber + 1);
    try {
      const res = await customAxios.get("/posts?page=" + pageNumber);
      setPosts(posts.concat(res.data.data));
      console.log(res.data);
      console.log("page number", pageNumber);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <main className="bg-[#ededed]">
      <NavBar />

      {isAuthenticated && (
        <Dialog>
          <DialogTrigger>
            <AddBtn />
          </DialogTrigger>
          <DialogContent className="rounded-md">
            <DialogHeader>
              <DialogTitle>New Post</DialogTitle>
              <DialogDescription>
                <AddPost authUser={authUser} />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}

      <InfiniteScroll
        dataLength={posts.length}
        next={fetchPosts}
        hasMore={true}
        loader={
          <h4 className="py-3 text-center font-semibold text-gray-600">
            Loading...
          </h4>
        }
      >
        <div className="containe flex max-w-7xl mx-auto">
          <HomeLeftAside />
          <div className="w-full md:w-5xl lg:w-2/4 mx-auto flex flex-col gap-2 px-0.5 lg:px-2">
            <div className="flex gap-4 mb-4">
              <Select className="">
                <SelectTrigger className="max-w-[90px] shadow-sm hover:shadow px-2 h-full">
                  <SelectValue placeholder="show" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all" className="pl-2">
                    All
                  </SelectItem>
                  <SelectItem value="following" className="pl-2">
                    I am following
                  </SelectItem>
                </SelectContent>
              </Select>
              {/* <div className="search flex-1 rounded-md overflow-hidden shadow-sm hover:shadow">
                <input
                  type="text"
                  className="outline-none block w-full bg-transparent border-b-2 border-gray-200 bg-white shadow hover:shadow-md rounded-t-sm py-2 px-3"
                  placeholder="Search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div> */}
              <div className="relative max-w-md shadow mx-auto flex-grow hover:shadow-md rounded-lg">
                <input
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  type="search"
                  id="search-input"
                  className="block w-full outline-none p-2.5 ps-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search..."
                  required
                />
                <button
                  type="submit"
                  id="search-btn"
                  name="search"
                  onClick={handleSearch}
                  className="text-white absolute end-1 bottom-1 shadow-sm bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </div>

            {posts.length > 0 ? (
              posts.map((post) => <Post key={post.id} post={post} />)
            ) : (
              <>
                <PostSkeleton />
                <PostSkeleton />
              </>
            )}
          </div>
          <HomeRightAside />
        </div>
      </InfiniteScroll>

      <Toaster position="top-center" />
    </main>
  );
};

export default Home;
