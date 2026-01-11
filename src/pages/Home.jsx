import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  // Contact alert simulation
  const handleContactClick = () => {
    alert(
      "📞 Contact Us! We deliver perfumes across South Africa and beyond. WhatsApp or call us for orders!"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 text-gray-900 flex flex-col items-center justify-start px-6 py-12">
      <Header />

      {/* Hero Section */}
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

      {/* Feature Cards Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-12"
      >
        <FeatureCard
          emoji="🌍"
          title="Proudly African"
          description="Our perfumes are crafted with care from African ingredients, supporting local communities."
          color="rose"
        />
        <FeatureCard
          emoji="🚚"
          title="Home Delivery"
          description="We deliver straight to your door across South Africa and selected regions."
          color="amber"
        />
        <FeatureCard
          emoji="💎"
          title="Exclusive Scents"
          description="Unique and luxurious perfumes made to highlight your elegance and style."
          color="pink"
        />
      </motion.div>

      {/* Products Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-6xl"
      >
        {[1, 2, 3].map((idx) => (
          <div
            key={idx}
            className="rounded-3xl overflow-hidden shadow-lg bg-white flex justify-center items-center h-96"
          >
            <span className="text-gray-400 text-3xl">📦 Product {idx}</span>
          </div>
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

      {/* Why Choose Us */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="mt-12 w-full max-w-6xl"
      >
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ReasonCard
            emoji="🎨"
            title="Crafted with Passion"
            description="Every scent is carefully designed for elegance and uniqueness."
          />
          <ReasonCard
            emoji="🌿"
            title="Natural Ingredients"
            description="We use quality African botanicals to create authentic fragrances."
          />
          <ReasonCard
            emoji="💌"
            title="Customer Care"
            description="Friendly support and fast delivery make your shopping experience seamless."
          />
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}

/* ---------- Feature Card ---------- */
const FeatureCard = ({ emoji, title, description, color }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-${color}-200 text-center`}
  >
    <div className="flex justify-center mb-4">
      <span className="text-4xl">{emoji}</span>
    </div>
    <h2 className={`text-2xl font-semibold text-${color}-600 mb-2`}>{title}</h2>
    <p className="text-gray-700 text-center">{description}</p>
  </motion.div>
);

/* ---------- Reason Card ---------- */
const ReasonCard = ({ emoji, title, description }) => (
  <div className="p-6 bg-white rounded-3xl shadow-lg text-center hover:scale-105 transition-transform">
    <div className="flex justify-center mb-3 text-4xl">{emoji}</div>
    <h3 className="text-xl font-semibold mb-1 text-rose-600">{title}</h3>
    <p className="text-gray-700 text-sm">{description}</p>
  </div>
);
