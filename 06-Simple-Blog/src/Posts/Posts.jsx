import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
const Posts = ({ addBookmarkBtn }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("posts.json")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  return (
    <div className="w-6/12">
      {posts.map((post) => (
        <Post key={post.id} post={post} addBookmarkBtn={addBookmarkBtn}></Post>
      ))}
    </div>
  );
};

export default Posts;
