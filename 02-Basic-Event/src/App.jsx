import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";

function App() {
  let count = 0;

  function handleClick() {
    alert("Button Click");
  }

  const secondHandleClick = (num) => {
    alert(num);
  };

  return (
    <>
      <Counter></Counter>
      <button onClick={handleClick}>Alert Me</button>
      <button onClick={() => secondHandleClick(5)}>Second Alert Me</button>
    </>
  );
}

export default App;
