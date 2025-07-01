import TradeStatsCard from "./TradeStatsCard";
import TradeBackground from "./TradeBackgroundCanvas";
import TradeChart from "./TradeChart";
const tradeMetrics = [
  {
    title: "24h Volume",
    value: "$8.4B",
    desc: "Across all pairs in the last 24 hours",
  },
  {
    title: "Users Online",
    value: "142,316",
    desc: "Connected and trading right now",
  },
  {
    title: "Average Trade Speed",
    value: "52ms",
    desc: "Ultra-low latency order matching",
  },
];

export default function TradeSection() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white py-20 px-6 md:px-20 overflow-hidden">
      <TradeBackground />

      <div className="relative text-center mb-16 z-10">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest animate-fade-in">
          Trade Smarter. Trade Faster.
        </h2>
        <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto animate-fade-in-up">
          Access real-time data, fast execution, and a powerful dashboard designed for the future of trading.
        </p>
      </div>

      <div className="relative grid md:grid-cols-3 gap-8 animate-fade-in-up z-10">
        {tradeMetrics.map((item, i) => (
          <TradeStatsCard key={i} {...item} />
        ))}
      </div>

      <div className="relative mt-24 grid md:grid-cols-2 gap-10 items-center z-10">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold uppercase tracking-wide">Real-Time Analytics</h3>
          <p className="text-gray-400">
            Stay ahead of the market with AI-powered analytics and real-time visualizations of your portfolio performance.
          </p>
          <button className="mt-4 px-6 py-3 bg-[#00ffcc] text-black font-bold rounded-lg uppercase hover:bg-[#00ddb3] transition-colors">
            Launch Terminal
          </button>
        </div>
        <div className="w-full h-[300px] md:h-[400px] bg-gray-800 rounded-lg animate-pulse" >   <TradeChart />
 </div>
      </div>
    </section>
  );
}
 