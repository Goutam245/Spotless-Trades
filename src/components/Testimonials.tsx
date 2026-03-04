import { Star, Quote } from "lucide-react";
import avatarSarah from "@/assets/avatar-sarah.jpg";
import avatarJames from "@/assets/avatar-james.jpg";
import avatarLisa from "@/assets/avatar-lisa.jpg";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Toorak",
    avatar: avatarSarah,
    text: "Spotless Trades transformed our dated ensuite into something out of a magazine. The attention to detail was incredible — every tile was perfectly aligned, and the waterproofing was done to the highest standard. Couldn't recommend them more highly.",
  },
  {
    name: "James R.",
    location: "Brighton",
    avatar: avatarJames,
    text: "After two bad experiences with other builders, we were nervous. From the first consultation, the transparency was refreshing — fixed quote, clear timeline, and zero surprises. The final result exceeded our expectations.",
  },
  {
    name: "Lisa T.",
    location: "South Yarra",
    avatar: avatarLisa,
    text: "What impressed me most was the communication throughout the entire project. The site was always clean, the team was respectful, and the finished bathroom is absolutely stunning. Worth every cent.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
                <div>
                  <p className="font-heading font-bold text-secondary">{t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
