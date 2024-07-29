import React, { useState, useEffect } from "react";
import { BarLoader } from "react-spinners";
import Product from "./Product";

const ProductList = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setProducts(data);
        const uniqueCategories = [
          "All",
          ...new Set(data.map((p) => p.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <BarLoader className="mx-auto my-8" />;

  return (
    <div className="p-4 no-scrollbar">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-4 py-2 rounded-lg w-full mb-4"
      />
      <div className="mb-4">
        <label htmlFor="category" className="mr-2">
          Filter by category:
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-4 py-2 rounded-lg"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((p) => (
            <Product key={p.id} data={p} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-700 text-2xl">
          No Products Found
        </div>
      )}
    </div>
  );
};

export default ProductList;
