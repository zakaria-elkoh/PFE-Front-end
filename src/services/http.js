import customAxios from "@/axios/customAxios";
import { toast } from "sonner";

// save functions
const storeSave = async (post_id) => {
    console.log("will addd save", post_id);
  try {
    const res = await customAxios.post(`/posts/${post_id}/save`);
    console.log("from the back end", res.data);
  } catch (error) {
    console.log(error.response.data.message);
  }
}
const removeSave = async (post_id) => {
    console.log('will remove save', post_id);
  try {
    const res = await customAxios.delete(`/posts/${post_id}/save`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}
// like functions
const storeLike = async (post_id) => {
    console.log("will addd like", post_id);
  try {
    const res = await customAxios.post(`/posts/${post_id}/like`);
    console.log(res.data);
  } catch (error) {
    console.log(error.response.data.message);
  }
}
const removeLike = async (post_id) => {
    console.log('will remove like', post_id);
  try {
    const res = await customAxios.delete(`/posts/${post_id}/like`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}

// follow functions
const storeFollow = async (id) => {
  console.log("will follow", id);
  try {
      const res = await customAxios.post(`/users/${id}/follow`);
      console.log(res.data);
  } catch (error) {
      console.log(error);
  }
}
const removeFollow = async (id) => {
    try {
      const res = await customAxios.delete(`/users/${id}/follow`);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

// comment functions
const storeComment = async (id, comment) => {
  try {
    const res = await customAxios.post(`/posts/${id}/comment`, { comment });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}
const removeComment = async (id, commentId) => {
    try {
        const res = await customAxios.delete(`/posts/${id}/comment/${commentId}`);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}
// comment functions
const storeMessage = async (receiverId, message) => {
  try {
    const res = await customAxios.post(`/users/message`, { message: message, receiver_id: receiverId });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}
const removeMessage = async (id, message) => {
    try {
        const res = await customAxios.delete(`/posts/${id}/comment/${commentId}`);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}


// admin functions
const banUser = async (user_id) => {
  const res = await customAxios.get(`/admin/users/${user_id}/ban`);
  return res.data;
};

const unbanUser = async (user_id) => {
  const res = await customAxios.get(`/admin/users/${user_id}/unban`);
  return res.data;
};



export {
    storeLike,
    removeLike,
    storeComment,
    removeComment,
    removeFollow,
    storeFollow,
    removeSave,
    storeSave,
    storeMessage,
    removeMessage,
    banUser,
    unbanUser
};