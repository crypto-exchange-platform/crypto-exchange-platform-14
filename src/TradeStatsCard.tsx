type Props = {
  title: string;
  value: string;
  desc: string;
};

export default function TradeStatsCard({ title, value, desc }: Props) {
  return (
    <div className="bg-[#111111] border border-gray-800 rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-xl">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold text-[#00ffcc]">{value}</p>
      <p className="text-sm text-gray-500 mt-2">{desc}</p>
    </div>
  );
}
 