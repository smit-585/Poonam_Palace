import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VenueHighlights from "@/components/VenueHighlights";
import GallerySection from "@/components/GallerySection";
import PackagesSection from "@/components/PackagesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <VenueHighlights />
      <GallerySection />
      <PackagesSection />
      <TestimonialsSection />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </main>
  );
}