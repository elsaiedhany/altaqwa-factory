import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ReviewsSection from "@/components/home/ReviewsSection";
import { faqs, featuredProjects, processSteps, siteInfo } from "@/data/siteData";

export const metadata: Metadata = {
  title: "مصنع التقوى للألوميتال والمطابخ | مطابخ فاخرة بتصنيع مباشر",
  description:
    "تصميم وتصنيع وتركيب مطابخ ألوميتال وبولي لاك، دريسنج روم، شبابيك وأبواب في الدقهلية وكل مصر بخبرة أكثر من 22 عاما.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FounderSection />
      <ServicesPreview />
      <ProjectsSection />
      <WhyChooseUs />
      <ProcessSection />
      <ReviewsSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}

function FounderSection() {
  return <section className="bg-black-pure py-16"><div className="container mx-auto px-4 md:px-6"><div className="grid items-center gap-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:grid-cols-[180px_1fr] md:p-10"><div className="relative mx-auto h-36 w-36 overflow-hidden rounded-2xl border border-gold-500/30 md:h-44 md:w-44"><Image src="/assets/images/eng-hany-tawfik-el-faqy-ceo-taqwa.jpg.jpg" alt="المهندس هاني توفيق الفقي مؤسس مصنع التقوى" fill className="object-cover" sizes="176px" /></div><div><p className="text-sm font-black text-gold-500">المؤسس والمشرف الفني</p><h2 className="mt-2 text-3xl font-black text-white">م/ هاني توفيق الفقي</h2><p className="mt-4 max-w-3xl text-lg leading-9 text-gray-300">خبرة عملية في تصميم وتصنيع المطابخ والألوميتال منذ أكثر من 22 عاما، مع متابعة مباشرة للتفاصيل التي تحدد جودة الاستخدام اليومي: القياس، الخامة، الإكسسوار، والتشطيب النهائي.</p></div></div></div></section>;
}

function ProjectsSection() {
  return <section className="bg-black-rich py-20 md:py-28"><div className="container mx-auto px-4 md:px-6"><div className="mb-12 max-w-3xl"><p className="mb-3 text-sm font-black text-gold-500">سابقة الأعمال</p><h2 className="text-3xl font-black leading-tight text-white md:text-5xl">أعمال حقيقية تعرض مستوى التشطيب قبل أن تطلب عرض السعر</h2></div><div className="grid gap-5 md:grid-cols-3">{featuredProjects.map((project) => <article key={project.title} className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10"><Image src={project.image} alt={project.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" /><div className="absolute inset-0 bg-gradient-to-t from-black-pure/90 via-black-pure/10 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6"><p className="text-sm font-bold text-gold-400">{project.category}</p><h3 className="mt-2 text-2xl font-black text-white">{project.title}</h3></div></article>)}</div><Link href="/projects" className="mt-10 inline-flex rounded-full border border-white/15 px-7 py-4 font-bold text-white hover:border-gold-500/60">عرض كل المشاريع</Link></div></section>;
}

function ProcessSection() {
  return <section className="bg-black-pure py-20 md:py-28"><div className="container mx-auto px-4 md:px-6"><div className="mb-12 text-center"><p className="mb-3 text-sm font-black text-gold-500">رحلة التنفيذ</p><h2 className="text-3xl font-black text-white md:text-5xl">خطوات واضحة من أول مكالمة حتى التسليم</h2></div><ol className="grid gap-4 md:grid-cols-5">{processSteps.map((step, index) => <li key={step.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"><span className="text-sm font-black text-gold-500">0{index + 1}</span><step.icon className="mt-5 h-8 w-8 text-gold-500" /><h3 className="mt-5 text-xl font-black text-white">{step.title}</h3><p className="mt-3 leading-7 text-gray-400">{step.text}</p></li>)}</ol></div></section>;
}

function FaqSection() {
  return <section className="bg-black-rich py-20 md:py-28"><div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-[.8fr_1.2fr]"><div><p className="mb-3 text-sm font-black text-gold-500">أسئلة شائعة</p><h2 className="text-3xl font-black leading-tight text-white md:text-5xl">إجابات مختصرة قبل التواصل</h2></div><div className="space-y-4">{faqs.map((faq) => <details key={faq.question} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6"><summary className="cursor-pointer list-none text-xl font-black text-white">{faq.question}</summary><p className="mt-4 leading-8 text-gray-400">{faq.answer}</p></details>)}</div></div></section>;
}

function FinalCta() {
  return <section className="bg-black-pure py-16"><div className="container mx-auto px-4 md:px-6"><div className="rounded-2xl border border-gold-500/20 bg-gold-500 p-8 text-center text-black-pure md:p-12"><h2 className="text-3xl font-black md:text-5xl">جاهز تبدأ مطبخك الجديد؟</h2><p className="mx-auto mt-4 max-w-2xl text-lg font-bold leading-8">أرسل المقاسات التقريبية أو صور المساحة، وسنساعدك في اختيار الخامة والتقسيم المناسب.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/quote" className="rounded-full bg-black-pure px-8 py-4 font-black text-white">اطلب عرض سعر</Link><a href={`tel:${siteInfo.phone}`} className="rounded-full border border-black-pure/25 px-8 py-4 font-black">اتصل الآن</a></div></div></div></section>;
}
