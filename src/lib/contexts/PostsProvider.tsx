import * as React from "react";
import { Post } from "src/pages/Posts";
import { ReactFCC } from "../../types";
import { filterPostsByName, filterPostsByContent } from "../utils/filters";
import { groupBy } from "../utils/groupBy";
import { sortBy } from "../utils/sortBy";

type SearchTerm = { searchTerm: string };

type Payload = Post[] | SearchTerm;

type Action =
  | { type: ActionType; payload: Payload }
  | { type: ActionType; payload: Payload }
  | { type: ActionType; payload: any };

type Dispatch = (action: Action) => void;

export type GroupedPosts = {
  [key: string]: Post[];
};

export type State = {
  posts: Post[] | [];
  cache: Post[] | [];
  groupedByname: GroupedPosts | [];
  loading: boolean;
  sortOrder: number;
};

export enum ActionType {
  SET_ALL_POSTS = "setPosts",
  SET_USER_POSTS = "setUserPosts",
  FILTER_USER_POSTS = "filterUserPosts",
  FILTER_USERS = "filterUsers",
  SET_CACHED_POSTS = "setCachedPosts",
  SET_SORTED_POSTS = "setSortedPosts",
}

const initialState = {
  posts: [],
  groupedByname: [],
  loading: true,
  cache: [],
  sortOrder: 1,
};

function postsReducer(state: State, action: Action) {
  switch (action.type) {
    case ActionType.SET_ALL_POSTS: {
      const sortedByName = sortBy(action.payload, "from_name", 1);
      const sortedPostsByTime = sortBy(action.payload, "created_time", 1);
      return {
        ...state,
        posts: sortedPostsByTime,
        cache: sortedPostsByTime,
        groupedByname: groupBy(sortedByName, "from_name"),
        loading: typeof action.payload === "undefined",
      };
    }
    case ActionType.SET_USER_POSTS: {
      return {
        ...state,
        posts: sortBy(action.payload, "created_time", state.sortOrder),
      };
    }
    case ActionType.FILTER_USERS: {
      const filteredByName = filterPostsByName(state.posts, action.payload);
      return {
        ...state,
        posts: filteredByName,
        groupedByname: groupBy(filteredByName, "from_name"),
      };
    }
    case ActionType.FILTER_USER_POSTS: {
      const filteredByPostContent = filterPostsByContent(
        state.posts,
        action.payload
      );
      return {
        ...state,
        posts: filteredByPostContent,
        groupedByname: groupBy(filteredByPostContent, "from_name"),
      };
    }
    case ActionType.SET_CACHED_POSTS: {
      const sortedPostsByTime = sortBy(
        action.payload,
        "created_time",
        state.sortOrder
      );
      const sortedByName = sortBy(action.payload, "from_name", 1);
      return {
        ...state,
        posts: sortedPostsByTime,
        groupedByname: groupBy(sortedByName, "from_name"),
      };
    }
    case ActionType.SET_SORTED_POSTS: {
      const sortedPostsByTime = sortBy(
        state.posts,
        "created_time",
        action.payload
      );
      return {
        ...state,
        posts: sortedPostsByTime,
        sortOrder: action.payload,
      };
    }

    default: {
      console.error(`Unhandled action type: ${action.type}`);
      return state;
    }
  }
}

const PostsContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const PostsProvider: ReactFCC = ({ children }) => {
  const [state, dispatch] = React.useReducer(postsReducer, initialState);

  const value = { state, dispatch };
  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};

function usePosts() {
  const context = React.useContext(PostsContext);

  if (context === undefined) {
    throw new Error("usePosts must be used within a PostsProvider");
  }

  return context;
}

export { PostsProvider, usePosts };
