import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & tagline */}
          <div>
            <img src={logo} alt="Spotless Trades" className="w-[160px] h-auto mb-3" />
            <p className="text-secondary-foreground/70 text-sm">Honest & Affordable</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:0431453312" className="hover:text-primary transition-colors">0431 453 312</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@spotlesstrades.com.au" className="hover:text-primary transition-colors">info@spotlesstrades.com.au</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Melbourne, Victoria
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10">
        <div className="container py-4 text-center text-xs text-secondary-foreground/50">
          © 2024 Spotless Trades. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
