import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-sky-950 text-gray-200 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-2">
            <Sparkles className="text-sky-400" size={24} />
            <h2 className="text-xl font-bold text-sky-400">The Perfume Co</h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Discover the finest perfumes — bringing luxury, elegance, and style to your senses.
          </p>
          <p className="text-xs italic text-gray-500">“A scent is the essence of who you are.”</p>
        </motion.div>

        {/* Quick Links */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <h3 className="text-lg font-semibold text-sky-400">Quick Links</h3>
          <ul className="space-y-2 mt-2">
            {["Home", "Products", "Cart", "Checkout", "About", "Contact"].map((item, idx) => (
              <li key={idx}>
                <a href={`/${item.toLowerCase()}`} className="hover:text-pink-400 transition-colors duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <h3 className="text-lg font-semibold text-sky-400">Get In Touch</h3>
          <div className="space-y-2 text-sm mt-2">
            <p className="flex items-center gap-2 hover:text-pink-400 transition">
              <Phone size={16} /> +27 71 234 5678
            </p>
            <p className="flex items-center gap-2 hover:text-pink-400 transition">
              <Mail size={16} /> info@perfume.co.za
            </p>
            <p className="flex items-center gap-2 hover:text-pink-400 transition">
              <MapPin size={16} /> Johannesburg, South Africa
            </p>
          </div>
          <div className="flex space-x-4 pt-2">
            <motion.a whileHover={{ scale: 1.2, rotate: 5 }} href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-sky-900 hover:bg-pink-400 transition">
              <Facebook size={18} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, rotate: -5 }} href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-sky-900 hover:bg-pink-400 transition">
              <Instagram size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-sky-400 font-semibold">The Perfume Co</span> — Luxury Perfumes.
        <br />
        Built with 💅 React, Tailwind, DaisyUI & Framer Motion.
      </motion.div>
    </footer>
  );
}
