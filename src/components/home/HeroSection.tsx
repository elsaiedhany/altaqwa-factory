import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MessageCircle, PhoneCall, Sparkles, Star, ShieldCheck, Factory } from "lucide-react";
import { siteInfo } from "@/data/siteData";

const trustItems = [
  "ضمان معتمد 20 سنة",
  "تصميم ثلاثي الأبعاد 3D",
  "تصنيع مباشر داخل المصنع",
  "توريد وتركيب لكافة المحافظات",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[95svh] overflow-hidden bg-black-pure pt-28">
      {/* Background Hero Image */}
      <Image
        src="/assets/images/kitchen-luxury-cream-gold-bar-7.jpg.jpg"
        alt="مطبخ فاخر من تنفيذ مصنع التقوى للألوميتال والمطابخ"
        fill
        priority
        className="object-cover scale-105 motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
        sizes="100vw"
      />

      {/* Luxury Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black-pure via-black-pure/85 to-black-pure/60" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black-pure via-black-pure/90 to-transparent" />

      {/* Ambient Gold Radial Glows */}
      <div className="pointer-events-none absolute -right-24 top-1/4 h-[500px] w-[500px] rounded-full bg-gold-500/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-10 h-[350px] w-[350px] rounded-full bg-gold-400/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto flex min-h-[calc(95svh-7rem)] items-center px-4 md:px-6">
        <div className="grid items-center gap-12 py-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="text-right">
            {/* Trust Eyebrow Badge */}
            <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-gold-500/40 bg-black-pure/70 px-4 py-2 text-xs font-black text-gold-300 backdrop-blur-md shadow-lg shadow-gold-500/10">
              <span className="flex h-2 w-2 rounded-full bg-gold-500 animate-pulse" />
              <span>جودة هندسية متوارثة منذ عام {siteInfo.foundedYear}</span>
              <span className="text-gold-500/50">•</span>
              <span className="text-gray-300">السنبلاوين / المنصورة / الدقهلية</span>
            </div>

            {/* Main Headline */}
            <h1 className="max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-7xl">
              مطابخ ألوميتال وبولي لاك بتفصيل فاخر{" "}
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
                وتنفيذ يدوم 20 عاماً
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-2xl text-lg leading-9 text-gray-200 md:text-xl font-medium">
              مصنع التقوى يصمم ويصنع ويركب المطابخ الفاخرة، الدريسنج روم، الشبابيك والأبواب بإشراف
              فني مباشر من المؤسس <strong className="text-gold-400">{siteInfo.owner}</strong> وخبرة
              تتجاوز 22 عاماً.
            </p>

            {/* Main Action Buttons */}
            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
              <Link
                href="/quote"
                className="group relative inline-flex min-h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-gold-500 px-9 py-4 text-base font-black text-black-pure shadow-[0_15px_40px_rgba(209,141,24,0.35)] transition-all duration-300 hover:bg-gold-400 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gold-300"
              >
                <PhoneCall className="h-5 w-5" />
                <span>اطلب مقايسة وحساب تكلفة</span>
              </Link>

              <a
                href={`https://wa.me/${siteInfo.whatsapp}?text=${encodeURIComponent("أرغب في الاستفسار عن تفصيل مطبخ جديد ومقايسة من مصنع التقوى")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-green-400/60 hover:bg-green-500/15 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <MessageCircle className="h-5 w-5 text-green-400" />
                <span>محادثة واتساب مباشرة</span>
              </a>
            </div>

            {/* Trust bullet points */}
            <ul className="mt-10 grid max-w-3xl grid-cols-2 gap-3 text-xs font-bold text-gray-200 sm:text-sm md:grid-cols-4">
              {trustItems.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Floating Luxury Glass Card (Desktop Highlight) */}
          <div className="hidden lg:flex flex-col gap-4">
            <div className="rounded-3xl border border-gold-500/30 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-7 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="flex text-gold-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-black text-white">4.9 / 5 تقييم جوجل</span>
                </div>
                <span className="rounded-full bg-gold-500/20 px-2.5 py-0.5 text-[10px] font-black text-gold-400 border border-gold-500/30">
                  موثق
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-gray-300">
                &ldquo;دقة هندسية وتشطيب فاق التوقعات، تسليم في الموعد تماماً وتفصيل دقيق
                للمفصلات.&rdquo;
              </p>

              <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                <span className="font-bold text-white">أحمد محمود - المنصورة</span>
                <span>عميل مصنع التقوى</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                <ShieldCheck className="mx-auto h-6 w-6 text-gold-500 mb-1" />
                <span className="block text-xl font-black text-white">20 سنة</span>
                <span className="text-[11px] text-gray-400">ضمان حقيقي</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                <Factory className="mx-auto h-6 w-6 text-gold-500 mb-1" />
                <span className="block text-xl font-black text-white">100%</span>
                <span className="text-[11px] text-gray-400">تصنيع مباشر</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
