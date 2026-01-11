import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Box, Truck, UserCheck } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import product images
import carMusk from "../assets/car-musk.jpg";
import co from "../assets/co.jpg";
import orangePerfume from "../assets/the-perfume-orange.jpg";

// Sample orders & products
const sampleOrders = [
  { id: 101, product: "Rose Blossom", status: "Delivered", image: carMusk },
  { id: 102, product: "Ocean Breeze", status: "Shipped", image: co },
  { id: 103, product: "Perfume Orange", status: "Pending", image: orangePerfume },
];

const sampleProducts = [
  { id: 1, name: "Rose Blossom", price: "$49", image: carMusk },
  { id: 2, name: "Ocean Breeze", price: "$59", image: co },
  { id: 3, name: "Perfume Orange", price: "$55", image: orangePerfume },
];

const Dashboard = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 p-6">
        {/* Dashboard Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-8">
          <h2 className="text-3xl font-bold text-rose-600">User Dashboard</h2>
          <p className="text-gray-700 mt-2">Track your orders and explore our products.</p>
        </motion.div>

        {/* Quick Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard icon={<ShoppingCart size={28} />} title="My Orders" count={sampleOrders.length} color="rose" />
          <DashboardCard icon={<Box size={28} />} title="Products" count={sampleProducts.length} color="amber" />
          <DashboardCard icon={<Truck size={28} />} title="Shipped Orders" count={sampleOrders.filter(o => o.status === "Shipped").length} color="pink" />
          <DashboardCard icon={<UserCheck size={28} />} title="Delivered" count={sampleOrders.filter(o => o.status === "Delivered").length} color="rose" />
        </section>

        {/* Recent Orders */}
        <section className="max-w-4xl mx-auto bg-white/50 backdrop-blur-xl rounded-3xl shadow-lg border border-rose-200 p-6 mb-8">
          <motion.h3 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-xl font-semibold text-rose-600 mb-4">Recent Orders</motion.h3>
          <ul className="space-y-3">
            {sampleOrders.map(order => (
              <li key={order.id} className="flex justify-between items-center p-3 bg-white rounded-xl shadow-sm border-l-4 border-rose-400">
                <div className="flex items-center gap-4">
                  <img src={order.image} alt={order.product} className="w-16 h-16 object-cover rounded-xl" />
                  <span>Order #{order.id}: {order.product}</span>
                </div>
                <span className={`font-semibold ${order.status === "Delivered" ? "text-green-600" : order.status === "Shipped" ? "text-amber-600" : "text-pink-600"}`}>{order.status}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Product Previews */}
        <section className="max-w-6xl mx-auto">
          <motion.h3 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-xl font-semibold text-rose-600 mb-4">Available Products</motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleProducts.map(product => (
              <motion.div key={product.id} whileHover={{ scale: 1.03 }} className="bg-white rounded-3xl shadow-lg border-l-8 border-amber-400 p-6 flex flex-col justify-between">
                <img src={product.image} alt={product.name} className="rounded-2xl h-48 object-cover mb-4" />
                <h4 className="text-lg font-semibold text-rose-600 mb-2">{product.name}</h4>
                <p className="text-gray-700 font-bold">{product.price}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

/* Dashboard Card Component */
const DashboardCard = ({ icon, title, count, color }) => (
  <motion.div whileHover={{ scale: 1.05 }} className={`flex flex-col items-center justify-center p-6 rounded-3xl shadow-lg bg-white border-l-8 border-${color}-400`}>
    <div className={`text-${color}-500 mb-2`}>{icon}</div>
    <h3 className={`text-lg font-semibold text-${color}-600 mb-1`}>{title}</h3>
    <p className="text-gray-700 font-bold text-xl">{count}</p>
  </motion.div>
);

export default Dashboard;
