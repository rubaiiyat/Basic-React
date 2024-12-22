import { useState } from "react";
import "./App.css";
import Bookmarks from "./Bookmarks/Bookmarks";
import Header from "./Header/Header";
import Posts from "./Posts/Posts";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmarkBtn = (post) => {
    const newBookmarks = [...bookmarks, post];
    setBookmarks(newBookmarks);
  };
  return (
    <>
      <Header></Header>
      <div className="flex justify-evenly items-start">
        <Posts addBookmarkBtn={addBookmarkBtn}></Posts>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
