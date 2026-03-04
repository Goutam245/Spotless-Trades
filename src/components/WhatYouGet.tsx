import { Check } from "lucide-react";

const whatYouGet = [
  "Custom-designed bathroom tailored to your space",
  "Premium waterproofing systems",
  "Precision tiling (large format, epoxy grout options available)",
  "Custom cabinetry (laminate or 2-pack finishes)",
  "Proper structural hat-downs where required",
  "Clear timeline and communication throughout",
];

const whoThisIsFor = [
  "Want it done once, done properly",
  "Care about compliance and long-term durability",
  "Want to deal with one builder directly",
  "Value quality workmanship over bargain pricing",
];

const WhatYouGet = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* What You Get */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-secondary mb-8">What You Get</h2>
            <ul className="space-y-4">
              {whatYouGet.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Who This Is For */}
          <div className="bg-primary rounded-xl p-8 md:p-10">
            <h2 className="text-2xl font-heading font-bold text-primary-foreground mb-4">Who This Is For</h2>
            <p className="text-primary-foreground/80 mb-6">
              This is for homeowners who:
            </p>
            <ul className="space-y-4">
              {whoThisIsFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-primary-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
