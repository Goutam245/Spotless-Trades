import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  return (
    <>
      {/* Top bar */}
      <div className="bg-secondary text-secondary-foreground text-sm py-2">
        <div className="container flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm">
          <a href="tel:0431453312" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Phone className="w-3.5 h-3.5" /> 0431 453 312
          </a>
          <a href="mailto:info@spotlesstrades.com.au" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Mail className="w-3.5 h-3.5" /> info@spotlesstrades.com.au
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" /> Melbourne, Victoria
          </span>
        </div>
      </div>
      {/* Main nav */}
      <nav className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-3">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="Spotless Trades Logo" className="h-12 md:h-14 w-auto" />
          </a>
          <a
            href="#contact"
            className="bg-primary text-primary-foreground font-heading font-semibold px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity text-sm md:text-base"
          >
            Book Consultation
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
