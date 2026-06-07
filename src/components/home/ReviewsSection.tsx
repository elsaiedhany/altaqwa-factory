"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const reviews = [
  {
    id: 1,
    name: "أحمد محمود",
    role: "عميل",
    content: "صراحة من أفضل المصانع اللي اتعاملت معاها، دقة في المواعيد وتشطيب المطبخ طلع أحسن من التصميم اللي اتفقنا عليه. شكراً أستاذ هاني.",
    rating: 5,
  },
  {
    id: 2,
    name: "منى إبراهيم",
    role: "عميلة",
    content: "عملت دريسنج روم وشبابيك الشقة كلها عندهم، الخامات ممتازة والعزل بتاع الشبابيك فوق الوصف. أنصح بالتعامل معاهم جداً.",
    rating: 5,
  },
  {
    id: 3,
    name: "م. كريم طارق",
    role: "مهندس ديكور",
    content: "بتعامل مع مصنع التقوى في كل مشاريعي، التزام بالقطاعات المتفق عليها وتنفيذ احترافي بيريحني مع العملاء بتوعي.",
    rating: 5,
  }
];

export default function ReviewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-black-rich relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-3"
          >
            آراء عملائنا المخلصين
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-8"
          >
            ثقتكم هي <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600">الدافع الحقيقي</span> لتميزنا المستمر
          </motion.h3>
          
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-gold-500 text-gold-500" />
            ))}
          </div>
          <p className="text-gray-400 font-bold">تقييم 4.9/5 بناءً على أكثر من 1500 عميل</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 relative hover:border-gold-500/30 hover:-translate-y-2 transition-all duration-300"
            >
              <Quote className="absolute top-6 left-6 w-12 h-12 text-white/5" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                ))}
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-8 text-lg relative z-10">
                &quot;{review.content}&quot;
              </p>
              
              <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-black-pure font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <p className="text-sm text-gold-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
