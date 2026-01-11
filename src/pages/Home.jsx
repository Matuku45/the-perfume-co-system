import React from "react";
import { motion } from "framer-motion";
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

// Extra / UUID images
import img1 from "../assets/268473ef-0929-48a8-bc95-3d140a72e34c.jpg";
import img2 from "../assets/7f55c49f-9c2d-4c0c-a78c-b07be799361a.jpg";
import img3 from "../assets/8d174e1f-a809-424e-9232-513f5b822c8f.jpg";
import img4 from "../assets/9414f144-6531-40ae-a162-29dcff619aa2.jpg";
import img5 from "../assets/a391e7d0-6462-4dcc-8db7-5afed42d1d5b.jpg";
import img6 from "../assets/bd44738b-b35e-49c7-9026-3b1108db8f22.jpg";

export default function Home() {
  const products = [
    { id: 1, name: "Midnight Musk – Car Diffuser", price: "R299", image: carMusk },
    { id: 2, name: "Rose Oud – Eau de Parfum", price: "R499", image: co },
    { id: 3, name: "Vanilla Amber – Eau de Parfum", price: "R459", image: co2 },
    { id: 4, name: "Black Orchid Noir – Eau de Parfum", price: "R489", image: co3 },
    { id: 5, name: "Lavender Breeze – Home Diffuser", price: "R399", image: co5 },
    { id: 6, name: "Sandalwood Calm – Home Diffuser", price: "R429", image: co6 },
    { id: 7, name: "Shea Blossom – Body Lotion", price: "R349", image: co7 },
    { id: 8, name: "Citrus Royale – Eau de Parfum", price: "R529", image: orangePerfume },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 text-gray-900">
      <Header />

      {/* ================= HERO ================= */}
      <section className="px-6 pt-20 pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          ✨ The Perfume Co Africa
        </motion.h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-rose-600">
          Luxury perfumes, home diffusers, body care & car fragrances —
          crafted for elegance and lasting impressions.
        </p>

        <button className="mt-10 px-8 py-3 rounded-full bg-gradient-to-r from-rose-500 to-amber-400 text-white font-semibold shadow-lg hover:scale-105 transition">
          Shop Now
        </button>
      </section>

      {/* ================= TRUST FEATURES ================= */}
      <section className="py-16 bg-white/70 backdrop-blur">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
          <Trust icon="🌿" title="Natural Oils" text="High-quality ingredients" />
          <Trust icon="🚚" title="Fast Delivery" text="1–2 days nationwide" />
          <Trust icon="💎" title="Premium Quality" text="Long-lasting scents" />
          <Trust icon="🇿🇦" title="African Made" text="Proudly local brand" />
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Featured Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {products.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <img src={p.image} alt={p.name} className="h-64 w-full object-cover" />

              <div className="p-6">
                <h3 className="font-semibold text-lg text-rose-600">{p.name}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Designed for everyday luxury.
                </p>

                <div className="flex justify-between items-center mt-6">
                  <span className="font-bold text-lg">{p.price}</span>
                  <button className="px-4 py-2 bg-rose-500 text-white rounded-xl text-sm hover:bg-rose-600">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= GALLERY / ALL IMAGES ================= */}
      <section className="px-6 py-20 bg-gradient-to-r from-amber-50 to-rose-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Signature Scents
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {[img1, img2, img3, img4, img5, img6].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Perfume showcase"
              className="rounded-2xl shadow-lg object-cover h-40 w-full hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-rose-500 to-amber-400 text-white">
        <h3 className="text-3xl md:text-4xl font-bold">
          Elevate Your Everyday Scent
        </h3>
        <p className="mt-4 max-w-xl mx-auto">
          Experience premium fragrances delivered anywhere in South Africa.
        </p>

        <button className="mt-8 px-8 py-3 bg-white text-rose-600 rounded-full font-semibold shadow-lg hover:scale-105 transition">
          Contact Us
        </button>
      </section>

      <Footer />
    </div>
  );
}

/* ================= SMALL COMPONENT ================= */
const Trust = ({ icon, title, text }) => (
  <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-amber-50 shadow">
    <div className="text-4xl mb-3">{icon}</div>
    <h4 className="font-semibold">{title}</h4>
    <p className="text-sm text-gray-600 mt-1">{text}</p>
  </div>
);
