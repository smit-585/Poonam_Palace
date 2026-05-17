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
          src="/main.jpeg"
          alt="Poonam Palace Grand Entrance"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay with subtle vignette and maroon tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#7A0F24]/30 to-black/80" />
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className={`max-w-5xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Logo/Brand */}
          <div className="mb-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#FFFBF4] mb-3 tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Poonam Palace
            </h1>
            <div className="h-[2px] w-[150px] md:w-[260px] mx-auto bg-gradient-to-r from-transparent via-[#E6C766] to-transparent rounded-full shadow-[0_0_10px_rgba(230,199,102,0.5)]" />
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl font-serif text-[#E6C766] mb-6 italic tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            Where Celebrations Become Royal
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-[#FFFBF4]/90 mb-10 max-w-[650px] mx-auto font-light leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            Experience luxury and grandeur at Pulgaon&apos;s most prestigious banquet hall.
            Your special moments deserve a royal setting.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleBookNow}
              size="lg"
              className="bg-gradient-to-r from-[#C9A227] to-[#E6C766] text-[#7A0F24] font-bold text-lg px-8 py-6 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(230,199,102,0.4)] hover:scale-105 transition-all duration-300 border border-[#E6C766]/50 w-full sm:w-auto"
            >
              <Phone className="mr-2 h-5 w-5" />
              Book Now on WhatsApp
            </Button>
            <Button
              onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              variant="outline"
              className="bg-transparent border-[#C9A227] text-[#FFFBF4] font-semibold text-lg px-8 py-6 rounded-2xl hover:bg-[#FFF8EC] hover:text-[#7A0F24] hover:border-[#FFF8EC] hover:scale-105 transition-all duration-300 w-full sm:w-auto shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
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
