import { Post } from "src/pages/Posts";
import { ActionType } from "../contexts/PostsProvider";

export const setCachedPosts = (cache: Post[] | []) => {
  return { type: ActionType.SET_CACHED_POSTS, payload: cache };
};
