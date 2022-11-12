import { Post } from "src/pages/Posts";
import { User } from "./User/User";
import "./UserList.css";

type UserListProps = {
  users: [string, Post[]][];
};

export const UserList: React.FC<UserListProps> = ({ users }) => {
  return users.length > 0 ? (
    <div className="userList-container">
      {users.map(([userName, posts]) => {
        return <User key={userName} userName={userName} posts={posts} />;
      })}
    </div>
  ) : null;
};
