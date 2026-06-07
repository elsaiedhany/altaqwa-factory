import { CheckCircle2, Factory, Cog, Layers, ShieldCheck, Zap, Ruler, PenTool, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: `رحلة التصنيع والماكينات | تكنولوجيا إنتاج المطابخ والألوميتال`,
  description: "اكتشف رحلة التصنيع في مصنع التقوى للألوميتال عبر مراحل هندسية دقيقة، باستخدام أحدث الماكينات العالمية لضمان الدقة الفائقة والسرعة."
};

const productionStages = [
  { id: 1, title: "المعاينة والاستشارة", desc: "بدءاً بزيارة المكان وتقديم استشارة هندسية مجانية لفهم متطلباتك ورؤيتك.", icon: Factory, image: "/assets/images/eng-hany-tawfik-el-faqy-ceo-taqwa.jpg.jpg" },
  { id: 2, title: "القياس الهندسي", desc: "رفع المقاسات بدقة متناهية بالمليمتر لضمان التطابق التام مع المساحة وتفادي الأخطاء.", icon: Ruler },
  { id: 3, title: "التصميم 3D", desc: "رؤية المطبخ قبل التنفيذ عبر خدمة التصميم ثلاثي الأبعاد لاختيار الألوان والتقسيمات.", icon: PenTool, image: "/assets/images/kitchen-modern-wood-cream-1.jpg.jpg" },
  { id: 4, title: "اعتماد المقايسة", desc: "مراجعة نهائية للتصاميم والخامات المختارة مع العميل لضمان الرضا الكامل قبل البدء.", icon: CheckCircle2 },
  { id: 5, title: "تجهيز الخامات", desc: "انتقاء أجود قطاعات الألوميتال المعتمدة والإكسسوارات الأصلية لضمان المتانة.", icon: Layers, image: "/assets/images/kitchen-modern-beige-black-glass-1.jpg.jpg" },
  { id: 6, title: "التصنيع والقص الآلي", desc: "استخدام أحدث ماكينات القص الحديثة لضمان زوايا مثالية وتشطيب ناعم وفائق الدقة.", icon: Cog, video: "/assets/videos/woodworking-machines-workshop-tour-video.mp4.mp4" },
  { id: 7, title: "التجميع الاحترافي", desc: "تجميع أجزاء المطبخ باحترافية عالية لضمان قوة التحمل والثبات لسنوات طويلة.", icon: Zap },
  { id: 8, title: "مراقبة الجودة", desc: "فحص فني شامل لكل تفصيل في المنتج تحت إشراف هندسي مباشر لضمان جودة التشطيب.", icon: ShieldCheck, image: "/assets/images/kitchen-modern-cream-led-1.jpg.jpg" },
  { id: 9, title: "التوريد والتركيب", desc: "تركيب احترافي في موقعك بواسطة فريقنا الفني مع تفعيل الضمان الحقيقي من المصنع.", icon: Truck, video: "/assets/videos/interior-design-marble-ceiling-finishing.mp4.mp4" },
];

export default function FactoryPage() {
  // Extract machine video if available
  const machineVideo = "/assets/videos/woodworking-machines-workshop-tour-video.mp4.mp4";

  return (
    <div className="pt-24 pb-12 md:pb-20">
      {/* Page Header */}
      <section className="bg-black-rich py-10 md:py-16 lg:py-20 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gold-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tight leading-tight">رحلة التصنيع والإتقان</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto text-balance font-medium leading-relaxed">
            تحت الإشراف الفني للمهندس هاني توفيق الفقي، نحول المواصفات الهندسية إلى واقع ملموس من خلال خط إنتاج ذكي يجمع بين الدقة البشرية والتكنولوجيا الآلية.
          </p>
        </div>
      </section>

      {/* 9 Stages Grid */}
      <section className="py-12 md:py-16 lg:py-24 bg-black-pure relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-3">آلية العمل الهندسية</h2>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight">9 مراحل للوصول إلى <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600">الجودة الفائقة</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productionStages.map((stage) => (
              <div key={stage.id} className="group bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-gold-500/30 transition-all duration-500 relative overflow-hidden flex flex-col">
                {/* Media Preview for Stage */}
                {(stage.image || stage.video) && (
                  <div className="relative h-48 w-full overflow-hidden border-b border-white/5">
                    {stage.video ? (
                      <video src={stage.video} className="w-full h-full object-cover" muted loop autoPlay playsInline />
                    ) : (
                      <Image src={stage.image!} alt={stage.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    )}
                    <div className="absolute inset-0 bg-black-pure/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                )}
                
                <div className="p-10 relative">
                  <div className="absolute -right-4 -bottom-4 text-[8rem] font-black text-white/5 group-hover:text-gold-500/5 transition-colors z-0 select-none leading-none">
                    {stage.id}
                  </div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center mb-6 border border-gold-500/20 group-hover:bg-gold-500 group-hover:text-black-pure transition-all duration-500">
                      <stage.icon className="w-7 h-7" />
                    </div>
                    <h4 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                      <span className="text-gold-500 text-sm font-bold tracking-tighter">0{stage.id}.</span>
                      {stage.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed font-medium text-lg">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine & Video Highlight */}
      <section className="py-24 bg-black-rich border-y border-white/5 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-3">تكنولوجيا المستقبل</h2>
              <h3 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8">
                أحدث ماكينات القص <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600">والتجميع الآلي</span>
              </h3>
              
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed text-balance mb-10">
                <p>
                  نعتمد في مصنع التقوى على ماكينات متطورة تضمن لك زوايا قائمة بنسبة 100% وقصاً ناعماً يمنع تسرب الأتربة أو الصوت. الاستثمار في التكنولوجيا هو ما يجعلنا نمنحك ضماناً يصل إلى 20 عاماً.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    "دقة متناهية بالمليمتر لتفادي الفوارق",
                    "سرعة في الإنتاج لتسليم المشاريع الضخمة",
                    "جودة تشطيب تليق بالقصور والفيلات",
                    "إشراف بشري خبير من فنيين معتمدين"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold-500/20 flex items-center justify-center border border-gold-500/30">
                        <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                      </div>
                      <span className="text-white font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/quote" className="inline-flex items-center justify-center gap-3 p-5 px-10 rounded-full bg-gold-500 text-black-pure font-black hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/20 text-lg">
                اطلب تسعير لمشروعك الآن
              </Link>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative rounded-[3rem] overflow-hidden aspect-video border border-gold-500/30 shadow-2xl shadow-gold-500/10 bg-black-pure group">
                {machineVideo ? (
                  <video 
                    src={machineVideo} 
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <Image src="/assets/images/kitchen-modern-wood-cream-1.jpg.jpg" alt="خط الإنتاج" fill className="object-cover" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black-pure via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-8 right-8 left-8 flex items-center justify-between">
                  <span className="text-white font-black text-xl tracking-tighter">بث مباشر من المصنع</span>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse"></div>
                    <span className="text-xs text-red-500 font-bold">LIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Stats */}
      <section className="py-24 bg-black-pure">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "مساحة الإنتاج", val: "1000m²" },
              { label: "ماكينة حديثة", val: "12+" },
              { label: "فني متخصص", val: "50+" },
              { label: "مراقبة جودة", val: "100%" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 rounded-3xl bg-white/5 border border-white/10">
                <p className="text-gold-500 text-sm font-bold uppercase tracking-widest mb-2">{stat.label}</p>
                <h4 className="text-4xl md:text-5xl font-black text-white">{stat.val}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
