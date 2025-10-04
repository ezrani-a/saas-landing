import { TestimonialsSectionData } from "../types/landing";
import AnimatedSection from "./AnimatedSection";

export default function Testimonials({ data }: { data: TestimonialsSectionData }) {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-center mb-12">{data.title}</h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 gap-8">
        {data.testimonials.map((t, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="p-6 bg-gradient-to-tr from-indigo-50 to-pink-50 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform">
              <p className="italic">"{t.text}"</p>
              <div className="mt-4 flex items-center gap-3">
                {t.profilePic && <img src={t.profilePic} alt={t.author} className="w-10 h-10 rounded-full" />}
                <p className="font-semibold">{t.author} {t.company && <span className="text-gray-600">, {t.company}</span>}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
