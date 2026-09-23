"use client";

import { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Copy,
  Check,
  Building2,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import PageHeader, { PrimaryLink, SecondaryAnchor } from "@/components/shared/PageHeader";
import { siteInfo } from "@/data/siteData";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16.11 7.5v-.01" />
    <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
  </svg>
);

export default function ContactClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(siteInfo.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const waText = encodeURIComponent(
      `*رسالة استفسار جديدة من موقع مصنع التقوى*\n\n` +
        `*الاسم:* ${formData.name}\n` +
        `*الهاتف:* ${formData.phone}\n` +
        `*الموضوع:* ${formData.subject}\n` +
        `*الرسالة:* ${formData.message}`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(`https://wa.me/${siteInfo.whatsapp}?text=${waText}`, "_blank");
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 800);
  };

  return (
    <div className="bg-black-pure">
      <PageHeader
        eyebrow="تواصل مباشر"
        title="نسعد باستقبال استفساراتكم وزيارتكم في مقر المصنع"
        description="فريقنا الفني بإشراف م/ هاني توفيق الفقي متاح للرد على استفسارات الأسعار والمقايسات وتقديم استشارة هندسية لمشروعك."
        actions={
          <>
            <PrimaryLink href="/quote">اطلب مقايسة مجانية</PrimaryLink>
            <SecondaryAnchor href={`tel:${siteInfo.phone}`}>
              اتصال مباشر: {siteInfo.phone}
            </SecondaryAnchor>
          </>
        }
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            {/* Contact Info Side */}
            <div className="order-2 w-full space-y-8 lg:order-1 lg:w-5/12">
              {/* Working Hours Status Banner */}
              <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-400">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>
                <span className="text-sm font-bold">
                  المصنع متاح الآن لاستقبال الاتصالات ورسائل الواتساب
                </span>
              </div>

              <div>
                <h2 className="mb-6 text-xl font-bold text-white underline decoration-gold-500 underline-offset-8 sm:text-2xl">
                  بيانات التواصل الرسمية
                </h2>
                <div className="space-y-4">
                  {/* Location */}
                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-500/30 bg-gold-500/10 text-gold-500">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">المقر والمصنع</h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-300">
                        {siteInfo.location}
                      </p>
                      <p className="mt-1 text-xs text-gold-400 font-bold">
                        نغطي الدقهلية، المنصورة، السنبلاوين، وكافة محافظات مصر
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-500/30 bg-gold-500/10 text-gold-500">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white">الهاتف المباشر</h3>
                        <a
                          href={`tel:${siteInfo.phone}`}
                          className="mt-1 block text-lg font-black text-white hover:text-gold-400 dir-ltr text-right"
                        >
                          {siteInfo.phone}
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyPhone}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-gray-300 hover:text-white"
                      title="نسخ الرقم"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-green-400" />
                          <span className="text-green-400">تم النسخ</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>نسخ</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">محادثة واتساب سريعة</h3>
                      <a
                        href={`https://wa.me/${siteInfo.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-1 text-sm font-bold text-emerald-400 hover:underline"
                      >
                        بدء المحادثة الفورية مع المهندس هاني
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-500/30 bg-gold-500/10 text-gold-500">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">مواعيد العمل الرسمية</h3>
                      <p className="mt-1 text-sm text-gray-300">{siteInfo.workingHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-base font-bold text-white">تابعنا على وسائل التواصل</h3>
                <div className="flex items-center gap-3">
                  <a
                    href={siteInfo.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-300 transition hover:border-gold-500 hover:bg-gold-500 hover:text-black-pure"
                    aria-label="صفحة فيسبوك"
                  >
                    <FacebookIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={siteInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-300 transition hover:border-gold-500 hover:bg-gold-500 hover:text-black-pure"
                    aria-label="حساب انستغرام"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="order-1 w-full lg:order-2 lg:w-7/12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 shadow-2xl backdrop-blur-xl md:p-10"
              >
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-gold-500">
                    استفسار أو طلب عرض أسعار
                  </span>
                  <h2 className="mt-1 text-2xl font-black text-white md:text-3xl">
                    أرسل تفاصيل مشروعك وسنتواصل معك
                  </h2>
                  <p className="mt-2 text-sm text-gray-400">
                    أرسل مقاساتك التقريبية أو استفسارك وسيقوم المهندس هاني بالرد عليك مباشرة.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold text-gray-300">
                        الاسم الكريم <span className="text-gold-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-2xl border border-white/10 bg-black-pure/70 px-4 py-3.5 text-white placeholder:text-gray-600 focus:border-gold-500 focus:outline-none"
                        placeholder="أدخل اسمك"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-bold text-gray-300">
                        رقم الهاتف (واتساب) <span className="text-gold-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        dir="ltr"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-2xl border border-white/10 bg-black-pure/70 px-4 py-3.5 text-right text-white placeholder:text-gray-600 focus:border-gold-500 focus:outline-none"
                        placeholder="010XXXXXXXX"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-bold text-gray-300">
                      موضوع الاستفسار <span className="text-gold-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-2xl border border-white/10 bg-black-pure/70 px-4 py-3.5 text-white placeholder:text-gray-600 focus:border-gold-500 focus:outline-none"
                      placeholder="مثال: استفسار عن مطبخ بولي لاك أو دريسنج روم"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold text-gray-300">
                      تفاصيل الرسالة أو المقاسات التقريبية <span className="text-gold-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full resize-none rounded-2xl border border-white/10 bg-black-pure/70 px-4 py-3.5 text-white placeholder:text-gray-600 focus:border-gold-500 focus:outline-none"
                      placeholder="اكتب استفسارك بالتفصيل..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gold-500 px-8 py-4 text-base font-black text-black-pure shadow-lg shadow-gold-500/20 transition hover:bg-gold-400 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-black-pure border-t-transparent" />
                        جاري الإرسال والتوجيه...
                      </span>
                    ) : isSubmitted ? (
                      <span className="flex items-center gap-2 text-black-pure font-black">
                        <Check className="h-5 w-5" />
                        تم الإرسال بنجاح!
                      </span>
                    ) : (
                      <>
                        <span>إرسال الرسالة إلى الواتساب مباشرة</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
