import { ShieldCheck, Target } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: `المهندس هاني توفيق الفقي | خبرة 22 عاماً في تصنيع المطابخ والألوميتال`,
  description: "تعرف على مسيرة المهندس هاني توفيق الفقي، مؤسس مصنع التقوى للألوميتال في الدقهلية. خبرة تمتد لأكثر من 22 عاماً في تقديم حلول هندسية متكاملة لمطابخ البولي لاك والألوميتال."
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-12 md:pb-20">
      {/* Page Header */}
      <section className="bg-black-rich py-12 md:py-20 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gold-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tight leading-tight">المهندس هاني توفيق الفقي</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto text-balance font-medium leading-relaxed">
            مؤسس مصنع التقوى للألوميتال والمطابخ وخبير التصنيع الهندسي بخبرة تتجاوز 22 عاماً في السوق المصري.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-black-pure relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
            
            <div className="w-full lg:w-1/3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-gold-500/30 shadow-2xl shadow-gold-500/10 group">
                <Image 
                  src="/assets/images/eng-hany-tawfik-el-faqy-ceo-taqwa.jpg.jpg" 
                  alt="المهندس هاني توفيق الفقي مؤسس مصنع التقوى"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                />
              </div>
            </div>

            <div className="w-full lg:w-2/3 space-y-8">
              <div>
                <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-3">المؤسس والمشرف الفني</h2>
                <h3 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
                  رؤية هندسية وخبرة واقعية
                </h3>
              </div>
              
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed text-balance border-r-4 border-gold-500 pr-6">
                <p>
                  بدأت مسيرة المهندس هاني توفيق الفقي في مجال صناعة الألوميتال والمطابخ منذ أكثر من 22 عاماً. وبفضل رؤيته الهندسية وخبرته العميقة، استطاع تأسيس مصنع التقوى عام 2004 ليكون صرحاً صناعياً متميزاً يخدم محافظة الدقهلية ومختلف محافظات مصر.
                </p>
                <p>
                  يؤمن المهندس هاني بأن الأمانة والدقة في التنفيذ هما أساس الاستمرارية. ولذلك، يشرف شخصياً على وضع المعايير الفنية لكافة مراحل الإنتاج داخل المصنع، مع الحرص على دمج الخبرة اليدوية التقليدية بأحدث ماكينات التصنيع الآلية.
                </p>
                <p>
                  من المنصورة إلى السنبلاوين، ارتبط اسم المهندس هاني توفيق الفقي بالجودة والالتزام، حيث يسعى دائماً لتقديم حلول سكنية تجمع بين الصلابة والجمال، مع ضمان حقيقي يؤكد ثقة المصنع في منتجاته.
                </p>
              </div>
              
              <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">المهندس هاني توفيق الفقي</h4>
                  <p className="text-gold-500 font-medium">مؤسس ومدير عام مصنع التقوى</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-black-pure relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-2">تاريخ مصنع التقوى</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8">
                مسيرة بدأت منذ عام 2004 <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600">برؤية واضحة</span> للتميز
              </h3>
              
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed text-balance">
                <p>
                  على مدار عقدين من الزمان، استطاع مصنع التقوى بناء سمعة قوية ترتكز على الالتزام التام بالمواعيد والصدق في اختيار أفضل الخامات العالمية من الألوميتال والبولي لاك (Polylac).
                </p>
                <p>
                  نحن نفخر بأننا لسنا مجرد ورشة تصنيع، بل نحن منظومة صناعية متكاملة تحت إشراف هندسي خبير، تهدف لتحويل المساحات إلى بيئات مريحة وعصرية تليق بعملائنا.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] border border-white/10 shadow-2xl shadow-gold-500/5">
                <Image 
                  src="/assets/images/woodworking-machine-sliding-saw-3.jpg.jpg" 
                  alt="تاريخ وعراقة مصنع التقوى للألوميتال والمطابخ - تنفيذ احترافي"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black-pure/80 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-black-rich border-y border-white/5 relative">
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:border-gold-500/30 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">رؤيتنا</h3>
              <p className="text-gray-400 leading-relaxed text-lg text-balance font-medium">
                أن نكون المصنع الرائد في مجال الألوميتال والمطابخ في مصر، من خلال وضع معايير جديدة للجودة والابتكار تحت إشراف هندسي دائم.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:border-gold-500/30 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">رسالتنا</h3>
              <p className="text-gray-400 leading-relaxed text-lg text-balance font-medium">
                تقديم حلول هندسية متكاملة بتصاميم عصرية وخامات عالية الجودة، وتوفير تجربة متميزة لعملائنا تبدأ من التصميم وحتى التركيب النهائي.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
