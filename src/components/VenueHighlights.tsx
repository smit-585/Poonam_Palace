"use client";

import { Users, Sparkles, UtensilsCrossed, Car, AirVent, Music, Gift, Camera } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const highlights = [
  {
    icon: Users,
    title: "Seating Capacity",
    description: "Accommodate up to 500 guests comfortably with flexible seating arrangements",
    color: "text-[#D4AF37]",
  },
  {
    icon: Sparkles,
    title: "Royal Ambience",
    description: "Exquisite interiors with crystal chandeliers and elegant décor",
    color: "text-[#D4AF37]",
  },
  {
    icon: Gift,
    title: "Premium Decoration",
    description: "Customized theme-based decoration services for every occasion",
    color: "text-[#D4AF37]",
  },
  {
    icon: UtensilsCrossed,
    title: "Gourmet Catering",
    description: "Multi-cuisine dining with experienced chefs and premium quality food",
    color: "text-[#D4AF37]",
  },
  {
    icon: Car,
    title: "Ample Parking",
    description: "Spacious parking facility for 100+ vehicles with valet service",
    color: "text-[#D4AF37]",
  },
  {
    icon: AirVent,
    title: "Fully AC Hall",
    description: "Central air conditioning ensures comfort in all seasons",
    color: "text-[#D4AF37]",
  },
  {
    icon: Music,
    title: "Grand Stage Setup",
    description: "Professional stage with lighting, sound system, and backdrop",
    color: "text-[#D4AF37]",
  },
  {
    icon: Camera,
    title: "Photo Areas",
    description: "Dedicated photography spots with premium lighting arrangements",
    color: "text-[#D4AF37]",
  },
];

export default function VenueHighlights() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="highlights"
      className="py-20 md:py-32 px-4 bg-gradient-to-b from-[#FFF8F0] to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-[#800020] mb-4">
            Venue Highlights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            World-Class Facilities for Unforgettable Celebrations
          </p>
          <div className="mt-6 h-1 w-32 mx-auto gold-gradient rounded-full" />
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className={`royal-card p-6 text-center transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-[#FFF8F0] to-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 border-2 border-[#D4AF37]/20">
                  <Icon className={`w-10 h-10 ${highlight.color}`} />
                </div>
                <h3 className="text-xl font-bold text-[#800020] mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div className="royal-card p-10 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-[#800020] mb-4">
              Everything You Need Under One Roof
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              From state-of-the-art amenities to personalized services, Poonam Palace offers 
              a complete package for your special day. Our experienced team ensures seamless 
              execution of every event, leaving you free to create beautiful memories with your loved ones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
