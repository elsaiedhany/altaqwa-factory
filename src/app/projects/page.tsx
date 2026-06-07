import { siteInfo } from "@/data/siteData";
import { assetAudit } from "@/data/assetAudit";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, PhoneCall, Image as ImageIcon, MessageCircle } from "lucide-react";

export const metadata = {
  title: `سابقة أعمالنا | مشاريع مطابخ وألوميتال تم تنفيذها بدقة بإشراف م/ هاني الفقي`,
  description: "استعرض معرض مشاريعنا الحقيقية. صور مطابخ ألوميتال وأكريليك تم تنفيذها بأعلى معايير الجودة لعملائنا في مختلف أنحاء مصر تحت إشراف هندسي كامل من المهندس هاني توفيق الفقي."
};

export default function ProjectsPage() {
  // 1. Filter and group projects from assetAudit
  const projectList = assetAudit
    .filter(item => item.category === "kitchen" && item.id) // Only grouped projects
    .map(project => ({
      id: project.id!,
      title: project.title,
      location: project.location || "الدقهلية",
      category: "مطابخ فاخرة",
      images: project.images?.map(img => `/assets/images/${img}`) || [],
      featuredImage: `/assets/images/${project.images?.[0]}`
    }));

  // 2. Define the strategic order for maximum impact
  const orderIds = [
    "project-black-gold",     // 1. Luxury King
    "project-grey-luxury",    // 2. Market Trend
    "project-modern-white",   // 3. Simple & Bright
    "project-wooden-warmth"   // 4. Classic Modern
  ];

  const orderedProjects = orderIds
    .map(id => projectList.find(p => p.id === id))
    .filter(Boolean) as typeof projectList;

  return (
    <div className="pt-24 pb-12 md:pb-20">
      {/* Page Header - Optimized for Mobile First View */}
      <section className="bg-black-rich py-10 md:py-16 lg:py-24 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tight leading-tight">مشاريعنا المنفذة</h1>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto text-balance font-medium leading-relaxed">
            نماذج حقيقية تعكس دقة التصنيع الهندسي وفخامة التنفيذ في منازل عملائنا في المنصورة والسنبلاوين وكافة المحافظات.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
            <a href={`tel:${siteInfo.phone}`} className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-400 text-black-pure font-black py-4 px-8 rounded-full transition-all duration-300 shadow-xl shadow-gold-500/20">
              <PhoneCall className="w-5 h-5" />
              <span>احجز موعد مقايسة مجانية</span>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16 lg:py-20 bg-black-pure">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            {orderedProjects.map((project, index) => (
              <div 
                key={project.id}
                className="group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 hover:border-gold-500/30 transition-all duration-500 flex flex-col shadow-2xl"
              >
                {/* Featured Image Section */}
                <div className="relative aspect-[16/10] md:aspect-video w-full overflow-hidden">
                  <Image 
                    src={project.featuredImage}
                    alt={`${project.title} - تصنيع وتركيب مصنع التقوى`}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    priority={index === 0} // Load first project image first
                  />
                  
                  {/* Badge & Count Overlay */}
                  <div className="absolute top-6 right-6 flex flex-col gap-2 z-10">
                    <div className="bg-black-pure/80 backdrop-blur-md px-4 py-2 rounded-xl text-gold-500 text-xs font-black border border-gold-500/30 shadow-xl">
                      {project.category}
                    </div>
                    <div className="bg-gold-500 text-black-pure px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 shadow-xl self-end">
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>+{project.images.length} صورة</span>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black-pure/90 via-black-pure/20 to-transparent"></div>
                </div>
                
                {/* Project Info & Content */}
                <div className="p-6 sm:p-8 md:p-10 flex flex-col flex-grow relative">
                  <div className="flex items-center gap-2 text-gold-500 mb-2 sm:mb-3">
                    <div className="w-6 sm:w-8 h-[1px] bg-gold-500/50"></div>
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em]">High End Quality</span>
                  </div>
                  
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-gold-400 transition-colors leading-tight">
                    {project.title}
                  </h2>
                  
                  <div className="flex items-center gap-3 text-gray-400 mb-8 sm:mb-10 font-medium bg-white/5 w-fit px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/5">
                    <MapPin className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gold-500" />
                    <span className="text-xs sm:text-sm">{project.location}</span>
                  </div>
                  
                  <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a 
                      href={`https://wa.me/${siteInfo.whatsapp}?text=أريد معاينة لمطبخ بتصميم مشابه لمشروع: ${project.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-black-pure font-black py-3.5 sm:py-4 px-6 rounded-2xl transition-all shadow-lg shadow-gold-500/10"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>استفسر عن السعر</span>
                    </a>
                    <Link 
                      href="/gallery"
                      className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-3.5 sm:py-4 px-6 rounded-2xl transition-all group/link"
                    >
                      <span>عرض كامل الصور</span>
                      <ArrowLeft className="w-4 h-4 transition-transform group-hover/link:-translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-12 md:py-16 lg:py-20 bg-black-rich border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h3 className="text-2xl md:text-4xl font-black text-white mb-6">هل تفكر في تصميم مطبخك القادم؟</h3>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto px-4">احصل على استشارة هندسية مجانية ومعاينة دقيقة لمساحتك من خلال فريقنا الفني المتخصص.</p>
          <Link href="/quote" className="inline-block bg-white text-black-pure font-black py-4 px-10 sm:px-12 rounded-full hover:bg-gold-500 hover:text-black-pure transition-all duration-300">
            احجز موعد مقايسة مجانية
          </Link>
        </div>
      </section>
    </div>
  );
}
