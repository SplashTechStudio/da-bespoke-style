import heroImage from "@/assets/design1.jpeg";

const HeroSection = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello DA Fashion Atelier. I just visited your website. My name is _____ and I want to enquire about ______"
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="DA Fashion Atelier - Bespoke fashion design from Lagos, Nigeria"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <p
            className="font-body text-[10px] sm:text-xs tracking-[0.4em] uppercase text-primary/80 mb-6 sm:mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            The Original Thread Girl — Lagos, Nigeria
          </p>

          <h1
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.9] mb-6 sm:mb-8 opacity-0 animate-fade-in-up tracking-[-0.02em]"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-foreground font-light italic">The Art of</span>
            <br />
            <span className="text-gold-gradient font-medium">Bespoke</span>
            <br />
            <span className="text-foreground font-light">Elegance</span>
          </h1>

          <div
            className="w-20 sm:w-28 h-[1px] line-gold mb-6 sm:mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          />

          <p
            className="font-body text-sm sm:text-base md:text-lg text-muted-foreground/90 max-w-lg mb-10 sm:mb-12 leading-[1.8] opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            Where every stitch tells a story of refinement. We craft
            haute couture pieces that honour your individuality — 
            tailored with precision, delivered with grace.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <a
              href={`https://wa.me/2348125452160?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-gold-gradient text-primary-foreground font-body text-[11px] tracking-[0.2em] uppercase hover:opacity-90 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20"
            >
              Book a Consultation
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center px-10 py-4 border border-primary/20 text-primary font-body text-[11px] tracking-[0.2em] uppercase hover:bg-primary/5 hover:border-primary/40 transition-all duration-500"
            >
              View Collection
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: "1.4s" }}>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
