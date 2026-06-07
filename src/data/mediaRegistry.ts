/**
 * MEDIA REGISTRY
 * Single source of truth for all physical media assets.
 * All paths are relative to the public directory.
 */

// 1. IDENTITY & FOUNDER
const founderObj = {
  portrait: "/assets/images/eng-hany-tawfik-el-faqy-ceo-taqwa.jpg.jpg",
  name: "م/ هاني توفيق الفقي",
  role: "مؤسس مصنع التقوى",
  alt: "المهندس هاني توفيق الفقي - المدير التنفيذي ومؤسس مصنع التقوى للألوميتال والمطابخ"
};

// 2. MACHINES
const machinesObj = {
  images: [
    "/assets/images/woodworking-machine-sliding-saw-1.jpg.jpg",
    "/assets/images/woodworking-machine-sliding-saw-2.jpg.jpg",
    "/assets/images/woodworking-machine-sliding-saw-3.jpg.jpg",
    "/assets/images/woodworking-machine-edge-bander-1.jpg.jpg"
  ],
  videos: [
    "/assets/videos/woodworking-machines-workshop-tour-video.mp4.mp4",
    "/assets/videos/woodworking-edge-banding-process-video.mp4.mp4"
  ]
};

// 3. FACTORY & WORKSHOP
const factoryObj = {
  hero: "/assets/images/kitchen-modern-wood-cream-1.jpg.jpg",
  machines: machinesObj.images,
  storage: "/assets/images/woodworking-machine-sliding-saw-3.jpg.jpg",
  qualityControl: "/assets/images/eng-hany-tawfik-el-faqy-ceo-taqwa.jpg.jpg",
  videos: [
    "/assets/videos/workshop-taqwa-factory-tour-hany-tawfik.mp4.mp4",
    "/assets/videos/workshop-taqwa-factory-production-video.mp4.mp4",
    "/assets/videos/workshop-taqwa-factory-production-video1.mp4.mp4",
    "/assets/videos/workshop-production-process-video.mp4.mp4"
  ]
};

// 4. INSTALLATIONS
const installationsObj = {
  videos: [
    "/assets/videos/interior-design-marble-ceiling-finishing.mp4.mp4"
  ]
};

