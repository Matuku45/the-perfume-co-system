import { useState } from "react";
import { Menu, X, Phone, Instagram, Facebook, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Inline SVG for WhatsApp
const WhatsappIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 text-green-500"
  >
    <path d="M16.5 13.5c-.3-.1-1.8-.9-2-.9s-.4-.1-.5.1-.6.9-.7 1c-.1.1-.3.1-.5 0-.2-.1-1-1-1-1s-.2-.3 0-.5c.2-.2.2-.3.3-.5s0-.3 0-.5c0-.1 0-.3-.4-.5-.4-.2-.7-.4-.9-.5-.2-.1-.4-.1-.5 0s-.5.2-.6.5c-.1.2-.6 1-.6 1s-.1.3 0 .6c.1.3.5.8.6.9.1.1.9 1.3 2 1.8 1.1.5 1.4.4 1.6.3.2-.1.6-.3.7-.5.1-.2.1-.3.1-.5s0-.3-.1-.5c-.1-.1-.3-.2-.5-.3z" />
  </svg>
);

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

  const socials = [
    { icon: <Phone size={18} />, label: "Call", href: "tel:+278289907116" },
    { icon: WhatsappIcon, label: "WhatsApp", href: "https://wa.me/2783662332", external: true },
    { icon: <Instagram size={20} />, label: "Instagram", href: "https://instagram.com", external: true },
    { icon: <Facebook size={20} />, label: "Facebook", href: "https://facebook.com/ManTuku", external: true },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-gray-900 via-black to-pink-900 shadow-md sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-white">
        {/* Brand Logo */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 2 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <Sparkles className="text-pink-400 animate-pulse" size={28} />
          <span className="text-2xl font-bold tracking-widest text-black bg-white px-2 py-1 rounded-lg shadow-md">
            The Perfume Co
          </span>
          <span className="hidden sm:block text-sm italic text-gray-300">
            Exclusive Perfumes ✨
          </span>
        </motion.div>

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

        {/* Desktop Socials */}
        <div className="hidden md:flex items-center space-x-5">
          {socials.map((s, idx) => (
            <a
              key={idx}
              href={s.href}
              target={s.external ? "_blank" : "_self"}
              rel={s.external ? "noopener noreferrer" : ""}
              className="hover:text-pink-400 flex items-center gap-1"
            >
              {s.icon} {s.label && <span className="hidden sm:inline">{s.label}</span>}
            </a>
          ))}
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
              <div className="pt-4 border-t border-gray-700 flex flex-wrap gap-4">
                {socials.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target={s.external ? "_blank" : "_self"}
                    rel={s.external ? "noopener noreferrer" : ""}
                    className="flex items-center gap-2 text-gray-300 hover:text-pink-400"
                  >
                    {s.icon} {s.label}
                  </a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
