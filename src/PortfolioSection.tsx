import {  useRef } from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

export default function PortfolioSection() {
  const chartRef = useRef(null);

  const data = {
    labels: ["BTC", "ETH", "SOL", "USDT"],
    datasets: [
      {
        data: [45, 30, 15, 10],
        backgroundColor: ["#00ffcc", "#0077ff", "#ff4081", "#888"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const assets = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      amount: "0.823",
      value: "$48,230",
      change: "+4.3%",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      amount: "12.5",
      value: "$37,110",
      change: "+2.1%",
    },
    {
      name: "Solana",
      symbol: "SOL",
      amount: "104",
      value: "$9,120",
      change: "-1.4%",
    },
    {
      name: "Tether",
      symbol: "USDT",
      amount: "4,000",
      value: "$4,000",
      change: "0.0%",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-black text-white px-6 py-20 md:px-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest">
          Your Crypto Portfolio
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Track and visualize your assets with precision and clarity.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="bg-[#111] p-8 rounded-xl shadow-xl space-y-4 animate-fade-in">
          <h3 className="text-2xl font-bold tracking-wide">Total Balance</h3>
          <p className="text-4xl font-extrabold text-[#00ffcc]">$98,460</p>
          <p className="text-sm text-gray-400">+3.87% (24h change)</p>
        </div>

        <div className="bg-[#111] p-4 rounded-xl shadow-xl animate-fade-in">
          <div className="w-[220px] h-[220px] mx-auto">
            <Doughnut data={data} options={options} ref={chartRef} />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {assets.map((asset, i) => (
          <div
            key={i}
            className="bg-[#111] border border-gray-800 rounded-xl p-6 hover:scale-105 transition-transform duration-300"
          >
            <h4 className="text-lg font-semibold">{asset.name}</h4>
            <p className="text-sm text-gray-500 uppercase">{asset.symbol}</p>
            <p className="text-xl font-bold mt-2">{asset.amount}</p>
            <p className="text-[#00ffcc] text-lg">{asset.value}</p>
            <p
              className={`text-sm mt-1 ${
                asset.change.startsWith("+")
                  ? "text-green-400"
                  : asset.change.startsWith("-")
                  ? "text-red-400"
                  : "text-gray-400"
              }`}
            >
              {asset.change}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
