import React from "react";
import SidebarOwner from "../../components/SidebarOwner";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Title
);

const financials = [
  { label: "Total Earnings", value: "$12,500", color: "text-green-600" },
  { label: "Pending Payments", value: "$2,000", color: "text-yellow-600" },
  { label: "Withdrawn", value: "$10,000", color: "text-blue-600" },
];

const earningsOverTime = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Earnings",
      data: [1200, 1500, 1800, 2000, 2500, 2200, 1300],
      fill: false,
      borderColor: "#005163",
      backgroundColor: "#005163",
      tension: 0.3,
    },
  ],
};

const earningsBreakdown = {
  labels: ["Withdrawn", "Pending", "Available"],
  datasets: [
    {
      data: [10000, 2000, 500],
      backgroundColor: ["#2563eb", "#facc15", "#22c55e"],
      borderWidth: 1,
    },
  ],
};

const transactions = [
  {
    date: "2024-06-01",
    type: "Withdrawal",
    amount: "$1,000",
    status: "Completed",
  },
  {
    date: "2024-05-28",
    type: "Earnings",
    amount: "$2,500",
    status: "Completed",
  },
  { date: "2024-05-25", type: "Payment", amount: "$2,000", status: "Pending" },
];

const statusColors = {
  Completed: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
};

const Financial = () => (
  <div className="min-h-screen bg-[#f1f3f4] flex">
    <SidebarOwner />
    <div className="flex-1 p-4 md:p-8 ml-0 sm:ml-64">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-[#091a2b] mb-6">
          Financial Overview
        </h1>
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {financials.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-6 shadow flex flex-col items-center"
            >
              <span className="text-xs text-[#a8aeaf] font-semibold mb-1">
                {item.label}
              </span>
              <span className={`text-2xl font-bold ${item.color}`}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-[#091a2b] mb-4">
              Earnings Over Time
            </h2>
            <Line
              data={earningsOverTime}
              options={{
                responsive: true,
                plugins: {
                  legend: { display: false },
                  title: { display: false },
                },
              }}
            />
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <h2 className="text-lg font-semibold text-[#091a2b] mb-4">
              Earnings Breakdown
            </h2>
            <div className="w-40 h-40">
              <Doughnut
                data={earningsBreakdown}
                options={{
                  plugins: {
                    legend: { position: "bottom" },
                  },
                }}
              />
            </div>
          </div>
        </div>
        {/* Transactions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-[#091a2b] mb-4">
            Recent Transactions
          </h2>
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-[#a8aeaf]">
                <th className="py-2">Date</th>
                <th className="py-2">Type</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn, i) => (
                <tr key={i} className="border-t border-[#f1f3f4]">
                  <td className="py-2">{txn.date}</td>
                  <td className="py-2">{txn.type}</td>
                  <td className="py-2">{txn.amount}</td>
                  <td className="py-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        statusColors[txn.status]
                      }`}
                    >
                      {txn.status}
                    </span>
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

export default Financial;
