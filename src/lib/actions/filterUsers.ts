import { ActionType } from "../contexts/PostsProvider";

export const filterUsers = (searchTerm: string) => {
  return { type: ActionType.FILTER_USERS, payload: searchTerm };
};
