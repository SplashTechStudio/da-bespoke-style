const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="font-display text-2xl tracking-[0.2em] text-primary mb-4">
            DA FASHION ATELIER
          </h3>
          <p className="font-body text-sm text-muted-foreground mb-6 max-w-md mx-auto">
            Creating high-quality, stylish, and personalized fashion pieces that
            empower individuals to express themselves confidently.
          </p>
          <div className="w-16 h-[1px] line-gold mx-auto mb-6" />
          <p className="font-body text-xs text-muted-foreground tracking-[0.1em]">
            &copy; {new Date().getFullYear()} DA Fashion Atelier. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
