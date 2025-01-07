"use client"; // Add this directive at the top of the file

import React, { useState } from "react";
import { FiCheckCircle, FiClock, FiAlertCircle, FiPlusCircle } from "react-icons/fi";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const FinanceTrackerDashboard = () => {
  const [pendingTasks] = useState([
    { id: 1, title: "Review Q4 Expenses", status: "pending", count: 5 },
    { id: 2, title: "Approve Travel Claims", status: "in-progress", count: 3 },
    { id: 3, title: "Budget Analysis", status: "completed", count: 8 }
  ]);

  const [recentExpenses] = useState([
    { id: 1, subject: "Office Supplies", employee: "John Doe", team: "Marketing", amount: 299.99 },
    { id: 2, subject: "Software License", employee: "Jane Smith", team: "Engineering", amount: 599.99 },
    { id: 3, subject: "Travel Expense", employee: "Mike Johnson", team: "Sales", amount: 1299.99 }
  ]);

  const teamSpendingData = [
    { name: "Week 1", Marketing: 4000, Engineering: 2400, Sales: 2400 },
    { name: "Week 2", Marketing: 3000, Engineering: 1398, Sales: 2210 },
    { name: "Week 3", Marketing: 2000, Engineering: 9800, Sales: 2290 },
    { name: "Week 4", Marketing: 2780, Engineering: 3908, Sales: 2000 }
  ];

  const dailyExpensesData = [
    { name: "Mon", amount: 2400 },
    { name: "Tue", amount: 1398 },
    { name: "Wed", amount: 9800 },
    { name: "Thu", amount: 3908 },
    { name: "Fri", amount: 4800 }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <FiCheckCircle className="text-green-500" />;
      case "in-progress":
        return <FiClock className="text-yellow-500" />;
      default:
        return <FiAlertCircle className="text-red-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pending Tasks Panel */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Pending Tasks</h2>
          <div className="space-y-4">
            {pendingTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-3 bg-gray-700 rounded">
                <div className="flex items-center gap-3">
                  {getStatusIcon(task.status)}
                  <span>{task.title}</span>
                </div>
                <span className="bg-gray-600 px-2 py-1 rounded-full text-sm">{task.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Expenses Table */}
        <div className="bg-gray-800 p-6 rounded-lg lg:col-span-2">
          <h2 className="text-xl font-bold mb-4">Recent Expenses</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left p-3">Subject</th>
                  <th className="text-left p-3">Employee</th>
                  <th className="text-left p-3">Team</th>
                  <th className="text-right p-3">Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentExpenses.map((expense) => (
                  <tr key={expense.id} className="border-b border-gray-700">
                    <td className="p-3">{expense.subject}</td>
                    <td className="p-3">{expense.employee}</td>
                    <td className="p-3">{expense.team}</td>
                    <td className="p-3 text-right">${expense.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Access Buttons */}
        <div className="flex gap-4 lg:col-span-3">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
            <FiPlusCircle />
            New Expense
          </button>
          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors">
            <FiPlusCircle />
            Add Receipt
          </button>
        </div>

        {/* Monthly Report Section */}
        <div className="bg-gray-800 p-6 rounded-lg lg:col-span-3">
          <h2 className="text-xl font-bold mb-4">Monthly Report</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="h-[300px]">
              <h3 className="text-lg font-semibold mb-2">Team Spending Trend</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={teamSpendingData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip />
                  <Bar dataKey="Marketing" fill="#3B82F6" />
                  <Bar dataKey="Engineering" fill="#10B981" />
                  <Bar dataKey="Sales" fill="#F59E0B" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="h-[300px]">
              <h3 className="text-lg font-semibold mb-2">Day-to-Day Expenses</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dailyExpensesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip />
                  <Bar dataKey="amount" fill="#6366F1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceTrackerDashboard;
