import customAxios from "@/axios/customAxios";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { toast } from "sonner";

const EditDeletePopOver = ({ post }) => {
  const handleEdit = () => {
    console.log("edit" + post?.id);
  };

  const handleDelete = async () => {
    const res = await customAxios.delete(`/posts/${post.id}`);
    if (res.status === 200) {
      toast.success("Post deleted successfully");
    } else {
      toast.error("An error occurred");
    }
  };

  return (
    <Popover>
      <PopoverTrigger>
        <i className="fa-solid fa-ellipsis-vertical text-xl font-bold text-gray-500 mr-5"></i>
      </PopoverTrigger>
      <PopoverContent classList="p-0">
        <button
          onClick={handleEdit}
          className="bg-gray-100 block w-full py-1 hover:bg-gray-200 rounded-sm transition-all font-bold text-gray-500"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-gray-100 block w-full py-1 hover:bg-gray-200 rounded-sm transition-all font-bold text-gray-500 mt-1"
        >
          Delete
        </button>
      </PopoverContent>
    </Popover>
  );
};

export default EditDeletePopOver;
