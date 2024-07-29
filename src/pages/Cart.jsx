import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import EmptyCart from "../components/EmptyCart";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, totalPrice } =
    useContext(CartContext);

  const handleIncrease = (productId, quantity) => {
    updateQuantity(productId, quantity + 1);
  };

  const handleDecrease = (productId, quantity) => {
    if (quantity > 1) {
      updateQuantity(productId, quantity - 1);
    }
  };

  const handleRemove = (productId) => {
    removeFromCart(productId);
    toast.error("Item Removed From Cart");
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
      {cartItems.length > 0 ? (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-3 gap-4 items-center border-b pb-2 mb-2"
            >
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 object-contain col-span-1"
                />
              </Link>
              <div className="col-span-1">
                <h4 className="text-lg font-bold text-gray-800">
                  {item.title}
                </h4>
                <h5 className="text-gray-600">${item.price}</h5>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => handleDecrease(item.id, item.quantity)}
                    className="text-gray-600 hover:text-gray-800 border border-gray-300 p-1 rounded-l"
                  >
                    <FaMinus />
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    className=" w-16 text-center border-t border-b border-gray-300"
                    readOnly
                  />
                  <button
                    onClick={() => handleIncrease(item.id, item.quantity)}
                    className="text-gray-600 hover:text-gray-800 border border-gray-300 p-1 rounded-r"
                  >
                    <FaPlus />
                  </button>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="remove-item text-red-500 cursor-pointer border py-1 px-6 mt-2 border-red-400 rounded-lg"
                >
                  Remove
                </button>
              </div>
              <div className="col-span-1 text-center text-gray-600">
                <p className="text-lg font-semibold">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4">
            <div className="text-right text-xl font-bold">
              Total: ${totalPrice.toFixed(2)}
            </div>
            <Link to="/checkout">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
