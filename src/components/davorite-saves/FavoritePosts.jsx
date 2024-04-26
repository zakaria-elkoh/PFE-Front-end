import customAxios from "@/axios/customAxios";
import { useEffect, useState } from "react";
import Post from "../Post";
import PostSkeleton from "../PostSkeleton";

const FavoritePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const res = await customAxios.get("/posts/favorites");
      console.log(res);
      setLoading(false);
      setPosts(posts.concat(res.data.data));
      setError("");
    } catch (error) {
      setLoading(false);
      setError("Not found");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col gap-3">
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}

      {loading && (
        <>
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
  );
};

export default FavoritePosts;
