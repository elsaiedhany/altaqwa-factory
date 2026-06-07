"use client";

import { useState } from "react";
import { siteInfo } from "@/data/siteData";
import { Send, CheckCircle, PhoneCall, ShieldCheck, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function QuoteClient() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-12 md:pb-20">
      {/* Page Header */}
      <section className="bg-black-rich py-12 md:py-20 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gold-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 uppercase">اطلب عرض سعر</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto text-balance font-medium">
            ابدأ رحلة تنفيذ مطبخ أحلامك اليوم. املأ البيانات وسيقوم فريقنا الهندسي بالتواصل معك للمعاينة.
          </p>
        </div>
      </section>

      <section className="py-24 bg-black-pure relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Trust Signals Side */}
            <div className="w-full lg:w-1/3 space-y-8 lg:sticky lg:top-32">
              <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem]">
                <h2 className="text-2xl font-bold text-white mb-6">لماذا تختارنا؟</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="w-6 h-6 text-gold-500 shrink-0" />
                    <div>
                      <h4 className="text-white font-bold mb-1">ضمان 20 سنة</h4>
                      <p className="text-sm text-gray-400">نلتزم بجودة خاماتنا لسنوات طويلة.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-gold-500 shrink-0" />
                    <div>
                      <h4 className="text-white font-bold mb-1">سرعة في التنفيذ</h4>
                      <p className="text-sm text-gray-400">التزام صارم بمواعيد التسليم المتفق عليها.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <PhoneCall className="w-6 h-6 text-gold-500 shrink-0" />
                    <div>
                      <h4 className="text-white font-bold mb-1">استشارة هندسية</h4>
                      <p className="text-sm text-gray-400">معاينة فنية دقيقة بموقعك مجاناً.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-[2rem] bg-gold-500 text-black-pure text-center shadow-2xl shadow-gold-500/20">
                <p className="font-bold mb-4 uppercase tracking-widest text-xs">اتصال سريع</p>
                <a href={`tel:${siteInfo.phone}`} className="text-3xl font-black block dir-ltr mb-2">{siteInfo.phone}</a>
                <p className="text-sm font-medium opacity-80">مصنع التقوى للألوميتال</p>
              </div>
            </div>

            {/* Form Side */}
            <div className="w-full lg:w-2/3">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/5 border border-gold-500/30 rounded-[3rem] p-12 text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-green-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">تم إرسال طلبكم بنجاح!</h2>
                  <p className="text-gray-400 text-lg mb-8 text-balance">
                    شكراً لثقتكم في مصنع التقوى. سيقوم أحد مهندسينا بالتواصل معكم خلال 24 ساعة للمتابعة وتحديد موعد المعاينة.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-10 rounded-full border border-white/10 transition-colors"
                  >
                    إرسال طلب آخر
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl"
                >
                  <h2 className="text-3xl font-black text-white mb-2 underline decoration-gold-500 underline-offset-8">بيانات المشروع</h2>
                  <p className="text-gray-400 mb-10 mt-4">يرجى إدخال البيانات التالية بدقة لنتمكن من خدمتكم بشكل أفضل.</p>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label htmlFor="name" className="text-sm font-black text-gray-300 uppercase tracking-widest">الاسم بالكامل</label>
                        <input 
                          type="text" id="name" required
                          className="w-full bg-black-rich border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-lg"
                          placeholder="مثال: أحمد محمد"
                        />
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="phone" className="text-sm font-black text-gray-300 uppercase tracking-widest">رقم الهاتف (واتساب)</label>
                        <input 
                          type="tel" id="phone" required dir="rtl"
                          className="w-full bg-black-rich border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-lg"
                          placeholder="010XXXXXXXX"
                        />
                      </div>
                      <div className="space-y-3 md:col-span-2">
                        <label htmlFor="location" className="text-sm font-black text-gray-300 uppercase tracking-widest">المحافظة والعنوان</label>
                        <input 
                          type="text" id="location" required
                          className="w-full bg-black-rich border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-lg"
                          placeholder="مثال: المنصورة - حي الجامعة"
                        />
                      </div>
                      <div className="space-y-3 md:col-span-2">
                        <label htmlFor="projectType" className="text-sm font-black text-gray-300 uppercase tracking-widest">نوع الخدمة المطلوبة</label>
                        <select 
                          id="projectType" required defaultValue=""
                          className="w-full bg-black-rich border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all appearance-none text-lg"
                        >
                          <option value="" disabled>اختر من القائمة...</option>
                          <option value="kitchen">تفصيل مطبخ ألوميتال / بولي لاك</option>
                          <option value="3d">تصميم 3D ومعاينة</option>
                          <option value="maintenance">صيانة أو تعديل</option>
                          <option value="other">أخرى</option>
                        </select>
                      </div>
                      
                      <div className="md:col-span-2 bg-gold-500/10 border border-gold-500/20 rounded-xl p-4 mt-2">
                        <p className="text-sm text-gray-300 leading-relaxed font-medium">
                          <span className="text-gold-500 font-bold block mb-1">ملاحظة فنية:</span>
                          يتم مراجعة الطلبات والمواصفات الفنية بواسطة الفريق المختص داخل مصنع التقوى لضمان أفضل حل مناسب للمساحة والتنفيذ قبل تحديد موعد المعاينة.
                        </p>
                      </div>
                      <div className="space-y-3 md:col-span-2">
                        <label htmlFor="notes" className="text-sm font-black text-gray-300 uppercase tracking-widest">تفاصيل إضافية (اختياري)</label>
                        <textarea 
                          id="notes" rows={4}
                          className="w-full bg-black-rich border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all resize-none text-lg"
                          placeholder="اكتب هنا أي تفاصيل تود إطلاعنا عليها..."
                        ></textarea>
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gold-500 hover:bg-gold-400 text-black-pure font-black py-5 px-10 rounded-2xl transition-all duration-300 shadow-xl shadow-gold-500/20 flex items-center justify-center gap-3 disabled:opacity-70 text-xl"
                    >
                      {isSubmitting ? "جاري الإرسال..." : "إرسال طلب المعاينة"}
                      {!isSubmitting && <Send className="w-6 h-6 rtl:rotate-180" />}
                    </button>
                  </form>
                </motion.div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
