import { galleryImages } from "@/data/mediaInventory";
import GalleryGrid from "@/components/ui/GalleryGrid";

export const metadata = {
  title: `معرض الصور | أرقى تصاميم المطابخ والألوميتال بإشراف م/ هاني توفيق الفقي`,
  description: "تصفح أكبر معرض صور لمطابخ ألوميتال وأكريليك في مصر من تنفيذ مصنع التقوى تحت إشراف المهندس هاني توفيق الفقي. صور واقعية تعكس دقة التشطيب وفخامة التنفيذ الهندسي لعملائنا."
};

export default function GalleryPage() {
  // Sort: Premium assets first, then the rest
  const sortedImages = [...galleryImages].sort((a, b) => {
    if (a.isPremium && !b.isPremium) return -1;
    if (!a.isPremium && b.isPremium) return 1;
    return 0;
  });

  const allImages = sortedImages.map(img => ({
    src: img.src,
    alt: `مشروع مصنع التقوى - ${img.category}`,
    category: img.category === "founder" ? "المهندس" :
              img.category === "factory" ? "المصنع" :
              img.category === "machine" ? "الماكينات" :
              img.category === "installation" ? "التركيب" : "المطابخ"
  }));

  return (
    <div className="pt-24 pb-20">
      <section className="bg-black-rich py-10 md:py-16 lg:py-20 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gold-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-6">معرض الصور</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto text-balance font-medium leading-relaxed">
            استعرض سابقة أعمالنا في مختلف المحافظات، من تصنيع المطابخ الفاخرة إلى تركيبات الشبابيك والأبواب بأعلى معايير الدقة.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-black-pure min-h-[50vh]">
        <div className="container mx-auto px-4 md:px-6">
          <GalleryGrid images={allImages} />
        </div>
      </section>
    </div>
  );
}

