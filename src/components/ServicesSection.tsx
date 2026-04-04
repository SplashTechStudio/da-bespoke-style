import { Scissors, Sparkles, Briefcase, Heart } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Bespoke Couture",
    description:
      "Meticulously crafted garments designed to your exact silhouette — because true luxury is made to measure.",
  },
  {
    icon: Sparkles,
    title: "Occasion & Bridal",
    description:
      "Show-stopping ensembles for life's most memorable moments — weddings, galas, and celebrations that deserve to be unforgettable.",
  },
  {
    icon: Briefcase,
    title: "Power Dressing",
    description:
      "Sophisticated corporate attire that commands attention in every boardroom while remaining effortlessly chic.",
  },
  {
    icon: Heart,
    title: "Ready-to-Wear",
    description:
      "Thoughtfully curated collections that bring the atelier's signature elegance to your everyday wardrobe.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 sm:py-36 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-20">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary/80 mb-5">
            Savoir-Faire
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            Our <span className="text-gold-gradient italic">Expertise</span>
          </h2>
          <div className="w-16 h-[1px] line-gold mx-auto mb-6" />
          <p className="font-body text-muted-foreground leading-[1.8] text-[15px]">
            From the first sketch to the final fitting, every creation is an
            expression of artistry, passion, and uncompromising attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 sm:p-10 bg-card border border-border hover:border-primary/20 transition-all duration-700 hover:shadow-xl hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 flex items-center justify-center border border-primary/15 mb-8 group-hover:bg-primary/5 group-hover:border-primary/30 transition-all duration-700">
                <service.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg text-foreground mb-4 tracking-wide">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-[1.8]">
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
