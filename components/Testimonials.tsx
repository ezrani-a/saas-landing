import Image from "next/image";
import { TestimonialsSectionData } from "../types/landing";
import AnimatedSection from "./AnimatedSection";

export default function Testimonials({ data }: { data: TestimonialsSectionData }) {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <AnimatedSection>
        <h2 className="text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
          {data.title}
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.testimonials.map((t, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="p-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-indigo-100 hover:border-indigo-300 hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300">
              <p className="italic text-gray-700 text-lg leading-relaxed">
                “{t.text}”
              </p>

              <div className="mt-6 flex items-center gap-4">
                {t.profilePic && (
                  <Image
                    src={t.profilePic}
                    alt={t.author}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-semibold text-gray-900">{t.author}</p>
                  {t.company && (
                    <p className="text-sm text-gray-600">{t.company}</p>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
