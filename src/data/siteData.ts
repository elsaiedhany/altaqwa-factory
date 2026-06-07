import { 
  CheckCircle2,
  Trophy,
  ShieldCheck,
  Wrench,
  Factory
} from "lucide-react";

export const siteInfo = {
  name: "شركة التقوى للألوميتال والمطابخ",
  shortName: "مصنع التقوى",
  owner: "م/ هاني توفيق الفقي",
  phone: "01003515207",
  whatsapp: "201003515207",
  email: "info@altaqwafactory.com",
  location: "المنصورة - السنبلاوين - كفر الروك - محافظة الدقهلية - مصر",
  seoKeywords: [
    "مطابخ بولي لاك المنصورة",
    "مطابخ ألوميتال المنصورة",
    "مصنع مطابخ السنبلاوين",
    "مطابخ الدقهلية",
    "تفصيل مطابخ بالمنصورة",
    "تصنيع مطابخ بولي لاك",
    "شبابيك ألوميتال جامبو",
    "المهندس هاني الفقي"
  ],
  workingHours: "يومياً من 9 صباحاً إلى 10 مساءً (الجمعة إجازة)",
  socials: {
    facebook: "https://www.facebook.com/share/17cQg2aPhC/",
    instagram: "https://www.instagram.com/altaqwa__7",
  },
  stats: [
    { id: 1, label: "سنة خبرة", value: "+22", icon: Trophy },
    { id: 2, label: "تصنيع مباشر", value: "من المصنع", icon: Factory },
    { id: 3, label: "نخدم جميع", value: "المحافظات", icon: CheckCircle2 },
    { id: 4, label: "ضمان حقيقي", value: "20 سنة", icon: ShieldCheck },
  ]
};

export const navLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "من نحن", href: "/about" },
  { name: "رحلة التصنيع", href: "/factory" },
  { name: "مشاريعنا", href: "/projects" },
  { name: "معرض الصور", href: "/gallery" },
  { name: "الفيديوهات", href: "/videos" },
  { name: "آراء العملاء", href: "/reviews" },
  { name: "تواصل معنا", href: "/contact" },
];

export const servicesList = [
  {
    id: "kitchens",
    title: "مطابخ ألوميتال وبولي لاك",
    description: "تصنيع مطابخ ألوميتال وبولي لاك (Polylac) عصرية تجمع بين المتانة الفائقة والتصميم الهندسي الدقيق.",
    icon: Wrench,
    image: "/assets/images/kitchen-luxury-cream-gold-1.jpg.jpg"
  },
  {
    id: "design-3d",
    title: "تصميم 3D احترافي",
    description: "شاهد مطبخك قبل التنفيذ عبر خدمة التصميم ثلاثي الأبعاد لضمان مطابقة النتيجة النهائية لتوقعاتك تماماً واستغلال كل مليمتر.",
    icon: Trophy,
    image: "/assets/images/kitchen-modern-wood-cream-1.jpg.jpg"
  },
  {
    id: "supply-install",
    title: "توريد وتركيب لكافة المحافظات",
    description: "خدمات توريد وتركيب احترافية لكافة محافظات مصر بواسطة فريق فني متخصص مع الالتزام التام بالمواعيد وجدة التشطيب.",
    icon: CheckCircle2,
    image: "/assets/images/kitchen-modern-blue-wood-1.jpg.jpg"
  }
];

export const reasons = [
  "خبرة أكثر من 22 عاماً من الإتقان والتميز في السوق المصري.",
  "تصنيع مباشر داخل مصنعنا لضمان التحكم في الجودة والسعر.",
  "دقة هندسية في المقاسات تضمن لك استغلالاً مثالياً لمساحتك.",
  "استخدام خامات معتمدة وأجود أنواع القطاعات العالمية.",
  "التزام صارم بالمواعيد وجدولة دقيقة للتصنيع والتسليم.",
  "خدمة ما بعد البيع وضمان حقيقي وشامل لراحة عملائنا."
];
