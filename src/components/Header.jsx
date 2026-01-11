import { useState } from "react";
import { Menu, X, Phone, Instagram, Facebook, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Cart", href: "/cart" },
    { name: "Checkout", href: "/checkout" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-gray-900 via-black to-pink-900 shadow-md sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-white">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Sparkles className="text-pink-400 animate-pulse" size={28} />
          <span className="text-2xl font-bold tracking-widest text-black bg-white px-2 py-1 rounded-lg shadow-md">
            The Perfume Co
          </span>
          <span className="hidden sm:block text-sm italic text-gray-300">
            Exclusive Perfumes ✨
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="relative font-semibold text-gray-200 hover:text-pink-400 transition group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center space-x-5">
          <a href="tel:+27712345678" className="hover:text-pink-400 flex items-center gap-1">
            <Phone size={18} /> <span>Call</span>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400">
            <Instagram size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-pink-400">
            <Facebook size={20} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden hover:text-pink-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-black bg-opacity-90 backdrop-blur-sm border-t border-gray-800"
          >
            <nav className="flex flex-col p-5 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-200 hover:text-pink-400 text-lg transition"
                >
                  {link.name}
                </Link>
              ))}
              {/* Mobile Socials */}
              <div className="pt-4 border-t border-gray-700 flex space-x-4">
                <a href="tel:+27712345678" className="flex items-center gap-2 text-gray-300 hover:text-pink-400">
                  <Phone size={18} />
                  <span>Call</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <Instagram className="text-gray-300 hover:text-pink-400" size={20} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <Facebook className="text-gray-300 hover:text-pink-400" size={20} />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
