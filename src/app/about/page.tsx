import type { Metadata } from "next";
import Image from "next/image";
import { Factory, Ruler, ShieldCheck, Target, Trophy } from "lucide-react";
import PageHeader, { PrimaryLink, SecondaryAnchor } from "@/components/shared/PageHeader";
import { processSteps, siteInfo } from "@/data/siteData";

export const metadata: Metadata = {
  title: "من نحن | مصنع التقوى وخبرة م/ هاني توفيق الفقي",
  description: "تعرف على مصنع التقوى للألوميتال والمطابخ، خبرة أكثر من 22 عاما في التصنيع المباشر والتركيب الاحترافي بإشراف م/ هاني توفيق الفقي.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "دقة القياس", text: "كل مشروع يبدأ بمقاسات واضحة ومراجعة فنية تمنع الهدر والأخطاء.", icon: Ruler },
  { title: "تصنيع مباشر", text: "التحكم داخل المصنع يمنح جودة أعلى وشفافية أفضل في الخامات والتكلفة.", icon: Factory },
  { title: "ضمان ومتابعة", text: "نراجع تفاصيل التركيب ونبقى متاحين لخدمة ما بعد البيع.", icon: ShieldCheck },
];

export default function AboutPage() {
  return (
    <div className="bg-black-pure">
      <PageHeader
        eyebrow="من نحن"
        title="خبرة هندسية تقود كل تفصيلة في مشروعك"
        description={`${siteInfo.shortName} تأسس على فكرة بسيطة: مطبخ جميل لا يكفي، يجب أن يكون متينا، عملي الاستخدام، ومصنعا بدقة.`}
        actions={<><PrimaryLink href="/quote">ابدأ مشروعك</PrimaryLink><SecondaryAnchor href={`tel:${siteInfo.phone}`}>تواصل مع المصنع</SecondaryAnchor></>}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-black-rich">
            <Image src="/assets/images/eng-hany-tawfik-el-faqy-ceo-taqwa.jpg.jpg" alt="م/ هاني توفيق الفقي مؤسس مصنع التقوى" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 38vw" priority />
          </div>
          <div>
            <p className="text-sm font-black text-gold-500">المؤسس والمشرف الفني</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-white md:text-5xl">م/ هاني توفيق الفقي</h2>
            <div className="mt-6 space-y-5 text-lg leading-9 text-gray-300">
              <p>بدأت خبرة المصنع في صناعة الألوميتال والمطابخ منذ عام {siteInfo.foundedYear}، ومع الوقت أصبح التركيز على تقديم منتج متوازن بين الشكل الراقي والاستخدام اليومي المريح.</p>
              <p>نحن لا نتعامل مع المشروع كصور جميلة فقط. نراجع المساحة، أسلوب استخدام الأسرة، أماكن الأجهزة، حركة الفتح والغلق، ونوع الخامة الأنسب قبل بدء التصنيع.</p>
              <p>هذا الأسلوب هو سبب ثقة العملاء في الدقهلية وخارجها: وعد واضح، مقايسة مفهومة، تصنيع داخل المصنع، وتركيب يحترم وقت العميل ومكانه.</p>
            </div>
            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"><Trophy className="mb-3 h-7 w-7 text-gold-500" /><dt className="text-sm text-gray-400">خبرة</dt><dd className="text-2xl font-black text-white">+22 سنة</dd></div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"><Factory className="mb-3 h-7 w-7 text-gold-500" /><dt className="text-sm text-gray-400">تنفيذ</dt><dd className="text-2xl font-black text-white">تصنيع مباشر</dd></div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"><ShieldCheck className="mb-3 h-7 w-7 text-gold-500" /><dt className="text-sm text-gray-400">ضمان</dt><dd className="text-2xl font-black text-white">20 سنة</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black-rich py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center"><p className="mb-3 text-sm font-black text-gold-500">قيم العمل</p><h2 className="text-3xl font-black text-white md:text-5xl">منهج واضح يحافظ على جودة النتيجة</h2></div>
          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value) => <article key={value.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"><value.icon className="h-9 w-9 text-gold-500" /><h3 className="mt-5 text-2xl font-black text-white">{value.title}</h3><p className="mt-3 leading-8 text-gray-400">{value.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 max-w-3xl"><p className="mb-3 text-sm font-black text-gold-500">رحلة التنفيذ</p><h2 className="text-3xl font-black leading-tight text-white md:text-5xl">نفس النظام في كل مشروع</h2></div>
          <ol className="grid gap-4 md:grid-cols-5">
            {processSteps.map((step, index) => <li key={step.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"><span className="text-sm font-black text-gold-500">0{index + 1}</span><step.icon className="mt-5 h-8 w-8 text-gold-500" /><h3 className="mt-5 text-xl font-black text-white">{step.title}</h3><p className="mt-3 leading-7 text-gray-400">{step.text}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="bg-gold-500 py-14 text-black-pure">
        <div className="container mx-auto flex flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-6">
          <div><Target className="mb-4 h-9 w-9" /><h2 className="text-3xl font-black md:text-4xl">رؤيتنا</h2><p className="mt-3 max-w-3xl text-lg font-bold leading-8">أن نقدم مستوى تصنيع وتركيب يليق بالمنازل الراقية، مع وضوح كامل في الخامات والمواعيد والتكلفة.</p></div>
          <PrimaryLink href="/projects">شاهد الأعمال</PrimaryLink>
        </div>
      </section>
    </div>
  );
}
