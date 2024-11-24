import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <Products name="Mobile" price="200"></Products>
      <Products name="Laptop" price="2530"></Products>
      <Products name="Mouse" price="50"></Products>
    </>
  );
}

function Products(props) {
  return (
    <h2 className="text-accent text-start">
      Name: {props.name}, Price: ${props.price}
    </h2>
  );
}

export default App;
