import React from "react";
import { FaBookmark, FaEye } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { AiFillDislike } from "react-icons/ai";

const Post = ({ post }) => {
  const {
    image_url,
    title,
    details,
    author,
    author_profile_picture,
    post_date,
    read_time,
    views,
    likes,
    dislikes,
    tags,
  } = post;

  return (
    <div>
      <div className="m-10 p-10  w-5/12 rounded-2xl  bg-gray-900  ">
        <img className="rounded-2xl" src={image_url} alt="" />

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div>
              <img
                className="w-10 rounded-full"
                src={author_profile_picture}
                alt=""
              />
            </div>

            <div>
              <h1 className="font-bold">{author}</h1>
              <p>{post_date}</p>
            </div>
          </div>

          <button className="flex items-center gap-2 hover:text-white">
            <h1>{read_time} min read </h1>
            <p className="text-red-500">
              {"  "}
              <FaBookmark />
            </p>
          </button>
        </div>

        <div className="mt-3">
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          <p>{details}</p>
        </div>

        <div className="mt-2 flex gap-5 items-center">
          <div className="flex gap-1 items-center text-white">
            <h1 className="text-xl">
              <FaEye />
            </h1>
            <p>{views}</p>
          </div>

          <div className="flex gap-1 items-center text-white">
            <h1 className="text-xl">
              <FcLike />
            </h1>
            <p>{likes}</p>
          </div>

          <div className="flex gap-1 items-center text-white">
            <h1 className="text-xl">
              <AiFillDislike />
            </h1>
            <p>{dislikes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
