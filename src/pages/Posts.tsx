import { useEffect } from "react";
import { Loader } from "src/components/Loader";
import { PostList } from "src/components/Posts/PostList";
import { PostsLayout } from "src/components/Posts/PostsLayout";
import { PostsHeader } from "src/components/PostsHeader";
import { UserList } from "src/components/UserList";
import { setAllPosts } from "src/lib/actions/setAllPosts";
import { useAuth } from "src/lib/contexts/AuthProvider";
import { usePosts } from "src/lib/contexts/PostsProvider";
import { fetchAllPosts } from "src/lib/utils/fetchAllPosts";

export type Post = {
  id: string;
  from_name: string;
  from_id: string;
  message: string;
  type: string;
  created_time: string;
};

const Posts = () => {
  const auth = useAuth();
  const { state, dispatch } = usePosts();

  useEffect(() => {
    const getPosts = async () => {
      const { posts } = await fetchAllPosts({
        sl_token: auth?.token,
        page: 1,
      });
      if (posts.length > 0) dispatch(setAllPosts(posts));
    };

    if (auth?.token) {
      getPosts();
    }
  }, [auth?.token, dispatch]);

  return (
    <div className="posts-page">
      <PostsHeader />
      <Loader loading={state.loading} />
      <PostsLayout>
        {state.posts.length > 0 ? (
          <>
            <div className="list-container">
              <UserList users={Object.entries(state.groupedByname)} />
            </div>
            <div className="list-container">
              <PostList posts={state.posts} />
            </div>
          </>
        ) : (
          <div className="list-container">
            {!state.loading && <h3>No results found</h3>}
          </div>
        )}
      </PostsLayout>
    </div>
  );
};

export default Posts;
