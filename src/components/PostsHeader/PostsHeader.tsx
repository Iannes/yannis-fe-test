import React from "react";
import { filterPosts } from "src/lib/actions/filterPosts";
import { filterUsers } from "src/lib/actions/filterUsers";
import { setCachedPosts } from "src/lib/actions/setCachedPosts";
import { usePosts } from "src/lib/contexts/PostsProvider";
import { TextField } from "../TextField";
import { Controls } from "./Controls";
import "./PostsHeader.css";

type FormValues = {
  userFilter: string;
  postFilter: string;
};

export const PostsHeader = () => {
  const { state, dispatch } = usePosts();
  const [values, setValues] = React.useState<FormValues>({
    userFilter: "",
    postFilter: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setValues(() => {
      return {
        ...values,
        [name]: value,
      };
    });

    if (name === "userFilter") {
      dispatch(
        value.length === 0 ? setCachedPosts(state.cache) : filterUsers(value)
      );
      return;
    }

    // else set the post filter
    dispatch(
      value.length === 0 ? setCachedPosts(state.cache) : filterPosts(value)
    );
    return;
  };

  return (
    <header className="posts-header">
      <div className="user-search">
        <TextField
          disabled={false}
          type="text"
          name="userFilter"
          onChange={handleChange}
          value={values.userFilter}
          required
          id="Search"
          hideLabel
          variant="mini"
          placeholder="search"
          align="left"
        />
      </div>
      <div className="posts-search">
        <Controls />
        <TextField
          disabled={false}
          type="text"
          name="postFilter"
          onChange={handleChange}
          value={values.postFilter}
          required
          id="PostSearch"
          hideLabel
          variant="mini"
          placeholder="search"
          align="right"
        />
      </div>
    </header>
  );
};
