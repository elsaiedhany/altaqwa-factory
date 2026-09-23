/**
 * Media classification used by project, gallery, and factory pages.
 */
export const assetAudit = [
  { file: "eng-hany-tawfik-el-faqy-ceo-taqwa.jpg.jpg", category: "founder", title: "م/ هاني توفيق الفقي" },
  {
    id: "project-grey-luxury",
    title: "مطبخ ألوميتال رمادي فاخر",
    location: "المنصورة",
    category: "kitchen",
    images: ["kitchen-modern-beige-black-glass-1.jpg.jpg", "kitchen-modern-beige-black-glass-2.jpg.jpg", "kitchen-modern-beige-black-glass-3.jpg.jpg"],
  },
  {
    id: "project-modern-white",
    title: "مطبخ أبيض مودرن",
    location: "القاهرة الجديدة",
    category: "kitchen",
    images: ["kitchen-modern-blue-white-1.jpg.jpg", "kitchen-modern-blue-white-2.jpg.jpg", "kitchen-modern-blue-white-3.jpg.jpg", "kitchen-modern-blue-white-4.jpg.jpg", "kitchen-modern-blue-white-5.jpg.jpg"],
  },
  {
    id: "project-wooden-warmth",
    title: "مطبخ بتصميم خشبي دافئ",
    location: "السنبلاوين",
    category: "kitchen",
    images: ["kitchen-modern-wood-warm-1.jpg.jpg", "kitchen-modern-wood-warm-2.jpg.jpg", "kitchen-modern-wood-warm-3.jpg.jpg", "kitchen-modern-wood-warm-4.jpg.jpg", "kitchen-modern-wood-warm-5.jpg.jpg"],
  },
  {
    id: "project-black-gold",
    title: "مطبخ أسود وذهبي فاخر",
    location: "دمياط",
    category: "kitchen",
    images: ["kitchen-modern-cream-black-1.jpg.jpg", "kitchen-modern-cream-black-2.jpg.jpg", "kitchen-modern-cream-black-3.jpg.jpg", "kitchen-modern-cream-black-4.jpg.jpg", "kitchen-modern-cream-black-5.jpg.jpg"],
  },
  { file: "woodworking-machine-sliding-saw-1.jpg.jpg", category: "machine", title: "ماكينة القص الآلي المتطورة" },
  { file: "woodworking-machine-sliding-saw-2.jpg.jpg", category: "machine", title: "وحدة التجميع الهندسي" },
  { file: "woodworking-machine-edge-bander-1.jpg.jpg", category: "machine", title: "ماكينة اللحام والتقفيل" },
  { file: "workshop-production-process-video.mp4.mp4", category: "machine", title: "فيديو: آلية عمل الماكينة الحديثة" },
  { file: "workshop-taqwa-factory-production-video.mp4.mp4", category: "machine", title: "فيديو: دقة القص الآلي" },
  { file: "kitchen-modern-wood-cream-1.jpg.jpg", category: "factory", title: "داخل صالة الإنتاج الرئيسية" },
  { file: "woodworking-machine-sliding-saw-3.jpg.jpg", category: "factory", title: "تجهيز الخامات والقطاعات" },
  { file: "workshop-taqwa-factory-tour-hany-tawfik.mp4.mp4", category: "factory", title: "جولة داخل مصنع التقوى" },
  { file: "kitchen-modern-blue-wood-1.jpg.jpg", category: "installation", title: "عملية التركيب لدى العميل" },
  { file: "interior-design-marble-ceiling-finishing.mp4.mp4", category: "installation", title: "فيديو: لحظة تسليم مطبخ متكامل" },
] as const;
