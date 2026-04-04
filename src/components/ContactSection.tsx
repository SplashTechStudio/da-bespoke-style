import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello DA Fashion Atelier. I just visited your website. My name is _____ and I want to enquire about ______"
  );

  return (
    <section id="contact" className="py-24 sm:py-36 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-20">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary/80 mb-5">
            Begin Your Journey
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            Let's Create Something{" "}
            <span className="text-gold-gradient italic">Extraordinary</span>
          </h2>
          <div className="w-16 h-[1px] line-gold mx-auto mb-6" />
          <p className="font-body text-muted-foreground leading-[1.8] text-[15px]">
            Every masterpiece begins with a conversation. Reach out and let us
            bring your vision to life with the artistry it deserves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a
            href={`https://wa.me/2348125452160?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-10 bg-card border border-border hover:border-primary/20 transition-all duration-700 text-center hover:shadow-xl hover:shadow-primary/5"
          >
            <div className="w-14 h-14 flex items-center justify-center border border-primary/15 mx-auto mb-5 group-hover:bg-primary/5 group-hover:border-primary/30 transition-all duration-700">
              <Phone className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-lg text-foreground mb-3">WhatsApp & Calls</h3>
            <p className="font-body text-sm text-muted-foreground tracking-wide">+234 812 545 2160</p>
          </a>

          <a
            href="mailto:georgedorcasatabashie@gmail.com"
            className="group p-10 bg-card border border-border hover:border-primary/20 transition-all duration-700 text-center hover:shadow-xl hover:shadow-primary/5"
          >
            <div className="w-14 h-14 flex items-center justify-center border border-primary/15 mx-auto mb-5 group-hover:bg-primary/5 group-hover:border-primary/30 transition-all duration-700">
              <Mail className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-lg text-foreground mb-3">Email Us</h3>
            <p className="font-body text-sm text-muted-foreground break-all">georgedorcasatabashie@gmail.com</p>
          </a>

          <div className="group p-10 bg-card border border-border text-center">
            <div className="w-14 h-14 flex items-center justify-center border border-primary/15 mx-auto mb-5">
              <MapPin className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-lg text-foreground mb-3">Visit Us</h3>
            <p className="font-body text-sm text-muted-foreground">Lagos, Nigeria</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
