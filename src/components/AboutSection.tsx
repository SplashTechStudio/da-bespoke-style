import aboutImage from "@/assets/design3.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={aboutImage}
                alt="DA Fashion Atelier designer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary/20" />
          </div>

          {/* Content */}
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Our Story
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Crafting <span className="text-gold-gradient">Confidence</span>,{" "}
              One Stitch at a Time
            </h2>
            <div className="w-16 h-[1px] line-gold mb-8" />
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              DA Fashion Atelier is a fashion brand dedicated to creating
              stylish, elegant, and custom-made outfits that reflect
              individuality and confidence. Based in Lagos, Nigeria, we
              specialize in designing unique pieces that combine modern trends
              with timeless fashion.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Our vision is to become a recognized fashion brand known for
              creativity, excellence, and attention to detail — both locally and
              internationally. Every piece we create tells a story of elegance,
              carefully tailored to meet the unique needs of every client.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "Custom", label: "Tailored Pieces" },
                { value: "Premium", label: "Quality Fabrics" },
                { value: "Modern", label: "Trend-Forward" },
                { value: "Personal", label: "Client-Focused" },
              ].map((stat) => (
                <div key={stat.label} className="border-l border-primary/30 pl-4">
                  <p className="font-display text-xl text-primary">{stat.value}</p>
                  <p className="font-body text-xs tracking-[0.1em] uppercase text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
