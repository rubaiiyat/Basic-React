import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddToCart from "./AddToCart";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count != 0) {
      setCount(count - 1);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <>
      <div className="bg-gray-900 p-10 w-96 mx-auto">
        <p className="text-4xl mb-10 font-bold">{count}</p>
        <div className="flex gap-5 justify-center">
          <button onClick={increaseCount} className="btn btn-accent ">
            Increase
          </button>
          <button onClick={decreaseCount} className="btn btn-error">
            Decrease
          </button>
          <button onClick={resetCount} className="btn">
            Reset
          </button>
        </div>
      </div>

      <AddToCart></AddToCart>
    </>
  );
}

export default App;
