import {
  CheckCircle2,
  Factory,
  Hammer,
  Home,
  Layers3,
  Ruler,
  ShieldCheck,
  Sparkles,
  Trophy,
  Truck,
  Wrench,
} from "lucide-react";

export const siteInfo = {
  name: "مصنع التقوى للألوميتال والمطابخ",
  shortName: "مصنع التقوى",
  owner: "م/ هاني توفيق الفقي",
  phone: "01003515207",
  whatsapp: "201003515207",
  email: "saiedhany40@gmail.com",
  location: "كفر الروك، السنبلاوين، الدقهلية، مصر",
  region: "الدقهلية",
  city: "السنبلاوين",
  url: "https://altaqwa-factory.vercel.app",
  foundedYear: 2004,
  workingHours: "السبت إلى الخميس من 9 صباحا حتى 10 مساء",
  socials: {
    facebook: "https://www.facebook.com/share/17cQg2aPhC/",
    instagram: "https://www.instagram.com/altaqwa__7",
  },
  seoKeywords: [
    "مصنع مطابخ ألوميتال",
    "مطابخ بولي لاك في المنصورة",
    "مطابخ ألوميتال الدقهلية",
    "تفصيل مطابخ بالسنبلاوين",
    "دريسنج روم مودرن",
    "شبابيك ألوميتال جامبو",
    "أبواب ألوميتال",
    "مصنع التقوى",
    "هاني الفقي",
  ],
  stats: [
    { id: 1, label: "سنة خبرة", value: "+22", icon: Trophy },
    { id: 2, label: "تصنيع مباشر داخل المصنع", value: "100%", icon: Factory },
    { id: 3, label: "توريد وتركيب", value: "كل مصر", icon: Truck },
    { id: 4, label: "ضمان حقيقي", value: "20 سنة", icon: ShieldCheck },
  ],
};

export const navLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "من نحن", href: "/about" },
  { name: "الخدمات", href: "/services" },
  { name: "المصنع", href: "/factory" },
  { name: "المشاريع", href: "/projects" },
  { name: "المعرض", href: "/gallery" },
  { name: "آراء العملاء", href: "/reviews" },
  { name: "تواصل معنا", href: "/contact" },
];

export const servicesList = [
  {
    id: "kitchens",
    title: "مطابخ ألوميتال وبولي لاك",
    description:
      "تصنيع مطابخ مقاومة للرطوبة والاستخدام اليومي، بتفاصيل هندسية دقيقة وتشطيبات فاخرة تناسب المساحات الحديثة والكلاسيكية.",
    icon: Wrench,
    image: "/assets/images/kitchen-luxury-cream-gold-1.jpg.jpg",
  },
  {
    id: "design-3d",
    title: "تصميم 3D قبل التنفيذ",
    description:
      "نحول المقاسات إلى تصور واضح للخامات والألوان والتقسيم الداخلي حتى تعتمد التصميم قبل بدء التصنيع.",
    icon: Layers3,
    image: "/assets/images/kitchen-modern-wood-cream-1.jpg.jpg",
  },
  {
    id: "dressing",
    title: "دريسنج روم ووحدات تخزين",
    description:
      "حلول تخزين مفصلة حسب المساحة والاستخدام، بإكسسوارات عملية وتشطيب نظيف يحافظ على شكل الغرفة وقيمتها.",
    icon: Home,
    image: "/assets/images/kitchen-modern-wood-warm-1.jpg.jpg",
  },
  {
    id: "windows",
    title: "شبابيك وأبواب ألوميتال",
    description:
      "قطاعات قوية، عزل جيد، وتركيب مضبوط للشبابيك والأبواب في الشقق والفيلات والمحال التجارية.",
    icon: Hammer,
    image: "/assets/images/woodworking-machine-edge-bander-1.jpg.jpg",
  },
  {
    id: "measurement",
    title: "مقايسة ورفع مقاسات",
    description:
      "زيارة فنية دقيقة لتقييم المساحة، تحديد الاحتياجات، وتقديم مقايسة واضحة بدون وعود مبهمة.",
    icon: Ruler,
    image: "/assets/images/woodworking-machine-sliding-saw-1.jpg.jpg",
  },
  {
    id: "installation",
    title: "توريد وتركيب احترافي",
    description:
      "فريق تركيب ملتزم بالمواعيد، يحافظ على الموقع وينهي العمل بتسليم واضح وتجربة استخدام مريحة.",
    icon: CheckCircle2,
    image: "/assets/images/kitchen-modern-blue-wood-1.jpg.jpg",
  },
];

