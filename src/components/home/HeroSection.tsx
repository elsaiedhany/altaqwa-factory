"use client";

import { motion } from "framer-motion";
import { PhoneCall, MessageCircle, ChevronDown } from "lucide-react";
import { siteInfo } from "@/data/siteData";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-full overflow-hidden pt-24 pb-12 md:pt-32 flex flex-col items-center justify-center min-h-[100dvh]">
      {/* Optimized Background Image for LCP */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/images/kitchen-luxury-cream-gold-bar-7.jpg.jpg"
          alt="مطابخ ألوميتال فاخرة - مصنع التقوى"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black-pure/95 via-black-pure/70 to-black-pure/98 z-10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 backdrop-blur-md mb-6 md:mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse"></span>
          <span className="text-gold-400 text-[10px] sm:text-xs md:text-sm font-bold tracking-wider uppercase">الجودة والخبرة منذ عام 2004</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-black text-white leading-[1.2] md:leading-[1.1] mb-6 md:mb-8 max-w-5xl tracking-tight"
        >
          تصنيع وتركيب <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600">المطابخ والألوميتال</span> بخبرة أكثر من 22 عاماً
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-sm sm:text-lg md:text-2xl text-gray-400 mb-8 md:mb-12 max-w-3xl leading-relaxed font-medium px-2"
        >
          بإشراف فني من م/ هاني توفيق الفقي - نصمم وننفذ مطبخك بأجود خامات البولي لاك والألوميتال لضمان الدقة الهندسية والمتانة.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-3 md:gap-6 w-full sm:w-auto px-2 sm:px-0"
        >
          <a 
            href={`tel:${siteInfo.phone}`} 
            className="w-full sm:w-auto flex items-center justify-center gap-2 md:gap-3 bg-gold-500 hover:bg-gold-400 text-black-pure font-black py-4 md:py-5 px-6 md:px-10 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(209,141,24,0.3)] hover:shadow-[0_0_50px_rgba(209,141,24,0.5)] hover:-translate-y-1 text-base md:text-xl active:scale-95"
          >
            <PhoneCall className="w-5 h-5 md:w-6 md:h-6" />
            <span>اطلب معاينة مجانية</span>
          </a>
          <a 
            href={`https://wa.me/${siteInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 md:gap-3 bg-white/5 hover:bg-white/10 text-white font-bold py-4 md:py-5 px-6 md:px-10 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm text-base md:text-xl active:scale-95"
          >
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
            <span>استفسر عبر واتساب</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-10 md:mt-16 flex flex-wrap justify-center items-center gap-3 md:gap-8 text-gray-500 font-bold text-[9px] sm:text-xs md:text-sm tracking-wider uppercase border-t border-white/5 pt-6 md:pt-8"
        >
          <div className="flex items-center gap-2">
            <span className="text-gold-500">✔</span> ضمان 20 سنة
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold-500">✔</span> تصميم 3D مجاني
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold-500">✔</span> شحن لكافة المحافظات
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">اكتشف المزيد</span>
        <ChevronDown className="w-5 h-5 text-gold-500 animate-bounce" />
      </motion.div>
    </section>
  );
}
