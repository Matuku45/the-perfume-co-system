import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, ShoppingCart, Truck, Users, CheckCircle, XCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const sampleOrders = [
  {
    id: 101,
    customer: "Thabiso Mapoulo",
    product: "Rose Blossom",
    quantity: 2,
    status: "Pending",
    location: "Johannesburg",
  },
  {
    id: 102,
    customer: "Lindiwe M.",
    product: "Ocean Breeze",
    quantity: 1,
    status: "Shipped",
    location: "Cape Town",
  },
  {
    id: 103,
    customer: "Sipho K.",
    product: "Mystic Oud",
    quantity: 3,
    status: "Delivered",
    location: "Durban",
  },
  {
    id: 104,
    customer: "Anele P.",
    product: "Vanilla Dreams",
    quantity: 1,
    status: "Cancelled",
    location: "Pretoria",
  },
];

const ManageOrders = () => {
  const [orders, setOrders] = useState(sampleOrders);

  // Update order status
  const updateStatus = (id, newStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 p-6">
      {/* Back to Dashboard */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <Link
          to="/admin/dashboard"
          className="inline-flex items-center gap-2 px-4 py-2 bg-rose-400 text-white rounded-xl hover:bg-rose-500 transition"
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </Link>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-rose-600 mb-4 text-center"
      >
        Manage Orders
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center text-gray-700 mb-8"
      >
        View, update, and track all customer orders efficiently.
      </motion.p>

      {/* Orders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: order.id * 0.05 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-3xl shadow-lg border-l-8 border-rose-400 p-6 flex flex-col justify-between"
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-rose-600 mb-2">
                Order #{order.id}
              </h3>
              <p className="text-gray-700">
                <span className="font-semibold">Customer:</span> {order.customer}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Product:</span> {order.product} ({order.quantity})
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Location:</span> {order.location}
              </p>
            </div>

            {/* Status Badge & Actions */}
            <div className="flex justify-between items-center mt-4">
              <StatusBadge status={order.status} />
              <div className="flex gap-2">
                {order.status === "Pending" && (
                  <>
                    <button
                      onClick={() => updateStatus(order.id, "Shipped")}
                      className="px-3 py-1 bg-amber-400 text-white rounded-xl hover:bg-amber-500 transition"
                    >
                      Ship
                    </button>
                    <button
                      onClick={() => updateStatus(order.id, "Cancelled")}
                      className="px-3 py-1 bg-pink-400 text-white rounded-xl hover:bg-pink-500 transition"
                    >
                      Cancel
                    </button>
                  </>
                )}
                {order.status === "Shipped" && (
                  <button
                    onClick={() => updateStatus(order.id, "Delivered")}
                    className="px-3 py-1 bg-rose-400 text-white rounded-xl hover:bg-rose-500 transition"
                  >
                    Delivered
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

// Status Badge Component
const StatusBadge = ({ status }) => {
  let color, Icon;
  switch (status) {
    case "Pending":
      color = "bg-yellow-200 text-yellow-800";
      Icon = ShoppingCart;
      break;
    case "Shipped":
      color = "bg-amber-200 text-amber-800";
      Icon = Truck;
      break;
    case "Delivered":
      color = "bg-rose-200 text-rose-800";
      Icon = CheckCircle;
      break;
    case "Cancelled":
      color = "bg-pink-200 text-pink-800";
      Icon = XCircle;
      break;
    default:
      color = "bg-gray-200 text-gray-800";
  }

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full font-semibold text-sm ${color}`}
    >
      {Icon && <Icon size={16} />}
      {status}
    </span>
  );
};

export default ManageOrders;
