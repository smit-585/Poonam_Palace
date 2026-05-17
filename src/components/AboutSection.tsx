"use client";

import { motion } from "framer-motion";
import { Crown, Sparkles, Award, MapPin, Users, Heart } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  const highlights = [
    { icon: MapPin, text: "Located in Pulgaon" },
    { icon: Crown, text: "Premium wedding & event destination" },
    { icon: Users, text: "Capacity of 1000+ guests" },
    { icon: Heart, text: "Trusted by 500+ families" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-4 bg-gradient-to-b from-[#FFF8F0] to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT SIDE: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-[450px] sm:h-[550px] lg:h-[650px] w-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(122,12,30,0.15)] border border-[#D4AF37]/20 group">
              <Image
                src="/PoonamPalacehall.jpeg"
                alt="Poonam Palace Luxury Banquet Hall"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-80" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-[64px] opacity-40 pointer-events-none" />
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-[#7A0C1E] rounded-full mix-blend-multiply filter blur-[64px] opacity-20 pointer-events-none" />
          </motion.div>

          {/* RIGHT SIDE: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col h-full justify-center"
          >
            {/* Headers */}
            <div className="mb-8">
              <h3 className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-3">
                A Legacy of Excellence in Pulgaon
              </h3>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#7A0C1E] leading-[1.15] mb-5">
                Experience Royal Celebrations
              </h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full" />
            </div>

            {/* Intro & Highlights */}
            <div className="mb-10 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed font-medium border-l-4 border-[#7A0C1E] pl-5">
                Step into a world where elegance meets grandeur. We provide the perfect canvas for your most cherished memories.
              </p>

              <ul className="space-y-4">
                {highlights.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-4 text-gray-700 font-medium text-lg"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#7A0C1E]/5 border border-[#7A0C1E]/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[#7A0C1E]" />
                    </div>
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-3 gap-3 md:gap-5 mt-auto"
            >
              {/* Stat 1 */}
              <div className="group bg-white/70 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-[0_8px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-[#D4AF37]/30 hover:-translate-y-1 hover:scale-105 flex flex-col items-center text-center">
                <div className="relative mb-2 sm:mb-3">
                  <div className="absolute inset-0 bg-[#D4AF37] blur-md opacity-20 group-hover:opacity-60 transition-opacity duration-300 rounded-full"></div>
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4AF37] relative z-10 drop-shadow-sm group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all" />
                </div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#7A0C1E] mb-1">8+</h4>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">Years</p>
              </div>

              {/* Stat 2 */}
              <div className="group bg-white/70 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-[0_8px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-[#D4AF37]/30 hover:-translate-y-1 hover:scale-105 flex flex-col items-center text-center">
                <div className="relative mb-2 sm:mb-3">
                  <div className="absolute inset-0 bg-[#D4AF37] blur-md opacity-20 group-hover:opacity-60 transition-opacity duration-300 rounded-full"></div>
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4AF37] relative z-10 drop-shadow-sm group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all" />
                </div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#7A0C1E] mb-1">500+</h4>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">Events</p>
              </div>

              {/* Stat 3 */}
              <div className="group bg-white/70 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-[0_8px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-[#D4AF37]/30 hover:-translate-y-1 hover:scale-105 flex flex-col items-center text-center">
                <div className="relative mb-2 sm:mb-3">
                  <div className="absolute inset-0 bg-[#D4AF37] blur-md opacity-20 group-hover:opacity-60 transition-opacity duration-300 rounded-full"></div>
                  <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4AF37] relative z-10 drop-shadow-sm group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all" />
                </div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#7A0C1E] mb-1">100%</h4>
                <p className="text-xs sm:text-sm text-gray-600 font-medium whitespace-nowrap">Satisfaction</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
