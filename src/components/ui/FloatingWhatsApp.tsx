"use client";

import { MessageCircle } from "lucide-react";
import { siteInfo } from "@/data/siteData";

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${siteInfo.whatsapp}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-[95] group"
      aria-label="تواصل معنا عبر واتساب"
    >
      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-green-500/40 animate-ping group-hover:animate-none"></span>
      
      {/* Main Button */}
      <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-2xl shadow-green-500/40 hover:scale-110 active:scale-95 transition-all duration-300">
        <MessageCircle className="w-8 h-8 md:w-9 md:h-9 fill-current" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 px-4 py-2 bg-white text-black-pure text-sm font-bold rounded-xl opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-xl">
          راسلنا الآن مجاناً
          <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-8 border-transparent border-l-white"></div>
        </div>
      </div>
    </a>
  );
}
