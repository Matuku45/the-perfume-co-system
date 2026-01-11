import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, Edit2, Trash2, PlusCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Sample product data
const initialProducts = [
  { id: 1, name: "Rose Blossom", price: "$49", stock: 12 },
  { id: 2, name: "Ocean Breeze", price: "$59", stock: 8 },
  { id: 3, name: "Mystic Oud", price: "$79", stock: 5 },
  { id: 4, name: "Vanilla Dreams", price: "$39", stock: 20 },
  { id: 5, name: "Citrus Glow", price: "$45", stock: 15 },
];

const ManageProducts = () => {
  const [products, setProducts] = useState(initialProducts);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const handleEdit = (id) => {
    const name = prompt("Enter new product name:");
    if (name) {
      setProducts((prev) =>
        prev.map((p) => (p.id === id ? { ...p, name } : p))
      );
    }
  };

  const handleAdd = () => {
    const name = prompt("Enter product name:");
    const price = prompt("Enter price:");
    const stock = prompt("Enter stock quantity:");
    if (name && price && stock) {
      const newProduct = {
        id: products.length + 1,
        name,
        price,
        stock: parseInt(stock),
      };
      setProducts((prev) => [...prev, newProduct]);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 p-6">
      {/* Back to Dashboard */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <Link
          to="/admin/dashboard"
          className="inline-flex items-center gap-2 px-4 py-2 bg-rose-400 text-white rounded-xl hover:bg-rose-500 transition"
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-between items-center mb-6"
      >
        <h2 className="text-3xl font-bold text-rose-600">Manage Products</h2>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 px-4 py-2 bg-amber-400 text-white rounded-xl hover:bg-amber-500 transition"
        >
          <PlusCircle size={20} /> Add Product
        </button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-700 mb-8 text-center"
      >
        Add, edit, or remove products from the catalog easily.
      </motion.p>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: product.id * 0.05 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-3xl shadow-lg border-l-8 border-rose-400 p-6 flex flex-col justify-between"
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-rose-600 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Price:</span> {product.price}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Stock:</span> {product.stock}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleEdit(product.id)}
                className="flex items-center gap-1 px-3 py-1 bg-amber-400 text-white rounded-xl hover:bg-amber-500 transition"
              >
                <Edit2 size={16} /> Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="flex items-center gap-1 px-3 py-1 bg-pink-400 text-white rounded-xl hover:bg-pink-500 transition"
              >
                <Trash2 size={16} /> Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default ManageProducts;
