"use client";

import { Crown, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#800020] to-[#5a0016] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Crown className="w-8 h-8 text-[#D4AF37]" />
              <h3 className="text-2xl font-bold">Poonam Palace</h3>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              Where celebrations become royal. Experience luxury and grandeur at Pulgaon's most prestigious banquet hall.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4AF37] flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4AF37] flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4AF37] flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-[#F4E4C1]">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#highlights" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  Venue Highlights
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#packages" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  Packages
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-[#F4E4C1]">Our Services</h4>
            <ul className="space-y-3 text-white/80">
              <li>Wedding Ceremonies</li>
              <li>Reception Parties</li>
              <li>Birthday Celebrations</li>
              <li>Corporate Events</li>
              <li>Engagement Functions</li>
              <li>Anniversary Parties</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-[#F4E4C1]">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                <p className="text-white/80 text-sm">
                  Arvi Naka Pulgaon, Poonam Palace
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <a href="tel:+919890137030" className="text-white/80 hover:text-[#D4AF37] transition-colors text-sm">
                  +91 98901 37030
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <a href="mailto:poonampalace20@gmail.com" className="text-white/80 hover:text-[#D4AF37] transition-colors text-sm">
                  poonampalace20@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/20 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <p>
            © {new Date().getFullYear()} Poonam Palace. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919890137030?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Poonam%20Palace"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 z-50 animate-bounce"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>
    </footer>
  );
}
