import customAxios from "@/axios/customAxios";
import AddPost from "@/components/AddPost";
import MiniProfile from "@/components/MiniProfile";
import NavBar from "@/components/NavBar";
import Post from "@/components/Post";
import PostSkeleton from "@/components/PostSkeleton";
import ShowPost from "@/components/ShowPost";
import Tweet from "@/components/Tweet";
import Tweeta from "@/components/Tweeta";
import AddBtn from "@/components/shared/AddBtn";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAuth } from "@/contexts/AuthContext";
// import { setUserContext } from "@/lib/api";
import { useEffect, useState } from "react";

const Home = () => {
  const { isAuthenticated, setIsAuthenticated, authUser, setAuthUser } =
    useAuth();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    customAxios
      .get("/posts")
      .then((res) => {
        console.log(res.data.data);
        setPosts(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const logIn = (e) => {
  //   e.preventDefault();
  //   setIsLoggedIn(true)
  //   setAuthUser({
  //     name: 'zakaria'
  //   })
  // }

  // const logOut = (e) => {
  //   e.preventDefault();
  //   setIsLoggedIn(false);
  //   setAuthUser(null);
  // }

  return (
    <main className="bg-[#ededed] bg-elkoh-200">
      <NavBar />

      {isAuthenticated && (
        <Dialog>
          <DialogTrigger>
            <AddBtn />
          </DialogTrigger>
          {/* add post form */}
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

      <div className="containe flex max-w-7xl mx-auto">
        <aside className="bg-white shadow hidden lg:block w-1/4 px-1">
          left aside
        </aside>

        <div className="w-full md:w-5xl lg:w-2/4 mx-auto flex flex-col gap-5 px-0.5 lg:px-2">
          {posts.length > 0 ? (
            posts.map((post) => <Post key={post.id} post={post} />)
          ) : (
            <>
              <PostSkeleton />
              <PostSkeleton />
            </>
          )}

          <Tweet />
          <Tweeta />
          <Tweeta />
          <Tweet />
        </div>

        <aside className=" w-1/4 px-1 hidden lg:flex flex-col gap-3">
          <MiniProfile />
          <MiniProfile />
        </aside>
      </div>
    </main>
  );
};

export default Home;
