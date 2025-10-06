import Image from "next/image";
import { HeroData } from "../types/landing";
import AnimatedSection from "./AnimatedSection";

export default function Hero({ data }: { data: HeroData }) {
  return (
    <section className="py-24 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:400%_400%] animate-gradient-x text-white relative">
      <AnimatedSection>
        <div className="max-w-4xl mx-auto px-6">
          {/* Headline */}
          <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">
            {data.headline}
          </h1>

          {/* Tagline */}
          <p className="text-xl mb-4">{data.tagline}</p>

          {/* Optional subheadline */}
          {data.subHeadline && (
            <p className="text-lg mb-6 text-indigo-100">{data.subHeadline}</p>
          )}

          {/* CTA */}
          <a href={data.buttonLink}>
            <button className="px-6 py-3 bg-white bg-opacity-90 text-indigo-600 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition transform">
              {data.buttonText}
            </button>
          </a>

          {/* Hero image */}
          {data.image && (
            <div className="mt-10 flex justify-center">
              <Image
                src={data.image}
                alt="Hero image"
                width={800}
                height={500}
                className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          )}
        </div>
      </AnimatedSection>
    </section>
  );
}
