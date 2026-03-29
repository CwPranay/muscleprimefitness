import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import About from "@/components/About";
import Services from "@/components/Services";
import Membership from "@/components/Membership";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <TrustSection />
      <About />
      <Membership />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* Floating Elements */}
      <MobileStickyCTA />
      
      {/* Floating WhatsApp for Desktop */}
      <a 
        href="https://wa.me/919100462121" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-8 right-8 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full items-center justify-center shadow-2xl transition-transform hover:scale-110"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="24" 
          height="24" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-8 h-8"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>
    </main>
  );
}
