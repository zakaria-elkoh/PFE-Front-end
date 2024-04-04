import customAxios from "@/axios/customAxios";
import { useEffect, useState } from "react";
import Comment from "./shared/Comment";
import PostSkeleton from "./PostSkeleton";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ScrollArea } from "./ui/scroll-area";
import { toast } from "sonner";
import LoaderIcon from "./shared/LoaderIcon";
import SendIcon from "./shared/SendIcon";

const ShowPost = ({ post_id }) => {
  const [targetPost, setTargetPost] = useState();
  const [postComments, setPostComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddingComment, setIsAddingComment] = useState(false);
  const [comment, setComment] = useState();

  console.log("post idddddddd", post_id);

  useEffect(() => {
    setIsLoading(true);
    customAxios
      .get(`/posts/${post_id}`)
      .then((res) => {
        setIsLoading(false);
        console.log(res.data.data.comments);
        setTargetPost(res.data.data);
        setPostComments(res.data.data.comments);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [post_id]);

  const addCommentToPost = () => {
    setIsAddingComment(true);
    customAxios
      .post("/comments", { comment: comment, post_id: targetPost.id })
      .then((res) => {
        setIsAddingComment(false);
        toast.success("Comment added with success.");
        console.log(res);
        setComment("");
      })
      .catch((error) => {
        setIsAddingComment(false);
        console.log(error);
      });
  };

  return (
    <ScrollArea className="h-[600px] rounded-md border">
      <div className="w-full mx-auto bg-white shadow-lg rounded-sm dark:bg-gray-800">
        {isLoading ? (
          <PostSkeleton />
        ) : (
          <>
            <div className="p-3">
              <div className="flex items-center">
                <Avatar className="border-2 w-11 h-11 grid place-items-center">
                  <AvatarImage src={targetPost?.author?.profile_image} />
                  <AvatarFallback className="text-lg">
                    {/* {getFirstLetters(targetPost?.author?.name)} */}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col ml-2">
                  <a
                    href="#"
                    className="font-bold text-gray-700 capitalize dark:text-gray-200"
                    tabIndex="0"
                    role="link"
                  >
                    {targetPost?.author?.name} .
                    <span className="font-medium text-gray-500 dark:text-gray-200">
                      Lawyer
                    </span>
                  </a>
                  <span className="text-xs text-gray-600 dark:text-gray-300">
                    {targetPost?.created_at}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-3 pb-6">
              <div>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                  {targetPost?.body}
                </p>
              </div>
            </div>
            <img
              className="object-cover w-full"
              src={targetPost?.image}
              alt="Article"
            />
            <div className="py-3 px-4 border-b border-gray-200 text-gray-500 mx-auto grid grid-cols-2 text-sma">
              <span className="leading-3"> 122 likes</span>
              <span className="leading-3 text-right"> 166 comments</span>
            </div>
            {postComments.length > 0 ? (
              postComments.map((comment) => (
                <Comment key={comment?.id} comment={comment} />
              ))
            ) : (
              <p className="text-center text-gray-500 py-3">No comments yet</p>
            )}
            <div className="bg-white p-4 flex items-center sticky bottom-0">
              <input
                type="text"
                placeholder="Type your message..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="flex-1 border-2 text-gray-700 rounded-full px-4 py-2 focus:outline-none"
              />
              <button
                className="bg-blue-500 text-white rounded-full p-2 ml-2 hover:bg-blue-600 focus:outline-none disabled:cursor-not-allowed"
                onClick={addCommentToPost}
                disabled={isAddingComment}
              >
                {isAddingComment ? <LoaderIcon /> : <SendIcon />}
              </button>
            </div>
          </>
        )}
      </div>
    </ScrollArea>
  );
};

export default ShowPost;
