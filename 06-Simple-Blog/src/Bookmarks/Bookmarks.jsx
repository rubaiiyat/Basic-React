import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readTime }) => {
  return (
    <div>
      <div className="p-5  rounded-2xl  bg-gray-900 mt-10">
        <h1 className="text-white text-2xl font-bold mx-5">
          Read Time: {readTime}
        </h1>
        <h1 className="text-white text-2xl font-bold mx-5">
          Bookmarked Post: {bookmarks.length}
        </h1>
        {bookmarks.map((bookmark, index) => (
          <Bookmark key={index} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
