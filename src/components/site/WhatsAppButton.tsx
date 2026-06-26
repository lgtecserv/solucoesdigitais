import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/258872711984"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#0078FF] text-white shadow-[0_8px_24px_rgba(0,120,255,0.4)] transition-all hover:-translate-y-1 hover:scale-110 hover:shadow-[0_12px_28px_rgba(0,120,255,0.6)] focus:outline-none"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
