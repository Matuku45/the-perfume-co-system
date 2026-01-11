import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  Box,
  ShoppingCart,
  Truck,
  Users,
  Menu,
} from "lucide-react";

// Admin pages
import ManageProducts from "./ManageProducts";
import ManageOrders from "./ManageOrders";
import ManageUsers from "./ManageUsers";

// Dashboard overview component
const DashboardHome = () => (
  <section className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
    <DashboardCard icon={<Box size={28} />} title="Products" count={120} color="rose" />
    <DashboardCard icon={<ShoppingCart size={28} />} title="Orders" count={75} color="amber" />
    <DashboardCard icon={<Truck size={28} />} title="Deliveries" count={50} color="pink" />
    <DashboardCard icon={<Users size={28} />} title="Customers" count={300} color="rose" />
  </section>
);

// Dashboard Card component
const DashboardCard = ({ icon, title, count, color }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`flex flex-col items-center justify-center p-6 rounded-3xl shadow-lg bg-white border-l-8 border-${color}-400`}
  >
    <div className={`text-${color}-500 mb-2`}>{icon}</div>
    <h3 className={`text-lg font-semibold text-${color}-600 mb-1`}>{title}</h3>
    <p className="text-gray-700 font-bold text-xl">{count}</p>
  </motion.div>
);

// Sidebar links
const adminLinks = [
  { name: "Dashboard", icon: <Sparkles size={20} />, route: "/admin/dashboard" },
  { name: "Products", icon: <Box size={20} />, route: "/admin/products" },
  { name: "Orders", icon: <ShoppingCart size={20} />, route: "/admin/orders" },

  { name: "Users", icon: <Users size={20} />, route: "/admin/users" },
];

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50">
      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 w-64 bg-white shadow-lg border-r border-rose-200 z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-6 text-center border-b border-rose-200 flex justify-between items-center">
          <div>
            <Sparkles className="text-rose-500 mx-auto mb-2" size={36} />
            <h1 className="text-xl font-bold text-rose-600">Admin Panel</h1>
          </div>
          {/* Close button on mobile */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-4">
          {adminLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.route}
              className={`flex items-center gap-3 p-3 rounded-xl transition
              ${
                location.pathname === link.route
                  ? "bg-rose-100 text-rose-600 font-semibold"
                  : "hover:bg-rose-100 hover:text-rose-600 text-gray-700"
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col ml-0 md:ml-64 transition-all duration-300">
        {/* Top Header */}
        <header className="flex justify-between items-center bg-white shadow-md px-6 py-4 border-b border-rose-200">
          <div className="flex items-center gap-4">
            {/* Hamburger for mobile */}
            <button
              className="md:hidden p-2 rounded-lg bg-rose-100 hover:bg-rose-200 transition"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <h2 className="text-2xl font-bold text-rose-600">
              {location.pathname.includes("products")
                ? "Manage Products"
                : location.pathname.includes("orders")
                ? "Manage Orders"
                : location.pathname.includes("users")
                ? "Manage Users"
                : "Dashboard"}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Admin</span>
            <Sparkles className="text-rose-500 animate-pulse" size={24} />
          </div>
        </header>

        {/* Routes */}
        <section className="p-6 flex-1">
          <Routes>
            <Route path="/admin/dashboard" element={<DashboardHome />} />
            <Route path="/admin/products" element={<ManageProducts />} />
            <Route path="/admin/orders" element={<ManageOrders />} />
            <Route path="/admin/users" element={<ManageUsers />} />
            <Route
              path="/admin/deliveries"
              element={
                <div className="p-6 bg-white rounded-3xl shadow-lg text-gray-700">
                  <h3 className="text-xl font-semibold text-pink-600 mb-4">
                    Deliveries
                  </h3>
                  <p>Manage and track all deliveries here. 🚚 Coming soon!</p>
                </div>
              }
            />
          </Routes>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
