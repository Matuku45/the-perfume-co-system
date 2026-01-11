import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaUser,
  FaCommentDots,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Submitted:", formData);
    alert("Thank you for reaching out! We’ll respond shortly.");
  };

  return (
    <>
      <Header />

      <section className="relative overflow-hidden pt-32 pb-28 bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50">
        {/* Background Glow */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-amber-400/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Contact <span className="block bg-gradient-to-r from-rose-500 to-amber-400 bg-clip-text text-transparent">The Perfume Co</span>
            </h1>
            <p className="text-gray-700">
              Fast support, WhatsApp & Email available. We deliver your favorite African perfumes to your doorstep.
            </p>
          </motion.div>

          {/* Contact Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {/* WhatsApp */}
            <a
              href="https://wa.me/27123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-2xl bg-green-500 hover:bg-green-400 transition shadow-xl"
            >
              <FaWhatsapp className="text-3xl" />
              <div>
                <p className="font-bold">WhatsApp</p>
                <p className="text-sm">+27 123 456 789</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+27111222333"
              className="flex items-center gap-4 p-6 rounded-2xl bg-yellow-400 text-black hover:bg-yellow-300 transition shadow-xl"
            >
              <FaPhoneAlt className="text-2xl" />
              <div>
                <p className="font-bold">Call Us</p>
                <p className="text-sm">+27 11 222 333</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:info@theperfumeco.co.za"
              className="flex items-center gap-4 p-6 rounded-2xl bg-indigo-500 hover:bg-indigo-400 transition shadow-xl"
            >
              <FaEnvelope className="text-2xl" />
              <div>
                <p className="font-bold">Email</p>
                <p className="text-sm">info@theperfumeco.co.za</p>
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 space-y-6 shadow-2xl"
          >
            <FormGroup label="Full Name" icon={<FaUser />}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-black placeholder-gray-700 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
                required
              />
            </FormGroup>

            <FormGroup label="Email Address" icon={<FaEnvelope />}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-black placeholder-gray-700 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                required
              />
            </FormGroup>

            <FormGroup label="Phone Number" icon={<FaPhoneAlt />}>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+27 12 345 6789"
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-black placeholder-gray-700 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
            </FormGroup>

            <FormGroup label="Your Message" icon={<FaCommentDots />}>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help you..."
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-black placeholder-gray-700 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition resize-none"
                required
              />
            </FormGroup>

            <button
              type="submit"
              className="w-full mt-6 py-4 rounded-2xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition shadow-lg"
            >
              Send Message
            </button>
          </motion.form>

          {/* Office Info */}
          <div className="mt-10 text-center text-gray-700 space-y-2">
            <p className="flex justify-center items-center gap-2 text-gray-900 font-medium">
              <FaMapMarkerAlt className="text-rose-500" />
              Office & Delivery: Johannesburg, South Africa
            </p>
            <p className="text-gray-900 font-medium">
              We deliver perfumes from African villages straight to your door!
            </p>
            <p className="text-gray-900 font-medium">
              Office Hours: Mon – Fri | 08:00 – 18:00
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

/* ---------- Reusable Form Field ---------- */
const FormGroup = ({ label, icon, children }) => (
  <div>
    <label className="block mb-2 font-semibold text-sm text-gray-900 flex items-center gap-2">
      {icon && <span className="text-rose-500">{icon}</span>}
      {label}
    </label>
    {children}
  </div>
);

export default Contact;
