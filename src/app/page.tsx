import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Calculator, CheckCircle2, MapPin, MessageCircle, PhoneCall, Sparkles } from "lucide-react";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import MaterialsComparison from "@/components/home/MaterialsComparison";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ReviewsSection from "@/components/home/ReviewsSection";
import { faqs, featuredProjects, processSteps, siteInfo } from "@/data/siteData";

export const metadata: Metadata = {
  title: "مصنع التقوى للألوميتال والمطابخ | مطابخ فاخرة بالدقهلية ومصر",
  description:
    "المصنع الأول لتصميم وتصنيع مطابخ ألوميتال وبولي لاك ويوفي لاك ودريسنج روم بالمنصورة والسنبلاوين والدقهلية بخبرة +22 عاماً وضمان 20 سنة بإشراف م/ هاني توفيق الفقي.",
  alternates: { canonical: "/" },
  keywords: [
    ...siteInfo.seoKeywords,
    "مصنع مطابخ بالمنصورة",
    "مطابخ بولي لاك تركي",
    "اسعار مطابخ الالوميتال 2025",
    "اسعار مطابخ البولي لاك في مصر",
    "مطابخ كلادينج الدقهلية",
    "دريسنج روم المنصورة",
  ],
};

const citiesServed = [
  { name: "السنبلاوين", role: "مقر المصنع وصالة الإنتاج" },
  { name: "المنصورة", role: "توريد وتركيب يومي للشقق والفيلات" },
  { name: "ميت غمر", role: "معاينة وتركيب مجاني" },
  { name: "طلخا", role: "مشاريع سكنية وتجارية" },
  { name: "دكرنس", role: "مطابخ ودريسنج مودرن" },
  { name: "بلقاس وشربين", role: "خدمة شاملة لكافة المراكز" },
  { name: "القاهرة الجديدة والتجمع", role: "تنفيذ الفيلات والقصور" },
  { name: "دمياط وبورسعيد", role: "توريد مباشر وضمان معتمد" },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FounderSection />
      <ServicesPreview />
      <CalculatorTeaser />
      <MaterialsComparison />
      <ProjectsSection />
      <WhyChooseUs />
      <ProcessSection />
      <LocalCoverageSection />
      <ReviewsSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}

