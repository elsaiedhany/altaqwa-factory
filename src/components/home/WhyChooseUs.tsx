import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";
import { reasons, siteInfo } from "@/data/siteData";

export default function WhyChooseUs() {
  return (
    <section className="bg-black-pure py-20 md:py-28" id="why-us">
      <div className="container mx-auto grid gap-12 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/assets/images/woodworking-machine-sliding-saw-3.jpg.jpg"
            alt="معدات مصنع التقوى المستخدمة في تصنيع المطابخ والألوميتال"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black-pure/90 to-transparent p-8">
            <p className="text-5xl font-black text-gold-500">+22</p>
            <p className="mt-2 max-w-xs font-bold text-white">عاما من الخبرة في التصنيع والتركيب</p>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-black text-gold-500">لماذا تختار مصنع التقوى؟</p>
          <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
            رفاهية الشكل تبدأ من دقة التصنيع
          </h2>
          <p className="mt-6 text-lg leading-9 text-gray-400">
            الموقع الممتاز لا يكفي وحده. نحن نركز على القياسات، جودة الخام، تفاصيل
            الفتح والغلق، وتحمل الاستخدام اليومي حتى يبقى المطبخ جميلا وعمليا لسنوات.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <li key={reason} className="flex gap-3 text-gray-200">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold-500" />
                <span className="leading-7">{reason}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/about" className="rounded-full border border-white/15 px-7 py-4 text-center font-bold text-white hover:border-gold-500/60">
              تعرف على المصنع
            </Link>
            <a href={`tel:${siteInfo.phone}`} className="inline-flex items-center justify-center gap-3 font-black text-white hover:text-gold-400">
              <Phone className="h-5 w-5 text-gold-500" />
              <span dir="ltr">{siteInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
