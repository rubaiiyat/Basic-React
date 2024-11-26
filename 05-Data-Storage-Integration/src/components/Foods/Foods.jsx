import { useEffect } from "react";
import { useState } from "react";
import Food from "../Food/Food";

const Foods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setFoods(data.recipes));
  }, []);

  return (
    <div>
      <div className="flex flex-wrap gap-10 item-center justify-center mt-5">
        {foods.map((food) => (
          <Food key={food.id} food={food}></Food>
        ))}
      </div>
    </div>
  );
};

export default Foods;
