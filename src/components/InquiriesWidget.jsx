import React from "react";

const InquiriesWidget = ({
  inquiries,
  statusColors,
  title = "Latest Inquiries",
  maxItems = 3,
}) => {
  const displayInquiries = inquiries.slice(0, maxItems);

  return (
    <div className="bg-white rounded-lg p-4 shadow flex flex-col">
      <span className="font-semibold text-[#091a2b] mb-2">{title}</span>
      <div className="space-y-4">
        {displayInquiries.map((inq, i) => (
          <div key={i} className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-[#091a2b]">{inq.name}</div>
              <div className="text-xs text-[#3b4876]">{inq.address}</div>
              <div className="text-xs text-[#a8aeaf]">{inq.time}</div>
            </div>
            <span
              className={`px-2 py-1 rounded text-xs font-semibold ${
                statusColors[inq.status] || "bg-gray-100 text-gray-700"
              }`}
            >
              {inq.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InquiriesWidget;
