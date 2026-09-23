import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Factory,
  Cog,
  Layers,
  ShieldCheck,
  Zap,
  Ruler,
  PenTool,
  Truck,
  ArrowLeft,
  Sparkles,
  PhoneCall,
} from "lucide-react";
import PageHeader, { PrimaryLink, SecondaryAnchor } from "@/components/shared/PageHeader";
import { siteInfo } from "@/data/siteData";

export const metadata: Metadata = {
  title: "رحلة التصنيع والماكينات | تكنولوجيا إنتاج المطابخ والألوميتال",
  description:
    "اكتشف مراحل التصنيع الهندسية في مصنع التقوى للألوميتال والمطابخ بإشراف م/ هاني توفيق الفقي، باستخدام أحدث الماكينات لضمان الدقة والسرعة والضمان 20 عاما.",
  alternates: { canonical: "/factory" },
};

const productionStages = [
  {
    id: 1,
    title: "المعاينة والاستشارة الهندسية",
    desc: "زيارة موقع العميل وفهم متطلبات الاستخدام، توزيع الأجهزة، وحركة الفتح والغلق.",
    icon: Factory,
    image: "/assets/images/eng-hany-tawfik-el-faqy-ceo-taqwa.jpg.jpg",
  },
  {
    id: 2,
    title: "القياس الهندسي بالمليمتر",
    desc: "رفع دقيق للأبعاد والزوايا لتفادي أي فروقات، مع فحص استقامة الجدران ومسارات السباكة والكهرباء.",
    icon: Ruler,
  },
  {
    id: 3,
    title: "التصميم ثلاثي الأبعاد 3D",
    desc: "رؤية المطبخ وتوزيع ألوانه وخاماته بشكل مطابق للواقع قبل البدء في تقطيع لوح واحد.",
    icon: PenTool,
    image: "/assets/images/kitchen-modern-wood-cream-1.jpg.jpg",
  },
  {
    id: 4,
    title: "اعتماد المقايسة والعقد",
    desc: "تحديد تفاصيل الخامات، نوع المفصلات، والجدول الزمني بوضوح وشفافية كاملة.",
    icon: CheckCircle2,
  },
  {
    id: 5,
    title: "انتقاء الخامات والقطاعات",
    desc: "استخدام خامات معتمدة: ألواح بولي لاك تركي، يوفي لاك، وقطاعات ألوميتال ثقيلة.",
    icon: Layers,
    image: "/assets/images/kitchen-modern-beige-black-glass-1.jpg.jpg",
  },
  {
    id: 6,
    title: "القص والتشغيل الآلي",
    desc: "ماكينات تقطيع دقيقة بزوايا قائمة 100% وماكينات شريط الحرف (Edge Bander) لتقفيل ناعم ومانع للمياه.",
    icon: Cog,
    video: "/assets/videos/woodworking-machines-workshop-tour-video.mp4.mp4",
  },
  {
    id: 7,
    title: "التجميع المتين والمفصلات",
    desc: "تركيب شاسيهات ألومنيوم مدعمة، ومفصلات سوفت كلوز بلوم ومسارات أدراج هيدروليكية تتحمل الأوزان.",
    icon: Zap,
  },
  {
    id: 8,
    title: "الفحص ومراقبة الجودة",
    desc: "مراجعة فنية نهائية لكل تفصيل قبل خروج المطبخ من المصنع تحت إشراف م/ هاني الفقي.",
    icon: ShieldCheck,
    image: "/assets/images/kitchen-modern-cream-led-1.jpg.jpg",
  },
  {
    id: 9,
    title: "التوريد والتركيب والضمان",
    desc: "فريق تركيب متخصص يلتزم بنظافة المكان ودقة التثبيت، مع تسليم شهادة الضمان 20 سنة.",
    icon: Truck,
    video: "/assets/videos/interior-design-marble-ceiling-finishing.mp4.mp4",
  },
];

const factorySpecs = [
  { label: "مساحة صالة الإنتاج", val: "1000m²+", desc: "طاقة استيعابية للمشاريع الكبيرة والفيلات" },
  { label: "ماكينات متطورة", val: "12+", desc: "قص ليزري، شريط حرف، وتجميع هيدروليكي" },
  { label: "فريق فني خبير", val: "50+", desc: "حرفيون متخصصون بإشراف هندسي مباشر" },
  { label: "مراقبة وضمان", val: "20 سنة", desc: "ضمان حقيقي ضد عيوب الصناعة والرطوبة" },
];

