import * as React from "react";
import { formatDate } from "src/lib/utils/formatDate";
import { Post as PostType } from "src/pages/Posts";
import "./Post.css";

type PostProps = {
  post: PostType;
};

export const Post: React.FC<PostProps> = ({ post }) => {
  const formattedDate = formatDate(post.created_time, "en-US");
  return (
    <article className="post-container">
      <header className="post-header">
        <time dateTime={formattedDate}>{formattedDate}</time>
      </header>
      <p className="post-content">{post.message}</p>
    </article>
  );
};
