import React from "react";
import { FaEye, FaBookmark } from "react-icons/fa";
import { FcLike, FcDislike } from "react-icons/fc";
import { AiFillDislike } from "react-icons/ai";
const Post = ({ blog }) => {
  const {
    image_url,
    title,
    details,
    tags,
    author,
    author_profile_picture,
    post_date,
    read_time,
    views,
    likes,
    dislikes,
  } = blog;
  return (
    <div>
      <div className="m-5 text-start bg-gray-900 hover:bg-950 p-5 rounded-2xl w-5/12">
        <img className="mb-2 rounded-2xl" src={image_url} alt="" />

        <div className="flex justify-between mt-5 mb-2">
          <div className="flex items-center gap-3">
            <div>
              <img
                className="w-12 rounded-full"
                src={author_profile_picture}
                alt=""
              />
            </div>
            <div>
              <h1 className="text-white font-bold">{author}</h1>
              <h1>{post_date}</h1>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="">{read_time} min read</h1>
            <button className="text-red-500">
              <FaBookmark />
            </button>
          </div>
        </div>
        <h1 className="text-2xl text-white font-bold">{title}</h1>
        <p className="my-2">{details}</p>

        {tags.map((tag, index) => (
          <span key={index} className="text-blue-500">
            {" "}
            #{tag}{" "}
          </span>
        ))}
        <div>
          <div className="flex gap-5 mt-2">
            <div className="flex  items-center gap-1 ">
              <p>
                <FaEye />
              </p>
              <p> {views}</p>
            </div>

            <div className="flex items-center gap-1 ">
              <p>
                <FcLike />
              </p>
              <p> {likes}</p>
            </div>

            <div className="flex items-center gap-1 ">
              <p>
                <AiFillDislike />{" "}
              </p>
              <p>{dislikes}</p>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Post;
