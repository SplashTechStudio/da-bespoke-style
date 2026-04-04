import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <img
            src={logo}
            alt="DA Fashion Atelier"
            className="h-20 w-auto object-contain mx-auto mb-6"
          />
          <p className="font-body text-sm text-muted-foreground mb-8 max-w-md mx-auto leading-[1.8]">
            Crafting haute couture pieces that honour your individuality —
            tailored with precision, delivered with grace.
          </p>
          <div className="w-16 h-[1px] line-gold mx-auto mb-8" />
          <p className="font-body text-[10px] text-muted-foreground/60 tracking-[0.2em] uppercase">
            &copy; {new Date().getFullYear()} DA Fashion Atelier. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
