import react, { useContext } from "react";
import { LikedPagesContext } from "../context/LikedPagesContext";
import { PostContext } from "../context/PostContext";
import Post from "./Post";
import { Typography } from "@material-ui/core";

const LikedPosts = () => {
  const [posts, setPosts] = useContext(PostContext);
  const [likedPostId, setLikedPostId] = useContext(LikedPagesContext);

  return (
    <div>
      <Typography>
        <h1>LIKED POST</h1>
      </Typography>

      {posts.map((post) => {
        if (likedPostId.includes(post.id)) {
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
