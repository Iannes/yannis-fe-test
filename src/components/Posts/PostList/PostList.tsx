import { Post as PostType } from "src/pages/Posts";
import { Post } from "../Post/Post";
import "./PostList.css";

export const PostList = ({ posts }: { posts: PostType[] }) => {
  return (
    <>
      {posts?.map((post: PostType, index: number) => (
        <Post key={`${post.from_id}-${index}`} post={post} />
      ))}
    </>
  );
};
