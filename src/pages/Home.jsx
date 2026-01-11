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

// Video
import perfumeVideo from "../assets/video-perfume-instore.mp4";

// All gallery images
const allGalleryImages = [
  carMusk, co, co2, co3, co5, co6, co7, orangePerfume,
  img1, img2, img3, img4, img5, img6, inuka, inuka2, nameOfPerfumes
];

export default function Home() {
  const products = allGalleryImages.map((img, i) => ({
    id: i + 1,
    name: `Perfume ${i + 1}`,
    category: i < 8 ? "Eau de Parfum" : "Signature Scent",
    price: `R${299 + i * 20}`,
    rating: (Math.random() * 1.5 + 4).toFixed(1),
    image: img
  }));

  const trustFeatures = [
    { icon: <Truck size={24} />, title: "Fast Delivery", text: "1–2 days nationwide" },
    { icon: <Gift size={24} />, title: "Premium Quality", text: "Long-lasting scents" },
    { icon: <Shield size={24} />, title: "Secure Payment", text: "Safe & Trusted" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      <Header />

      {/* ================= HERO / VIDEO GLASSMORPH ================= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover opacity-40"
        >
          <source src={perfumeVideo} type="video/mp4" />
        </video>

        <div className="relative z-20 backdrop-blur-2xl bg-white/20 border border-white/30 rounded-3xl p-8 sm:p-16 max-w-3xl text-center shadow-2xl">
          <span className="inline-block mb-4 px-6 py-2 rounded-full bg-white/25 text-sm tracking-wide text-rose-600 font-semibold shadow-sm">
            ✨ Premium Fragrance Collection
          </span>

          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-lg mb-6"
          >
            The Perfume Co.
          </motion.h1>

          <p className="text-white/90 text-lg sm:text-xl mb-8 drop-shadow-md">
            Luxury scents crafted for African elegance. <br /> Delivered to your doorstep with care.
          </p>

          <button className="px-10 py-3 rounded-full bg-gradient-to-r from-rose-500 to-amber-400 text-white font-semibold shadow-lg hover:scale-105 transition transform">
            Shop Now
          </button>
        </div>
      </section>

      {/* ================= TRUST BADGES ================= */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-6 py-16 max-w-6xl mx-auto text-center">
        {trustFeatures.map((f, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg transition hover:scale-105">
            <div className="mx-auto mb-3 text-rose-500">{f.icon}</div>
            <h4 className="font-semibold text-white text-lg">{f.title}</h4>
            <p className="text-zinc-200 mt-1">{f.text}</p>
          </div>
        ))}
      </section>

      {/* ================= PRODUCT GRID ================= */}
      <section className="px-6 pb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Shop Our Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {products.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden relative group hover:shadow-2xl transition-all"
            >
              <button className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full hover:bg-rose-100 transition">
                <Heart size={18} className="text-rose-500" />
              </button>

              <img
                src={p.image}
                alt={p.name}
                className="h-64 w-full object-cover group-hover:scale-105 transition duration-300"
              />

              <div className="p-6">
                <span className="text-xs uppercase tracking-wide text-rose-500 font-semibold">
                  {p.category}
                </span>
                <h3 className="mt-2 font-semibold text-lg">{p.name}</h3>

                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${i < Math.round(p.rating) ? "text-amber-400 fill-amber-400" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">({p.rating})</span>
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

      {/* ================= GALLERY / ALL IMAGES ================= */}
      <section className="px-6 py-20 bg-gradient-to-r from-amber-50 to-rose-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Signature Scents
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {allGalleryImages.map((img, i) => (
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
