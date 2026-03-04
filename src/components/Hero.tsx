import { Star } from "lucide-react";
import heroBg from "@/assets/hero-bathroom.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/30" />
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-4">
            Melbourne Bathroom Renovations
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-4">
            <span className="text-primary-foreground">Done Properly.</span>
            <br />
            <span className="text-primary">Built to Last.</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl font-body mb-8 max-w-lg">
            Stop gambling on cheap tradies. If you're renovating your bathroom in Melbourne and care about quality, compliance and long-term value, you're in the right place.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#contact"
              className="bg-primary text-primary-foreground font-heading font-bold px-8 py-4 rounded-md text-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Book My Free Consultation →
            </a>
          </div>
          <div className="flex items-center gap-2 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-primary-foreground/90 font-body text-sm ml-1">5-Star Rated Service</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
