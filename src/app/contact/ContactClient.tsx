"use client";

import { siteInfo } from "@/data/siteData";
import { Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16.11 7.5v-.01"/><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/></svg>
);

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-12 md:pb-20">
      {/* Page Header */}
      <section className="bg-black-rich py-10 md:py-16 lg:py-20 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gold-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight leading-tight">تواصل معنا</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto text-balance leading-relaxed">
            نحن هنا للرد على كافة استفساراتكم. تواصل معنا الآن وسنسعد بخدمتكم في أي مكان في مصر.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-24 bg-black-pure">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Contact Info Side */}
            <div className="w-full lg:w-5/12 space-y-10 sm:space-y-12 order-2 lg:order-1">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 underline decoration-gold-500 underline-offset-8">معلومات التواصل</h2>
                <div className="space-y-6">
                  
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gold-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1 text-sm sm:text-base">العنوان الرئيسي</h4>
                      <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">{siteInfo.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-gold-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1 text-sm sm:text-base">اتصل بنا</h4>
                      <a href={`tel:${siteInfo.phone}`} className="text-gray-400 hover:text-gold-400 transition-colors dir-ltr block w-fit tracking-wider text-sm sm:text-base font-bold">{siteInfo.phone}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1 text-sm sm:text-base">واتساب</h4>
                      <a href={`https://wa.me/${siteInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors block w-fit text-sm sm:text-base font-bold">المحادثة المباشرة</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-gold-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1 text-sm sm:text-base">ساعات العمل</h4>
                      <p className="text-gray-400 text-xs sm:text-sm">{siteInfo.workingHours}</p>
                    </div>
                  </div>

                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">تابعنا على السوشيال ميديا</h2>
                <div className="flex items-center gap-4">
                  <a href={siteInfo.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gold-500 hover:border-gold-500 transition-all duration-300">
                    <FacebookIcon className="w-6 h-6" />
                  </a>
                  <a href={siteInfo.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gold-500 hover:border-gold-500 transition-all duration-300">
                    <InstagramIcon className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="w-full lg:w-7/12 order-1 lg:order-2">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/5 border border-white/10 rounded-[2rem] sm:rounded-3xl p-6 sm:p-10 shadow-2xl h-full"
              >
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tight">أرسل لنا رسالة</h2>
                <p className="text-gray-400 mb-8 font-medium">هل لديك استفسار محدد؟ يسعدنا الرد عليك.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-gray-300">الاسم <span className="text-gold-500">*</span></label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full bg-black-rich border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-all text-base"
                        placeholder="أدخل اسمك"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-gray-300">رقم الهاتف <span className="text-gold-500">*</span></label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        dir="rtl"
                        className="w-full bg-black-rich border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-all text-base"
                        placeholder="010XXXXXXXX"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold text-gray-300">الموضوع <span className="text-gold-500">*</span></label>
                    <input 
                      type="text" 
                      id="subject" 
                      required
                      className="w-full bg-black-rich border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-all text-base"
                      placeholder="عنوان الرسالة"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-gray-300">نص الرسالة <span className="text-gold-500">*</span></label>
                    <textarea 
                      id="message" 
                      required
                      rows={5}
                      className="w-full bg-black-rich border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-all resize-none text-base"
                      placeholder="اكتب رسالتك هنا..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-white hover:bg-gray-100 text-black-pure font-black py-4 px-8 rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-black-pure/30 border-t-black-pure rounded-full animate-spin"></span>
                        جاري الإرسال...
                      </span>
                    ) : isSubmitted ? (
                      <span className="text-green-600 font-bold">تم الإرسال بنجاح!</span>
                    ) : (
                      <>
                        <span>إرسال الرسالة</span>
                        <Send className="w-5 h-5 rtl:rotate-180" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-neutral-900 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-neutral-500">خريطة جوجل (مكان المصنع - السنبلاوين)</p>
        </div>
        {/* Replace the iframe src with actual Google Maps embed link if available */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110196.48666579695!2d31.545803932483863!3d30.82885973715093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f796afefd9a7bb%3A0xc3e144a2c0703eeb!2z2KfZhNiz2YbYqNmE2KfZiNmK2YYsINmF2K3Yp9mB2LjYqSDYp9mE2K_ZgtmH2YTZitip!5e0!3m2!1sar!2seg!4v1700000000000!5m2!1sar!2seg" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="relative z-10 grayscale contrast-125 opacity-80 mix-blend-luminosity hover:grayscale-0 hover:opacity-100 hover:mix-blend-normal transition-all duration-700"
        ></iframe>
      </section>
    </div>
  );
}
