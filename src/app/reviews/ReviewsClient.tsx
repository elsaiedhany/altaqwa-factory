"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const allReviews = [
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
  },
  {
    id: 4,
    name: "سعاد حسن",
    role: "عميلة",
    content: "المطبخ طلع تحفة فنية! الألوان مطابقة للتصميم 3D بالظبط، والتسليم كان في الميعاد من غير أي تأخير. شكراً لفريق العمل.",
    rating: 5,
  },
  {
    id: 5,
    name: "ياسر عبدالرحمن",
    role: "عميل",
    content: "أول مرة أتعامل مع مصنع ألوميتال ويكونوا محترفين بالشكل ده. الفينيش النهائي للأبواب ممتاز والمفصلات جودتها عالية جداً.",
    rating: 5,
  },
  {
    id: 6,
    name: "د. هدى منصور",
    role: "عميلة",
    content: "غيرت شبابيك الفيلا كلها من عندهم، العزل الصوتي فرق معايا جداً لأن بيتي على شارع رئيسي. خدمة عملاء ممتازة قبل وبعد التركيب.",
    rating: 5,
  }
];

export default function ReviewsPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Page Header */}
      <section className="bg-black-rich py-20 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gold-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">آراء عملائنا</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto text-balance">
            آلاف العملاء وضعوا ثقتهم في مصنع التقوى، اقرأ ماذا يقولون عن تجربتهم معنا.
          </p>
        </div>
      </section>

      <section className="py-24 bg-black-pure relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 relative hover:border-gold-500/30 transition-all duration-300 flex flex-col"
              >
                <Quote className="absolute top-6 left-6 w-12 h-12 text-white/5" />
                
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-8 text-lg relative z-10 flex-grow">
                  &quot;{review.content}&quot;
                </p>
                
                <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-black-pure font-bold text-lg shrink-0">
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

          {/* Stats Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-20 max-w-2xl mx-auto bg-gradient-to-r from-gold-900/20 via-gold-500/10 to-gold-900/20 border border-gold-500/20 rounded-3xl p-8 text-center"
          >
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-gold-500 text-gold-500" />
              ))}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">تقييم 4.9/5 بناءً على أكثر من 1500 عميل</h3>
            <p className="text-gray-400">انضم إلى قائمة عملائنا السعداء اليوم</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