export const reasons = [
  "تصنيع مباشر داخل المصنع، مما يمنحك تحكما أفضل في الجودة والسعر وموعد التسليم.",
  "إشراف فني من م/ هاني توفيق الفقي على مراحل التصميم والتنفيذ والتركيب.",
  "خامات مختارة بعناية وقطاعات قوية وإكسسوارات عملية تتحمل الاستخدام اليومي.",
  "رفع مقاسات دقيق واستغلال ذكي للمساحات الصغيرة والكبيرة.",
  "تصميمات راقية قابلة للتنفيذ وليست صورا دعائية بعيدة عن الواقع.",
  "ضمان حقيقي وخدمة ما بعد البيع لراحة العميل بعد التسليم.",
];

export const featuredProjects = [
  {
    title: "مطبخ كريمي بلمسات ذهبية",
    category: "بولي لاك فاخر",
    image: "/assets/images/kitchen-luxury-cream-gold-1.jpg.jpg",
  },
  {
    title: "مطبخ خشبي دافئ",
    category: "تصميم مودرن",
    image: "/assets/images/kitchen-modern-wood-warm-1.jpg.jpg",
  },
  {
    title: "مطبخ أزرق وأسود",
    category: "ألوان جريئة",
    image: "/assets/images/kitchen-sky-blue-black-drawers-1.jpg.jpg",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "أحمد محمود",
    role: "عميل مطبخ بولي لاك",
    content:
      "التنفيذ كان أدق من المتوقع، والمطبخ خرج مطابقا للتصميم مع التزام واضح في المواعيد.",
    rating: 5,
  },
  {
    id: 2,
    name: "منى إبراهيم",
    role: "دريسنج وشبابيك",
    content:
      "الخامات ممتازة والتقسيم عملي جدا. أكثر ما أعجبني أن كل تفصيلة كانت واضحة قبل التنفيذ.",
    rating: 5,
  },
  {
    id: 3,
    name: "م. كريم طارق",
    role: "مهندس ديكور",
    content:
      "مصنع منظم في التعامل، يفهم الرسومات، ويقدم تشطيبا يليق بالمشاريع السكنية الراقية.",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "هل المعاينة والتسعير مجانيان؟",
    answer: "نعم، يمكنك إرسال بياناتك عبر واتساب أو نموذج طلب التسعير وسيتواصل معك الفريق لتحديد التفاصيل.",
  },
  {
    question: "هل تقدمون تصميم 3D قبل التصنيع؟",
    answer: "نعم، يتم تجهيز تصور واضح بعد رفع المقاسات حتى تعتمد التقسيم والألوان والخامات قبل بدء التنفيذ.",
  },
  {
    question: "هل تعملون خارج الدقهلية؟",
    answer: "نعم، نوفر التوريد والتركيب في مختلف محافظات مصر حسب طبيعة المشروع وجدول التنفيذ.",
  },
  {
    question: "ما الذي يميز الألوميتال والبولي لاك؟",
    answer: "الخامات عملية وسهلة التنظيف ومقاومة للرطوبة، ومع التصنيع الدقيق تمنح مظهرا فاخرا وعمر استخدام طويلا.",
  },
];

export const processSteps = [
  { title: "استشارة", text: "نراجع احتياجاتك والصور المرجعية والميزانية التقريبية.", icon: Sparkles },
  { title: "مقاسات", text: "نرفع المقاسات ونحدد التوصيلات والعوائق ومسارات الحركة.", icon: Ruler },
  { title: "تصميم", text: "نقترح التقسيم والخامات والألوان بتصور قابل للتنفيذ.", icon: Layers3 },
  { title: "تصنيع", text: "تتم أعمال القص والتجميع والتشطيب داخل المصنع.", icon: Factory },
  { title: "تركيب", text: "نسلم المشروع مركبا ونظيفا مع مراجعة نهائية للتفاصيل.", icon: ShieldCheck },
];
