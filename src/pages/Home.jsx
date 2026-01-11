import React from "react";
import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

/* ================= IMAGES ================= */
// Main products
import carMusk from "../assets/car-musk.jpg";
import co from "../assets/co.jpg";
import co2 from "../assets/co2.webp";
import co3 from "../assets/co3.webp";
import co5 from "../assets/co5.webp";
import co6 from "../assets/co6.webp";
import co7 from "../assets/co7.webp";
import orangePerfume from "../assets/the-perfume-orange.jpg";

// UUID images (NOW PRODUCTS)
import img1 from "../assets/268473ef-0929-48a8-bc95-3d140a72e34c.jpg";
import img2 from "../assets/7f55c49f-9c2d-4c0c-a78c-b07be799361a.jpg";
import img3 from "../assets/8d174e1f-a809-424e-9232-513f5b822c8f.jpg";
import img4 from "../assets/9414f144-6531-40ae-a162-29dcff619aa2.jpg";
import img5 from "../assets/a391e7d0-6462-4dcc-8db7-5afed42d1d5b.jpg";
import img6 from "../assets/bd44738b-b35e-49c7-9026-3b1108db8f22.jpg";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Midnight Musk",
      category: "Car Diffuser",
      price: "R299",
      rating: 4.8,
      image: carMusk,
    },
    {
      id: 2,
      name: "Rose Oud",
      category: "Eau de Parfum",
      price: "R499",
      rating: 4.9,
      image: co,
    },
    {
      id: 3,
      name: "Vanilla Amber",
      category: "Eau de Parfum",
      price: "R459",
      rating: 4.7,
      image: co2,
    },
    {
      id: 4,
      name: "Black Orchid Noir",
      category: "Eau de Parfum",
      price: "R489",
      rating: 4.8,
      image: co3,
    },
    {
      id: 5,
      name: "Lavender Breeze",
      category: "Home Diffuser",
      price: "R399",
      rating: 4.6,
      image: co5,
    },
    {
      id: 6,
      name: "Sandalwood Calm",
      category: "Home Diffuser",
      price: "R429",
      rating: 4.7,
      image: co6,
    },
    {
      id: 7,
      name: "Shea Blossom",
      category: "Body Lotion",
      price: "R349",
      rating: 4.9,
      image: co7,
    },
    {
      id: 8,
      name: "Citrus Royale",
      category: "Eau de Parfum",
      price: "R529",
      rating: 4.8,
      image: orangePerfume,
    },
    {
      id: 9,
      name: "Ocean Mist",
      category: "Eau de Parfum",
      price: "R479",
      rating: 4.6,
      image: img1,
    },
    {
      id: 10,
      name: "Royal Oud Intense",
      category: "Eau de Parfum",
      price: "R559",
      rating: 4.9,
      image: img2,
    },
    {
      id: 11,
      name: "Cocoa Vanilla Silk",
      category: "Body Lotion",
      price: "R369",
      rating: 4.7,
      image: img3,
    },
    {
      id: 12,
      name: "Fresh Linen Aura",
      category: "Home Diffuser",
      price: "R419",
      rating: 4.5,
      image: img4,
    },
    {
      id: 13,
      name: "Amber Nightfall",
      category: "Eau de Parfum",
      price: "R499",
      rating: 4.8,
      image: img5,
    },
    {
      id: 14,
      name: "Pure Musk Essence",
      category: "Eau de Parfum",
      price: "R459",
      rating: 4.6,
      image: img6,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      <Header />

      {/* ================= HERO ================= */}
      <section className="px-6 pt-20 pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          ✨ The Perfume Co Africa
        </motion.h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-rose-600">
          Premium perfumes, diffusers, body care & car fragrances —
          crafted for refined African luxury.
        </p>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="px-6 pb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Shop Our Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {products.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden relative group"
            >
              {/* Wishlist */}
              <button className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full hover:bg-rose-100 transition">
                <Heart size={18} className="text-rose-500" />
              </button>

              {/* Image */}
              <img
                src={p.image}
                alt={p.name}
                className="h-64 w-full object-cover group-hover:scale-105 transition duration-300"
              />

              {/* Content */}
              <div className="p-6">
                <span className="text-xs uppercase tracking-wide text-rose-500 font-semibold">
                  {p.category}
                </span>

                <h3 className="mt-2 font-semibold text-lg">{p.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < Math.round(p.rating)
                          ? "text-amber-400 fill-amber-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">
                    ({p.rating})
                  </span>
                </div>

                {/* Price + Button */}
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

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-rose-500 to-amber-400 text-white">
        <h3 className="text-3xl md:text-4xl font-bold">
          Elevate Your Scent Experience
        </h3>
        <p className="mt-4 max-w-xl mx-auto">
          Nationwide delivery • Premium quality • African excellence
        </p>
      </section>

      <Footer />
    </div>
  );
}
