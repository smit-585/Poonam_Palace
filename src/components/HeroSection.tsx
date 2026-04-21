"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBookNow = () => {
    window.open("https://wa.me/919890137030?text=Hello%2C%20I%20would%20like%20to%20book%20Poonam%20Palace%20for%20an%20event", "_blank");
  };

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/PoonamPalacehall.jpeg"
          alt="Poonam Palace Grand Entrance"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className={`max-w-5xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Logo/Brand */}
          <div className="mb-6">
            <h1 className="text-6xl font-bold text-white mb-2 md:text-8xl lg:text-9xl tracking-wide">
              Poonam Palace
            </h1>
            <div className="h-1 w-32 mx-auto gold-gradient rounded-full" />
          </div>

          {/* Tagline */}
          <p className="text-2xl md:text-4xl lg:text-5xl font-serif text-[#F4E4C1] mb-8 italic font-light">
            Where Celebrations Become Royal
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto font-light">
            Experience luxury and grandeur at Pulgaon&apos;s most prestigious banquet hall. 
            Your special moments deserve a royal setting.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleBookNow}
              size="lg"
              className="gold-gradient text-[#800020] font-semibold text-lg px-8 py-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-[#D4AF37]"
            >
              <Phone className="mr-2 h-5 w-5" />
              Book Now on WhatsApp
            </Button>
            <Button
              onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold text-lg px-8 py-6 hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              View Packages
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
