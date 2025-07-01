export default function ForexNewsSection() {
  const news = [
    {
      title: "USD Rallies Amid Inflation Fears",
      desc: "US dollar gains strength as inflation data spooks investors and rate hike fears return.",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3J5cHRvfGVufDB8fDB8fHww",
    },
    {
      title: "EUR Hits 3-Month Low",
      desc: "Euro weakens against majors as ECB signals delayed rate adjustments.",
      image: "https://plus.unsplash.com/premium_photo-1670249421308-15ae3965c326?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNyeXB0b3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "JPY Sees Unexpected Gains",
      desc: "Japanese yen surges as risk-off sentiment drives demand for safe haven assets.",
      image: "https://images.unsplash.com/photo-1639825988283-39e5408b75e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNyeXB0b3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "GBP Recovers Post-Brexit Lows",
      desc: "British pound rebounds after optimistic economic forecasts and strong retail data.",
      image: "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGNyeXB0b3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Gold Prices Slip As USD Strengthens",
      desc: "Precious metals lose ground as investors rotate into greenback on hawkish Fed tone.",
      image: "https://images.unsplash.com/photo-1639475377520-b256a5d204b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGNyeXB0b3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Oil Prices Drive CAD Higher",
      desc: "Canadian dollar strengthens with rising crude prices, boosting export outlook.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGNyeXB0b3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-black text-white px-6 py-20 md:px-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest">
          Forex Market News
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Stay updated with the latest forex headlines, insights, and opportunities.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {news.map((item, i) => (
          <div
            key={i}
            className="bg-[#111] border border-gray-800 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
 