import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello DA Fashion Atelier. I just visited your website. My name is _____ and I want to enquire about ______"
  );

  return (
    <section id="contact" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            Let's Create Your <span className="text-gold-gradient">Dream Outfit</span>
          </h2>
          <div className="w-16 h-[1px] line-gold mx-auto mb-6" />
          <p className="font-body text-muted-foreground leading-relaxed">
            Ready to elevate your style? Reach out to us and let's bring your
            fashion vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a
            href={`https://wa.me/2348125452160?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 bg-card border border-border hover:border-primary/30 transition-all duration-500 text-center"
          >
            <div className="w-12 h-12 flex items-center justify-center border border-primary/20 mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-lg text-foreground mb-2">WhatsApp & Calls</h3>
            <p className="font-body text-sm text-muted-foreground">+234 812 545 2160</p>
          </a>

          <a
            href="mailto:georgedorcasatabashie@gmail.com"
            className="group p-8 bg-card border border-border hover:border-primary/30 transition-all duration-500 text-center"
          >
            <div className="w-12 h-12 flex items-center justify-center border border-primary/20 mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-lg text-foreground mb-2">Email Us</h3>
            <p className="font-body text-sm text-muted-foreground break-all">georgedorcasatabashie@gmail.com</p>
          </a>

          <div className="group p-8 bg-card border border-border text-center">
            <div className="w-12 h-12 flex items-center justify-center border border-primary/20 mx-auto mb-4">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-lg text-foreground mb-2">Location</h3>
            <p className="font-body text-sm text-muted-foreground">Lagos, Nigeria</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
