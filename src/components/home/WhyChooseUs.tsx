"use client";

import { motion } from "framer-motion";
import { reasons, siteInfo } from "@/data/siteData";
import { CheckCircle2, Phone } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-black-pure relative overflow-hidden" id="why-us">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            <div className="relative rounded-[2rem] sm:rounded-3xl overflow-hidden aspect-square sm:aspect-[4/5] border border-white/10 shadow-2xl shadow-black/50 group">
              <Image 
                src="/assets/images/woodworking-machine-sliding-saw-3.jpg.jpg" 
                alt="مصنع التقوى للألوميتال من الداخل - دقة واحترافية"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-pure via-transparent to-transparent opacity-80"></div>
              
              {/* Floating badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 glassmorphism p-4 sm:p-6 rounded-2xl max-w-[160px] sm:max-w-[200px]"
              >
                <h4 className="text-3xl sm:text-4xl font-bold text-gold-500 mb-1">+22</h4>
                <p className="text-[10px] sm:text-sm text-white font-medium">عاماً من التميز والريادة في السوق المصري</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-3">لماذا مصنع التقوى؟</h2>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight mb-6 sm:mb-8">
              خبرة تتجاوز الـ <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600">22 عاماً من التميز</span> في السوق المصري
            </h3>
            
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8 sm:mb-10 text-balance">
              نفخر في مصنع التقوى بأننا نقدم لعملائنا منتجات تجمع بين جودة التصنيع المباشر ودقة التنفيذ الهندسي، لنضمن لك مطبخاً يدوم لسنوات طويلاً.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 sm:gap-y-6 mb-10 sm:mb-12">
              {reasons.map((reason, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-gold-500 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed">{reason}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link 
                href="/about" 
                className="w-full sm:w-auto text-center bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                المزيد عن المصنع
              </Link>
              <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-start py-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold-500/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gold-500" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 mb-0.5 sm:mb-1">استشارة مجانية</p>
                  <a href={`tel:${siteInfo.phone}`} className="text-base sm:text-lg font-bold text-white hover:text-gold-400 transition-colors dir-ltr tracking-widest">{siteInfo.phone}</a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

