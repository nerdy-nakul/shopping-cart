import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCartPlus, FaCartArrowDown } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";
import { BarLoader } from "react-spinners";

const ProductDetail = () => {
  const { id } = useParams();
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const isInCart = product && cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Item added to cart");
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
    toast.error("Item removed from cart");
  };

  if (loading) return <BarLoader className="mx-auto my-8" />;

  if (!product) return <div className="text-center p-4">Product not found</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto max-w-md object-cover rounded-lg border-none border-gray-200 shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">{product.title}</h2>
          <h3 className="text-2xl font-semibold mb-2">Description</h3>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <div className="mb-6">
            <span className="text-2xl font-semibold text-gray-800">
              ${product.price}
            </span>
          </div>
          <button
            onClick={isInCart ? handleRemoveFromCart : handleAddToCart}
            className={`bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out flex items-center gap-2 ${
              isInCart
                ? "bg-red-600 hover:bg-red-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isInCart ? <FaCartArrowDown /> : <FaCartPlus />}
            {isInCart ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
