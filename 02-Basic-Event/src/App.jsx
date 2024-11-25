import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let count = 0;

  function handleClick() {
    count += 1;
  }

  return (
    <>
      <button onClick={handleClick()}>Count Me</button>
      <h1>Count {count}</h1>
    </>
  );
}

export default App;
