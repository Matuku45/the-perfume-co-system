import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Box, ShoppingCart, Truck, Users, Menu } from "lucide-react";

// Side navigation links
const adminLinks = [
  { name: "Dashboard", icon: <Sparkles size={20} />, route: "#" },
  { name: "Products", icon: <Box size={20} />, route: "#" },
  { name: "Orders", icon: <ShoppingCart size={20} />, route: "#" },
  { name: "Deliveries", icon: <Truck size={20} />, route: "#" },
  { name: "Customers", icon: <Users size={20} />, route: "#" },
];

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50">
      {/* Side Navigation */}
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
            <a
              key={idx}
              href={link.route}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-rose-100 hover:text-rose-600 transition"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
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
            <h2 className="text-2xl font-bold text-rose-600">Dashboard</h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Admin</span>
            <Sparkles className="text-rose-500 animate-pulse" size={24} />
          </div>
        </header>

        {/* Dashboard Cards */}
        <section className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <DashboardCard icon={<Box size={28} />} title="Products" count={120} color="rose" />
          <DashboardCard icon={<ShoppingCart size={28} />} title="Orders" count={75} color="amber" />
          <DashboardCard icon={<Truck size={28} />} title="Deliveries" count={50} color="pink" />
          <DashboardCard icon={<Users size={28} />} title="Customers" count={300} color="rose" />
        </section>

        {/* Recent Activity / Operations */}
        <section className="p-6 mt-6 max-w-6xl mx-auto bg-white/50 backdrop-blur-xl rounded-3xl shadow-lg border border-rose-200">
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl font-semibold text-rose-600 mb-4"
          >
            Recent Activities
          </motion.h3>
          <ul className="space-y-3 text-gray-700">
            <li>🛒 New order received from Johannesburg</li>
            <li>📦 Product "Rose Elegance" stock updated</li>
            <li>🚚 Delivery scheduled for Cape Town</li>
            <li>💌 Customer "Lindiwe M." contacted support</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

/* Dashboard Card Component */
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

export default AdminDashboard;
