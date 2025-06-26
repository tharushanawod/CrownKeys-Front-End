import React from "react";
import SidebarOwner from "../../components/SidebarOwner";

const inquiries = [
  {
    name: "Sarah Johnson",
    property: "123 Main St",
    date: "2024-06-01",
    status: "New",
  },
  {
    name: "Michael Brown",
    property: "456 Oak Ave",
    date: "2024-05-30",
    status: "Viewed",
  },
  {
    name: "Emily Davis",
    property: "789 Pine Rd",
    date: "2024-05-29",
    status: "Contacted",
  },
];

const statusColors = {
  New: "bg-blue-100 text-blue-700",
  Viewed: "bg-green-100 text-green-700",
  Contacted: "bg-gray-100 text-gray-700",
};

const Inquiries = () => (
  <div className="min-h-screen bg-[#f1f3f4] flex">
    <SidebarOwner />
    <div className="flex-1 p-8 ml-64">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-[#091a2b] mb-6">Inquiries</h1>
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-[#a8aeaf]">
              <th className="py-2">Name</th>
              <th className="py-2">Property</th>
              <th className="py-2">Date</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inq, i) => (
              <tr key={i} className="border-t border-[#f1f3f4]">
                <td className="py-2">{inq.name}</td>
                <td className="py-2">{inq.property}</td>
                <td className="py-2">{inq.date}</td>
                <td className="py-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      statusColors[inq.status]
                    }`}
                  >
                    {inq.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Inquiries;
