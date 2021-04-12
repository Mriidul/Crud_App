import react, { useContext } from "react";
import { PostContext } from "../context/PostContext";
import Post from "./Post";
import { DislikedPagesContext } from "../context/DislikedPageContext";
import { Typography } from "@material-ui/core";

const LikedPosts = () => {
  const [posts, setPosts] = useContext(PostContext);
  const [dislikedPostId, setDisikedPostId] = useContext(DislikedPagesContext);

  return (
    <div>
      <Typography>
        <h1>Diliked Posts</h1>
      </Typography>
      {posts.map((post) => {
        if (dislikedPostId.includes(post.id)) {
          return (
            <Post
              title={post.title}
              id={post.id}
              userId={post.userId}
              body={post.body}
              key={post.id}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default LikedPosts;
