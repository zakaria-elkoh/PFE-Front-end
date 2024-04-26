import { useEffect, useState } from "react";
import PostSkeleton from "../PostSkeleton";
import customAxios from "@/axios/customAxios";
import Post from "../Post";

const SavedPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const res = await customAxios.get("/posts/saves");
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

      {loading ? (
        <>
          <PostSkeleton />
          <PostSkeleton />
        </>
      ) : posts.length > 0 ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <p className="text-gray-500 text-center text-bold text-2xl pb-96 pt-12">
          No saved posts
        </p>
      )}
      {error && (
        <p className="text-gray-500 text-center text-bold text-2xl pb-96 pt-12">
          {error}
        </p>
      )}
    </div>
  );
};

export default SavedPosts;
