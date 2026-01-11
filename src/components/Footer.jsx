import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import React from "react";

// Inline SVG for WhatsApp
const WhatsappIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 text-green-500"
  >
    <path d="M16.5 13.5c-.3-.1-1.8-.9-2-.9s-.4-.1-.5.1-.6.9-.7 1c-.1.1-.3.1-.5 0-.2-.1-1-1-1-1s-.2-.3 0-.5c.2-.2.2-.3.3-.5s0-.3 0-.5c0-.1 0-.3-.4-.5-.4-.2-.7-.4-.9-.5-.2-.1-.4-.1-.5 0s-.5.2-.6.5c-.1.2-.6 1-.6 1s-.1.3 0 .6c.1.3.5.8.6.9.1.1.9 1.3 2 1.8 1.1.5 1.4.4 1.6.3.2-.1.6-.3.7-.5.1-.2.1-.3.1-.5s0-.3-.1-.5c-.1-.1-.3-.2-.5-.3z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-sky-950 text-gray-200 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="text-sky-400" size={24} />
            <h2 className="text-xl font-bold text-sky-400">The Perfume Co</h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Discover the finest perfumes — bringing luxury, elegance, and style to your senses.
          </p>
          <p className="text-xs italic text-gray-500 mt-1">“A scent is the essence of who you are.”</p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold text-sky-400 mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "Products", "Cart", "Checkout", "About", "Contact"].map((item, idx) => (
              <li key={idx}>
                <a
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-pink-400 transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-sky-400 mb-2">Get In Touch</h3>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2 hover:text-pink-400 transition">
              <Phone size={16} /> +27 82 899 07116
            </p>
            <p className="flex items-center gap-2 hover:text-pink-400 transition">
              {WhatsappIcon} +27 83 662 2332
            </p>
            <p className="flex items-center gap-2 hover:text-pink-400 transition">
              <Mail size={16} /> manuelthabisompoulo@gmail.com
            </p>
            <p className="flex items-center gap-2 hover:text-pink-400 transition">
              <MapPin size={16} /> Johannesburg, South Africa
            </p>
          </div>
          <div className="flex space-x-4 pt-2">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://www.facebook.com/ManTuku"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-sky-900 hover:bg-pink-400 transition"
            >
              <Facebook size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-sky-900 hover:bg-pink-400 transition"
            >
              <Instagram size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500"
      >
        © {new Date().getFullYear()} <span className="text-sky-400 font-semibold">The Perfume Co</span> — Luxury Perfumes.
        <br />
        Built with 💅 React, Tailwind, DaisyUI & Framer Motion.
      </motion.div>
    </footer>
  );
}
