import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="bg-black text-white sticky top-0 h-16 sm:h-20 w-full flex justify-between items-center px-4 sm:px-10 font-semibold text-lg sm:text-2xl z-10">
      <Link
        to="/"
        className="text-white flex gap-2 items-center justify-center"
      >
        <img
          src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4de881c0-98d6-4876-b3ff-40b2e567a497%2F4107022c-6033-4e72-b92e-7adc5cf956aa%2Fstyx_logo.jpeg?table=block&id=7e928704-3ff4-4a53-92cd-0c4a9962392e&spaceId=4de881c0-98d6-4876-b3ff-40b2e567a497&width=250&userId=e44381f3-0491-4603-add0-0cc1b4c64af9&cache=v2"
          alt=""
          className="h-10"
        />
        STYX
      </Link>
      <Link to="/cart" className="flex items-center gap-2 relative">
        Cart
        <FaCartShopping className="text-2xl" />
        {getTotalItems() > 0 && (
          <span className="absolute top-[-8px] sm:top-[-12px] right-[-8px] sm:right-[-10px] bg-red-600 text-xs p-1 rounded-full">
            {getTotalItems()}
          </span>
        )}
      </Link>
    </div>
  );
};

export default Navbar;
