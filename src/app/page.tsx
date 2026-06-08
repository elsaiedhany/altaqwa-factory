import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ReviewsSection from "@/components/home/ReviewsSection";
import Image from "next/image";

export const metadata = {
  title: `مصنع التقوى للألوميتال والمطابخ - خبرة أكثر من 22 عاماً في مصر`,
  description: "مصنع التقوى للألوميتال والمطابخ - خبرة أكثر من 22 عاماً في تصنيع مطابخ الألوميتال والبولي لاك (Polylac)، غرف الدريسنج، والشبابيك. تصنيع مباشر وضمان حقيقي لجميع المحافظات."
};

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Founder Trust Block */}
      <section className="py-16 bg-black-pure relative z-20 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 max-w-5xl mx-auto shadow-2xl">
            <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden border-4 border-gold-500/30 shrink-0 shadow-xl group">
              <Image 
                src="/assets/images/eng-hany-tawfik-el-faqy-ceo-taqwa.jpg.jpg" 
                alt="المهندس هاني توفيق الفقي مؤسس مصنع التقوى"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 128px, 160px"
              />
            </div>
            <div className="text-center md:text-right flex-1">
              <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-2">المؤسس والمشرف الفني</h2>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
                المهندس هاني توفيق الفقي
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed font-medium">
                خبرة أكثر من 22 عاماً في تصميم وتصنيع المطابخ والألوميتال. نلتزم بالأصول الهندسية لضمان تقديم منتج يجمع بين المتانة والجمال في المنصورة والسنبلاوين وكافة محافظات مصر.
              </p>
              <div className="mt-6 flex items-center justify-center md:justify-start gap-4">
                <span className="w-12 h-[1px] bg-gold-500/50"></span>
                <span className="text-white font-bold text-lg italic">رؤية هندسية بلمسة إبداعية</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <ServicesPreview />
      
      {/* Featured Projects Summary */}
      <section className="py-24 bg-black-rich border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gold-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-3">سابقة أعمالنا</h2>
          <h3 className="text-3xl md:text-5xl font-black text-white mb-8">
            مشاريع حقيقية تعكس <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600">فخامة التنفيذ الهندسي</span>
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            استعرض نماذج من أعمالنا التي تم تصميمها وتصنيعها وتركيبها بأعلى معايير الجودة لعملائنا في مختلف المحافظات.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Project 1 */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group border border-white/10">
              <Image src="/assets/images/kitchen-luxury-cream-gold-1.jpg.jpg" alt="مطبخ بولي لاك كريمي وذهبي" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black-pure/90 via-black-pure/20 to-transparent"></div>
              <div className="absolute bottom-6 right-6 text-right">
                <span className="text-gold-500 text-sm font-bold mb-1 block">مطابخ فاخرة</span>
                <h4 className="text-white text-xl font-black">مطبخ كريمي وذهبي</h4>
              </div>
            </div>
            {/* Project 2 */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group border border-white/10">
              <Image src="/assets/images/kitchen-modern-wood-warm-1.jpg.jpg" alt="مطبخ مودرن بتصميم خشبي" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black-pure/90 via-black-pure/20 to-transparent"></div>
              <div className="absolute bottom-6 right-6 text-right">
                <span className="text-gold-500 text-sm font-bold mb-1 block">تصميم مودرن</span>
                <h4 className="text-white text-xl font-black">مطبخ بتصميم خشبي دافئ</h4>
              </div>
            </div>
            {/* Project 3 */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group border border-white/10 md:mt-12">
              <Image src="/assets/images/kitchen-sky-blue-black-drawers-1.jpg.jpg" alt="مطبخ أزرق سماوي وأسود" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black-pure/90 via-black-pure/20 to-transparent"></div>
              <div className="absolute bottom-6 right-6 text-right">
                <span className="text-gold-500 text-sm font-bold mb-1 block">تصميم عصري</span>
                <h4 className="text-white text-xl font-black">مطبخ أزرق سماوي وأسود</h4>
              </div>
            </div>
          </div>

          <a href="/projects" className="inline-block bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-10 rounded-full border border-white/10 transition-all duration-300">
            عرض كافة المشاريع
          </a>
        </div>
      </section>

      <WhyChooseUs />
      
      {/* Factory Preview Section */}
      <section className="py-24 bg-black-pure border-t border-white/5 relative">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-3">صناعة مصرية متميزة</h2>
          <h3 className="text-3xl md:text-5xl font-black text-white mb-8">خط إنتاج متطور يعتمد على <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600">أحدث الماكينات العالمية</span></h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">اكتشف رحلة تصنيع مطبخك من المقايسة وحتى التركيب النهائي عبر مراحل هندسية دقيقة تضمن لك الجودة والمتانة.</p>
          <a href="/factory" className="inline-block bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-10 rounded-full border border-white/10 transition-all duration-300">
            تعرف على خط الإنتاج والماكينات
          </a>
        </div>
      </section>

      <ReviewsSection />
    </>
  );
}
