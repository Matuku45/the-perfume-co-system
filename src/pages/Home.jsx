import React from "react";
import { motion } from "framer-motion";
import { Heart, Star, Truck, Shield, Gift } from "lucide-react";
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
import nameOfPerfumes from "../assets/nameOfPerfumes.jpg";

// ================= VIDEO =================
import perfumeVideo from "../assets/video-perfume-instore.mp4";

// ================= HOME COMPONENT =================
export default function Home() {
  const products = [
    { id: 1, name: "Car Diffuser", category: "Home & Car", price: "R80", image: carMusk, description: "Car diffuser for a refreshing scent." },
    { id: 2, name: "Shampoo Perfume", category: "Personal Care", price: "R120", image: co, description: "Perfume-infused shampoo for luxury." },
    { id: 3, name: "Perfume Co Africa", category: "Signature Scent", price: "R455", image: co2, description: "Luxury African fragrance." },
    { id: 4, name: "Perfume Co Africa", category: "Signature Scent", price: "R125 / R250", image: co3, description: "Premium Eau de Parfum." },
    { id: 5, name: "Home Diffuser", category: "Home Fragrance", price: "R200", image: co5, description: "Keep your home smelling amazing." },
    { id: 6, name: "Car Diffuser Premium", category: "Home & Car", price: "R150", image: co6, description: "Smell fresh while driving." },
    { id: 7, name: "Luxury Perfume 125", category: "Signature Scent", price: "R125", image: co7, description: "African-made premium scent." },
    { id: 8, name: "Orange Perfume", category: "Eau de Parfum", price: "R200", image: orangePerfume, description: "Citrus elegance in a bottle." },
    { id: 9, name: "Inuka", category: "Signature Scent", price: "R180", image: inuka, description: "Premium African perfume." },
    { id: 10, name: "Inuka 2", category: "Signature Scent", price: "R180", image: inuka2, description: "African elegance in a bottle." },
  ];

  const featuredPerfumes = [
    { id: 1, name: "ScentScent Collection", image: nameOfPerfumes, description: "Explore our full range of African-inspired fragrances." },
  ];

  const trustFeatures = [
    { icon: <Truck size={28} />, title: "Fast Delivery", text: "1–2 days nationwide" },
    { icon: <Gift size={28} />, title: "Premium Quality", text: "Long-lasting scents" },
    { icon: <Shield size={28} />, title: "Secure Payment", text: "Safe & Trusted" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 text-gray-900">
      <Header />

      {/* ================= HERO / VIDEO ================= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted className="absolute w-full h-full object-cover opacity-40">
          <source src={perfumeVideo} type="video/mp4" />
        </video>
        <div className="relative z-20 backdrop-blur-3xl bg-white/30 border border-white/40 rounded-3xl p-8 sm:p-16 max-w-3xl text-center shadow-2xl">
          <span className="inline-block mb-4 px-6 py-2 rounded-full bg-rose-200/30 text-sm tracking-wide text-rose-700 font-semibold shadow">
            ✨ Premium African Fragrances
          </span>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-6xl font-extrabold text-rose-800 drop-shadow-lg mb-6"
          >
            The Perfume Co. Africa
          </motion.h1>
          <p className="text-rose-900/90 text-lg sm:text-xl mb-8 drop-shadow-md">
            Luxury scents crafted for African elegance. <br />
            Swipe down to view our store collection.
          </p>
          <button className="px-10 py-3 rounded-full bg-gradient-to-r from-rose-500 to-amber-400 text-white font-semibold shadow-lg hover:scale-105 transition transform">
            Shop Now
          </button>
        </div>
      </section>

      {/* ================= TRUST BADGES ================= */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-6 py-16 max-w-6xl mx-auto text-center">
        {trustFeatures.map((f, i) => (
          <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-rose-500 to-amber-400 shadow-lg transition hover:scale-105">
            <div className="mx-auto mb-3 text-white drop-shadow-lg">{f.icon}</div>
            <h4 className="font-semibold text-white text-lg drop-shadow">{f.title}</h4>
            <p className="text-white/90 mt-1 drop-shadow">{f.text}</p>
          </div>
        ))}
      </section>

      {/* ================= FEATURED COLLECTION ================= */}
      <section className="px-6 py-20 bg-amber-100 rounded-3xl max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-rose-800">Our Featured Collection</h2>
        <div className="flex justify-center items-center">
          {featuredPerfumes.map((f) => (
            <motion.div
              key={f.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md cursor-pointer transition-all"
            >
              <img src={f.image} alt={f.name} className="w-full object-cover h-96" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-rose-800 mb-2">{f.name}</h3>
                <p className="text-gray-700">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PRODUCT GRID ================= */}
      <section className="px-6 pb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-rose-800">Shop Our Collection</h2>
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

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-rose-600 to-amber-500 text-white shadow-lg">
        <h3 className="text-3xl md:text-4xl font-bold drop-shadow">Elevate Your Everyday Scent</h3>
        <p className="mt-4 max-w-xl mx-auto drop-shadow">
          Support local African businesses and experience premium fragrances delivered anywhere in South Africa.
        </p>
        <button className="mt-8 px-8 py-3 bg-white text-rose-600 rounded-full font-semibold shadow-lg hover:scale-105 transition">
          Contact Us
        </button>
      </section>

      <Footer />
    </div>
  );
}
