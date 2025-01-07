"use client";

import React, { useState, useEffect } from "react";
import { FaTrash, FaPencilAlt, FaPlus, FaSun, FaMoon } from "react-icons/fa";

const Expenses = () => {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    category: "expense",
    date: ""
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.amount || !formData.date) {
      alert("Please fill all fields");
      return;
    }

    if (isEditing) {
      setTransactions(
        transactions.map((item) =>
          item.id === editId ? { ...formData, id: editId } : item
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      setTransactions([
        ...transactions,
        { ...formData, id: Date.now() }
      ]);
    }

    setFormData({
      name: "",
      amount: "",
      category: "expense",
      date: ""
    });
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter((item) => item.id !== id));
  };

  const handleEdit = (transaction) => {
    setIsEditing(true);
    setEditId(transaction.id);
    setFormData(transaction);
  };

  const filteredTransactions = transactions.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  const totalIncome = transactions
    .filter((item) => item.category === "income")
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const totalExpenses = transactions
    .filter((item) => item.category === "expense")
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div
      className={`min-h-screen p-4 md:p-8 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Expenses & Income</h1>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full focus:outline-none"
          >
            {isDarkMode ? (
              <FaSun className="text-yellow-400 text-xl" />
            ) : (
              <FaMoon className="text-gray-600 text-xl" />
            )}
          </button>
        </div>

        {/* Dashboard Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-6 rounded-lg shadow-md bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-300 mb-2">Income</h2>
            <p className="text-2xl font-bold text-green-400">${totalIncome}</p>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-300 mb-2">Expenses</h2>
            <p className="text-2xl font-bold text-red-400">${totalExpenses}</p>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-300 mb-2">Balance</h2>
            <p
              className={`text-2xl font-bold ${
                balance >= 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              ${balance}
            </p>
          </div>
        </div>

        {/* Transaction Form */}
        <div className="p-6 rounded-lg shadow-md bg-gray-800 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            {isEditing ? "Edit Transaction" : "Add Transaction"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Transaction Name"
                className="w-full p-2 border border-gray-700 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                placeholder="Amount"
                className="w-full p-2 border border-gray-700 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-700 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-700 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center"
            >
              <FaPlus className="mr-2" />
              {isEditing ? "Update Transaction" : "Add Transaction"}
            </button>
          </form>
        </div>

        {/* Transaction List */}
        <div className="p-6 rounded-lg shadow-md bg-gray-800">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Transactions</h2>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="p-2 border border-gray-700 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-700">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{transaction.name}</td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap font-medium ${
                        transaction.category === "income"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      ${transaction.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap capitalize">{transaction.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{transaction.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleEdit(transaction)}
                        className="text-blue-400 hover:text-blue-600 mr-3"
                      >
                        <FaPencilAlt />
                      </button>
                      <button
                        onClick={() => handleDelete(transaction.id)}
                        className="text-red-400 hover:text-red-600"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
