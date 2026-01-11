import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, DollarSign, Package, MapPin, Phone, Gift, Shield, Truck } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// ================= SAMPLE PRODUCT DATA =================
const sampleProducts = [
  { id: 1, name: "Car Diffuser", category: "Home & Car", price: "R80", description: "Car diffuser for a refreshing scent.", image: "/assets/car-musk.jpg" },
  { id: 2, name: "Shampoo Perfume", category: "Personal Care", price: "R120", description: "Perfume-infused shampoo for luxury.", image: "/assets/co.jpg" },
];

const ProductDetails = () => {
  const location = useLocation();
  const productId = parseInt(location.pathname.split("/").pop(), 10); // assumes URL: /product/1
  const [product, setProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    quantity: 1,
    location: "",
    phone: "",
  });

  useEffect(() => {
    const prod = sampleProducts.find((p) => p.id === productId);
    setProduct(prod);
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted:", { ...formData, product });
    alert(`Thank you! Your order for ${product.name} has been received.`);
    setIsModalOpen(false);
  };

  if (!product) return <p className="text-center mt-20 text-lg">Loading product...</p>;

  return (
    <>
      <Header />

      <main className="px-6 py-16 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row gap-10 items-center"
        >
          {/* Product Image */}
          <div className="flex-1">
            <img src={product.image} alt={product.name} className="rounded-3xl w-full object-cover shadow-2xl" />
          </div>

          {/* Product Info */}
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-extrabold text-rose-800 drop-shadow-lg">{product.name}</h1>
            <p className="text-gray-700 text-lg">{product.description}</p>
            <p className="text-gray-900 font-semibold text-xl">Price: {product.price}</p>
            <p className="text-gray-600 italic">Category: {product.category}</p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-1 text-sm text-gray-700">
                <Truck size={16} className="text-rose-500" /> Free Delivery
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-700">
                <Gift size={16} className="text-rose-500" /> Premium African Quality
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-700">
                <Shield size={16} className="text-rose-500" /> Secure Payment
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-amber-400 text-white font-semibold hover:scale-105 transition"
            >
              Add to Cart
            </button>
          </div>
        </motion.div>
      </main>

      {/* ================= ORDER MODAL ================= */}
      <AnimatePresence>
        {isModalOpen && (
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

              <h2 className="text-2xl font-bold mb-4 text-rose-700">Order {product.name}</h2>
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-xl mb-4" />

              {/* African Style Callout */}
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
                      value={product.price}
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
    </>
  );
};

export default ProductDetails;
