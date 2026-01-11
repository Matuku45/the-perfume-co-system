import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 text-gray-900 flex flex-col items-center justify-start px-6 py-12">
      <Header />

      {/* Animated Hero Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-center mb-4 text-black"
      >
        ✨ The Perfume Co
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-2xl text-center mb-12 text-rose-500"
      >
        Explore our exclusive collection of luxury perfumes 🌸
      </motion.p>

      {/* Image Showcase Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-6xl"
      >
        {[1, 2, 3].map((idx) => (
          <div
            key={idx}
            className="rounded-3xl overflow-hidden shadow-lg bg-white flex justify-center items-center h-96"
          >
            <span className="text-gray-400 text-3xl">📦 Image {idx}</span>
          </div>
        ))}
      </motion.div>

      {/* Service Cards */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-12"
      >
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-rose-200"
        >
          <div className="flex justify-center mb-4">
            <span className="text-4xl">🌸</span>
          </div>
          <h2 className="text-2xl font-semibold text-rose-600 mb-2 text-center">
            Luxury Collection
          </h2>
          <p className="text-gray-700 text-center mb-4">
            Discover our premium and exotic perfumes handpicked for you.
          </p>
          <div className="flex justify-center">
            <button className="btn bg-rose-400 text-white border-none hover:bg-rose-500">
              Explore
            </button>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-amber-200"
        >
          <div className="flex justify-center mb-4">
            <span className="text-4xl">🎁</span>
          </div>
          <h2 className="text-2xl font-semibold text-amber-600 mb-2 text-center">
            Gift Sets
          </h2>
          <p className="text-gray-700 text-center mb-4">
            Elegant perfume gift sets perfect for special occasions.
          </p>
          <div className="flex justify-center">
            <button className="btn bg-amber-400 text-white border-none hover:bg-amber-500">
              Shop Now
            </button>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-pink-200"
        >
          <div className="flex justify-center mb-4">
            <span className="text-4xl">💎</span>
          </div>
          <h2 className="text-2xl font-semibold text-pink-600 mb-2 text-center">
            Exclusive Offers
          </h2>
          <p className="text-gray-700 text-center mb-4">
            Get access to limited edition perfumes and special discounts.
          </p>
          <div className="flex justify-center">
            <button className="btn bg-pink-400 text-white border-none hover:bg-pink-500">
              Grab Deals
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-12"
      >
        <button className="btn btn-lg bg-gradient-to-r from-rose-400 to-amber-300 border-none text-white font-semibold hover:scale-105 transition-transform">
          🛒 Shop Now
        </button>
      </motion.div>

      <Footer />
    </div>
  );
}
