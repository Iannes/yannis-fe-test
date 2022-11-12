import { Post } from "src/pages/Posts";
import { ActionType } from "../contexts/PostsProvider";

export const setUserPosts = (posts: Post[]) => {
  return {
    type: ActionType.SET_USER_POSTS,
    payload: posts,
  };
};
