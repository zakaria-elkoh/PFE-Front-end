import customAxios from "@/axios/customAxios";
import { useEffect, useState } from "react";
import Comment from "./shared/Comment";

const ShowPost = () => {
  const [targetPost, setTargetPost] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [comment, setComment] = useState();

  useEffect((target_post_id = 26) => {
    customAxios
      .get(`/posts/${target_post_id}`)
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        setTargetPost(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addCommentToPost = () => {
    console.log("add comment", comment);
    console.log("target Post", targetPost.id);

    customAxios
      .post("/comments", { comment: comment, post_id: targetPost.id })
      .then((res) => {
        console.log(res);
        setComment("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full mx-auto overflow-hidden bg-white shadow-lg rounded-sm dark:bg-gray-800">
      <div className="p-3 pt-0">
        <div className="flex items-center">
          <img
            className="object-cover h-10 rounded-full"
            src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
            alt="Avatar"
          />
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
          {/* <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span> */}
          {/* <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">I Built A Successful Blog In One Year</a> */}
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
            {targetPost?.description}
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
        {/* <div className="flex items-center justify-center gap-2 ">
              {" "}
              <span className="leading-3"> </span>
            </div> */}
      </div>
      {targetPost?.comments.map((comment) => {
        <Comment comment={comment} />
        // console.log(comment)
      })}
      {/* <Comment comment={comment} /> */}
      <div className="bg-red-300 p-2">helljaldf</div>
      <div className="bg-white p-4 flex items-center">
        <input
          type="text"
          placeholder="Type your message..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="flex-1 border-2 text-gray-700 rounded-full px-4 py-2 focus:outline-none"
        />
        <button
          className="bg-blue-500 text-white rounded-full p-2 ml-2 hover:bg-blue-600 focus:outline-none"
          onClick={addCommentToPost}
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ShowPost;
