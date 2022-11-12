import { Post } from "src/pages/Posts";
import { ActionType } from "../contexts/PostsProvider";

export const setAllPosts = (posts: Post[]) => {
  return {
    type: ActionType.SET_ALL_POSTS,
    payload: posts,
  };
};
