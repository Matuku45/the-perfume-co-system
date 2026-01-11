import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import local images
import carMusk from "../assets/car-musk.jpg";
import co from "../assets/co.jpg";
import co2 from "../assets/co2.webp";
import co3 from "../assets/co3.webp";
import co5 from "../assets/co5.webp";
import co6 from "../assets/co6.webp";
import co7 from "../assets/co7.webp";
import orangePerfume from "../assets/the-perfume-orange.jpg";

// Map products with images
const products = [
  { id: 1, name: "Rose Blossom", description: "Fresh and romantic rose scent.", price: "$49", image: carMusk },
  { id: 2, name: "Ocean Breeze", description: "Cool and refreshing ocean fragrance.", price: "$59", image: co },
  { id: 3, name: "Mystic Oud", description: "Deep and luxurious oriental scent.", price: "$79", image: co2 },
  { id: 4, name: "Vanilla Dreams", description: "Sweet, soft, and comforting aroma.", price: "$39", image: co3 },
  { id: 5, name: "Citrus Glow", description: "Energetic citrus freshness for every day.", price: "$45", image: co5 },
  { id: 6, name: "Amber Nights", description: "Warm and mysterious scent for evenings.", price: "$69", image: co6 },
  { id: 7, name: "Perfume Orange", description: "Bright, zesty, and uplifting.", price: "$55", image: orangePerfume },
];

const Products = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 px-6 py-12">
        {/* Page Header */}
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
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden border border-rose-100"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-3xl"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-rose-600">{product.name}</h3>
                <p className="text-gray-700 text-sm">{product.description}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  <Feature label="🌿 Natural Ingredients" />
                  <Feature label="🏬 In-Store Alert" />
                  <Feature label="🚚 1-Day Immediate Supply" />
                  <Feature label="💎 Exclusive Scent" />
                </div>

                {/* Price and button */}
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                  <button className="px-4 py-2 bg-rose-400 text-white rounded-xl font-semibold hover:bg-rose-500 transition">
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

/* ------------------ Feature Component ------------------ */
const Feature = ({ label }) => (
  <div className="flex items-center gap-2 bg-rose-50 px-2 py-1 rounded-xl text-center">
    <span>{label}</span>
  </div>
);

export default Products;
