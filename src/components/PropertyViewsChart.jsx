import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const PropertyViewsChart = ({
  data,
  options,
  title = "Property Views",
  subtitle = "Last 30 days",
}) => {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        borderColor: "#005163",
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          title: function (context) {
            return `Date: ${context[0].label}`;
          },
          label: function (context) {
            return `Views: ${context.parsed.y}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#a8aeaf",
          font: {
            size: 10,
          },
          maxTicksLimit: 10,
        },
      },
      y: {
        grid: {
          color: "rgba(168, 174, 175, 0.1)",
        },
        ticks: {
          color: "#a8aeaf",
          font: {
            size: 10,
          },
          callback: function (value) {
            return value + " views";
          },
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow col-span-2 flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-[#091a2b]">{title}</span>
        <span className="text-xs text-[#a8aeaf]">{subtitle}</span>
      </div>
      <div className="flex-1 h-48">
        <Line data={data} options={{ ...defaultOptions, ...options }} />
      </div>
    </div>
  );
};

export default PropertyViewsChart;
