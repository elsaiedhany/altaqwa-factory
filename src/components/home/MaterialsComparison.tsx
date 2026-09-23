"use client";

import Link from "next/link";
import { Check, Sparkles, MessageCircle, Calculator, ShieldCheck, Flame, Droplets, Award, Star } from "lucide-react";
import { siteInfo } from "@/data/siteData";

interface MaterialComparisonItem {
  name: string;
  badge: string;
  isPopular?: boolean;
  gloss: string;
  scratchResistance: string;
  waterAndHeat: string;
  cleaning: string;
  bestFor: string;
  approxPrice: string;
  warranty: string;
}

const COMPARISON_DATA: MaterialComparisonItem[] = [
  {
    name: "بولي لاك تركي فاخر (Polylac)",
    badge: "الأكثر طلباً وفخامة",
    isPopular: true,
    gloss: "مظهر زجاجي ملكي فائق اللمعان والعمق",
    scratchResistance: "مقاومة فائقة (درجة صلابة 2H ضد الخدوش اليومية)",
    waterAndHeat: "مقاوم 100% للرطوبة وبخار الطهي وحرارة الأفران",
    cleaning: "فائق السهولة بمسحة قماش قطنية ناعمة",
    bestFor: "المطابخ المودرن الفاخرة، الفيلات، والشقق العصرية",
    approxPrice: "من 7,000 إلى 7,500 ج.م / م²",
    warranty: "20 سنة ضمان حقيقي",
  },
  {
    name: "ألوميتال كلادينج دبل ثقيل",
    badge: "الأقوى عمراً وتحملاً",
    gloss: "عصري مطفي أو شبه لامع بألوان متعددة",
    scratchResistance: "شيت ألومنيوم دبل عالي الكثافة لا يخدش بسهولة",
    waterAndHeat: "مقاوم تام للحرائق، المياه، والحشرات 100%",
    cleaning: "سهل جداً بالماء ومساحيق التنظيف المعتادة",
    bestFor: "الاستخدام الشاق، المطابخ العائلية الكبيرة، وعشاق الألوميتال",
    approxPrice: "من 6,000 إلى 6,500 ج.م / م²",
    warranty: "20 سنة ضمان حقيقي",
  },
  {
    name: "يوفي لاك حديث (UV Lac)",
    badge: "عصري وألوان هادئة",
    gloss: "مات (Matte) مخملي ناعم أو لامع أنيق",
    scratchResistance: "طبقة معالجة بالأشعة فوق البنفسجية ضد البهتان",
    waterAndHeat: "عازل ممتاز للبخار والحرارة المتوسطة",
    cleaning: "سلس ولا يترك بصمات أصابع واضحة",
    bestFor: "التصاميم الهادئة الإسكندنافية والمساحات المفتوحة",
    approxPrice: "من 6,500 إلى 7,000 ج.م / م²",
    warranty: "20 سنة ضمان حقيقي",
  },
  {
    name: "ألوميتال فايبر جلاس معتمد",
    badge: "عملي واقتصادي",
    gloss: "كلاسيكي عملي وخفيف الوزن",
    scratchResistance: "جيد للاستخدام المنزلي الطبيعي",
    waterAndHeat: "مقاوم للماء والرطوبة 100% بدون صدأ",
    cleaning: "سريع وسهل الصيانة",
    bestFor: "المطابخ الاقتصادية، وحدات الأوفيس، والشقق المؤجرة",
    approxPrice: "من 4,600 إلى 5,200 ج.م / م²",
    warranty: "20 سنة ضمان حقيقي",
  },
];

