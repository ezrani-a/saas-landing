"use client";

import { useState } from "react";
import { HeroData } from "../types/landing";
import AnimatedSection from "./AnimatedSection";
import AuthModal from "./AuthModal";

export default function Hero({ data }: { data: HeroData }) {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <section className="py-24 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:400%_400%] animate-gradient-x text-white relative">
      <AnimatedSection>
        <div className="max-w-4xl mx-auto px-6">
          {/* Headline */}
          <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">
            {data.headline}
          </h1>

          {/* Tagline */}
          <p className="text-xl mb-6">{data.tagline}</p>

          {/* CTA Button */}
          <button
            onClick={() => setShowAuthModal(true)}
            className="px-6 py-3 bg-white bg-opacity-90 text-indigo-600 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition transform"
          >
            {data.buttonText}
          </button>

          {/* Hero image */}
          {data.image && (
            <img
              src={data.image}
              alt="Hero image"
              className="mt-10 mx-auto max-h-80 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          )}
        </div>
      </AnimatedSection>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}
    </section>
  );
}
