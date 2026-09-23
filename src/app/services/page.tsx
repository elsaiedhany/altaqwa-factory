import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, MessageCircle, PhoneCall } from "lucide-react";
import PageHeader, { PrimaryLink, SecondaryAnchor } from "@/components/shared/PageHeader";
import { servicesList, siteInfo } from "@/data/siteData";

export const metadata: Metadata = {
  title: "خدماتنا | مطابخ ألوميتال وبولي لاك وتصميم 3D",
  description: "خدمات مصنع التقوى تشمل تصميم وتصنيع وتركيب المطابخ، الدريسنج، الشبابيك والأبواب مع معاينة دقيقة وضمان حقيقي.",
  alternates: { canonical: "/services" },
};

const guarantees = ["خامات معتمدة ومناسبة للاستخدام اليومي", "رفع مقاسات دقيق قبل التصنيع", "تصميم واضح قبل التنفيذ", "تركيب منظم وخدمة ما بعد البيع"];

export default function ServicesPage() {
  return (
    <div className="bg-black-pure">
      <PageHeader
        eyebrow="خدمات مصنع التقوى"
        title="كل ما يحتاجه مشروعك من التصميم حتى التركيب"
        description="ننفذ المطابخ، الدريسنج، الشبابيك، والأبواب بمنهج واضح: قياس مضبوط، خامة مناسبة، تصنيع مباشر، وتسليم محترف."
        actions={<><PrimaryLink href="/quote">اطلب مقايسة مجانية</PrimaryLink><SecondaryAnchor href={`tel:${siteInfo.phone}`}>اتصل الآن</SecondaryAnchor></>}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {servicesList.map((service, index) => (
              <article key={service.id} id={service.id} className="scroll-mt-28 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition hover:border-gold-500/40">
                <div className="relative aspect-[4/3] overflow-hidden bg-black-rich">
                  <Image src={service.image} alt={service.title} fill className="object-cover transition duration-700 motion-safe:hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" priority={index < 2} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-pure/85 to-transparent" />
                  <div className="absolute bottom-5 right-5 rounded-2xl border border-gold-500/30 bg-black-pure/70 p-3 backdrop-blur">
                    <service.icon className="h-7 w-7 text-gold-500" />
                  </div>
                </div>
                <div className="p-6 md:p-7">
                  <h2 className="text-2xl font-black text-white">{service.title}</h2>
                  <p className="mt-4 leading-8 text-gray-400">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {guarantees.slice(0, 3).map((item) => <li key={item} className="flex gap-3 text-sm font-bold text-gray-300"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />{item}</li>)}
                  </ul>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link href="/quote" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-3 font-black text-black-pure hover:bg-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-300">اطلب الخدمة<ArrowLeft className="h-4 w-4" /></Link>
                    <a href={`https://wa.me/${siteInfo.whatsapp}?text=${encodeURIComponent(`أرغب في الاستفسار عن خدمة ${service.title}`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 font-bold text-white hover:border-green-400/60 focus:outline-none focus:ring-2 focus:ring-green-400"><MessageCircle className="h-4 w-4 text-green-400" />واتساب</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black-rich py-16">
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-[1fr_auto] md:items-center md:px-6">
          <div>
            <p className="text-sm font-black text-gold-500">استشارة فنية</p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">حدد الخامة والتقسيم المناسب قبل بدء التنفيذ</h2>
            <p className="mt-5 max-w-3xl leading-8 text-gray-400">أرسل صور المساحة أو المقاسات التقريبية، وسيقترح الفريق الفني أفضل مسار للتصميم والتسعير.</p>
          </div>
          <a href={`tel:${siteInfo.phone}`} className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-black text-black-pure hover:bg-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-300"><PhoneCall className="h-5 w-5" />{siteInfo.phone}</a>
        </div>
      </section>
    </div>
  );
}
