import React from "react";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div>
      <h1 className="text-xl text-white bg-gray-950 m-5 p-5 rounded-xl">
        {title}
      </h1>
    </div>
  );
};

export default Bookmark;