// 5. PROJECTS (Grouped by verified semantic prefixes)
const projectsArr = [
  {
    id: "luxury-cream-gold",
    title: "مطبخ كريمي وذهبي فاخر",
    cover: "/assets/images/kitchen-luxury-cream-gold-1.jpg.jpg",
    images: [
      "/assets/images/kitchen-luxury-cream-gold-1.jpg.jpg",
      "/assets/images/kitchen-luxury-cream-gold-2.jpg.jpg",
      "/assets/images/kitchen-luxury-cream-gold-3.jpg.jpg",
      "/assets/images/kitchen-luxury-cream-gold-4.jpg.jpg",
      "/assets/images/kitchen-luxury-cream-gold-5.jpg.jpg",
      "/assets/images/kitchen-luxury-cream-gold-6.jpg.jpg"
    ]
  },
  {
    id: "luxury-cream-gold-bar",
    title: "مطبخ بار كريمي وذهبي",
    cover: "/assets/images/kitchen-luxury-cream-gold-bar-1.jpg.jpg",
    images: [
      "/assets/images/kitchen-luxury-cream-gold-bar-1.jpg.jpg",
      "/assets/images/kitchen-luxury-cream-gold-bar-2.jpg.jpg",
      "/assets/images/kitchen-luxury-cream-gold-bar-3.jpg.jpg",
      "/assets/images/kitchen-luxury-cream-gold-bar-4.jpg.jpg",
      "/assets/images/kitchen-luxury-cream-gold-bar-5.jpg.jpg",
      "/assets/images/kitchen-luxury-cream-gold-bar-6.jpg.jpg",
      "/assets/images/kitchen-luxury-cream-gold-bar-7.jpg.jpg"
    ]
  },
  {
    id: "modern-wood-cream",
    title: "مطبخ خشب وكريمي مودرن",
    cover: "/assets/images/kitchen-modern-wood-cream-1.jpg.jpg",
    images: [
      "/assets/images/kitchen-modern-wood-cream-1.jpg.jpg",
      "/assets/images/kitchen-modern-wood-cream-2.jpg.jpg",
      "/assets/images/kitchen-modern-wood-cream-3.jpg.jpg",
      "/assets/images/kitchen-modern-wood-cream-4.jpg.jpg",
      "/assets/images/kitchen-modern-wood-cream-5.jpg.jpg",
      "/assets/images/kitchen-modern-wood-cream-6.jpg.jpg",
      "/assets/images/kitchen-modern-wood-cream-7.jpg.jpg",
      "/assets/images/kitchen-modern-wood-cream-8.jpg.jpg",
      "/assets/images/kitchen-modern-wood-cream-9.jpg.jpg",
      "/assets/images/kitchen-modern-wood-cream-10.jpg.jpg",
      "/assets/images/kitchen-modern-wood-cream-11.jpg.jpg",
      "/assets/images/kitchen-modern-wood-cream-12.jpg.jpg",
      "/assets/images/kitchen-modern-wood-cream-13.jpg.jpg",
      "/assets/images/kitchen-modern-wood-cream-14.jpg.jpg",
      "/assets/images/kitchen-modern-wood-cream-15.jpg.jpg"
    ]
  },
  {
    id: "sky-blue-black",
    title: "مطبخ أزرق سماوي وأسود",
    cover: "/assets/images/kitchen-sky-blue-black-drawers-1.jpg.jpg",
    images: [
      "/assets/images/kitchen-sky-blue-black-drawers-1.jpg.jpg",
      "/assets/images/kitchen-sky-blue-black-drawers-2.jpg.jpg",
      "/assets/images/kitchen-sky-blue-black-drawers-3.jpg.jpg",
      "/assets/images/kitchen-sky-blue-black-drawers-4.jpg.jpg",
      "/assets/images/kitchen-sky-blue-black-drawers-5.jpg.jpg",
      "/assets/images/kitchen-sky-blue-black-drawers-6.jpg.jpg",
      "/assets/images/kitchen-sky-blue-black-drawers-7.jpg.jpg",
      "/assets/images/kitchen-sky-blue-black-drawers-8.jpg.jpg",
      "/assets/images/kitchen-sky-blue-black-drawers-9.jpg.jpg",
      "/assets/images/kitchen-sky-blue-black-drawers-10.jpg.jpg",
      "/assets/images/kitchen-sky-blue-black-drawers-11.jpg.jpg",
      "/assets/images/kitchen-sky-blue-black-drawers-12.jpg.jpg",
      "/assets/images/kitchen-sky-blue-black-drawers-13.jpg.jpg",
      "/assets/images/kitchen-sky-blue-black-drawers-14.jpg.jpg",
      "/assets/images/kitchen-sky-blue-black-drawers-15.jpg.jpg",
      "/assets/images/kitchen-sky-blue-black-drawers-16.jpg.jpg",
      "/assets/images/kitchen-sky-blue-black-drawers-17.jpg.jpg",
      "/assets/images/kitchen-sky-blue-black-drawers-18.jpg.jpg"
    ]
  }
];

// 6. ALL VIDEOS (Full flat list)
const allVideosArr = [
  "/assets/videos/interior-design-marble-ceiling-finishing.mp4.mp4",
  "/assets/videos/kitchen-modern-blue-wood-video.mp4.mp4",
  "/assets/videos/kitchen-modern-cashmere-black-video-1.mp4.mp4",
  "/assets/videos/kitchen-modern-wood-cream-black-video-1.mp4.mp4",
  "/assets/videos/kitchen-modern-wood-cream-black-video-2.mp4.mp4",
  "/assets/videos/kitchen-modern-wood-cream-black-video-3.mp4.mp4",
  "/assets/videos/kitchen-modern-wood-cream-black-video.mp4.mp4",
  "/assets/videos/kitchen-modern-wood-warm-video.mp4.mp4",
  "/assets/videos/kitchen-modern-wood-warm-video1.mp4.mp4",
  "/assets/videos/kitchen-modern-wood-white-video.mp4.mp4",
  "/assets/videos/modern-kitchen-blue-black-design-video.mp4.mp4",
  "/assets/videos/modern-kitchen-cream-black-gold-design-video-2.mp4.mp4",
  "/assets/videos/modern-kitchen-cream-black-gold-design.mp4.mp4",
  "/assets/videos/modern-kitchen-white-black-lighting-video.mp4.mp4",
  "/assets/videos/modern-kitchen-wood-black-design-video-2.mp4.mp4",
  "/assets/videos/modern-kitchen-wood-black-design-video-3.mp4.mp4",
  "/assets/videos/modern-kitchen-wood-black-design-video.mp4.mp4",
  "/assets/videos/modern-wood-and-white-kitchen-cabinet-design.mp4.mp4",
  "/assets/videos/woodworking-edge-banding-process-video.mp4.mp4",
  "/assets/videos/woodworking-machines-workshop-tour-video.mp4.mp4",
  "/assets/videos/workshop-production-process-video.mp4.mp4",
  "/assets/videos/workshop-taqwa-factory-production-video.mp4.mp4",
  "/assets/videos/workshop-taqwa-factory-production-video1.mp4.mp4",
  "/assets/videos/workshop-taqwa-factory-tour-hany-tawfik.mp4.mp4"
];

