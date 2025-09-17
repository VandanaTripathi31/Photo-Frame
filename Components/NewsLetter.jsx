export default function Newsletter() {
  return (
    <section className="bg-[#728c70] py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Stay Updated!</h2>
        <p className="text-white/80 mb-8">
          Subscribe to our newsletter and get the latest offers, new arrivals,
          and updates straight to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 rounded-lg outline-none border-none text-gray-800"
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
