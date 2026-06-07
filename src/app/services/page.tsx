import { siteInfo, servicesList } from "@/data/siteData";
import { CheckCircle2, PhoneCall, MessageCircle, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: `خدماتنا | تصنيع مطابخ ألوميتال، تصميم 3D، وتوريد وتركيب`,
  description: "خدمات مصنع التقوى: تصميم مطابخ ألوميتال فاخرة تحت إشراف المهندس هاني توفيق. نوفر خدمة تصميم 3D وتوريد وتركيب لجميع المحافظات بأعلى جودة وضمان 20 عاماً."
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-12 md:pb-20">
      {/* Page Header */}
      <section className="bg-black-rich py-10 md:py-16 lg:py-20 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gold-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tight leading-tight">خدماتنا الاحترافية</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto text-balance font-medium leading-relaxed">
            نقدم حلولاً هندسية متكاملة في صناعة الألوميتال، نصممها بأحدث تقنيات الـ 3D وننفذها بدقة الماكينات لتدوم طويلاً.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 md:py-16 lg:py-24 bg-black-pure">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-3 font-black">ماذا نقدم لعملائنا؟</h2>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight">تخصصنا في صناعة الألوميتال والمطابخ <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 underline decoration-gold-500/20 underline-offset-8">تحت الإشراف الهندسي</span></h3>
          </div>

          <div className="space-y-32 lg:space-y-48">
            {servicesList.map((service, index) => {
              const isEven = index % 2 !== 0;
              return (
                <div 
                  key={service.id} 
                  id={service.id}
                  className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 scroll-mt-32`}
                >
                  
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-[3rem] overflow-hidden aspect-[4/3] border border-white/10 shadow-2xl shadow-gold-500/5 group">
                      <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
                        <service.icon className="w-20 h-20 text-neutral-800" />
                      </div>
                      <Image 
                        src={service.image} 
                        alt={`${service.title} - تنفيذ مصنع التقوى للألوميتال والمطابخ`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black-pure/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-gold-500/10 border border-gold-500/20 mb-8 text-gold-500">
                      <service.icon className="w-10 h-10" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-xl mb-10 text-balance font-medium">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-6 mb-12">
                      <li className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center border border-gold-500/30 mt-1">
                          <CheckCircle2 className="w-4 h-4 text-gold-500" />
                        </div>
                        <span className="text-gray-300 text-lg font-medium">استخدام أجود أنواع القطاعات العالمية والوطنية المعتمدة.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center border border-gold-500/30 mt-1">
                          <CheckCircle2 className="w-4 h-4 text-gold-500" />
                        </div>
                        <span className="text-gray-300 text-lg font-medium">رفع مقاسات دقيق جداً لضمان المظهر الانسيابي وعدم وجود فوارق.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center border border-gold-500/30 mt-1">
                          <CheckCircle2 className="w-4 h-4 text-gold-500" />
                        </div>
                        <span className="text-gray-300 text-lg font-medium">ضمان شامل ومتابعة دورية لضمان راحة العميل لسنوات طويلة.</span>
                      </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row items-center gap-6">
                      <Link 
                        href="/quote"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-400 text-black-pure font-black py-4 px-10 rounded-full transition-all duration-300 shadow-lg shadow-gold-500/20 text-lg"
                      >
                        اطلب الخدمة الآن
                        <ArrowLeft className="w-5 h-5" />
                      </Link>
                      <a 
                        href={`tel:${siteInfo.phone}`}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-white font-bold hover:text-gold-500 transition-colors py-4 px-6 border border-white/10 rounded-full"
                      >
                        <PhoneCall className="w-5 h-5" />
                        <span className="dir-ltr">{siteInfo.phone}</span>
                      </a>
                    </div>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Signal */}
      <section className="py-24 bg-black-rich border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8">هل تبحث عن معاينة فنية دقيقة؟</h2>
            <p className="text-gray-400 text-xl mb-12">المهندس هاني توفيق الفقي وفريقه الفني في انتظارك لتصميم مطبخ أحلامك بمواصفات عالمية.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href={`https://wa.me/${siteInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-black py-4 px-10 rounded-full shadow-xl transition-all scale-110">
                <MessageCircle className="w-6 h-6" />
                <span>تحدث معنا عبر واتساب</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
