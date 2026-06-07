/**
 * ASSET AUDIT MANIFEST
 * This file serves as the single source of truth for all media classification.
 * All classifications are based on a manual visual audit of factory-assets.
 */

export const assetAudit = [
  // FOUNDER / ENGINEER
  { file: "eng-hany-tawfik-el-faqy-ceo-taqwa.jpg.jpg", category: "founder", title: "م/ هاني توفيق الفقي" },

  // KITCHEN PROJECTS (GROUPED)
  { 
    id: "project-grey-luxury",
    title: "مطبخ ألوميتال رمادي فاخر",
    location: "المنصورة",
    category: "kitchen",
    images: [
      "kitchen-modern-beige-black-glass-1.jpg.jpg",
      "kitchen-modern-beige-black-glass-2.jpg.jpg",
      "kitchen-modern-beige-black-glass-3.jpg.jpg"
    ]
  },
  {
    id: "project-modern-white",
    title: "مطبخ أكريليك أبيض مودرن",
    location: "التجمع الخامس",
    category: "kitchen",
    images: [
      "kitchen-modern-blue-white-1.jpg.jpg",
      "kitchen-modern-blue-white-2.jpg.jpg",
      "kitchen-modern-blue-white-3.jpg.jpg",
      "kitchen-modern-blue-white-4.jpg.jpg",
      "kitchen-modern-blue-white-5.jpg.jpg"
    ]
  },
  {
    id: "project-wooden-warmth",
    title: "مطبخ بتصميم خشبي دافئ",
    location: "السنبلاوين",
    category: "kitchen",
    images: [
      "kitchen-modern-wood-warm-1.jpg.jpg",
      "kitchen-modern-wood-warm-2.jpg.jpg",
      "kitchen-modern-wood-warm-3.jpg.jpg",
      "kitchen-modern-wood-warm-4.jpg.jpg",
      "kitchen-modern-wood-warm-5.jpg.jpg"
    ]
  },
  {
    id: "project-black-gold",
    title: "مطبخ ملكي أسود وذهبي",
    location: "دمياط",
    category: "kitchen",
    images: [
      "kitchen-modern-cream-black-1.jpg.jpg",
      "kitchen-modern-cream-black-2.jpg.jpg",
      "kitchen-modern-cream-black-3.jpg.jpg",
      "kitchen-modern-cream-black-4.jpg.jpg",
      "kitchen-modern-cream-black-5.jpg.jpg"
    ]
  },

  // MACHINES & PRODUCTION LINE
  { file: "woodworking-machine-sliding-saw-1.jpg.jpg", category: "machine", title: "ماكينة القص الآلي المتطورة" },
  { file: "woodworking-machine-sliding-saw-2.jpg.jpg", category: "machine", title: "وحدة التجميع الهندسي" },
  { file: "woodworking-machine-edge-bander-1.jpg.jpg", category: "machine", title: "ماكينة اللحام والتقفيل" },
  { file: "IMG-20260606-WA0056.jpg", category: "machine", title: "خط الإنتاج - المرحلة السادسة" },
  { file: "workshop-production-process-video.mp4.mp4", category: "machine", title: "فيديو: آلية عمل الماكينة الحديثة" },
  { file: "workshop-taqwa-factory-production-video.mp4.mp4", category: "machine", title: "فيديو: دقة القص الآلي" },

  // FACTORY & WORKSHOP
  { file: "kitchen-modern-wood-cream-1.jpg.jpg", category: "factory", title: "داخل صالة الإنتاج الرئيسية" },
  { file: "woodworking-machine-sliding-saw-3.jpg.jpg", category: "factory", title: "تجهيز الخامات والقطاعات" },
  { file: "IMG-20260606-WA0084.jpg", category: "factory", title: "قسم مراقبة الجودة" },
  { file: "workshop-taqwa-factory-tour-hany-tawfik.mp4.mp4", category: "factory", title: "جولة داخل مصنع التقوى" },

  // INSTALLATIONS
  { file: "kitchen-modern-blue-wood-1.jpg.jpg", category: "installation", title: "عملية التركيب لدى العميل" },
  { file: "IMG-20260605-WA0056.jpg", category: "installation", title: "تركيب نهائي متكامل" },
  { file: "interior-design-marble-ceiling-finishing.mp4.mp4", category: "installation", title: "فيديو: لحظة تسليم مطبخ متكامل" },

  // OTHERS (DRESSING/WINDOWS - If any identified)
  { file: "IMG-20260605-WA0028.jpg", category: "unknown", title: "لقطة تفصيلية" },
  { file: "IMG-20260605-WA0029.jpg", category: "unknown", title: "لقطة تفصيلية" },
  { file: "IMG-20260605-WA0030.jpg", category: "unknown", title: "لقطة تفصيلية" }
];
