import React, { useEffect, useState } from "react";
import Post from "../Post/Post";

const Posts = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("posts.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data.posts));
  }, []);
  return (
    <div>
      <div className="">
        {blogs.map((blog) => (
          <Post key={blog.id} blog={blog}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
