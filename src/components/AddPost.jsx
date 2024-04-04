import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { getFirstLetters } from "@/lib/utils";
import { useState } from "react";
import customAxios from "@/axios/customAxios";
import { toast } from "sonner";

const AddPost = () => {
  const { authUser } = useAuth();
  const [postImage, setPostImage] = useState();
  const [postData, setPostData] = useState({});
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setPostData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalPostData = {
      ...postData,
      post_image: postImage,
    };

    const formData = new FormData();
    formData.append("description", finalPostData.description);
    formData.append(
      "title",
      "ctrygvuibhjn dxtcfyugvibhjnkm dtcfyvgubhijnkm xctfygvhbjk"
    );
    formData.append("post_image", finalPostData.post_image);

    console.log(formData);

    customAxios
      .post("/posts", formData)
      .then((res) => {
        console.log(res);
        setOpen(false);
        toast.success("Post added with success.");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to add post.");
      });
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="flex items-center my-2">
        <Avatar className="border-2 w-12 h-12">
          <AvatarImage src={authUser.profile_image} />
          <AvatarFallback>{getFirstLetters(authUser.name)}</AvatarFallback>
        </Avatar>

        <div className="ml-2 my-3 text-left">
          <h1 className="font-semibold text-gray-800 dark:text-white">
            {authUser.name}
          </h1>
          <span className="text-sm text-gray-500">@{authUser.user_name}</span>
        </div>
      </div>
      <div className="w-full mt-4 leading-loose text-gray-500 dark:text-gray-400">
        <textarea
          className="block w-full h-28 px-3 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white rounded-md border border-gray-300 md:h-36 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-300 focus:border-gray-400 outline-none"
          placeholder="What do you want to talk about?"
          name="description"
          value={postData.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="w-full mt-4 leading-loose text-gray-500 dark:text-gray-400">
        <input
          type="file"
          className="w-full bg-red-200 h-24 cursor-pointer"
          name="post_image"
          onChange={(e) => {
            setPostImage(e.target.files[0]);
          }}
        />
      </div>
      <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
        Add Post
      </button>
    </form>
  );
};

export default AddPost;
