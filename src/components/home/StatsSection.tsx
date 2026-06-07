"use client";

import { motion } from "framer-motion";
import { siteInfo } from "@/data/siteData";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 relative bg-black-pure border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-gold-900)_0%,_transparent_70%)] opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8"
        >
          {siteInfo.stats.map((stat) => (
            <motion.div key={stat.id} variants={itemVariants} className="flex flex-col items-center justify-center text-center group relative">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-gold-500/10 group-hover:border-gold-500/30 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-gold-500/10">
                <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-gold-500 transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-2 md:mb-3 tracking-tighter">{stat.value}</h3>
              <p className="text-xs md:text-lg text-gray-400 font-medium group-hover:text-gold-400 transition-colors">{stat.label}</p>
              
              {/* Decorative line */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/5 hidden lg:block"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
