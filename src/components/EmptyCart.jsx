import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          Your Cart is Empty
        </h2>
        <p className="text-lg text-gray-600">
          It looks like you haven't added anything to your cart yet.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-gray-500 mb-4">
          Explore our products and find something you love!
        </p>
        <Link
          to="/"
          className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out text-center"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
