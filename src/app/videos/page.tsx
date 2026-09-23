import type { Metadata } from "next";
import { allVideos } from "@/data/mediaInventory";
import VideosClient, { VideoItem } from "./VideosClient";

export const metadata: Metadata = {
  title: "فيديوهات حقيقية من المصنع | معاينة مباشرة للجودة والتشطيب",
  description:
    "شاهد فيديوهات واقعية لخطوط إنتاج مصنع التقوى، وعمليات تركيب مطابخ الألوميتال، ومعاينة حية لجودة التشطيب والخامات بإشراف م/ هاني توفيق الفقي.",
  alternates: { canonical: "/videos" },
};

// Enhance video titles for high professional presentation while keeping sources
const titleMap: Record<string, string> = {
  "interior-design-marble-ceiling-finishing.mp4.mp4": "تسليم نهائي لمطبخ متكامل مع رخام وإضاءة مدمجة",
  "kitchen-modern-blue-wood-video.mp4.mp4": "استعراض مطبخ أزرق وخشب دافئ مع تشطيب هيدروليك",
  "kitchen-modern-cashmere-black-video-1.mp4.mp4": "مطبخ كشمير مع لمسات سوداء أنيقة للمساحات المودرن",
  "kitchen-modern-wood-cream-black-video-1.mp4.mp4": "تناسق ألوان الخشب والبيج في تشطيب ألوميتال فاخر",
  "kitchen-modern-wood-cream-black-video-2.mp4.mp4": "معاينة الأدراج والوحدات الداخلية وسهولة الحركة",
  "kitchen-modern-wood-cream-black-video-3.mp4.mp4": "إضاءة ليد بروفايل مدمجة في مطبخ بولي لاك حديث",
  "kitchen-modern-wood-cream-black-video.mp4.mp4": "جولة كاملة في مطبخ كلاسيك مودرن بعد التركيب",
  "kitchen-modern-wood-warm-video.mp4.mp4": "مطبخ خشب دافئ مع متانة شاسيه الألوميتال المقاوم للرطوبة",
  "kitchen-modern-wood-warm-video1.mp4.mp4": "تفاصيل زوايا المطبخ والتقفيل الدقيق لمنع الأتربة",
  "kitchen-modern-wood-white-video.mp4.mp4": "مطبخ أبيض ناصع بتوزيع هندسي مريح لحركة الأسرة",
  "modern-kitchen-blue-black-design-video.mp4.mp4": "مطبخ ملكي يجمع بين درجات الكحلي والأسود الفاخر",
  "modern-kitchen-cream-black-gold-design-video-2.mp4.mp4": "لمسات ذهبية راقية مع درجات البيج الملكي",
  "modern-kitchen-cream-black-gold-design.mp4.mp4": "تصميم مطبخ قصر بتفاصيل بار وإضاءة عصرية",
  "modern-kitchen-white-black-lighting-video.mp4.mp4": "إضاءة مسار ذكية مع خامات بولي لاك مقاومة للخدش",
  "modern-kitchen-wood-black-design-video-2.mp4.mp4": "مطبخ أسود وخشب مودرن مع وحدات تخزين ذكية",
  "modern-kitchen-wood-black-design-video-3.mp4.mp4": "اختبار نعومة فتح وإغلاق المفصلات الهيدروليكية",
  "modern-kitchen-wood-black-design-video.mp4.mp4": "مطبخ مودرن كامل التجهيز بمقاسات متناسقة",
  "modern-wood-and-white-kitchen-cabinet-design.mp4.mp4": "خزائن مطبخ خشب وأبيض بتوزيع عملي أنيق",
  "woodworking-edge-banding-process-video.mp4.mp4": "ماكينة شريط الحرف (Edge Bander) لتقفيل فائق النعومة",
  "woodworking-machines-workshop-tour-video.mp4.mp4": "جولة داخل ورشة الماكينات وقسم القص الهندسي",
  "workshop-production-process-video.mp4.mp4": "مراحل التصنيع الآلي الدقيق داخل مصنع التقوى",
  "workshop-taqwa-factory-production-video.mp4.mp4": "دقة تقطيع قطاعات الألوميتال بزوايا 45 درجة مضبوطة",
  "workshop-taqwa-factory-production-video1.mp4.mp4": "تجميع وحدات المطبخ وفحص المتانة قبل الخروج للعميل",
  "workshop-taqwa-factory-tour-hany-tawfik.mp4.mp4": "جولة المصنع بإشراف المهندس هاني توفيق الفقي",
};

export default function VideosPage() {
  const videos: VideoItem[] = allVideos.map((v) => ({
    id: v.id,
    src: v.src,
    title: titleMap[v.id] || v.title,
    category: v.category,
  }));

  return <VideosClient videos={videos} />;
}
