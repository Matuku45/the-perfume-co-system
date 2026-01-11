import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star, Truck, Shield, Gift, X, User, DollarSign, Package, MapPin, Phone } from "lucide-react";
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
import nameOfPerfumes from "../assets/nameOfPerfumes.jpg";

// ================= VIDEO =================
import perfumeVideo from "../assets/video-perfume-instore.mp4";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    quantity: 1,
    location: "",
    phone: "",
  });

  // ================= PRODUCTS =================
  const products = [
    { id: 1, name: "Car Diffuser", category: "Home & Car", price: "R80", image: carMusk, description: "Car diffuser for a refreshing scent." },
    { id: 2, name: "Shampoo Perfume", category: "Personal Care", price: "R120", image: co, description: "Perfume-infused shampoo for luxury." },
    { id: 3, name: "Perfume Co Africa", category: "Signature Scent", price: "R455", image: co2, description: "Luxury African fragrance." },
    { id: 4, name: "Perfume Co Africa", category: "Signature Scent", price: "R125 / R250", image: co3, description: "Premium Eau de Parfum." },
    { id: 5, name: "Home Diffuser", category: "Home Fragrance", price: "R200", image: co5, description: "Keep your home smelling amazing." },
    { id: 6, name: "Car Diffuser Premium", category: "Home & Car", price: "R150", image: co6, description: "Smell fresh while driving." },
    { id: 7, name: "Luxury Perfume 125", category: "Signature Scent", price: "R125", image: co7, description: "African-made premium scent." },
    { id: 8, name: "Orange Perfume", category: "Eau de Parfum", price: "R200", image: orangePerfume, description: "Citrus elegance in a bottle." },
  ];

  const featuredPerfumes = [
    { id: 1, name: "ScentScent Collection", image: nameOfPerfumes, description: "Explore our full range of African-inspired fragrances." },
  ];

  const trustFeatures = [
    { icon: <Truck size={28} />, title: "Fast Delivery", text: "1–2 days nationwide" },
    { icon: <Gift size={28} />, title: "Premium Quality", text: "Long-lasting scents" },
    { icon: <Shield size={28} />, title: "Secure Payment", text: "Safe & Trusted" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted:", { ...formData, product: selectedProduct });
    alert(`Thank you! Your order for ${selectedProduct.name} has been received.`);
    setIsModalOpen(false);
    setFormData({ firstName: "", lastName: "", quantity: 1, location: "", phone: "" });
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

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
            Log in to track your orders & enjoy exclusive offers.
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
        <div className="flex justify-center items-center flex-wrap gap-6">
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
                  <button
                    onClick={() => openModal(p)}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-amber-400 text-white text-sm font-semibold hover:scale-105 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ORDER MODAL ================= */}
      <AnimatePresence>
        {isModalOpen && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-gradient-to-br from-rose-50 via-amber-50 to-yellow-50 rounded-3xl max-w-lg w-full p-8 relative shadow-2xl"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold mb-4 text-rose-700">Order {selectedProduct.name}</h2>
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-64 object-cover rounded-xl mb-4" />

              <div className="bg-amber-100 rounded-xl p-4 mb-4 text-center text-sm text-rose-800 font-semibold">
                Log in to track your order & enjoy exclusive African scents 🌍
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="flex items-center gap-2 text-gray-700 font-semibold">
                      <User size={16} /> First Name
                    </label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-400 outline-none"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="flex items-center gap-2 text-gray-700 font-semibold">
                      <User size={16} /> Last Name
                    </label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-400 outline-none"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="flex items-center gap-2 text-gray-700 font-semibold">
                      <DollarSign size={16} /> Price
                    </label>
                    <input
                      value={selectedProduct.price}
                      readOnly
                      className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-gray-100 text-gray-600"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="flex items-center gap-2 text-gray-700 font-semibold">
                      <Package size={16} /> Quantity
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      min={1}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-400 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold">
                    <MapPin size={16} /> Location
                  </label>
                  <input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-400 outline-none"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold">
                    <Phone size={16} /> Phone Number
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-400 outline-none"
                  />
                </div>


 <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold">
                    <Phone size={16} /> Product Name
                  </label>
                  <input
                    name="phone"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-400 outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-amber-400 text-white font-semibold hover:scale-105 transition"
                >
                  Submit Order
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
