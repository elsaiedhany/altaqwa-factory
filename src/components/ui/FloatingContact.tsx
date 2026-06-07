"use client";

import { MessageCircle, PhoneCall } from "lucide-react";
import { siteInfo } from "@/data/siteData";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={cn(
      "fixed bottom-6 left-6 z-[100] flex flex-col gap-4 transition-all duration-500",
      isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
    )}>
      
      {/* Phone Button */}
      <a
        href={`tel:${siteInfo.phone}`}
        className="relative flex items-center justify-center w-14 h-14 bg-gold-500 text-black-pure rounded-full shadow-lg shadow-gold-500/30 hover:bg-gold-400 hover:scale-110 transition-all duration-300 group"
        aria-label="اتصل بنا هاتفياً"
      >
        <PhoneCall className="w-6 h-6 animate-pulse" />
        
        <span className="absolute left-16 bg-black-pure text-gold-500 px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-2xl border border-gold-500/30">
          اتصل بنا مباشرة
          <span className="absolute top-1/2 -left-1 -translate-y-1/2 border-y-[6px] border-y-transparent border-r-[6px] border-r-black-pure"></span>
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${siteInfo.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/30 hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
        aria-label="تواصل معنا عبر واتساب"
      >
        <MessageCircle className="w-7 h-7" />
        
        <span className="absolute left-16 bg-black-pure text-green-500 px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-2xl border border-green-500/30">
          تواصل معنا عبر واتساب
          <span className="absolute top-1/2 -left-1 -translate-y-1/2 border-y-[6px] border-y-transparent border-r-[6px] border-r-black-pure"></span>
        </span>
        <span className="absolute inset-0 rounded-full border-2 border-green-500 animate-ping opacity-75"></span>
      </a>

    </div>
  );
}