function FounderSection() {
  return (
    <section className="bg-black-pure py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-2xl md:grid-cols-[200px_1fr] md:p-10">
          <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-2xl border-2 border-gold-500/40 shadow-xl md:h-48 md:w-48">
            <Image
              src="/assets/images/eng-hany-tawfik-el-faqy-ceo-taqwa.jpg.jpg"
              alt="المهندس هاني توفيق الفقي مؤسس مصنع التقوى"
              fill
              className="object-cover"
              sizes="192px"
            />
          </div>
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 px-3.5 py-1 text-xs font-black text-gold-400">
              <Sparkles className="h-3 w-3" />
              المؤسس والمشرف الفني
            </span>
            <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">م/ هاني توفيق الفقي</h2>
            <p className="mt-4 max-w-3xl text-lg leading-9 text-gray-300">
              خبرة عملية في تصميم وتصنيع المطابخ والألوميتال منذ أكثر من 22 عاما، مع متابعة مباشرة
              للتفاصيل التي تحدد جودة الاستخدام اليومي: القياس، الخامة، الإكسسوار، والتشطيب النهائي
              لكل منزل وعميل في الدقهلية ومحافظات مصر.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-gold-400 hover:text-gold-300 transition"
              >
                تعرف على قصة المصنع ورؤيتنا الهندسية
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalculatorTeaser() {
  return (
    <section className="border-y border-white/10 bg-gradient-to-r from-gold-500/15 via-black-pure to-gold-500/15 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 rounded-3xl border border-gold-500/30 bg-white/[0.03] p-8 backdrop-blur-xl md:flex-row md:p-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-gold-500/15 px-3 py-1 text-xs font-black text-gold-400 border border-gold-500/30">
              <Calculator className="h-3.5 w-3.5" />
              أداة ذكية حصرية
            </span>
            <h3 className="mt-3 text-2xl font-black text-white md:text-4xl">
              احسب تكلفة مطبخك بالتقريب في دقيقة واحدة
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-7 text-gray-300">
              اختر نوع الخامة (بولي لاك، ألوميتال كلادينج، دريسنج) وحدد الأمتار لتحصل على تقدير شفاف
              وتفصيلي يشمل التصنيع المباشر والتركيب والضمان 20 سنة.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-gray-400">
              <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1">
                بولي لاك تركي
              </span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1">
                كلادينج دبل
              </span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1">
                مفصلات بلوم نمساوي
              </span>
            </div>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-gold-500 px-8 py-3.5 text-base font-black text-black-pure shadow-lg shadow-gold-500/25 transition hover:bg-gold-400"
            >
              <Calculator className="h-5 w-5" />
              ابدأ الحساب الآن
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="bg-black-rich py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-black text-gold-500">سابقة الأعمال</p>
            <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
              أعمال حقيقية تعرض مستوى التشطيب قبل أن تطلب عرض السعر
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-bold text-gold-400 hover:text-gold-300"
          >
            استعرض كافة المشاريع
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.title}
              href="/projects"
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-black-pure shadow-xl transition-all duration-500 hover:border-gold-500/50"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-pure/95 via-black-pure/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <span className="inline-block rounded-full bg-gold-500/20 px-3 py-1 text-xs font-bold text-gold-400 border border-gold-500/30">
                  {project.category}
                </span>
                <h3 className="mt-2 text-2xl font-black text-white group-hover:text-gold-300 transition-colors">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-4 font-bold text-white transition hover:border-gold-500/60 hover:text-gold-400"
          >
            عرض كل المشاريع المنفذة
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-black-pure py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-black text-gold-500">رحلة التنفيذ</p>
          <h2 className="text-3xl font-black text-white md:text-5xl">
            خطوات واضحة من أول مكالمة حتى التسليم
          </h2>
        </div>
        <ol className="grid gap-4 sm:grid-cols-2 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-gold-500/40"
            >
              <span className="text-sm font-black text-gold-500">0{index + 1}</span>
              <step.icon className="mt-5 h-8 w-8 text-gold-500" />
              <h3 className="mt-5 text-xl font-black text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function LocalCoverageSection() {
  return (
    <section className="border-t border-white/10 bg-black-rich py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1 text-xs font-black text-gold-400">
            <MapPin className="h-3.5 w-3.5" />
            التغطية الجغرافية والتوريد
          </span>
          <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
            خدمات تصنيع وتركيب المطابخ في الدقهلية وكافة محافظات مصر
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-300">
            سواء كنت تؤسس شقتك في المنصورة أو السنبلاوين أو فيلتك في القاهرة الجديدة، فريقنا الفني
            يقوم بالمعاينة ورفع المقاسات والتوصيل والتركيب الاحترافي حتى باب بيتك.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {citiesServed.map((city) => (
            <div
              key={city.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-right transition hover:border-gold-500/40"
            >
              <div className="flex items-center gap-2 text-gold-500 mb-2">
                <MapPin className="h-4 w-4" />
                <h3 className="font-black text-white text-base">{city.name}</h3>
              </div>
              <p className="text-xs text-gray-400 leading-5">{city.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="border-t border-white/10 bg-black-pure py-20 md:py-28">
      <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-sm font-black text-gold-500">أسئلة شائعة</p>
          <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
            إجابات مختصرة ومباشرة قبل التواصل
          </h2>
          <p className="mt-4 text-sm leading-7 text-gray-400">
            جمعنا لك أهم الأسئلة التي يطرحها عملاؤنا بخصوص الخامات، الأسعار، الضمان، وفترات التصنيع.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-gold-400 hover:underline"
            >
              لديك سؤال آخر؟ تحدث مع المهندس هاني مباشرة
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-gold-500/30"
            >
              <summary className="cursor-pointer list-none text-xl font-black text-white group-open:text-gold-400">
                {faq.question}
              </summary>
              <p className="mt-4 text-base leading-8 text-gray-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-black-rich py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="rounded-3xl border border-gold-500/30 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 p-8 text-center text-black-pure shadow-2xl md:p-14">
          <h2 className="text-3xl font-black md:text-5xl">جاهز تبدأ مطبخك الجديد؟</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-bold leading-8 text-black-pure/90">
            أرسل المقاسات التقريبية أو صور المساحة، وسيقوم المهندس هاني بمساعدتك في اختيار الخامة
            والتقسيم المناسب بدون أي التزام.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/quote"
              className="rounded-full bg-black-pure px-8 py-4 font-black text-white shadow-xl transition hover:bg-black-rich"
            >
              اطلب عرض سعر ومقايسة
            </Link>
            <a
              href={`tel:${siteInfo.phone}`}
              className="rounded-full border-2 border-black-pure px-8 py-4 font-black text-black-pure transition hover:bg-black-pure hover:text-white"
            >
              اتصل الآن: {siteInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
