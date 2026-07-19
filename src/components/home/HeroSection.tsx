import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MessageCircle, PhoneCall } from "lucide-react";
import { siteInfo } from "@/data/siteData";

const trustItems = ["ضمان 20 سنة", "تصميم 3D", "تصنيع مباشر", "تركيب في المحافظات"];

export default function HeroSection() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-black-pure pt-28">
      <Image
        src="/assets/images/kitchen-luxury-cream-gold-bar-7.jpg.jpg"
        alt="مطبخ فاخر من تنفيذ مصنع التقوى للألوميتال والمطابخ"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,.92),rgba(5,5,5,.70),rgba(5,5,5,.96))]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black-pure to-transparent" />

      <div className="container relative z-10 mx-auto flex min-h-[calc(92svh-7rem)] items-center px-4 md:px-6">
        <div className="max-w-4xl py-16 text-right">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-black-pure/50 px-4 py-2 text-xs font-bold text-gold-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gold-500" />
            جودة هندسية منذ عام {siteInfo.foundedYear}
          </p>

          <h1 className="max-w-5xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-7xl">
            مطابخ ألوميتال وبولي لاك بتفصيل فاخر وتنفيذ يدوم
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-gray-200 md:text-2xl">
            مصنع التقوى يصمم ويصنع ويركب المطابخ، الدريسنج، الشبابيك، والأبواب بإشراف
            فني مباشر من {siteInfo.owner} وخبرة تتجاوز 22 عاما.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-gold-500 px-8 py-4 text-base font-black text-black-pure shadow-[0_18px_60px_rgba(209,141,24,.28)] transition hover:bg-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-300"
            >
              <PhoneCall className="h-5 w-5" />
              اطلب مقايسة مجانية
            </Link>
            <a
              href={`https://wa.me/${siteInfo.whatsapp}?text=${encodeURIComponent("أرغب في الاستفسار عن مطبخ جديد من مصنع التقوى")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur transition hover:border-green-400/50 hover:bg-green-500/15 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <MessageCircle className="h-5 w-5 text-green-400" />
              تواصل عبر واتساب
            </a>
          </div>

          <ul className="mt-10 grid max-w-3xl grid-cols-2 gap-3 text-sm font-bold text-gray-200 md:grid-cols-4">
            {trustItems.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
