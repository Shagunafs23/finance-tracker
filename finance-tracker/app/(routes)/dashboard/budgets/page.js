'use client'; // Add this line at the very top

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { FiDollarSign, FiTrendingUp, FiTrendingDown, FiTrash2, FiEdit } from "react-icons/fi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [newIncome, setNewIncome] = useState({ source: "", amount: "", date: "" });
  const [newExpense, setNewExpense] = useState({ category: "", amount: "", date: "" });

  const categories = ["Food", "Transportation", "Housing", "Utilities", "Entertainment", "Others"];

  const handleIncomeSubmit = (e) => {
    e.preventDefault();
    setIncomes([...incomes, { ...newIncome, id: Date.now() }]);
    setNewIncome({ source: "", amount: "", date: "" });
  };

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
    setNewExpense({ category: "", amount: "", date: "" });
  };

  const totalIncome = incomes.reduce((sum, income) => sum + Number(income.amount), 0);
  const totalExpenses = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
  const netIncome = totalIncome - totalExpenses;

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Income",
        data: [1200, 1900, 1500, 1800, 2000, 1700],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1
      },
      {
        label: "Expenses",
        data: [1000, 1500, 1200, 1600, 1800, 1400],
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Budget</h1>

        <div className="flex space-x-4 mb-6">
          {["Total Evaluation", "income"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg capitalize ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-300">Total Income</h3>
                <FiTrendingUp className="text-green-500 text-2xl" />
              </div>
              <p className="text-3xl font-bold text-white mt-2">${totalIncome}</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-300">Total Expenses</h3>
                <FiTrendingDown className="text-red-500 text-2xl" />
              </div>
              <p className="text-3xl font-bold text-white mt-2">${totalExpenses}</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-300">Net Income</h3>
                <FiDollarSign className="text-blue-500 text-2xl" />
              </div>
              <p className="text-3xl font-bold text-white mt-2">${netIncome}</p>
            </div>

            <div className="col-span-1 md:col-span-3 bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-300 mb-4">Financial Overview</h3>
              <div className="h-80">
                <Line data={chartData} options={{ maintainAspectRatio: false }} />
              </div>
            </div>
          </div>
        )}

        {activeTab === "income" && (
          <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-white mb-6">Income Tracker</h2>
            <form onSubmit={handleIncomeSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Source</label>
                <input
                  type="text"
                  required
                  value={newIncome.source}
                  onChange={(e) => setNewIncome({ ...newIncome, source: e.target.value })}
                  className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Amount</label>
                <input
                  type="number"
                  required
                  value={newIncome.amount}
                  onChange={(e) => setNewIncome({ ...newIncome, amount: e.target.value })}
                  className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Date</label>
                <input
                  type="date"
                  required
                  value={newIncome.date}
                  onChange={(e) => setNewIncome({ ...newIncome, date: e.target.value })}
                  className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="md:col-span-3 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Add Income
              </button>
            </form>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Source</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800 divide-y divide-gray-700">
                  {incomes.map((income) => (
                    <tr key={income.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">{income.source}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">${income.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">{income.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <FiEdit className="text-blue-500 cursor-pointer" />
                          <FiTrash2 className="text-red-500 cursor-pointer" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Expense Tracker and Reports follow similar dark theme styling */}

      </div>
    </div>
  );
};

export default Dashboard;
