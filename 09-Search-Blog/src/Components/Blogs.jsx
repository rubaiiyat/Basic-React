import React, { useState } from "react";
import Blog from "./Blog";
import { useSearchParams } from "react-router";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Learn JavaScript",
      description:
        "Start with the basics of JavaScript including variables, functions, and loops.",
    },
    {
      id: 2,
      title: "React Fundamentals",
      description:
        "Understand the core concepts of React such as components, props, and state.",
    },
    {
      id: 3,
      title: "HTML & CSS",
      description:
        "Build structured web pages using HTML and style them with CSS.",
    },
    {
      id: 4,
      title: "Node.js Basics",
      description: "Learn how to build server-side applications using Node.js.",
    },
    {
      id: 5,
      title: "Django Introduction",
      description:
        "Get started with Django and understand its powerful MVC architecture.",
    },
    {
      id: 6,
      title: "SQL for Beginners",
      description:
        "Learn how to write basic SQL queries to retrieve and manipulate data.",
    },
    {
      id: 7,
      title: "Git & GitHub",
      description:
        "Version control your code using Git and collaborate with others using GitHub.",
    },
    {
      id: 8,
      title: "Build a Portfolio",
      description:
        "Create a personal portfolio website to showcase your projects and skills.",
    },
    {
      id: 9,
      title: "API Integration",
      description:
        "Learn how to fetch data from external APIs and display it in your application.",
    },
    {
      id: 10,
      title: "Responsive Design",
      description:
        "Make your website look great on all devices using responsive design techniques.",
    },
  ];

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("") || "";
  const [searchItem, setSearchItem] = useState(searchQuery);

  const filterBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ "": searchItem });
    console.log(filterBlogs);
  };

  return (
    <div className="mt-5">
      <h1 className="text-4xl font-bold mb-5">Recent Posts</h1>

      <form onSubmit={handleSearch} action="">
        <div className="flex gap-1 justify-center">
          <input
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            className="input mb-5 "
            type="text"
            placeholder="Search Here"
          />
          <button className="btn bg-secondary">Search</button>
        </div>
      </form>
      {filterBlogs.length > 0 ? (
        <div className="flex flex-wrap gap-5 justify-center">
          {filterBlogs.map((blog) => (
            <Blog key={blog.id} blog={blog}></Blog>
          ))}
        </div>
      ) : (
        <p className="text-error">Not Found Any Blog!</p>
      )}
    </div>
  );
};

export default Blogs;
