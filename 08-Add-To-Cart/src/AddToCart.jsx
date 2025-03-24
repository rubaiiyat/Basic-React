import React, { useState } from "react";
import Product from "./Product";

const AddToCart = () => {
  const products = [
    {
      id: 1,
      name: "Watch",
      price: 10,
    },
    {
      id: 2,
      name: "Guitar",
      price: 15,
    },
    {
      id: 3,
      name: "Monitor",
      price: 5,
    },
    {
      id: 4,
      name: "Bat",
      price: 12,
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((items) => [...items, product]);
  };
  return (
    <div>
      <h1 className="mt-10 text-4xl">Add to cart</h1>

      <div className="flex gap-5 bg-gray-900 p-10 justify-center ">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>

      <div>
        {cart.length === 0 ? (
          <p className="text-error">Cart Is Empty</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} : ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AddToCart;
