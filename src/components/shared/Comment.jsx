import { getFirstLetters } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Comment = ({ comment }) => {
  return (
    // <div className="flex items-center bg-red-200 px-2">
    //   <img
    //     className="object-cover h-10 w-10 rounded-full"
    //     src={comment?.author?.profile_image}
    //     alt="Avatar"
    //   />
    //   <div className="flex flex-col ml-2">
    //     {comment?.author?.name}
    //     <span className="text-xs text-gray-600 dark:text-gray-300">
    //       {comment?.body}
    //     </span>
    //   </div>
    // </div>
    <div className="flex items-center my-1 px-2">
      <Avatar className="border-2 w-11 h-11">
        <AvatarImage src={comment?.author?.profile_image} />
        <AvatarFallback>
          {getFirstLetters(comment?.author?.name)}
        </AvatarFallback>
      </Avatar>

      <div className="ml-2 text-left bg-gray-200 w-full px-3 py-1.5 rounded-xl">
        <h1 className="font-semibold text-gray-800 dark:text-white capitalize">
          {comment?.author?.name}
        </h1>
        <span className="text-sm text-gray-500">{comment?.body}</span>
      </div>
    </div>
  );
};

export default Comment;
