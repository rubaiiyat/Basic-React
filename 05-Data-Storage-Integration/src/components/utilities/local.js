const getStoredCard = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse();
  }

  return [];
};

const savedCartToLS = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addToLS = (id) => {
  const cart = getStoredCard();
  cart.push(id);
};

export { addToLS, savedCartToLS };
