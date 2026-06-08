"use client";

import { motion } from "framer-motion";
import { servicesList } from "@/data/siteData";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function ServicesPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-black-rich relative overflow-hidden" id="services-preview">
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-3">خدمات مصنع التقوى</h2>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
              نصنع لك مطبخاً يجمع بين <br className="hidden sm:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600">الأناقة العصرية والمتانة</span> الفائقة
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden sm:block"
          >
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 text-white hover:text-gold-400 font-medium transition-colors group"
            >
              <span>عرض كل الخدمات</span>
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold-500/10 group-hover:border-gold-500/30 transition-all">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesList.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl md:rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-gold-500/30 transition-all duration-500 h-full flex flex-col shadow-xl shadow-black/20"
            >
              <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-black-pure/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black-rich via-black-rich/50 to-transparent z-10 opacity-80"></div>
                
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                <div className="absolute top-4 right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black-pure/60 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-400 transition-all duration-300">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold-500 group-hover:text-black-pure" />
                </div>
              </div>
              
              <div className="p-6 sm:p-8 relative z-20 flex-grow flex flex-col -mt-8 bg-gradient-to-t from-black-rich via-black-rich to-transparent">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-gold-400 transition-colors">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6 flex-grow">{service.description}</p>
                <Link 
                  href={`/services#${service.id}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-gold-500 hover:text-gold-400 transition-colors w-fit group/link"
                >
                  <span>اقرأ المزيد</span>
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover/link:-translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <Link 
            href="/services" 
            className="w-full justify-center inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white font-bold py-4 rounded-2xl"
          >
            <span>عرض كل الخدمات</span>
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
