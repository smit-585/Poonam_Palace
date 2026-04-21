"use client";

import { Check, Crown, Sparkles, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Wedding Package Details – Poonam Palace",
    icon: Crown,
    price: "₹75,000/-",
    priceSubtext: "1 Day Rental (7:00 PM to 5:00 PM)",
    tagline: "Make Your Special Day Memorable",
    features: [
      "2 AC Rooms (for Bride & Groom)",
      "7 General Rooms",
      "Kitchen Facility",
      "Dining Hall",
    ],
    popular: true,
    color: "from-[#800020] to-[#B8941F]",
  },
  {
    name: "Sawarkar Lawn - Reception Package",
    icon: Sparkles,
    price: "₹22,000/-",
    priceSubtext: "\u00A0",
    tagline: "Celebrate in Style",
    features: [
      "Evening venue booking (6 hours)",
      "Open lawn space",
      "Seating for up to 350 guests",
      "Parking facility",
      "Basic lighting setup",
      "Photography support area",
    ],
    popular: false,
    color: "from-[#D4AF37] to-[#B8941F]",
  },
  {
    name: "Water Park Package",
    icon: Star,
    price: "₹50,000",
    tagline: "Make Memories Special",
    features: [
      "Half day booking (4-5 hours)",
      "Balloon & party décor",
      "Music system",
      "Parking available",
      "Staff assistance",
      "Photo booth area",
    ],
    popular: false,
    color: "from-[#D4AF37] to-[#F4E4C1]",
  },
  {
    name: "Rental Charges",
    icon: Crown,
    price: "",
    tagline: "",
    features: [
      "H:Rental Charges:",
      "Ducting (5 Hours) – ₹3000/-",
      "Generator (5 Hours) – ₹3000/-",
      "Stage & AC Extra – ₹1500/-",
      "Sound (5 Hours) – ₹1000/-",
      "Electricity per Unit – ₹20/-",
      "Lift (8 Hours) – ₹3000/-",
      "H:Items / Materials:",
      "Steel Sofa – ₹150/- per piece",
      "Mattress, Pillow, Bedsheet – ₹20/- per piece",
      "Blanket – ₹20/- per piece",
      "Chair – ₹6/- per piece",
      "Chair Cover – ₹7/- per piece",
      "Cushion Chair – ₹15/- per piece",
      "Foam Mattress – ₹40/- per piece",
      "Foam Sofa – ₹300/- per piece",
      "Carpet – ₹2500/-"
    ],
    popular: false,
    color: "from-[#800020] to-[#D4AF37]",
  },
];

export default function PackagesSection() {
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

  const handleBookNow = () => {
    window.open("https://wa.me/918459663672?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20packages%20at%20Poonam%20Palace", "_blank");
  };

  return (
    <section
      ref={sectionRef}
      id="packages"
      className="py-20 md:py-32 px-4 bg-gradient-to-b from-[#FFF8F0] to-white relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#800020]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-[#800020] mb-4">
            Packages & Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Choose the Perfect Package for Your Special Occasion
          </p>
          <div className="mt-6 h-1 w-32 mx-auto gold-gradient rounded-full" />
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-md border ${pkg.popular ? 'border-[#D4AF37]' : 'border-white/50'} shadow-xl hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-500 hover:-translate-y-2 h-full flex flex-col ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Premium Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />

                <div className="p-8 md:p-10 flex flex-col h-full relative z-10 w-full">
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 z-20">
                      <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white px-6 py-2 rounded-bl-3xl rounded-tr-3xl text-sm font-bold shadow-lg flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Best Value
                      </div>
                    </div>
                  )}

                  {/* Package Header */}
                  <div className="text-center mb-8">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${pkg.color} flex items-center justify-center shadow-md transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-[#800020] mb-3 tracking-tight">
                      {pkg.name}
                    </h3>
                    {pkg.tagline ? <p className="text-gray-600 font-medium mb-4">{pkg.tagline}</p> : null}
                    {pkg.price ? <div className="text-4xl md:text-5xl font-black text-[#D4AF37] mb-1">{pkg.price}</div> : null}
                    {(pkg as any).priceSubtext ? (
                      <p className="text-sm font-semibold text-gray-500 mt-2 tracking-wide uppercase">{(pkg as any).priceSubtext}</p>
                    ) : pkg.price && pkg.price !== "Custom Quote" ? (
                      <p className="text-sm font-semibold text-gray-500 mt-2 tracking-wide uppercase">Starting Price</p>
                    ) : null}
                  </div>

                  {/* Divider line beneath header */}
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mb-8" />

                  {/* Features List (Scrollable if too long) */}
                  <div className="space-y-4 mb-8 flex-1 overflow-y-auto pr-3 custom-scrollbar" style={{ maxHeight: "320px" }}>
                    {pkg.features.map((feature, idx) => {
                      if (feature.startsWith("H:")) {
                        return (
                          <div key={idx} className="font-bold text-lg text-[#800020] pt-6 pb-2 border-b border-[#D4AF37]/20 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                            {feature.substring(2)}
                          </div>
                        );
                      }
                      return (
                        <div key={idx} className="flex items-start gap-4 group/item">
                          <div className="mt-1 p-1 rounded-full bg-[#D4AF37]/10 group-hover/item:bg-[#D4AF37]/20 transition-colors flex-shrink-0">
                            <Check className="w-4 h-4 text-[#D4AF37]" />
                          </div>
                          <span className="text-[15px] text-gray-700 font-medium leading-relaxed">{feature}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto pt-4 relative z-20 w-full">
                    <Button
                      onClick={handleBookNow}
                      className={`w-full h-14 text-lg bg-gradient-to-r ${pkg.color} text-white font-bold rounded-xl shadow-md hover:shadow-[0_10px_20px_rgba(212,175,55,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 isolate`}
                    >
                      Book This Package
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div className="royal-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#800020] mb-4">
              Customizable Packages Available
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              All packages can be customized according to your specific requirements.
              Contact us for detailed pricing, add-ons, and special requests.
              We work with you to create the perfect event within your budget.
            </p>
            <Button
              onClick={handleBookNow}
              size="lg"
              className="gold-gradient text-[#800020] font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-[#D4AF37]"
            >
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
