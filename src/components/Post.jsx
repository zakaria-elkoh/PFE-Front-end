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

const Post = ({ post }) => {
  return (
    <div className="w-full mx-auto overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg dark:bg-gray-800">
      <div className="p-3">
        <div className="flex items-center">
          <Avatar className="border-2 w-11 h-11 grid place-items-center">
            <AvatarImage src={post?.author?.profile_image} />
            <AvatarFallback className="text-lg">
              {getFirstLetters(post?.author?.name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col ml-2">
            <a
              href="#"
              className="font-bold text-gray-700 capitalize dark:text-gray-200"
              tabIndex="0"
              role="link"
            >
              {post?.author?.name} .
              <span className="font-medium text-gray-500 dark:text-gray-200">
                Lawyer
              </span>
            </a>
            <span className="text-xs text-gray-600 dark:text-gray-300">
              {post?.created_at}
            </span>
          </div>
        </div>
      </div>

      <div className="p-3 pb-6">
        <div>
          {/* <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span> */}
          {/* <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">I Built A Successful Blog In One Year</a> */}
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
            {post?.body} this is the body of this page in here his is the body
            of this page in here his is the body of this page in here
          </p>
        </div>
      </div>

      <img className="object-cover w-full" src={post?.image} alt="Article" />

      <div className="py-3 px-4 border-b border-gray-200 text-gray-500 mx-auto grid grid-cols-2 text-sma">
        <span className="leading-3"> 122 likes</span>
        <span className="leading-3 text-right"> 166 comments</span>
        {/* <div className="flex items-center justify-center gap-2 ">
          {" "}
          <span className="leading-3"> </span>
        </div> */}
      </div>

      <div className="p-1 grid grid-cols-3 text-center text-gray-600 font-semibold">
        <div
          onClick={(e) => {
            const iconElement = e.currentTarget.querySelector("i");
            console.log(
              iconElement.classList.toggle("fa-solid"),
              iconElement.classList.toggle("text-red-600"),
              e.currentTarget.querySelector("i")
            );
          }}
          className="p-1.5 flex items-center justify-center gap-2 rounded-md hover:bg-gray-200 transition cursor-pointer"
        >
          <i className="fa-regular fa-heart text-xl text-gray-700"></i>
          <span className="leading-3"> Like </span>
        </div>

        <Dialog>
          <DialogTrigger>
            <div
              onClick={(e) => {
                console.log(e.currentTarget.querySelector("i"));
              }}
              className="p-1.5 flex items-center justify-center gap-2 rounded-md hover:bg-gray-200 transition cursor-pointer"
            >
              <i className="fa-regular fa-comment text-xl"></i>
              <span className="leading-3"> Comment </span>
            </div>
            
          </DialogTrigger>
          {/* add post form */}
          <DialogContent className="rounded-sm p-0">
            <DialogHeader>
              {/* <DialogTitle></DialogTitle> */}
              <DialogDescription>
                <ShowPost />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <div
          onClick={(e) => {
            const span = e.currentTarget.querySelector("span.save");
            console.log(
              e.currentTarget.querySelector("i").classList.toggle("fa-solid"),
              e.currentTarget.querySelector("i"),
              span.innerText === "Save"
                ? (span.innerText = "Saved")
                : (span.innerText = "Save")
            );
          }}
          className="p-1.5 flex items-center justify-center gap-2 rounded-md hover:bg-gray-200 transition cursor-pointer"
        >
          <i className="fa-regular fa-bookmark text-xl text-gray-600"></i>
          <span className="leading-3 save"> Save </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
