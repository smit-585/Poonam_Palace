"use client";

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
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

  const handleWhatsApp = () => {
    window.open("https://wa.me/919890137030?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20Poonam%20Palace", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+919890137030";
  };

  const handleEmail = () => {
    window.location.href = "mailto:poonampalace20@gmail.com";
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 md:py-32 px-4 bg-gradient-to-b from-[#FFF8F0] to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-[#800020] mb-4">
            Contact & Booking
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Let&apos;s Plan Your Perfect Event Together
          </p>
          <div className="mt-6 h-1 w-32 mx-auto gold-gradient rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            {/* Quick Actions */}
            <div className="royal-card p-8">
              <h3 className="text-2xl font-bold text-[#800020] mb-6">
                Quick Contact
              </h3>
              <div className="space-y-4">
                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-6 text-lg transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Book Now on WhatsApp
                </Button>
                <Button
                  onClick={handleCall}
                  className="w-full gold-gradient text-[#800020] font-semibold py-6 text-lg border-2 border-[#D4AF37] transition-all duration-300 hover:scale-105"
                >
                  <Phone className="mr-3 h-6 w-6" />
                  Call Now: +91 98901 37030
                </Button>
                <Button
                  onClick={handleEmail}
                  variant="outline"
                  className="w-full border-2 border-[#D4AF37] text-[#800020] font-semibold py-6 text-lg hover:bg-[#FFF8F0] transition-all duration-300"
                >
                  <Mail className="mr-3 h-6 w-6" />
                  Email Us
                </Button>
              </div>
            </div>

            {/* Contact Details */}
            <div className="royal-card p-8">
              <h3 className="text-2xl font-bold text-[#800020] mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg p-3 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#800020] mb-1">Address</h4>
                    <p className="text-gray-600">
                      Arvi Naka Pulgaon, Poonam Palace
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg p-3 flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#800020] mb-1">Phone</h4>
                    <p className="text-gray-600">+91 98901 37030</p>
                    <p className="text-gray-600">+91 95034 30850</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg p-3 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#800020] mb-1">Email</h4>
                    <p className="text-gray-600">poonampalace20@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg p-3 flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#800020] mb-1">Facilities</h4>
                    <p className="text-gray-600">24 * 7 facilities available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="royal-card p-6 bg-gradient-to-br from-[#800020] to-[#B8941F] text-black">
              <h4 className="font-bold text-xl mb-2">Ready to Book?</h4>
              <p className="text-black/90">
                Contact us today for venue availability, custom packages, and special requests.
                Our team is here to make your event extraordinary!
              </p>
            </div>
          </div>

          {/* Google Maps */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="royal-card p-2 h-full">
              <div className="relative w-full h-full min-h-[600px] rounded-lg overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=20.7325378,78.3158627&z=19&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Poonam Palace Location"
                  className="absolute inset-0"
                />
              </div>
            </div>

            {/* Direction Button */}
            <div className="mt-6">
              <Button
                onClick={() => window.open("https://www.google.com/maps/place/Poonam+Palace/@20.7322506,78.3156037,19.35z/data=!4m6!3m5!1s0x3bd47552083d9d15:0x5edf991a59704e87!8m2!3d20.7325378!4d78.3158627!16s%2Fg%2F11f61gjg_y?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D", "_blank")}
                className="w-full gold-gradient text-[#800020] font-semibold py-6 text-lg border-2 border-[#D4AF37] transition-all duration-300 hover:scale-105"
              >
                <MapPin className="mr-3 h-6 w-6" />
                Get Directions
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
      </div>
    </section>
  );
}
