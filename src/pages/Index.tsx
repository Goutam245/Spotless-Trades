import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhatYouGet from "@/components/WhatYouGet";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustSection />
      <WhyChooseUs />
      <WhatYouGet />
      <BeforeAfter />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
