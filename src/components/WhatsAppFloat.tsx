import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const phoneNumber = "27687211598"; // South African format with country code
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi! I'm interested in your training courses.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none group"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <div className="absolute -top-2 -left-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-bounce group-hover:animate-none">
        !
      </div>
    </a>
  );
};

export default WhatsAppFloat;