import React, { useState } from "react";

const Product = ({ product, addToCart }) => {
  const { name, price } = product;

  return (
    <div>
      <div className="bg-gray-900 border p-5 rounded-xl ">
        <h1>Name: {name}</h1>
        <p>Price: ${price}</p>
        <button
          onClick={() => addToCart(product)}
          className="btn bg-green-700 text-white p-2 rounded text-xs mt-5"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
