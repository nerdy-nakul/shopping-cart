import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";
import EmptyCart from "../components/EmptyCart";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleCheckout = (e) => {
    e.preventDefault();

    toast.success("Checkout successful!");
    setPaymentDetails({
      cardNumber: "",
      expirationDate: "",
      cvv: "",
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto no-scrollbar">
      <h2 className="text-3xl font-bold mb-6">Order Summary</h2>
      {cartItems.length > 0 ? (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-white shadow-lg rounded-lg border border-gray-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain rounded-md border-none"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  Price: ${item.price} x {item.quantity}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-800">
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center border-t border-gray-300 pt-4 mt-4">
            <div className="text-2xl font-bold text-gray-800">
              Total: ${totalPrice.toFixed(2)}
            </div>
          </div>
          <form
            onSubmit={handleCheckout}
            className="mt-6 bg-white shadow-md rounded-lg p-6 border border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-gray-700">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="expirationDate" className="block text-gray-700">
                  Expiration Date (MM/YY)
                </label>
                <input
                  type="text"
                  id="expirationDate"
                  name="expirationDate"
                  value={paymentDetails.expirationDate}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={paymentDetails.cvv}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="123"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 ease-in-out"
            >
              Complete Purchase
            </button>
          </form>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Checkout;