// 7. ALL IMAGES (Full flat list for comprehensive coverage)
const allImagesArr = [
  "/assets/images/eng-hany-tawfik-el-faqy-ceo-taqwa.jpg.jpg",
  "/assets/images/kitchen-modern-beige-black-glass-3.jpg.jpg",
  "/assets/images/kitchen-luxury-cream-gold-1.jpg.jpg",
  "/assets/images/kitchen-luxury-cream-gold-2.jpg.jpg",
  "/assets/images/kitchen-luxury-cream-gold-3.jpg.jpg",
  "/assets/images/kitchen-luxury-cream-gold-4.jpg.jpg",
  "/assets/images/kitchen-luxury-cream-gold-5.jpg.jpg",
  "/assets/images/kitchen-luxury-cream-gold-6.jpg.jpg",
  "/assets/images/kitchen-luxury-cream-gold-bar-1.jpg.jpg",
  "/assets/images/kitchen-luxury-cream-gold-bar-2.jpg.jpg",
  "/assets/images/kitchen-luxury-cream-gold-bar-3.jpg.jpg",
  "/assets/images/kitchen-luxury-cream-gold-bar-4.jpg.jpg",
  "/assets/images/kitchen-luxury-cream-gold-bar-5.jpg.jpg",
  "/assets/images/kitchen-luxury-cream-gold-bar-6.jpg.jpg",
  "/assets/images/kitchen-luxury-cream-gold-bar-7.jpg.jpg",
  "/assets/images/kitchen-modern-beige-black-glass-1.jpg.jpg",
  "/assets/images/kitchen-modern-beige-black-glass-2.jpg.jpg",
  "/assets/images/kitchen-modern-blue-white-1.jpg.jpg",
  "/assets/images/kitchen-modern-blue-white-2.jpg.jpg",
  "/assets/images/kitchen-modern-blue-white-3.jpg.jpg",
  "/assets/images/kitchen-modern-blue-white-4.jpg.jpg",
  "/assets/images/kitchen-modern-blue-white-5.jpg.jpg",
  "/assets/images/kitchen-modern-blue-wood-1.jpg.jpg",
  "/assets/images/kitchen-modern-blue-wood-2.jpg.jpg",
  "/assets/images/kitchen-modern-blue-wood-3.jpg.jpg",
  "/assets/images/kitchen-modern-blue-wood-4.jpg.jpg",
  "/assets/images/kitchen-modern-cream-black-1.jpg.jpg",
  "/assets/images/kitchen-modern-cream-black-2.jpg.jpg",
  "/assets/images/kitchen-modern-cream-black-3.jpg.jpg",
  "/assets/images/kitchen-modern-cream-black-4.jpg.jpg",
  "/assets/images/kitchen-modern-cream-black-5.jpg.jpg",
  "/assets/images/kitchen-modern-cream-black-6.jpg.jpg",
  "/assets/images/kitchen-modern-cream-black-7.jpg.jpg",
  "/assets/images/kitchen-modern-cream-black-8.jpg.jpg",
  "/assets/images/kitchen-modern-cream-black-9.jpg.jpg",
  "/assets/images/kitchen-modern-cream-led-1.jpg.jpg",
  "/assets/images/kitchen-modern-cream-led-2.jpg.jpg",
  "/assets/images/kitchen-modern-cream-led-3.jpg.jpg",
  "/assets/images/kitchen-modern-wood-cream-1.jpg.jpg",
  "/assets/images/kitchen-modern-wood-cream-2.jpg.jpg",
  "/assets/images/kitchen-modern-wood-cream-3.jpg.jpg",
  "/assets/images/kitchen-modern-wood-cream-4.jpg.jpg",
  "/assets/images/kitchen-modern-wood-cream-5.jpg.jpg",
  "/assets/images/kitchen-modern-wood-cream-6.jpg.jpg",
  "/assets/images/kitchen-modern-wood-cream-7.jpg.jpg",
  "/assets/images/kitchen-modern-wood-cream-8.jpg.jpg",
  "/assets/images/kitchen-modern-wood-cream-9.jpg.jpg",
  "/assets/images/kitchen-modern-wood-cream-10.jpg.jpg",
  "/assets/images/kitchen-modern-wood-cream-11.jpg.jpg",
  "/assets/images/kitchen-modern-wood-cream-12.jpg.jpg",
  "/assets/images/kitchen-modern-wood-cream-13.jpg.jpg",
  "/assets/images/kitchen-modern-wood-cream-14.jpg.jpg",
  "/assets/images/kitchen-modern-wood-cream-15.jpg.jpg",
  "/assets/images/kitchen-modern-wood-warm-1.jpg.jpg",
  "/assets/images/kitchen-modern-wood-warm-2.jpg.jpg",
  "/assets/images/kitchen-modern-wood-warm-3.jpg.jpg",
  "/assets/images/kitchen-modern-wood-warm-4.jpg.jpg",
  "/assets/images/kitchen-modern-wood-warm-5.jpg.jpg",
  "/assets/images/kitchen-modern-wood-warm-6.jpg.jpg",
  "/assets/images/kitchen-sky-blue-black-drawers-1.jpg.jpg",
  "/assets/images/kitchen-sky-blue-black-drawers-2.jpg.jpg",
  "/assets/images/kitchen-sky-blue-black-drawers-3.jpg.jpg",
  "/assets/images/kitchen-sky-blue-black-drawers-4.jpg.jpg",
  "/assets/images/kitchen-sky-blue-black-drawers-5.jpg.jpg",
  "/assets/images/kitchen-sky-blue-black-drawers-6.jpg.jpg",
  "/assets/images/kitchen-sky-blue-black-drawers-7.jpg.jpg",
  "/assets/images/kitchen-sky-blue-black-drawers-8.jpg.jpg",
  "/assets/images/kitchen-sky-blue-black-drawers-9.jpg.jpg",
  "/assets/images/kitchen-sky-blue-black-drawers-10.jpg.jpg",
  "/assets/images/kitchen-sky-blue-black-drawers-11.jpg.jpg",
  "/assets/images/kitchen-sky-blue-black-drawers-12.jpg.jpg",
  "/assets/images/kitchen-sky-blue-black-drawers-13.jpg.jpg",
  "/assets/images/kitchen-sky-blue-black-drawers-14.jpg.jpg",
  "/assets/images/kitchen-sky-blue-black-drawers-15.jpg.jpg",
  "/assets/images/kitchen-sky-blue-black-drawers-16.jpg.jpg",
  "/assets/images/kitchen-sky-blue-black-drawers-17.jpg.jpg",
  "/assets/images/kitchen-sky-blue-black-drawers-18.jpg.jpg",
  "/assets/images/ktchen-modern-beige-black-1.jpg.jpg",
  "/assets/images/ktchen-modern-beige-black-2.jpg.jpg",
  "/assets/images/ktchen-modern-beige-black-3.jpg.jpg",
  "/assets/images/woodworking-machine-edge-bander-1.jpg.jpg",
  "/assets/images/woodworking-machine-sliding-saw-1.jpg.jpg",
  "/assets/images/woodworking-machine-sliding-saw-2.jpg.jpg",
  "/assets/images/woodworking-machine-sliding-saw-3.jpg.jpg"
];

// WRAPPED EXPORT FOR BACKWARD COMPATIBILITY
export const MEDIA = {
  founder: founderObj,
  factory: factoryObj,
  machines: machinesObj,
  installations: installationsObj,
  projects: projectsArr,
  allVideos: allVideosArr,
  allImages: allImagesArr,
  hero: {
    main: "/assets/images/kitchen-luxury-cream-gold-bar-7.jpg.jpg"
  },
  services: {
    kitchens: "/assets/images/kitchen-luxury-cream-gold-1.jpg.jpg",
    installation: "/assets/images/eng-hany-tawfik-el-faqy-ceo-taqwa.jpg.jpg" // Fallback
  }
};

// INDIVIDUAL EXPORTS
export const founder = founderObj;
export const factory = factoryObj;
export const machines = machinesObj;
export const installations = installationsObj;
export const projects = projectsArr;
export const allVideos = allVideosArr;
export const allImages = allImagesArr;
export const videos = allVideosArr;

