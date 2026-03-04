import { Wrench, Droplets, Shield, FileText, User, Sparkles } from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Full Renovation Service",
    desc: "Demolition, plumbing, electrical, waterproofing, tiling, cabinetry, painting — all managed for you.",
  },
  {
    icon: Droplets,
    title: "AS3740 Waterproofing",
    desc: "Premium waterproofing systems adhering strictly to Australian Standard AS3740.",
  },
  {
    icon: Shield,
    title: "7-Year Guarantee",
    desc: "Total peace of mind with our 7-Year Workmanship Guarantee plus compliance certificates provided.",
  },
  {
    icon: FileText,
    title: "Fixed, Transparent Quotes",
    desc: "Clear scope. No vague allowances. No tricks. You know exactly what you're paying.",
  },
  {
    icon: User,
    title: "Owner-Supervised",
    desc: "You deal directly with the business owner — not a sales rep. No random subcontractor chaos.",
  },
  {
    icon: Sparkles,
    title: "Clean & Organised",
    desc: "We respect your home. Our job sites remain clean, safe, and tidy at every phase.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary text-center mb-12">
          Why Clients Choose Spotless Trades
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-5">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-secondary text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
