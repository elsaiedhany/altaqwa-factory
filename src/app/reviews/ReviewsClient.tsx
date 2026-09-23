"use client";

import { useState } from "react";
import { Star, Quote, Plus, CheckCircle2, MessageCircle, Sparkles, Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader, { PrimaryLink, SecondaryAnchor } from "@/components/shared/PageHeader";
import { siteInfo } from "@/data/siteData";

const initialReviews = [
  {
    id: 1,
    name: "أحمد محمود",
    role: "عميل - المنصورة",
    category: "مطابخ",
    content:
      "صراحة من أفضل المصانع اللي اتعاملت معاها، دقة في المواعيد وتشطيب المطبخ طلع أحسن من التصميم اللي اتفقنا عليه. شكراً أستاذ هاني.",
    rating: 5,
    date: "منذ شهر",
  },
  {
    id: 2,
    name: "منى إبراهيم",
    role: "عميلة - القاهرة الجديدة",
    category: "دريسنج وشبابيك",
    content:
      "عملت دريسنج روم وشبابيك الشقة كلها عندهم، الخامات ممتازة والعزل بتاع الشبابيك فوق الوصف. أنصح بالتعامل معاهم جداً.",
    rating: 5,
    date: "منذ شهرين",
  },
  {
    id: 3,
    name: "م. كريم طارق",
    role: "مهندس ديكور - دمياط",
    category: "مهندسون وشركات",
    content:
      "بتعامل مع مصنع التقوى في كل مشاريعي، التزام بالقطاعات المتفق عليها وتنفيذ احترافي بيريحني مع العملاء بتوعي.",
    rating: 5,
    date: "منذ 3 أسابيع",
  },
  {
    id: 4,
    name: "سعاد حسن",
    role: "عميلة - السنبلاوين",
    category: "مطابخ",
    content:
      "المطبخ طلع تحفة فنية! الألوان مطابقة للتصميم 3D بالظبط، والتسليم كان في الميعاد من غير أي تأخير. شكراً لفريق العمل.",
    rating: 5,
    date: "منذ شهر",
  },
  {
    id: 5,
    name: "ياسر عبدالرحمن",
    role: "عميل - ميت غمر",
    category: "مطابخ",
    content:
      "أول مرة أتعامل مع مصنع ألوميتال ويكونوا محترفين بالشكل ده. الفينيش النهائي للأبواب ممتاز والمفصلات جودتها عالية جداً.",
    rating: 5,
    date: "منذ شهرين",
  },
  {
    id: 6,
    name: "د. هدى منصور",
    role: "عميلة - التجمع الخامس",
    category: "دريسنج وشبابيك",
    content:
      "غيرت شبابيك الفيلا كلها من عندهم، العزل الصوتي فرق معايا جداً لأن بيتي على شارع رئيسي. خدمة عملاء ممتازة قبل وبعد التركيب.",
    rating: 5,
    date: "منذ أسبوعين",
  },
];

export default function ReviewsClient() {
  const [reviews, setReviews] = useState(initialReviews);
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", role: "", content: "", rating: 5 });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = ["الكل", "مطابخ", "دريسنج وشبابيك", "مهندسون وشركات"];

  const filteredReviews =
    activeCategory === "الكل" ? reviews : reviews.filter((r) => r.category === activeCategory);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.content) return;

    const added = {
      id: Date.now(),
      name: newReview.name,
      role: newReview.role || "عميل موثق",
      category: "مطابخ",
      content: newReview.content,
      rating: newReview.rating,
      date: "الآن",
    };

    setReviews([added, ...reviews]);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
      setNewReview({ name: "", role: "", content: "", rating: 5 });
    }, 1800);
  };

  return (
    <div className="bg-black-pure">
      <PageHeader
        eyebrow="ثقة العملاء"
        title="تجارب حقيقية تعكس التزامنا بالجودة والمواعيد"
        description="آراء حية من أصحاب المنازل ومهندسي الديكور الذين اختاروا مصنع التقوى بإشراف م/ هاني توفيق الفقي لتنفيذ مطابخهم وأعمال الألوميتال."
        actions={
          <>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3 text-sm font-black text-black-pure transition hover:bg-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-300"
            >
              <Plus className="h-4 w-4 stroke-[3]" />
              شاركنا تجربتك وتقييمك
            </button>
            <SecondaryAnchor href={`https://wa.me/${siteInfo.whatsapp}`}>
              استفسار عبر واتساب
            </SecondaryAnchor>
          </>
        }
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Trust Highlights */}
          <div className="mb-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center">
              <span className="text-3xl font-black text-white md:text-4xl">4.9 / 5</span>
              <div className="mt-2 flex justify-center text-gold-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-2 text-xs font-bold text-gray-400">متوسط تقييم العملاء</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center">
              <span className="text-3xl font-black text-white md:text-4xl">100%</span>
              <p className="mt-2 text-xs font-bold text-gray-400">التزام بالخامات المعتمدة</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center">
              <span className="text-3xl font-black text-white md:text-4xl">20 سنة</span>
              <p className="mt-2 text-xs font-bold text-gray-400">ضمان حقيقي ومتابعة</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center">
              <span className="text-3xl font-black text-white md:text-4xl">+22 سنة</span>
              <p className="mt-2 text-xs font-bold text-gray-400">خبرة هندسية تراكمية</p>
            </div>
          </div>

          {/* Filter Categories */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                    isActive
                      ? "bg-gold-500 text-black-pure shadow-lg shadow-gold-500/20 scale-105"
                      : "border border-white/10 bg-white/[0.04] text-gray-300 hover:border-gold-500/40 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredReviews.map((review) => (
              <motion.div
                key={review.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 shadow-xl transition-all duration-300 hover:border-gold-500/40 hover:shadow-[0_10px_30px_rgba(209,141,24,0.1)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                    <div className="flex text-gold-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-gold-500/40" />
                  </div>

                  <p className="mt-5 text-base leading-8 text-gray-300 font-medium">
                    &ldquo;{review.content}&rdquo;
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
                  <div>
                    <h3 className="font-black text-white text-lg">{review.name}</h3>
                    <p className="text-xs text-gold-400 mt-0.5">{review.role}</p>
                  </div>
                  <span className="text-[11px] font-bold text-gray-400">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Review Prompt */}
          <div className="mt-16 rounded-3xl border border-gold-500/30 bg-gradient-to-r from-gold-500/10 via-black-pure to-gold-500/10 p-8 text-center md:p-12">
            <h3 className="text-2xl font-black text-white md:text-3xl">
              هل قمت بتركيب مطبخ أو شبابيك من مصنع التقوى؟
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-300">
              يسعدنا جداً سماع تجربتك لنواصل تطوير خدماتنا، كما يمكنك إرسال صور مطبخك بعد التركيب
              مباشرة للمهندس هاني.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3 text-sm font-black text-black-pure transition hover:bg-gold-400"
              >
                <Plus className="h-4 w-4 stroke-[3]" />
                أضف تقييمك الآن
              </button>
              <a
                href={`https://wa.me/${siteInfo.whatsapp}?text=${encodeURIComponent("مرحباً م/ هاني، أود مشاركة تقييمي ورأيي في المطبخ بعد التركيب.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:border-gold-500/60"
              >
                <MessageCircle className="h-4 w-4 text-green-400" />
                شارك عبر واتساب
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Add Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black-pure/90 p-4 backdrop-blur-xl"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg rounded-3xl border border-gold-500/30 bg-black-rich p-6 shadow-2xl md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute left-6 top-6 rounded-full border border-white/10 p-2 text-gray-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              {isSubmitted ? (
                <div className="py-10 text-center">
                  <CheckCircle2 className="mx-auto h-16 w-16 text-gold-500" />
                  <h3 className="mt-4 text-2xl font-black text-white">شكراً جزيلاً لتقييمك!</h3>
                  <p className="mt-2 text-sm text-gray-300">
                    تمت إضافة رأيك بنجاح، نقدر ثقتك الغالية في مصنع التقوى.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-5">
                  <div>
                    <span className="text-xs font-bold text-gold-500">تقييم الخدمة</span>
                    <h3 className="mt-1 text-2xl font-black text-white">شاركنا تجربتك ورأيك</h3>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-300">الاسم الكريم</label>
                    <input
                      required
                      type="text"
                      placeholder="اسمك أو لقبك"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-black-pure px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-gold-500 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-300">
                      المدينة أو الصفة (اختياري)
                    </label>
                    <input
                      type="text"
                      placeholder="مثال: عميل - المنصورة، أو مهندس ديكور"
                      value={newReview.role}
                      onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-black-pure px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-gold-500 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-300">التقييم</label>
                    <div className="flex gap-2 text-gold-500">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReview({ ...newReview, rating: star })}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`h-6 w-6 ${star <= newReview.rating ? "fill-current" : "text-gray-600"}`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-300">تفاصيل رأيك في المطبخ والخدمة</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="اكتب انطباعك عن الجودة، الالتزام بالمواعيد، والتشطيب..."
                      value={newReview.content}
                      onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
                      className="w-full resize-none rounded-xl border border-white/10 bg-black-pure px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-gold-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 py-3.5 text-sm font-black text-black-pure transition hover:bg-gold-400"
                  >
                    <Send className="h-4 w-4" />
                    نشر التقييم الآن
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
