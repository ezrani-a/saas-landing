import AnimatedSection from "./AnimatedSection";

export default function ContactForm() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center rounded-3xl">
      <AnimatedSection>
        <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
        <p className="mb-6">Subscribe to our newsletter for product updates and tips.</p>
        <form className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-xl text-gray-800 flex-1 bg-white/80 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 hover:scale-105 transition transform shadow-lg"
          >
            Subscribe
          </button>
        </form>
      </AnimatedSection>
    </section>
  );
}
