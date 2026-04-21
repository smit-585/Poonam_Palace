"use client";

import { Crown, Sparkles, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 md:py-32 px-4 bg-gradient-to-b from-white to-[#FFF8F0]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <Crown className="w-8 h-8 text-[#D4AF37]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#800020] mb-4">
            About Poonam Palace
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            A Legacy of Excellence in Hospitality
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nestled in the heart of Pulgaon, <span className="font-semibold text-[#800020]">Poonam Palace</span> stands as a beacon of luxury and sophistication. For years, we have been the preferred choice for families celebrating their most precious moments.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our magnificent banquet hall combines traditional elegance with modern amenities, creating the perfect backdrop for weddings, receptions, corporate events, and celebrations of all kinds.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With meticulous attention to detail and unwavering commitment to excellence, we transform your vision into reality, ensuring every event is nothing short of extraordinary.
            </p>
          </div>

          {/* Stats/Highlights */}
          <div className={`space-y-6 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="royal-card p-8 text-center">
              <Award className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-[#800020] mb-2">8+ Years</h3>
              <p className="text-gray-600">Of Excellence in Hospitality</p>
            </div>
            <div className="royal-card p-8 text-center">
              <Sparkles className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-[#800020] mb-2">500+</h3>
              <p className="text-gray-600">Successful Events Hosted</p>
            </div>
            <div className="royal-card p-8 text-center">
              <Crown className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-[#800020] mb-2">100%</h3>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className={`royal-card p-10 text-center transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <h3 className="text-2xl md:text-3xl font-bold text-[#800020] mb-4">Our Promise</h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At Poonam Palace, we don&apos;t just host events—we create memories that last a lifetime.
            Our dedicated team works tirelessly to ensure every detail is perfect, every guest is delighted,
            and every celebration becomes a royal affair.
          </p>
        </div>
      </div>
    </section>
  );
}
