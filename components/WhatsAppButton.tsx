"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "6281111111703"; // Nomor WA Al-Bahjah (tanpa + atau spasi)

  const handleClick = () => {
    const message = encodeURIComponent(
      "Assalamu'alaikum, saya tertarik dengan jasa Event Organizer Al-Bahjah. Boleh minta info lebih lanjut?"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle size={32} strokeWidth={2.5} />
      
      {/* Pulse effect */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30"></div>
    </button>
  );
}