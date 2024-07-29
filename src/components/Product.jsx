import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";
import { FaCartArrowDown, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ data }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const isInCart = cartItems.some((item) => item.id === data.id);

  const handleAdd = () => {
    addToCart(data);
    toast.success("Item Added To Cart");
  };

  const handleRemove = () => {
    removeFromCart(data.id);
    toast.error("Item Removed From Cart");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl flex flex-col justify-between no-scrollbar">
      <div>
        <Link to={`/product/${data.id}`}>
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-48 object-contain"
            />
          </div>
        </Link>
        <h3 className="mt-4 text-lg font-bold text-gray-800">{data.title}</h3>
      </div>
      <div className="flex items-center justify-between mt-2">
        <h4 className="text-gray-800 text-base">${data.price}</h4>
        <button
          onClick={isInCart ? handleRemove : handleAdd}
          className={`text-white px-3 py-1 rounded-lg hover:shadow-md transition duration-300 ease-in-out ${
            isInCart
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {isInCart ? (
            <p className="flex justify-center items-center">
              <FaCartArrowDown className="mr-2" /> Remove From Cart
            </p>
          ) : (
            <p className="flex justify-center items-center">
              <FaCartPlus className="mr-2" /> Add To Cart
            </p>
          )}
        </button>
      </div>
    </div>
  );
};

export default Product;
