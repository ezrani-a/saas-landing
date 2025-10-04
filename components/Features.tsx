import { FeaturesSectionData } from "../types/landing";
import AnimatedSection from "./AnimatedSection";

export default function Features({ data }: { data: FeaturesSectionData }) {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-center mb-12">{data.title}</h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-8">
        {data.features.map((feature, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform">
              <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
