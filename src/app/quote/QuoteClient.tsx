"use client";

import { useState } from "react";
import { Send, Phone, User, MapPin, Ruler, CheckCircle2, MessageCircle, Calculator, FileText } from "lucide-react";
import { siteInfo } from "@/data/siteData";
import KitchenEstimator from "@/components/quote/KitchenEstimator";

export default function QuoteClient() {
  const [activeTab, setActiveTab] = useState<"calculator" | "form">("calculator");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Preparation for WhatsApp message
    const message = `*طلب مقايسة ومعاينة جديدة - مصنع التقوى*%0A
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
    <div className="relative min-h-screen overflow-hidden bg-black-pure pb-20 pt-32">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-screen w-full max-w-5xl -translate-x-1/2 rounded-full bg-gold-500/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-10 text-center">
            <h1 className="mb-4 text-3xl font-black uppercase tracking-tight text-white md:text-5xl">
              اطلب <span className="text-gold-500">مقايسة وتسعيراً</span> مجانياً
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
              احسب تكلفتك التقديرية فوراً أو اترك بياناتك وسيقوم الفريق الفني تحت إشراف م/ هاني الفقي
              بالتواصل معك لرفع المقاسات وتقديم أفضل عرض سعر.
            </p>

            {/* Mode Switcher Tabs */}
            <div className="mt-8 inline-flex rounded-full border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur">
              <button
                type="button"
                onClick={() => setActiveTab("calculator")}
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-black transition-all ${
                  activeTab === "calculator"
                    ? "bg-gold-500 text-black-pure shadow-lg shadow-gold-500/25"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <Calculator className="h-4 w-4" />
                حاسبة التكلفة الذكية
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("form")}
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-black transition-all ${
                  activeTab === "form"
                    ? "bg-gold-500 text-black-pure shadow-lg shadow-gold-500/25"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <FileText className="h-4 w-4" />
                طلب معاينة ومقايسة
              </button>
            </div>
          </div>

          {/* Tab 1: Interactive Calculator */}
          {activeTab === "calculator" && (
            <div className="space-y-8 animate-fade-in">
              <KitchenEstimator />
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
                <p className="text-gray-300">
                  هل تفضل أن يتواصل معك مهندس متخصص لرفع المقاسات على أرض الواقع؟{" "}
                  <button
                    type="button"
                    onClick={() => setActiveTab("form")}
                    className="font-black text-gold-400 underline decoration-gold-500 underline-offset-4 hover:text-gold-300"
                  >
                    انتقل لنموذج طلب المعاينة
                  </button>
                </p>
              </div>
            </div>
          )}

          {/* Tab 2: Appointment / Quote Form */}
          {activeTab === "form" && (
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-5 animate-fade-in">
              {/* Info Cards */}
              <div className="order-2 space-y-6 lg:order-1 lg:col-span-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <CheckCircle2 className="mb-4 h-10 w-10 text-gold-500" />
                  <h3 className="mb-2 text-xl font-bold text-white">معاينة فنية دقيقة</h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    فريقنا يقوم برفع المقاسات بدقة هندسية بالمليمتر لضمان استغلال كل سنتيمتر في مطبخك.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <Ruler className="mb-4 h-10 w-10 text-gold-500" />
                  <h3 className="mb-2 text-xl font-bold text-white">تصميم 3D مجاني</h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    بعد المعاينة، نوفر لك تصميماً ثلاثي الأبعاد لتشاهد مطبخك وتوزيعه قبل البدء في التصنيع.
                  </p>
                </div>

                <div className="rounded-3xl border border-gold-500/20 bg-gradient-to-br from-gold-500/20 to-transparent p-6">
                  <p className="mb-2 font-bold text-gold-400">تحتاج مساعدة سريعة؟</p>
                  <a
                    href={`tel:${siteInfo.phone}`}
                    className="block text-2xl font-black tracking-tighter text-white transition-colors hover:text-gold-500 dir-ltr text-right"
                  >
                    {siteInfo.phone}
                  </a>
                </div>
              </div>

              {/* Form */}
              <div className="order-1 lg:order-2 lg:col-span-3">
                <form
                  onSubmit={handleSubmit}
                  className="relative rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl md:p-10"
                >
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="mr-2 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400"
                      >
                        <User className="h-4 w-4 text-gold-500" /> الاسم الكريم
                      </label>
                      <input
                        required
                        type="text"
                        id="name"
                        placeholder="أدخل اسمك الكريم"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-white/10 bg-black-pure/50 px-6 py-4 text-white placeholder:text-gray-600 transition-all focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="mr-2 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400"
                      >
                        <Phone className="h-4 w-4 text-gold-500" /> رقم الهاتف (واتساب)
                      </label>
                      <input
                        required
                        type="tel"
                        id="phone"
                        placeholder="رقم الهاتف للتواصل"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-white/10 bg-black-pure/50 px-6 py-4 text-right text-white placeholder:text-gray-600 transition-all dir-ltr focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="location"
                        className="mr-2 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400"
                      >
                        <MapPin className="h-4 w-4 text-gold-500" /> المحافظة / المدينة
                      </label>
                      <input
                        required
                        type="text"
                        id="location"
                        placeholder="مثال: المنصورة، السنبلاوين، القاهرة..."
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-white/10 bg-black-pure/50 px-6 py-4 text-white placeholder:text-gray-600 transition-all focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="details"
                        className="mr-2 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400"
                      >
                        <MessageCircle className="h-4 w-4 text-gold-500" /> تفاصيل الطلب أو المقاسات
                        (اختياري)
                      </label>
                      <textarea
                        id="details"
                        rows={4}
                        placeholder="مثال: مطبخ بولي لاك مقاس 3*4، أو شباك جامبو، أو دريسنج روم..."
                        value={formData.details}
                        onChange={handleChange}
                        className="w-full resize-none rounded-2xl border border-white/10 bg-black-pure/50 px-6 py-4 text-white placeholder:text-gray-600 transition-all focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/50"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gold-500 px-8 py-5 text-xl font-black uppercase tracking-tighter text-black-pure shadow-lg shadow-gold-500/20 transition-all duration-300 hover:bg-gold-400 active:scale-[0.98]"
                    >
                      <span>إرسال الطلب وحجز المعاينة</span>
                      <Send className="h-6 w-6 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" />
                    </button>

                    <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400">
                      سيتم فتح محادثة مباشرة مع المهندس هاني توفيق الفقي لتأكيد الموعد
                    </p>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
