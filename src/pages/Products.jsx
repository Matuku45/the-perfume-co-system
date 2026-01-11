import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star, X, User, DollarSign, Package, MapPin, Phone } from "lucide-react";
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
import inuka from "../assets/inuka.webp";
import inuka2 from "../assets/inuka2.webp";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    quantity: 1,
    location: "",
    phone: "",
  });

  const products = [
    { id: 1, name: "Car Diffuser", category: "Home & Car", price: "R80", image: carMusk, description: "Car diffuser for a refreshing scent." },
    { id: 2, name: "Shampoo Perfume", category: "Personal Care", price: "R120", image: co, description: "Perfume-infused shampoo for luxury." },
    { id: 3, name: "Perfume Co Africa", category: "Signature Scent", price: "R455", image: co2, description: "Luxury African fragrance." },
    { id: 4, name: "Perfume Co Africa", category: "Signature Scent", price: "R125 / R250", image: co3, description: "Premium Eau de Parfum." },
    { id: 5, name: "Home Diffuser", category: "Home Fragrance", price: "R200", image: co5, description: "Keep your home smelling amazing." },
    { id: 6, name: "Car Diffuser Premium", category: "Home & Car", price: "R150", image: co6, description: "Smell fresh while driving." },
    { id: 7, name: "Luxury Perfume Co Africa", category: "Signature Scent", price: "R125", image: co7, description: "African-made premium scent." },
    { id: 8, name: "Orange Perfume", category: "Eau de Parfum", price: "R200", image: orangePerfume, description: "Citrus elegance in a bottle." },
    { id: 9, name: "Inuka Set of Cosmetics", category: "Signature Scent", price: "R180", image: inuka, description: "Premium African perfume." },
    { id: 10, name: "Inuka Perfume", category: "Signature Scent", price: "R180", image: inuka2, description: "African elegance in a bottle." },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

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
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden relative group hover:shadow-2xl transition-all"
            >
              <button className="absolute top-4 right-4 z-10 bg-white/90 p-2 rounded-full hover:bg-rose-100 transition">
                <Heart size={18} className="text-rose-500" />
              </button>
              <img
                src={p.image}
                alt={p.name}
                className="h-64 w-full object-cover group-hover:scale-105 transition duration-300"
              />
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
              className="bg-white rounded-3xl max-w-lg w-full p-8 relative shadow-2xl"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold mb-4 text-rose-700">Order {selectedProduct.name}</h2>
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-64 object-cover rounded-xl mb-4" />
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
                    <MapPin size={16} /> Email
                  </label>
                  <input
                    name="location"
                    value={formData.email}
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
                    <Phone size={16} /> Name Of Product
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

      <Footer />
    </div>
  );
}
