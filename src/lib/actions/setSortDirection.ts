import { ActionType } from "../contexts/PostsProvider";

export const setSortDirection = (direction: number) => {
  return {
    type: ActionType.SET_SORTED_POSTS,
    payload: direction,
  };
};
