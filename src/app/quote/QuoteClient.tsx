"use client";

import { useState } from "react";
import { Send, Phone, User, MapPin, Ruler, CheckCircle2, MessageCircle } from "lucide-react";
import { siteInfo } from "@/data/siteData";

export default function QuoteClient() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Preparation for WhatsApp message
    const message = `*طلب تسعير جديد - مصنع التقوى*%0A
*الاسم:* ${formData.name}%0A
*رقم الهاتف:* ${formData.phone}%0A
*المحافظة/المدينة:* ${formData.location}%0A
*التفاصيل:* ${formData.details}`;
    
    const whatsappUrl = `https://wa.me/${siteInfo.whatsapp}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-black-pure relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-screen bg-gold-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              اطلب <span className="text-gold-500">مقايسة وتسعير</span> مجاني
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              اترك بياناتك وسيقوم الفريق الفني تحت إشراف م/ هاني الفقي بالتواصل معك لتحديد موعد المعاينة وتقديم أفضل عرض سعر.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            
            {/* Info Cards */}
            <div className="lg:col-span-2 space-y-6 order-2 lg:order-1">
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                <CheckCircle2 className="w-10 h-10 text-gold-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">معاينة فنية دقيقة</h3>
                <p className="text-gray-400 text-sm leading-relaxed">فريقنا يقوم برفع المقاسات بدقة هندسية لضمان استغلال كل سنتيمتر في مطبخك.</p>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                <Ruler className="w-10 h-10 text-gold-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">تصميم 3D مجاني</h3>
                <p className="text-gray-400 text-sm leading-relaxed">بعد المعاينة، نوفر لك تصميماً ثلاثي الأبعاد لتشاهد مطبخك قبل البدء في التصنيع.</p>
              </div>

              <div className="p-6 rounded-3xl bg-gradient-to-br from-gold-500/20 to-transparent border border-gold-500/20">
                <p className="text-gold-400 font-bold mb-2">تحتاج مساعدة سريعة؟</p>
                <a href={`tel:${siteInfo.phone}`} className="text-2xl font-black text-white hover:text-gold-500 transition-colors dir-ltr block tracking-tighter">
                  {siteInfo.phone}
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <form 
                onSubmit={handleSubmit}
                className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-xl shadow-2xl relative"
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-gray-400 mr-2 uppercase tracking-widest flex items-center gap-2">
                      <User className="w-4 h-4 text-gold-500" /> الاسم الكامل
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      placeholder="أدخل اسمك الكريم"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black-pure/50 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-gray-400 mr-2 uppercase tracking-widest flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gold-500" /> رقم الهاتف
                    </label>
                    <input
                      required
                      type="tel"
                      id="phone"
                      placeholder="رقم الهاتف (واتساب)"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-black-pure/50 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 transition-all dir-ltr text-right"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-bold text-gray-400 mr-2 uppercase tracking-widest flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gold-500" /> المحافظة / المدينة
                    </label>
                    <input
                      required
                      type="text"
                      id="location"
                      placeholder="أين يقع منزلك؟"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full bg-black-pure/50 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="details" className="text-sm font-bold text-gray-400 mr-2 uppercase tracking-widest flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-gold-500" /> تفاصيل الطلب (اختياري)
                    </label>
                    <textarea
                      id="details"
                      rows={4}
                      placeholder="مثال: مطبخ بولي لاك مقاس 3*4، أو شباك جامبو..."
                      value={formData.details}
                      onChange={handleChange}
                      className="w-full bg-black-pure/50 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold-500 hover:bg-gold-400 text-black-pure font-black py-5 px-8 rounded-2xl transition-all duration-300 shadow-lg shadow-gold-500/20 flex items-center justify-center gap-3 text-xl uppercase tracking-tighter group active:scale-[0.98]"
                  >
                    <span>إرسال الطلب الآن</span>
                    <Send className="w-6 h-6 group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] transition-transform" />
                  </button>
                  
                  <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                    سيتم توجيهك للمحادثة المباشرة عبر واتساب
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
