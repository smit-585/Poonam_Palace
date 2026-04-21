"use client";

import { Quote, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Rajesh & Priya Sharma",
    event: "Wedding Reception",
    rating: 5,
    text: "Poonam Palace made our wedding reception absolutely magical! The venue was stunning, the food was exceptional, and the staff went above and beyond to ensure everything was perfect. Our guests are still talking about it!",
    location: "Pulgaon",
  },
  {
    name: "Amit Deshmukh",
    event: "Corporate Event",
    rating: 5,
    text: "We organized our annual company event at Poonam Palace and it was a huge success. The professional setup, excellent catering, and attentive service made our event memorable. Highly recommended for corporate gatherings!",
    location: "Wardha",
  },
  {
    name: "Sunita Patil",
    event: "50th Birthday Celebration",
    rating: 5,
    text: "Celebrated my husband's 50th birthday here and it exceeded all expectations. The decoration was beautiful, the ambiance was perfect, and the team handled everything seamlessly. Thank you for making it special!",
    location: "Pulgaon",
  },
  {
    name: "Vikram & Anjali Joshi",
    event: "Wedding Ceremony",
    rating: 5,
    text: "From booking to the final moment, everything was flawless. The royal ambiance, delicious food, and professional staff made our wedding day truly unforgettable. Poonam Palace is the best choice in the region!",
    location: "Nagpur",
  },
  {
    name: "Rahul Thakur",
    event: "Engagement Ceremony",
    rating: 5,
    text: "The venue is absolutely gorgeous! The lighting, décor, and overall setup created such a romantic atmosphere for our engagement. The team was helpful and made sure every detail was taken care of.",
    location: "Wardha",
  },
  {
    name: "Meera Kulkarni",
    event: "Reception Party",
    rating: 5,
    text: "Poonam Palace lived up to its royal name! The grandeur of the hall, the quality of service, and the attention to detail were outstanding. Our guests loved the food and the beautiful setup. Highly satisfied!",
    location: "Pulgaon",
  },
];

export default function TestimonialsSection() {
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
      id="testimonials"
      className="py-20 md:py-32 px-4 bg-gradient-to-b from-white to-[#FFF8F0]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-[#800020] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Real Stories from Real Celebrations
          </p>
          <div className="mt-6 h-1 w-32 mx-auto gold-gradient rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`royal-card p-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-10 h-10 text-[#D4AF37]" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author Info */}
              <div className="border-t border-[#D4AF37]/20 pt-4">
                <h4 className="font-bold text-[#800020] mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-600">{testimonial.event}</p>
                <p className="text-xs text-gray-500 mt-1">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className={`mt-16 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div className="royal-card p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">500+</div>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">4.2★</div>
                <p className="text-gray-600">Average Rating</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">98%</div>
                <p className="text-gray-600">Satisfaction Rate</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">8+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
