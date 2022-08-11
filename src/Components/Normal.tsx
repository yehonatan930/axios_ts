import React, { useEffect, useState } from "react";
import PostsApi from "../utils/postsApi";
import { Post } from "../types";

export default function Normal() {
  const [post, setPost] = useState<Post | null>(null);
  const postsApi = PostsApi.getInstance();

  useEffect(() => {
    postsApi.getPost("1").then((response) => {
      setPost(response.data);
    });
  }, []);

  const deletePost = () => {
    postsApi.deletePost("1").then(() => {
      alert("Post deleted!");
      setPost(null);
    });
  };

  return (
    <div>
      <h1>{post && post.title}</h1>
      <p>{post && post.body}</p>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}
