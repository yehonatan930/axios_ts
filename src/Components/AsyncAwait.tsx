import React, { useEffect, useState } from "react";
import PostsApi from "../utils/postsApi";
import { Post } from "../types";

export default function AsyncAwait() {
  const [post, setPost] = useState<Post | null>(null);
  const postsApi = PostsApi.getInstance();

  useEffect(() => {
    const getPostState = async () => {
      const response = await postsApi.getPost("1");
      setPost(response.data);
    };

    getPostState();
  }, []);

  const deletePost = async () => {
    await postsApi.deletePost("1");
    alert("Post deleted!");
    setPost(null);
  };

  return (
    <div>
      <h1>{post && post.title}</h1>
      <p>{post && post.body}</p>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}
