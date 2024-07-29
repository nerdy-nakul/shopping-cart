import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: +quantity } : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
