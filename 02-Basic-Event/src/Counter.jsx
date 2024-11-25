import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    const newCount = count + 1;
    setCount(newCount);
  }

  function decrease() {
    const newCount = count - 1;
    setCount(newCount);
  }

  return (
    <>
      <div className="border-2 border-green-500 p-5">
        <p>Count: {count}</p>
        <button onClick={increase} className="mx-2">
          Increase
        </button>
        <button onClick={decrease}>Decrease</button>
      </div>
    </>
  );
}
