import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Sample product data
const products = [
  {
    id: 1,
    name: "Rose Blossom",
    description: "Fresh and romantic rose scent.",
    price: "$49",
    image: "https://via.placeholder.com/300x300?text=Rose+Blossom",
  },
  {
    id: 2,
    name: "Ocean Breeze",
    description: "Cool and refreshing ocean fragrance.",
    price: "$59",
    image: "https://via.placeholder.com/300x300?text=Ocean+Breeze",
  },
  {
    id: 3,
    name: "Mystic Oud",
    description: "Deep and luxurious oriental scent.",
    price: "$79",
    image: "https://via.placeholder.com/300x300?text=Mystic+Oud",
  },
  {
    id: 4,
    name: "Vanilla Dreams",
    description: "Sweet, soft, and comforting aroma.",
    price: "$39",
    image: "https://via.placeholder.com/300x300?text=Vanilla+Dreams",
  },
  {
    id: 5,
    name: "Citrus Glow",
    description: "Energetic citrus freshness for every day.",
    price: "$45",
    image: "https://via.placeholder.com/300x300?text=Citrus+Glow",
  },
];

const Products = () => {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Exclusive Perfumes
          </h2>
          <p className="text-gray-700 text-lg">
            Browse and select your favorite perfumes. Experience luxury in every bottle.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden border border-rose-100 transition-transform"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-3xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-rose-600 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">
                    {product.price}
                  </span>
                  <button className="btn bg-rose-400 text-white border-none hover:bg-rose-500 px-4 py-2 rounded-xl">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Products;
