import design1 from "@/assets/design1.jpeg";
import design2 from "@/assets/design2.jpeg";
import design4 from "@/assets/design4.jpeg";
import design5 from "@/assets/design5.jpeg";
import design6 from "@/assets/design6.jpeg";
import design7 from "@/assets/design7.jpeg";
import design8 from "@/assets/design8.jpeg";
import design9 from "@/assets/design9.jpeg";

const images = [
  { src: design1, alt: "Teal embellished evening gown with gele", span: "row-span-2" },
  { src: design2, alt: "Powder blue lace corset dress", span: "" },
  { src: design6, alt: "Orange off-shoulder occasion dress", span: "" },
  { src: design7, alt: "Orange mermaid gown with tulle", span: "row-span-2" },
  { src: design4, alt: "Blue Ankara kaftan dress", span: "" },
  { src: design5, alt: "Blue patterned boubou", span: "" },
  { src: design9, alt: "Red embellished midi dress", span: "" },
  { src: design8, alt: "Red asymmetric peplum dress", span: "" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 sm:py-36 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-20">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary/80 mb-5">
            The Collection
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            Recent <span className="text-gold-gradient italic">Créations</span>
          </h2>
          <div className="w-16 h-[1px] line-gold mx-auto mb-6" />
          <p className="font-body text-muted-foreground leading-[1.8] text-[15px]">
            A curated showcase of our latest work — each piece a testament to
            the marriage of artistry and precision.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[250px] sm:auto-rows-[320px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end">
                <p className="font-body text-[10px] tracking-[0.15em] uppercase text-foreground/90 p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
