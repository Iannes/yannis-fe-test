import { Post } from "src/pages/Posts";

export const filterPostsByName = (posts: Post[], searchTerm: string) => {
  return posts.filter((user) =>
    user.from_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const filterPostsByContent = (posts: Post[], searchTerm: string) => {
  return posts.filter((user) =>
    user.message.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
