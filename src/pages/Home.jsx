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
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { isAuthenticated, authUser, setAuthUser } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  // const [postsType, setPostsType] = useState("all");

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("auth_user")) {
      navigate("/login");
    }
  }, []);

  if (!localStorage.getItem("auth_user")) {
    return false;
  }

  const handleSearch = async () => {
    const postsType = document.getElementById("select").value;
    console.log(postsType, " || ", searchValue);
    setPosts([]);
    setLoading(true);
    try {
      const res = await customAxios.get(
        "/posts/search?postsType=" + postsType + "&&search=" + searchValue
      );
      setLoading(false);
      console.log(res.data.data);
      setPosts(res.data.data);
    } catch (error) {
      setLoading(false);
      setError("Not found");
      console.log(error);
    }
  };

  const fetchPosts = async () => {
    setPageNumber(pageNumber + 1);
    console.log(pageNumber);
    try {
      const res = await customAxios.get(`/posts?page=${pageNumber}`);
      setLoading(false);
      setPosts(posts.concat(res.data.data));
      setError("");
    } catch (error) {
      setLoading(false);
      setError("Not found");
    }
  };

  // const refreshAuthUser = async () => {
  //   try {
  //     const res = await customAxios.get("/user");
  //     console.log("refetch auth user", res.data.data);
  //     setAuthUser(res.data.data);
  //     localStorage.setItem("auth_user", JSON.stringify(res.data.data));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    // refreshAuthUser();
    fetchPosts();
  }, []);

  return (
    <main className="bg-[#ededed]">
      <NavBar />

      {isAuthenticated && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <AddBtn />
          </DialogTrigger>
          <DialogContent className="rounded-md">
            <DialogHeader>
              <DialogTitle>New Post</DialogTitle>
              <DialogDescription>
                <AddPost authUser={authUser} setOpen={setOpen} />
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
            {/* Loading... */}
          </h4>
        }
      >
        <div className="containe flex max-w-7xl mx-auto">
          <HomeLeftAside />
          <div className="w-full md:w-5xl lg:w-2/4 mx-auto flex flex-col gap-2 px-0.5 lg:px-2">
            <div className="flex items-center gap-4 mb-4">
              <select
                onChange={() => {
                  handleSearch();
                }}
                id="select"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block max-w-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="all">All</option>
                <option value="following">My followings</option>
              </select>
              <div className="relative flex-1 max-w-md shadow mx-auto flex-grow hover:shadow-md rounded-lg">
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

            {posts && posts.map((post) => <Post key={post.id} post={post} />)}
            {loading && (
              <>
                {" "}
                <PostSkeleton />
                <PostSkeleton />
              </>
            )}
            {error && (
              <p className="text-gray-500 text-center text-bold text-2xl pb-96 pt-12">
                {error}
              </p>
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
