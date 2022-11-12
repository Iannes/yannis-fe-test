import { ActionType } from "../contexts/PostsProvider";

export const filterPosts = (searchTerm: string) => {
  return { type: ActionType.FILTER_USER_POSTS, payload: searchTerm };
};
