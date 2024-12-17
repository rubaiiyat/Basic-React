import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singers from "./Singers";

function App() {
  const actors = ["Ananta", "Jayed khan", "Hero Alam", "Sakib khan"];

  const people = [
    {
      name: "John Doe",
      age: 25,
      musicGenre: "Rock",
    },
    {
      name: "Jane Smith",
      age: 30,
      musicGenre: "Jazz",
    },
    {
      name: "Alice Johnson",
      age: 22,
      musicGenre: "Pop",
    },
    {
      name: "Bob Brown",
      age: 28,
      musicGenre: "Hip-Hop",
    },
    {
      name: "Emily Davis",
      age: 35,
      musicGenre: "Classical",
    },
  ];
  return (
    <>
      <Products name="Mobile" price="200"></Products>
      <Products name="Laptop" price="2530"></Products>
      <Products name="Mouse" price="50"></Products>
      <Products name></Products>
      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Learn Javascript" isDone={false}></Todo>
      <Todo task="Learn Python" isDone={false}></Todo>
      <Todo task="Learn Django" isDone={true}></Todo>

      <Actor name={"Bappa"}></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}

      <div className="flex justify-center">
        {people.map((singer) => (
          <Singers singer={singer}></Singers>
        ))}
      </div>
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
