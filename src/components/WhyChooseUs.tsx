"use client";

import { CheckCircle2, Shield, Clock, HeartHandshake, Sparkles, Trophy, Users, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    icon: Star,
    title: "Prime Location",
    description: "Easily accessible location in Pulgaon with excellent connectivity",
  },
  {
    icon: Shield,
    title: "Trusted Reputation",
    description: "8+ years of delivering exceptional events with consistent quality",
  },
  {
    icon: Clock,
    title: "Flexible Timing",
    description: "Full day bookings with flexible timing options to suit your schedule",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Service",
    description: "Dedicated event manager for customized planning and execution",
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "High-quality décor, furnishings, and world-class amenities",
  },
  {
    icon: Trophy,
    title: "Award-Winning Venue",
    description: "Recognized as the most preferred banquet hall in the region",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Professional staff trained to handle events with precision and care",
  },
  {
    icon: CheckCircle2,
    title: "Transparent Pricing",
    description: "No hidden costs—clear packages with value for money",
  },
];

export default function WhyChooseUs() {
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
      id="why-choose-us"
      className="py-20 md:py-32 px-4 bg-gradient-to-b from-white via-[#FFF8F0] to-white relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#800020]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-[#800020] mb-4">
            Why Choose Poonam Palace?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Experience the Difference That Makes Us Extraordinary
          </p>
          <div className="mt-6 h-1 w-32 mx-auto gold-gradient rounded-full" />
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className={`royal-card p-6 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg p-3 flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#800020] mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div className="royal-card p-10 text-center border-2 border-[#D4AF37]/30">
            <h3 className="text-2xl md:text-4xl font-bold text-[#800020] mb-4">
              Your Dream Event Awaits
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
              Join thousands of satisfied families who have celebrated their special moments at Poonam Palace. 
              Let us make your event truly unforgettable with our royal hospitality and world-class service.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#D4AF37] mb-1">1500+</div>
                <div className="text-gray-600">Guest Capacity</div>
              </div>
              <div className="h-12 w-px bg-[#D4AF37]/30" />
              <div className="text-center">
                <div className="text-4xl font-bold text-[#D4AF37] mb-1">8+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="h-12 w-px bg-[#D4AF37]/30" />
              <div className="text-center">
                <div className="text-4xl font-bold text-[#D4AF37] mb-1">500+</div>
                <div className="text-gray-600">Happy Events</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
