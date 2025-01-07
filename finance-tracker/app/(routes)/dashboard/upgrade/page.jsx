"use client";

import React, { useState } from "react";
import { FiPlus, FiDollarSign, FiFileText, FiClock } from "react-icons/fi";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const FinanceTrackerDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const pendingTasks = [
    { id: 1, title: "Expense Approvals", count: 12 },
    { id: 2, title: "Receipt Verification", count: 8 },
    { id: 3, title: "Budget Review", count: 5 },
    { id: 4, title: "Payment Processing", count: 15 }
  ];

  const expenses = [
    { id: 1, subject: "Office Supplies", employee: "John Doe", team: "Operations", amount: 299.99 },
    { id: 2, subject: "Software License", employee: "Jane Smith", team: "Technology", amount: 599.99 },
    { id: 3, subject: "Travel Expenses", employee: "Mike Johnson", team: "Sales", amount: 1299.99 },
    { id: 4, subject: "Training Materials", employee: "Sarah Wilson", team: "HR", amount: 449.99 },
    { id: 5, subject: "Marketing Campaign", employee: "Tom Brown", team: "Marketing", amount: 2499.99 },
    { id: 6, subject: "Client Dinner", employee: "Lisa Anderson", team: "Sales", amount: 399.99 },
    { id: 7, subject: "Hardware Upgrade", employee: "Robert Clark", team: "Technology", amount: 1899.99 }
  ];

  const teamSpendingData = [
    { name: "Week 1", Operations: 4000, Technology: 2400, Sales: 2400 },
    { name: "Week 2", Operations: 3000, Technology: 1398, Sales: 2210 },
    { name: "Week 3", Operations: 2000, Technology: 9800, Sales: 2290 },
    { name: "Week 4", Operations: 2780, Technology: 3908, Sales: 2000 }
  ];

  const dailyExpenseData = [
    { name: "Mon", amount: 4000 },
    { name: "Tue", amount: 3000 },
    { name: "Wed", amount: 2000 },
    { name: "Thu", amount: 2780 },
    { name: "Fri", amount: 1890 }
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = expenses.slice(indexOfFirstItem, indexOfLastItem);

  const pageCount = Math.ceil(expenses.length / itemsPerPage);

  const getTeamColor = (team) => {
    const colors = {
      Operations: "bg-blue-500",
      Technology: "bg-purple-500",
      Sales: "bg-green-500",
      HR: "bg-yellow-500",
      Marketing: "bg-red-500"
    };
    return colors[team] || "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Pending Tasks Panel */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FiClock className="mr-2" /> Pending Tasks
            </h2>
            <div className="space-y-4">
              {pendingTasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-gray-700 p-4 rounded-lg flex justify-between items-center"
                >
                  <span>{task.title}</span>
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                    {task.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="lg:col-span-3 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Quick Access Buttons */}
            <div className="flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg flex items-center">
                <FiPlus className="mr-2" /> New Expense
              </button>
              <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg flex items-center">
                <FiFileText className="mr-2" /> Add Receipt
              </button>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
              <h3 className="text-lg font-bold mb-4">Team Spending Trend</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={teamSpendingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Operations" fill="#3B82F6" />
                    <Bar dataKey="Technology" fill="#8B5CF6" />
                    <Bar dataKey="Sales" fill="#10B981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
              <h3 className="text-lg font-bold mb-4">Daily Expenses</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dailyExpenseData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" fill="#6366F1" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Recent Expenses Table */}
          <div className="bg-gray-800 rounded-lg shadow-xl">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <FiDollarSign className="mr-2" /> Recent Expenses
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="pb-3 text-left">Subject</th>
                      <th className="pb-3 text-left">Employee</th>
                      <th className="pb-3 text-left">Team</th>
                      <th className="pb-3 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((expense) => (
                      <tr key={expense.id} className="border-b border-gray-700">
                        <td className="py-3">{expense.subject}</td>
                        <td>{expense.employee}</td>
                        <td>
                          <span
                            className={`${getTeamColor(
                              expense.team
                            )} px-3 py-1 rounded-full text-sm`}
                          >
                            {expense.team}
                          </span>
                        </td>
                        <td className="text-right">
                          ${expense.amount.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="mt-4 flex justify-end space-x-2">
                {Array.from({ length: pageCount }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-3 py-1 rounded ${
                      currentPage === index + 1
                        ? "bg-blue-600"
                        : "bg-gray-700 hover:bg-gray-600"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceTrackerDashboard;
