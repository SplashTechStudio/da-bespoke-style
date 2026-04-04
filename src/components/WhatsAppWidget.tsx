import { MessageCircle } from "lucide-react";

const WhatsAppWidget = () => {
  const message = encodeURIComponent(
    "Hello DA Fashion Atelier. I just visited your website. My name is _____ and I want to enquire about ______"
  );

  return (
    <a
      href={`https://wa.me/2348125452160?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-glow"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground" fill="currentColor" />
    </a>
  );
};

export default WhatsAppWidget;
