import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import your images
import carMusk from "../assets/car-musk.jpg";
import co from "../assets/co.jpg";
import co2 from "../assets/co2.webp";
import co3 from "../assets/co3.webp";
import co5 from "../assets/co5.webp";
import co6 from "../assets/co6.webp";
import co7 from "../assets/co7.webp";
import orangePerfume from "../assets/the-perfume-orange.jpg";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleContactClick = () => {
    alert(
      "📞 Contact Us! We deliver perfumes across South Africa and beyond. WhatsApp or call us for orders!"
    );
  };

  const products = [
    { id: 1, name: "Car Musk", price: "R499", image: carMusk },
    { id: 2, name: "Co", price: "R399", image: co },
    { id: 3, name: "Co2", price: "R459", image: co2 },
    { id: 4, name: "Co3", price: "R429", image: co3 },
    { id: 5, name: "Co5", price: "R499", image: co5 },
    { id: 6, name: "Co6", price: "R479", image: co6 },
    { id: 7, name: "Co7", price: "R489", image: co7 },
    { id: 8, name: "Orange Perfume", price: "R529", image: orangePerfume },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 text-gray-900 flex flex-col items-center justify-start px-6 py-12">
      <Header />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-center mb-4 text-black"
      >
        ✨ The Perfume Co Africa
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-2xl text-center mb-12 text-rose-500 max-w-3xl"
      >
        Bringing premium African-made perfumes to your doorstep 🌸. Explore our
        exclusive collections crafted with local ingredients and creativity.
      </motion.p>

      {/* Products Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl mb-12"
      >
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
              <p className="text-gray-700 text-sm">
                Premium African perfume, perfect for every occasion.
              </p>

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
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="flex flex-col items-center gap-6"
      >
        <button
          onClick={handleContactClick}
          className="btn btn-lg bg-gradient-to-r from-rose-400 to-amber-300 border-none text-white font-semibold hover:scale-105 transition-transform"
        >
          📞 Contact Us
        </button>
        <p className="text-gray-700 text-center max-w-md">
          Order now and experience the elegance of authentic African perfumes.
          We deliver nationwide.
        </p>
      </motion.div>

      <Footer />
    </div>
  );
}

/* ------------------ Feature Component ------------------ */
const Feature = ({ label }) => (
  <div className="flex items-center gap-2 bg-rose-50 px-2 py-1 rounded-xl">
    <span>{label}</span>
  </div>
);
