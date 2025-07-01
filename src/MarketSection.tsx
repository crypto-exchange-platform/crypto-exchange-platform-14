import { FC } from 'react'

const mockData = [
  { name: 'Bitcoin', symbol: 'BTC', price: 65300, change: 2.3 },
  { name: 'Ethereum', symbol: 'ETH', price: 3580, change: -1.1 },
  { name: 'Solana', symbol: 'SOL', price: 140.5, change: 3.9 },
  { name: 'Chainlink', symbol: 'LINK', price: 13.7, change: 1.7 },
  { name: 'Polygon', symbol: 'MATIC', price: 0.82, change: -0.9 },
  { name: 'Avalanche', symbol: 'AVAX', price: 25.1, change: 0.3 },
]

const MarketSection: FC = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold uppercase tracking-widest mb-2">
          Market Overview
        </h2>
        <p className="text-gray-400 text-sm mb-10">
          Global Market Cap: <span className="text-teal-400">$1.78T</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {mockData.map((coin) => (
            <div
              key={coin.symbol}
              className="bg-neutral-900 rounded-lg p-6 shadow-md hover:shadow-teal-400/30 transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{coin.name}</h3>
                <span className="text-xs text-gray-400">({coin.symbol})</span>
              </div>
              <p className="text-2xl font-bold mb-1">
                ${coin.price.toLocaleString()}
              </p>
              <p
                className={`text-sm font-semibold ${
                  coin.change >= 0 ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {coin.change >= 0 ? '+' : ''}
                {coin.change}%
              </p>
            </div>
          ))} 
        </div>
      </div>
    </section>
  )
}

export default MarketSection
