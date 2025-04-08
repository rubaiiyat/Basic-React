import React from "react";

const Blog = ({ blog }) => {
  const { id, title, description } = blog;
  return (
    <div className="bg-gray-900 hover:bg-gray-950 cursor-pointer rounded p-5 w-96">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Blog;
