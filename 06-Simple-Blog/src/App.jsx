import { useState } from "react";
import "./App.css";
import Bookmark from "./Bookmark/Bookmark";
import Header from "./Header/Header";
import Posts from "./Posts/Posts";

function App() {
  const [bookmark, setBookmark] = useState([]);

  const addBookmarkBtn = (blog) => {
    console.log("working");
  };
  return (
    <>
      <Header></Header>
      <div className="mx-20 flex ">
        <Posts addBookmarkBtn={addBookmarkBtn}></Posts>
        <Bookmark></Bookmark>
      </div>
    </>
  );
}

export default App;
