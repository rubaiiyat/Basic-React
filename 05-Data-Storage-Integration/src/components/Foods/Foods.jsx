import { useEffect } from "react";
import { useState } from "react";
import Food from "../Food/Food";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setFoods(data.recipes));
  }, []);

  const addToCart = (food) => {
    const newCart = [...cart, food];
    setCart(newCart);
  };

  console.log(cart);
  return (
    <div>
      <div>
        <h3 className="text-center">Total Items: {cart.length}</h3>
      </div>
      <div className="flex flex-wrap gap-10 item-center justify-center mt-5">
        {foods.map((food) => (
          <Food key={food.id} food={food} addToCart={addToCart}></Food>
        ))}
      </div>
    </div>
  );
};

export default Foods;
