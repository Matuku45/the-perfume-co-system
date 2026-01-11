import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, Edit2, Trash2, ShieldCheck } from "lucide-react";

// Sample user data
const initialUsers = [
  { id: 1, name: "Lindiwe M.", email: "lindiwe@example.com", role: "Customer", status: "Active" },
  { id: 2, name: "Thabo K.", email: "thabo@example.com", role: "Admin", status: "Active" },
  { id: 3, name: "Naledi P.", email: "naledi@example.com", role: "Customer", status: "Inactive" },
  { id: 4, name: "Sipho T.", email: "sipho@example.com", role: "Customer", status: "Active" },
  { id: 5, name: "Zanele N.", email: "zanele@example.com", role: "Customer", status: "Active" },
];

const ManageUsers = () => {
  const [users, setUsers] = useState(initialUsers);

  const handleToggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" }
          : user
      )
    );
  };

  const handleEditRole = (id) => {
    const role = prompt("Enter new role (Admin/Customer):");
    if (role && (role === "Admin" || role === "Customer")) {
      setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, role } : u)));
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers((prev) => prev.filter((u) => u.id !== id));
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-between items-center mb-6"
      >
        <h2 className="text-3xl font-bold text-rose-600">Manage Users</h2>
        <Users size={28} className="text-rose-500" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-700 mb-8 text-center"
      >
        View, edit, activate/deactivate, or remove user accounts easily.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <motion.div
            key={user.id}
            whileHover={{ scale: 1.03 }}
            className={`bg-white rounded-3xl shadow-lg border-l-8 p-6 ${
              user.status === "Active" ? "border-rose-400" : "border-pink-400"
            }`}
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-rose-600 mb-1">{user.name}</h3>
              <p className="text-gray-700 mb-1"><span className="font-semibold">Email:</span> {user.email}</p>
              <p className="text-gray-700 mb-1"><span className="font-semibold">Role:</span> {user.role}</p>
              <p className={`font-semibold ${user.status === "Active" ? "text-green-600" : "text-pink-600"}`}>
                Status: {user.status}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleEditRole(user.id)}
                className="flex items-center gap-1 px-3 py-1 bg-amber-400 text-white rounded-xl hover:bg-amber-500 transition"
              >
                <Edit2 size={16} /> Edit Role
              </button>
              <button
                onClick={() => handleToggleStatus(user.id)}
                className="flex items-center gap-1 px-3 py-1 bg-rose-400 text-white rounded-xl hover:bg-rose-500 transition"
              >
                <ShieldCheck size={16} /> {user.status === "Active" ? "Deactivate" : "Activate"}
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="flex items-center gap-1 px-3 py-1 bg-pink-400 text-white rounded-xl hover:bg-pink-500 transition"
              >
                <Trash2 size={16} /> Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default ManageUsers;
