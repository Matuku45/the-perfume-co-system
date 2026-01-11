import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Sparkles } from "lucide-react";

const About = () => {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 px-6 py-12 flex flex-col items-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6"
        >
          About The Perfume Co
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mb-10"
        >
          At <span className="text-rose-500 font-semibold">The Perfume Co</span>,
          we source our exquisite perfumes directly from African villages, supporting local artisans and bringing authentic scents to your doorstep. We offer premium, handcrafted perfumes and deliver **door-to-door**, so everyone can enjoy our African fragrance collection.  
          Our mission is to empower communities while giving you a luxurious fragrance experience.
        </motion.p>

        {/* Mission & Vision Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full mb-12"
        >
          {/* Mission Card */}
          <div className="p-8 bg-white rounded-3xl shadow-lg border-l-8 border-rose-400 flex flex-col items-center text-center">
            <Sparkles size={36} className="text-rose-500 mb-4" />
            <h2 className="text-2xl font-semibold text-rose-600 mb-2">
              Our Mission
            </h2>
            <p className="text-gray-700">
              To deliver high-quality African perfumes, empowering local communities and ensuring every customer enjoys a unique, luxurious fragrance delivered straight to their door.
            </p>
          </div>

          {/* Vision Card */}
          <div className="p-8 bg-white rounded-3xl shadow-lg border-l-8 border-amber-400 flex flex-col items-center text-center">
            <Sparkles size={36} className="text-amber-500 mb-4" />
            <h2 className="text-2xl font-semibold text-amber-600 mb-2">
              Our Vision
            </h2>
            <p className="text-gray-700">
              To become the leading African perfume brand recognized for quality, authenticity, and innovation. We aim to make African fragrances accessible worldwide, with a modern and easy-to-use online system.
            </p>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mb-12"
        >
          <div className="p-6 bg-rose-100 rounded-3xl shadow-lg text-center hover:scale-105 transition-transform">
            <Sparkles size={30} className="mx-auto text-rose-500 mb-2" />
            <h3 className="text-xl font-semibold text-rose-600 mb-1">African Heritage</h3>
            <p className="text-gray-700 text-sm">
              Sourced directly from African villages, supporting local artisans.
            </p>
          </div>
          <div className="p-6 bg-amber-100 rounded-3xl shadow-lg text-center hover:scale-105 transition-transform">
            <Sparkles size={30} className="mx-auto text-amber-500 mb-2" />
            <h3 className="text-xl font-semibold text-amber-600 mb-1">Door-to-Door Delivery</h3>
            <p className="text-gray-700 text-sm">
              We bring your favorite perfumes right to your doorstep, fast and secure.
            </p>
          </div>
          <div className="p-6 bg-pink-100 rounded-3xl shadow-lg text-center hover:scale-105 transition-transform">
            <Sparkles size={30} className="mx-auto text-pink-500 mb-2" />
            <h3 className="text-xl font-semibold text-pink-600 mb-1">Online System</h3>
            <p className="text-gray-700 text-sm">
              Easy-to-use, responsive system for browsing and ordering perfumes.
            </p>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="max-w-5xl text-center text-gray-700"
        >
          <p className="mb-4">
            Our perfumes are crafted with care and passion, bringing you **authentic African scents**. We pride ourselves on **quality, sustainability, and style**.  
            Whether for personal use or gifting, The Perfume Co makes every fragrance experience special.
          </p>
          <p className="mb-4">
            Browse our collection, discover your signature scent, and enjoy our modern system designed to make your perfume shopping **smooth, safe, and enjoyable**.
          </p>
        </motion.div>
      </main>

      <Footer />
    </>
  );
};

export default About;
