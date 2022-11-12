import * as React from "react";
import { setUserPosts } from "src/lib/actions/setUserPosts";
import { usePosts } from "src/lib/contexts/PostsProvider";
import { Post } from "src/pages/Posts";
import "./User.css";

type UserProps = {
  userName: string;
  posts: Post[];
};

export const User: React.FC<UserProps> = ({ userName, posts }) => {
  const { dispatch } = usePosts();
  const handleClick = (): void => {
    dispatch(setUserPosts(posts));
  };

  return (
    <button tabIndex={0} onClick={handleClick} className="user">
      <div className="user-name">{userName}</div>
      <span className="post-count">{posts.length}</span>
    </button>
  );
};
