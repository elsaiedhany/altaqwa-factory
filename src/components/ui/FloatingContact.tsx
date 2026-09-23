"use client";

import { useEffect, useState } from "react";
import { MessageCircle, PhoneCall } from "lucide-react";
import { siteInfo } from "@/data/siteData";
import { cn } from "@/lib/utils";

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-6 left-6 z-[100] flex flex-col gap-3 transition-all duration-500",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
      )}
    >
      {/* WhatsApp Action */}
      <a
        href={`https://wa.me/${siteInfo.whatsapp}?text=${encodeURIComponent("مرحباً مصنع التقوى، أرغب في الاستفسار عن مقايسة مطبخ")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/30 transition-transform duration-300 hover:scale-110 active:scale-95"
        aria-label="محادثة واتساب مباشرة"
      >
        <MessageCircle className="h-7 w-7 fill-current" />
        <span className="absolute -inset-1 -z-10 animate-ping rounded-full bg-green-500/40 opacity-75 group-hover:opacity-0" />

        <span className="pointer-events-none absolute left-16 whitespace-nowrap rounded-xl border border-green-500/30 bg-black-pure/90 px-3.5 py-2 text-xs font-bold text-green-400 opacity-0 shadow-2xl backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
          راسل المهندس هاني واتساب
        </span>
      </a>

      {/* Phone Action */}
      <a
        href={`tel:${siteInfo.phone}`}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-black-pure shadow-xl shadow-gold-500/30 transition-transform duration-300 hover:bg-gold-400 hover:scale-110 active:scale-95"
        aria-label="اتصال هاتف مباشر"
      >
        <PhoneCall className="h-6 w-6 animate-pulse" />

        <span className="pointer-events-none absolute left-16 whitespace-nowrap rounded-xl border border-gold-500/30 bg-black-pure/90 px-3.5 py-2 text-xs font-bold text-gold-400 opacity-0 shadow-2xl backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
          اتصال مباشر {siteInfo.phone}
        </span>
      </a>
    </div>
  );
}
