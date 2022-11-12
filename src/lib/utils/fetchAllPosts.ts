import { Post } from "src/pages/Posts";
import { axiosInstance } from "./axiosInstance";

export enum ENDPOINT {
  REGISTER = "/register",
  POSTS = "/posts",
}

type Data = {
  page: number;
  posts: Post[];
};

type FetchParams = { sl_token: string | null | undefined; page: number };

export const fetchAllPosts = async (params: FetchParams) => {
  const options = { params };
  const { data } = await axiosInstance.get<{ data: Data }>(
    ENDPOINT.POSTS,
    options
  );

  return {
    posts: data.data.posts,
    page: data.data.page,
  };
};
