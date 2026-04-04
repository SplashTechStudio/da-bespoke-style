import aboutImage from "@/assets/design3.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 sm:py-36 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={aboutImage}
                alt="DA Fashion Atelier — bespoke craftsmanship"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-1000"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary/15" />
            <div className="absolute -top-4 -left-4 w-20 h-20 border border-primary/10" />
          </div>

          {/* Content */}
          <div>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary/80 mb-5">
              The Atelier
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 leading-[1.1]">
              Crafting <span className="text-gold-gradient italic">Confidence</span>,
              <br />
              One Stitch at a Time
            </h2>
            <div className="w-16 h-[1px] line-gold mb-8" />
            <p className="font-body text-muted-foreground leading-[1.9] mb-6 text-[15px]">
              DA Fashion Atelier is more than a fashion house — it is a sanctuary
              where fabric becomes art and every silhouette is a statement. Based in
              the vibrant heart of Lagos, we blend contemporary aesthetics with
              time-honoured tailoring techniques to create pieces that are
              unmistakably yours.
            </p>
            <p className="font-body text-muted-foreground leading-[1.9] mb-10 text-[15px]">
              Our vision extends beyond borders. We aspire to be a globally
              recognised atelier known for impeccable craftsmanship, creative
              audacity, and an unwavering devotion to the women who wear our designs.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {[
                { value: "Bespoke", label: "Tailored Pieces" },
                { value: "Premium", label: "Curated Fabrics" },
                { value: "Avant-Garde", label: "Design Philosophy" },
                { value: "Personal", label: "Client Devotion" },
              ].map((stat) => (
                <div key={stat.label} className="border-l border-primary/20 pl-5">
                  <p className="font-display text-lg text-primary italic">{stat.value}</p>
                  <p className="font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-1.5">
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
