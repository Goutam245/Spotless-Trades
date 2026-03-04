import { useState } from "react";
import { Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    suburb: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-muted">
      <div className="container max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary text-center mb-3">
          Ready To Renovate Properly?
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Spots are limited to maintain quality control. Request your free consultation today.
        </p>

        {submitted ? (
          <div className="bg-accent rounded-xl p-10 text-center">
            <h3 className="font-heading font-bold text-secondary text-2xl mb-2">Thank You!</h3>
            <p className="text-muted-foreground">We'll be in touch within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow-md p-8 space-y-5 border border-border">
            <div>
              <label className="text-sm font-heading font-semibold text-secondary mb-1 block">Full Name *</label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-input rounded-md px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-heading font-semibold text-secondary mb-1 block">Phone Number *</label>
                <input
                  type="tel"
                  required
                  maxLength={20}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-input rounded-md px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="text-sm font-heading font-semibold text-secondary mb-1 block">Email *</label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-input rounded-md px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-heading font-semibold text-secondary mb-1 block">Suburb *</label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.suburb}
                onChange={(e) => setForm({ ...form, suburb: e.target.value })}
                className="w-full border border-input rounded-md px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="text-sm font-heading font-semibold text-secondary mb-1 block">Message (optional)</label>
              <textarea
                rows={4}
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-input rounded-md px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-heading font-bold py-4 rounded-md text-lg hover:opacity-90 transition-opacity"
            >
              BOOK MY FREE CONSULTATION
            </button>
          </form>
        )}

        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
          <a href="tel:0431453312" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" /> 0431 453 312
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Melbourne, Victoria
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
