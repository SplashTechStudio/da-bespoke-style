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
          alt="DA Fashion Atelier - Custom fashion design from Lagos, Nigeria"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <p
            className="font-body text-xs sm:text-sm tracking-[0.3em] uppercase text-primary mb-4 sm:mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Lagos, Nigeria
          </p>

          <h1
            className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-4 sm:mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-foreground">Where</span>
            <br />
            <span className="text-gold-gradient">Elegance</span>
            <br />
            <span className="text-foreground">Meets Style</span>
          </h1>

          <div
            className="w-16 sm:w-24 h-[1px] line-gold mb-4 sm:mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          />

          <p
            className="font-body text-sm sm:text-base md:text-lg text-muted-foreground max-w-md mb-8 sm:mb-10 leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            Creating high-quality, stylish, and personalized fashion pieces that
            empower you to express yourself confidently.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <a
              href={`https://wa.me/2348125452160?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gold-gradient text-primary-foreground font-body text-sm tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
            >
              Book a Consultation
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-primary/30 text-primary font-body text-sm tracking-[0.15em] uppercase hover:bg-primary/10 transition-colors"
            >
              View Collection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
