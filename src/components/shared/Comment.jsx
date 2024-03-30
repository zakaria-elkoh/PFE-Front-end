const Comment = ({ comment }) => {
  return (
    <div className="flex items-center">
      <img
        className="object-cover h-10 rounded-full"
        src={comment?.author?.profile_image}
        alt="Avatar"
      />
      <div className="flex flex-col ml-2">
        {/* <a
          href="#"
          className="font-bold text-gray-700 capitalize dark:text-gray-200"
          tabIndex="0"
          role="link"
        >
          {targetPost?.author?.name} .
          <span className="font-medium text-gray-500 dark:text-gray-200">
            Lawyer
          </span>
        </a> */}
        {comment?.body} hdsfha
        <span className="text-xs text-gray-600 dark:text-gray-300">
          {comment?.body} ljkdl;ajdsf
        </span>
      </div>
    </div>
  );
};

export default Comment;
