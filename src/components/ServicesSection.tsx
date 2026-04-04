import { Scissors, Sparkles, Briefcase, Heart } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Custom-Made Outfits",
    description:
      "Bespoke designs tailored to your exact measurements, style preferences, and vision. Every piece is unique to you.",
  },
  {
    icon: Sparkles,
    title: "Occasion Wear",
    description:
      "Stunning outfits for weddings, birthdays, galas, and special events that guarantee you'll stand out.",
  },
  {
    icon: Briefcase,
    title: "Corporate Outfits",
    description:
      "Professional yet stylish workwear that exudes confidence and elegance in every boardroom.",
  },
  {
    icon: Heart,
    title: "Ready-to-Wear",
    description:
      "Curated collections of pre-designed pieces that combine modern trends with timeless sophistication.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            What We Offer
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            Our <span className="text-gold-gradient">Services</span>
          </h2>
          <div className="w-16 h-[1px] line-gold mx-auto mb-6" />
          <p className="font-body text-muted-foreground leading-relaxed">
            From concept to creation, we bring your fashion dreams to life with
            meticulous craftsmanship and an eye for detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 sm:p-8 bg-card border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-primary/20 mb-6 group-hover:bg-primary/10 transition-colors duration-500">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
