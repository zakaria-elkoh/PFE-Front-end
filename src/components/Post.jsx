import { AvatarFallback } from "@radix-ui/react-avatar";
import ShowPost from "./ShowPost";
import { Avatar, AvatarImage } from "./ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { getFirstLetters } from "@/lib/utils";
import { storeLike, removeLike, storeSave, removeSave } from "@/services/http";
import { useState } from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const handleLike = (e, post_id) => {
    const iconElement = e.currentTarget.querySelector("i");

    if (iconElement.classList.contains("fa-solid")) {
      removeLike(post_id);
    } else {
      storeLike(post_id);
    }

    iconElement.classList.toggle("fa-solid");
    iconElement.classList.toggle("text-red-600");
  };

  const handleSave = (e, post_id) => {
    const iconElement = e.currentTarget.querySelector("i");
    const span = e.currentTarget.querySelector("span");
    iconElement.classList.toggle("fa-solid");
    if (span.innerText === "Save") {
      span.innerText = "Saved";
      storeSave(post_id);
    } else {
      span.innerText = "Save";
      removeSave(post_id);
    }
  };

  const [likes_count, setLikesCount] = useState(post?.likes_count);
  return (
    <div className="w-full mx-auto overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg dark:bg-gray-800">
      <div className="p-3">
        <Link
          to={`/profile/${post?.author?.user_name}`}
          className="flex items-center w-fit"
        >
          <Avatar className="border-2 w-11 h-11 grid place-items-center">
            <AvatarImage src={post?.author?.profile_image} />
            <AvatarFallback className="text-lg">
              {getFirstLetters(post?.author?.name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col ml-2">
            <p
              className="font-bold text-gray-700 capitalize dark:text-gray-200"
              tabIndex="0"
            >
              {post?.author?.name}
              <span className="px-1.5 relative bottom-1 text-gray-500">.</span>
              <span className="font-medium text-xs relative bottom-0.5 text-gray-500 dark:text-gray-200">
                Lawyer
              </span>
            </p>
            <span className="text-xs text-gray-600 dark:text-gray-300">
              {post?.created_at}
            </span>
          </div>
        </Link>
      </div>

      <div className="p-3 pb-6">
        <div>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
            {post?.body}
          </p>
        </div>
      </div>

      <img className="object-cover w-full" src={post?.image} alt="Article" />

      <div className="py-3 px-4 border-b border-gray-200 text-gray-500 mx-auto grid grid-cols-2 text-sma">
        <span className="leading-3"> 122 likes</span>
        <span className="leading-3 text-right">
          {" "}
          {post?.comments_count} comments
        </span>
      </div>

      <div className="p-1 grid grid-cols-3 text-center text-gray-600 font-semibold">
        <div
          onClick={(e) => handleLike(e, post?.id)}
          className="p-1.5 flex items-center justify-center gap-2 rounded-md hover:bg-gray-200 transition cursor-pointer"
        >
          <i
            className={`fa-regular ${
              post?.is_liked ? "fa-solid text-red-600" : "fa-regular"
            } fa-heart text-xl text-gray-700`}
          ></i>
          <span className="leading-3"> Like </span>
        </div>

        <Dialog>
          <DialogTrigger>
            <div className="p-1.5 flex items-center justify-center gap-2 rounded-md hover:bg-gray-200 transition cursor-pointer">
              <i className="fa-regular fa-comment text-xl"></i>
              <span className="leading-3"> Comment </span>
            </div>
          </DialogTrigger>
          <DialogContent className="rounded-sm p-0">
            <DialogHeader>
              <DialogDescription>
                <ShowPost post_id={post?.id} />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <div
          onClick={(e) => {
            handleSave(e, post?.id);
          }}
          className="p-1.5 flex items-center justify-center gap-2 rounded-md hover:bg-gray-200 transition cursor-pointer"
        >
          <i
            className={`fa-regular ${
              post?.is_saved ? "fa-solid" : "fa-regular"
            } fa-bookmark text-xl text-gray-600`}
          ></i>
          <span className="leading-3 save">
            {" "}
            {post?.is_saved ? "Saved" : "Save"}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