export default function FactoryPage() {
  const machineVideo = "/assets/videos/woodworking-machines-workshop-tour-video.mp4.mp4";

  return (
    <div className="bg-black-pure">
      <PageHeader
        eyebrow="رحلة التصنيع والإتقان"
        title="تكنولوجيا الإنتاج الهندسية التي تصنع الفارق"
        description="تحت الإشراف الفني المباشر للمهندس هاني توفيق الفقي، نحول المواصفات إلى واقع ملموس من خلال صالة تصنيع مجهزة بأحدث الماكينات لضمان الدقة والسرعة والمتانة."
        actions={
          <>
            <PrimaryLink href="/quote">اطلب مقايسة مصنعك</PrimaryLink>
            <SecondaryAnchor href={`tel:${siteInfo.phone}`}>
              استشر المهندس مباشرة
            </SecondaryAnchor>
          </>
        }
      />

      {/* 9 Stages Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-bold text-gold-400">
              <Sparkles className="h-3.5 w-3.5" />
              المنهجية الفنية المعتمدة
            </span>
            <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
              ٩ مراحل للوصول إلى{" "}
              <span className="bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 bg-clip-text text-transparent">
                الجودة الهندسية الفائقة
              </span>
            </h2>
            <p className="mt-4 text-base leading-8 text-gray-400">
              كل مطبخ يمر بسلسلة من خطوات الضبط والمراجعة لضمان سلامته لسنوات طويلة دون أدنى خلل.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {productionStages.map((stage) => (
              <div
                key={stage.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] shadow-xl transition-all duration-500 hover:border-gold-500/50 hover:shadow-[0_15px_35px_rgba(209,141,24,0.12)]"
              >
                {/* Media Preview if present */}
                {(stage.image || stage.video) && (
                  <div className="relative h-48 w-full overflow-hidden border-b border-white/10 bg-black-rich">
                    {stage.video ? (
                      <video
                        src={stage.video}
                        className="h-full w-full object-cover"
                        muted
                        loop
                        autoPlay
                        playsInline
                      />
                    ) : (
                      <Image
                        src={stage.image!}
                        alt={stage.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black-pure/80 via-transparent to-transparent" />
                  </div>
                )}

                <div className="relative p-8">
                  <div className="pointer-events-none absolute -bottom-4 -left-4 select-none text-[7rem] font-black leading-none text-white/[0.03] transition-colors group-hover:text-gold-500/[0.08]">
                    0{stage.id}
                  </div>

                  <div className="relative z-10">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-500/30 bg-gold-500/10 text-gold-400 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-black-pure">
                      <stage.icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-xl font-black text-white">
                      <span className="ml-2 text-sm font-bold text-gold-500">0{stage.id}.</span>
                      {stage.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-400">{stage.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine & Video Live Section */}
      <section className="border-y border-white/10 bg-black-rich py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-500">
                الاستثمار في المعدات
              </span>
              <h2 className="mt-2 text-3xl font-black leading-tight text-white md:text-5xl">
                ماكينات تقطيع وتجميع حديثة{" "}
                <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                  تمنع الفوارق والتسريب
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-300">
                الفرق الحقيقي بين الورش التقليدية ومصنع متكامل يكمن في دقة المعدات؛ ماكينات التقطيع
                المتطورة وماكينات شريط الحرف الحراري تضمن زوايا قائمة محكمة، وتشطيباً ناعماً يمنع
                تسلل الرطوبة أو الأتربة لخزائن المطبخ.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "قص آلي متطابق بالمليمتر لتفادي أي فجوات بعد التركيب",
                  "تقفيل حواف حراري مقاوم لبخار الماء والحرارة",
                  "تجميع شاسيهات ألومنيوم مدعمة للأجهزة الثقيلة والرخام",
                  "إشراف هندسي متواصل من قياس الموقع حتى التسليم النهائي",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-500" />
                    <span className="text-sm font-bold text-white">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/quote"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3 text-sm font-black text-black-pure transition hover:bg-gold-400"
                >
                  احجز موعد مقايسة
                  <ArrowLeft className="h-4 w-4" />
                </Link>
                <Link
                  href="/videos"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:border-gold-500/60"
                >
                  شاهد فيديوهات الإنتاج
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-video overflow-hidden rounded-3xl border border-gold-500/30 bg-black-pure shadow-2xl shadow-gold-500/10">
                <video
                  src={machineVideo}
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-pure/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <span className="text-sm font-black text-white">لقطة حية من صالة الماكينات</span>
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black-pure/70 px-3 py-1">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                    <span className="text-[10px] font-bold text-red-400">بث حقيقي</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Stats */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {factorySpecs.map((spec, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center transition hover:border-gold-500/40"
              >
                <p className="text-xs font-black uppercase tracking-wider text-gold-500">
                  {spec.label}
                </p>
                <h4 className="mt-2 text-3xl font-black text-white md:text-4xl">{spec.val}</h4>
                <p className="mt-2 text-xs leading-5 text-gray-400">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
