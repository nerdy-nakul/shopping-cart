import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NoPageFound from "./pages/NoPageFound";
import Navbar from "./components/Navbar";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <div className="no-scrollbar">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </div>
  );
};

export default App;
