import customAxios from "@/axios/customAxios";
import { toast } from "sonner";

const PostTr = ({ post, refetch }) => {
  const handleDelete = async () => {
    const res = await customAxios.delete(`/admin/posts/${post.id}`);
    toast.success("Post deleted successfully");
    refetch();
    console.log(res);
  };

  return (
    <tr>
      <td className="py-3 px-5 border-b border-blue-gray-50">
        <div className="flex items-center gap-4">
          <div>
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
              {post.id}
            </p>
          </div>
        </div>
      </td>
      <td className="py-3 px-5 border-b border-blue-gray-50">
        <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
          {post.body}
        </p>
      </td>
      <td className="py-3 px-5 border-b border-blue-gray-50">
        {post?.author?.user_name}
      </td>
      <td className="py-3 px-5 border-b border-blue-gray-50">
        <buttn
          onClick={handleDelete}
          className="block antialiased  cursor-pointer hover:underline font-sans text-xs font-semibold text-blue-gray-600"
        >
          <i className="fa-solid fa-trash-can text-lg textr-center"></i>
        </buttn>
      </td>
    </tr>
  );
};

export default PostTr;
