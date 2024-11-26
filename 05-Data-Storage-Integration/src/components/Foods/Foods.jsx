import { useEffect } from "react";
import { useState } from "react";

const Foods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setFoods(data.recipes));
  }, []);

  console.log(foods);

  return (
    <div>
      <div>{foods.map((food) => console.log(food))}</div>
    </div>
  );
};

export default Foods;
