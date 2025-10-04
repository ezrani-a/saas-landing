import { PricingSectionData } from "../types/landing";
import AnimatedSection from "./AnimatedSection";

export default function Pricing({ data }: { data: PricingSectionData }) {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-center mb-12">{data.title}</h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
        {data.plans.map((plan, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div
              className={`p-8 bg-white rounded-3xl shadow-lg text-center border transition hover:shadow-2xl hover:scale-105 ${
                plan.highlight ? "border-4 border-indigo-600 scale-105 z-10 bg-gradient-to-b from-indigo-50 via-white to-indigo-50" : ""
              }`}
            >
              {plan.highlight && (
                <span className="absolute top-0 -mt-3 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-4xl font-bold mb-4">
                {plan.currency}
                {plan.price}
                {typeof plan.price === "number" && <span className="text-lg">/mo</span>}
              </p>
              <p className="mb-4 text-gray-600">{plan.summary}</p>
              <ul className="mb-6 text-left space-y-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="text-indigo-600">✔</span> {f}
                  </li>
                ))}
              </ul>
              <a href={plan.buttonLink}>
                <button className="px-6 py-2 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 hover:scale-105 transition transform">
                  {plan.buttonText}
                </button>
              </a>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