export default function MaterialsComparison() {
  return (
    <section className="relative overflow-hidden bg-black-rich py-20 md:py-28" id="materials-guide">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-gold-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 left-1/4 h-80 w-80 rounded-full bg-gold-500/5 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-black text-gold-400">
            <Sparkles className="h-3.5 w-3.5" />
            دليل المقارنة الشامل 2025 / 2026
          </span>
          <h2 className="mt-3 text-3xl font-black leading-tight text-white md:text-5xl">
            مقارنة خامات المطابخ:{" "}
            <span className="bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 bg-clip-text text-transparent">
              كيف تختار الخامة الأنسب لمنزلك؟
            </span>
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-300">
            مقارنة هندسية شفافة توضح لك الفروق الدقيقة في الصلابة، مقاومة المياه وبخار الطهي،
            والتكلفة التقريبية لمساعدتك في اتخاذ القرار الصحيح قبل بدء التصنيع.
          </p>
        </div>

        {/* Comparison Cards / Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {COMPARISON_DATA.map((mat) => (
            <article
              key={mat.name}
              className={`relative flex flex-col justify-between rounded-3xl border p-6 transition-all duration-500 md:p-8 ${
                mat.isPopular
                  ? "border-gold-500 bg-gradient-to-b from-gold-500/15 via-white/[0.05] to-black-pure shadow-[0_15px_40px_rgba(209,141,24,0.18)]"
                  : "border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] hover:border-gold-500/40"
              }`}
            >
              {mat.isPopular && (
                <div className="absolute -top-3.5 right-6 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-4 py-1 text-xs font-black text-black-pure shadow-md">
                  الخيار الأكثر طلباً
                </div>
              )}

              <div>
                <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold text-gold-400">
                  {mat.badge}
                </span>

                <h3 className="mt-3 text-xl font-black text-white">{mat.name}</h3>

                <div className="mt-6 space-y-4 text-xs leading-6 text-gray-300">
                  <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                    <span className="block font-bold text-gold-400">اللمعان والمظهر:</span>
                    <p className="mt-0.5 text-gray-300">{mat.gloss}</p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                    <span className="block font-bold text-gold-400">مقاومة الخدش والصلابة:</span>
                    <p className="mt-0.5 text-gray-300">{mat.scratchResistance}</p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                    <span className="block font-bold text-gold-400">مقاومة الماء وبخار الطهي:</span>
                    <p className="mt-0.5 text-gray-300">{mat.waterAndHeat}</p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                    <span className="block font-bold text-gold-400">الأنسب لمن؟</span>
                    <p className="mt-0.5 text-gray-300">{mat.bestFor}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-5">
                <div className="mb-4 flex items-baseline justify-between">
                  <span className="text-xs text-gray-400 font-bold">متوسط سعر المتر:</span>
                  <span className="text-lg font-black text-gold-400">{mat.approxPrice}</span>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-gray-300 mb-5">
                  <ShieldCheck className="h-4 w-4 text-gold-500 shrink-0" />
                  <span>{mat.warranty}</span>
                </div>

                <Link
                  href="/quote"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white/10 py-3 text-xs font-black text-white transition hover:bg-gold-500 hover:text-black-pure"
                >
                  <Calculator className="h-4 w-4" />
                  احسب تكلفتك بهذه الخامة
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Engineer's Advice Quote Banner */}
        <div className="mt-14 rounded-3xl border border-gold-500/30 bg-gradient-to-r from-gold-500/10 via-black-pure to-gold-500/10 p-8 md:p-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-gold-400">
                <Award className="h-4 w-4" />
                استشارة هندسية من {siteInfo.owner}
              </span>
              <h3 className="mt-2 text-xl font-black text-white md:text-2xl">
                محتار بين البولي لاك والألوميتال الكلادينج؟
              </h3>
              <p className="mt-2 text-sm leading-7 text-gray-300">
                اختيار الخامة يعتمد على طبيعة إضاءة مطبخك، مساحة التهوية، ونمط استخدام الأسرة. تواصل
                معنا وسيقوم المهندس هاني بتقديم استشارة مجانية ورفع المقاسات لمساعدتك في اتخاذ
                القرار الأضمن لاستثمارك.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${siteInfo.whatsapp}?text=${encodeURIComponent("مرحباً م/ هاني، استشيرك في اختيار الخامة الأنسب لمطبخي (بولي لاك أم ألوميتال كلادينج)")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3 text-sm font-black text-black-pure shadow-lg shadow-gold-500/20 transition hover:bg-gold-400"
              >
                <MessageCircle className="h-4 w-4" />
                استشر المهندس هاني الآن
              </a>
              <Link
                href="/quote"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-gold-500/60"
              >
                حاسبة المقايسة الذكية
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
