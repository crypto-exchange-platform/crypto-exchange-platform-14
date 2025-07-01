export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-6 md:px-20 py-16">
      <div className="grid md:grid-cols-4 gap-10 border-b border-gray-800 pb-10">
        <div>
          <h3 className="text-white text-xl font-bold mb-4 tracking-wide">CryptVerse</h3>
          <p className="text-sm leading-relaxed">
            The future of decentralized trading. Secure, scalable, and built for speed.
          </p>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase mb-3">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Trade</a></li>
            <li><a href="#" className="hover:text-white transition">Markets</a></li>
            <li><a href="#" className="hover:text-white transition">Portfolio</a></li>
            <li><a href="#" className="hover:text-white transition">Exchange</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Docs</a></li>
            <li><a href="#" className="hover:text-white transition">Support</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Security</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase mb-3">Newsletter</h4>
          <p className="text-sm mb-4">Stay updated with the latest news and product updates.</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#111] text-white px-4 py-2 rounded outline-none border border-gray-700 placeholder:text-gray-500"
            />
            <button
              type="submit"
              className="bg-[#00ffcc] text-black px-4 py-2 rounded font-bold uppercase hover:bg-[#00ddb3] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="pt-10 text-sm text-center text-gray-600">
        © {new Date().getFullYear()} CryptVerse. All rights reserved.
      </div>
    </footer>
  );
}
 