import React from "react";
import SidebarOwner from "../../components/SidebarOwner";

const offers = [
  {
    buyer: "Alice Smith",
    property: "123 Main St",
    amount: "$420,000",
    date: "2024-06-01",
    status: "Pending",
  },
  {
    buyer: "Bob Lee",
    property: "456 Oak Ave",
    amount: "$370,000",
    date: "2024-05-30",
    status: "Accepted",
  },
  {
    buyer: "Carol White",
    property: "789 Pine Rd",
    amount: "$510,000",
    date: "2024-05-29",
    status: "Rejected",
  },
];

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-700",
  Accepted: "bg-green-100 text-green-700",
  Rejected: "bg-red-100 text-red-700",
};

const Offers = () => (
  <div className="min-h-screen bg-[#f1f3f4] flex">
    <SidebarOwner />
    <div className="flex-1 p-8 ml-64">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-[#091a2b] mb-6">Offers</h1>
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-[#a8aeaf]">
              <th className="py-2">Buyer</th>
              <th className="py-2">Property</th>
              <th className="py-2">Offer Amount</th>
              <th className="py-2">Date</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {offers.map((offer, i) => (
              <tr key={i} className="border-t border-[#f1f3f4]">
                <td className="py-2">{offer.buyer}</td>
                <td className="py-2">{offer.property}</td>
                <td className="py-2">{offer.amount}</td>
                <td className="py-2">{offer.date}</td>
                <td className="py-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      statusColors[offer.status]
                    }`}
                  >
                    {offer.status}
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

export default Offers;
