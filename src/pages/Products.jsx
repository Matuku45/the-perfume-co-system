import React from "react";
import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// ================= IMAGES =================
import carMusk from "../assets/car-musk.jpg";
import co from "../assets/co.jpg";
import co2 from "../assets/co2.webp";
import co3 from "../assets/co3.webp";
import co5 from "../assets/co5.webp";
import co6 from "../assets/co6.webp";
import co7 from "../assets/co7.webp";
import orangePerfume from "../assets/the-perfume-orange.jpg";
import img1 from "../assets/268473ef-0929-48a8-bc95-3d140a72e34c.jpg";
import img2 from "../assets/7f55c49f-9c2d-4c0c-a78c-b07be799361a.jpg";
import img3 from "../assets/8d174e1f-a809-424e-9232-513f5b822c8f.jpg";
import img4 from "../assets/9414f144-6531-40ae-a162-29dcff619aa2.jpg";
import img5 from "../assets/a391e7d0-6462-4dcc-8db7-5afed42d1d5b.jpg";
import img6 from "../assets/bd44738b-b35e-49c7-9026-3b1108db8f22.jpg";
import inuka from "../assets/inuka.webp";
import inuka2 from "../assets/inuka2.webp";

export default function Products() {
  const products = [
    { id: 1, name: "Car Diffuser", category: "Home & Car", price: "R80", image: carMusk, description: "Car diffuser for a refreshing scent." },
    { id: 2, name: "Shampoo Perfume", category: "Personal Care", price: "R120", image: co, description: "Perfume-infused shampoo for luxury." },
    { id: 3, name: "Perfume Co Africa", category: "Signature Scent", price: "R455", image: co2, description: "Luxury African fragrance." },
    { id: 4, name: "Perfume Co Africa", category: "Signature Scent", price: "R125 / R250", image: co3, description: "Premium Eau de Parfum." },
    { id: 5, name: "Home Diffuser", category: "Home Fragrance", price: "R200", image: co5, description: "Keep your home smelling amazing." },
    { id: 6, name: "Car Diffuser Premium", category: "Home & Car", price: "R80", image: co6, description: "Smell fresh while driving." },
    { id: 7, name: "Luxury Perfume per of co frica", category: "Signature Scent", price: "R125", image: co7, description: "African-made premium scent." },
    { id: 8, name: "Orange Perfume", category: "Eau de Parfum", price: "R200", image: orangePerfume, description: "Citrus elegance in a bottle." },
    { id: 9, name: "Inuka set of cosmetic", category: "Signature Scent", price: "R180", image: inuka, description: "Premium African perfume." },
    { id: 10, name: "Inuka Perfume", category: "Signature Scent", price: "R180", image: inuka2, description: "African elegance in a bottle." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 text-gray-900">
      <Header />

      {/* ================= PAGE HEADER ================= */}
      <section className="px-6 py-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-rose-800 mb-4"
        >
          Our Exclusive Perfumes
        </motion.h2>
        <p className="text-gray-700 text-lg max-w-xl mx-auto">
          Browse and select your favorite perfumes. Experience luxury in every bottle.
        </p>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {products.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden relative group hover:shadow-2xl transition-all"
            >
              <button className="absolute top-4 right-4 z-10 bg-white/90 p-2 rounded-full hover:bg-rose-100 transition">
                <Heart size={18} className="text-rose-500" />
              </button>
              <img src={p.image} alt={p.name} className="h-64 w-full object-cover group-hover:scale-105 transition duration-300" />
              <div className="p-6">
                <span className="text-xs uppercase tracking-wide text-rose-500 font-semibold">{p.category}</span>
                <h3 className="mt-2 font-semibold text-lg">{p.name}</h3>
                <p className="text-gray-700 text-sm mt-1">{p.description}</p>
                <div className="flex items-center gap-1 mt-2 cursor-pointer">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${i < Math.round(Math.random() * 1.5 + 4) ? "text-amber-400 fill-amber-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-lg font-bold">{p.price}</span>
                  <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-amber-400 text-white text-sm font-semibold hover:scale-105 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
