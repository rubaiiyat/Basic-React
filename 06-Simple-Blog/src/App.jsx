import { useState } from "react";
import "./App.css";
import Bookmarks from "./Bookmarks/Bookmarks";
import Header from "./Header/Header";
import Posts from "./Posts/Posts";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const [readTime, setReadTime] = useState(0);

  const addBookmarkBtn = (post, read_time) => {
    const newBookmarks = [...bookmarks, post];
    setBookmarks(newBookmarks);

    const newreadTime = parseInt(readTime) + parseInt(read_time);

    setReadTime(newreadTime);
  };

  console.log(readTime);

  return (
    <>
      <Header></Header>
      <div className="flex justify-evenly items-start">
        <Posts addBookmarkBtn={addBookmarkBtn}></Posts>
        <Bookmarks readTime={readTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
