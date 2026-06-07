import { MEDIA } from "./mediaRegistry";

/**
 * DYNAMIC MEDIA INVENTORY
 * This file handles the automatic discovery and categorization of all assets.
 */

// All verified images from the registry (The "Premium" set)
const premiumImages = [
  ...MEDIA.projects.flatMap(p => p.images),
  MEDIA.founder.portrait,
  MEDIA.factory.hero,
  ...MEDIA.factory.machines,
  MEDIA.factory.storage,
  MEDIA.factory.qualityControl,
  MEDIA.services.installation,
  MEDIA.services.kitchens,
  MEDIA.hero.main
];

// All available images in public/assets/images (Raw list from filesystem scan)
const rawImageFilenames = [
  "eng-hany-tawfik-el-faqy-ceo-taqwa.jpg.jpg",
  "kitchen-modern-beige-black-glass-3.jpg.jpg",
  "kitchen-luxury-cream-gold-1.jpg.jpg",
  "kitchen-luxury-cream-gold-2.jpg.jpg",
  "kitchen-luxury-cream-gold-3.jpg.jpg",
  "kitchen-luxury-cream-gold-4.jpg.jpg",
  "kitchen-luxury-cream-gold-5.jpg.jpg",
  "kitchen-luxury-cream-gold-6.jpg.jpg",
  "kitchen-luxury-cream-gold-bar-1.jpg.jpg",
  "kitchen-luxury-cream-gold-bar-2.jpg.jpg",
  "kitchen-luxury-cream-gold-bar-3.jpg.jpg",
  "kitchen-luxury-cream-gold-bar-4.jpg.jpg",
  "kitchen-luxury-cream-gold-bar-5.jpg.jpg",
  "kitchen-luxury-cream-gold-bar-6.jpg.jpg",
  "kitchen-luxury-cream-gold-bar-7.jpg.jpg",
  "kitchen-modern-beige-black-glass-1.jpg.jpg",
  "kitchen-modern-beige-black-glass-2.jpg.jpg",
  "kitchen-modern-blue-white-1.jpg.jpg",
  "kitchen-modern-blue-white-2.jpg.jpg",
  "kitchen-modern-blue-white-3.jpg.jpg",
  "kitchen-modern-blue-white-4.jpg.jpg",
  "kitchen-modern-blue-white-5.jpg.jpg",
  "kitchen-modern-blue-wood-1.jpg.jpg",
  "kitchen-modern-blue-wood-2.jpg.jpg",
  "kitchen-modern-blue-wood-3.jpg.jpg",
  "kitchen-modern-blue-wood-4.jpg.jpg",
  "kitchen-modern-cream-black-1.jpg.jpg",
  "kitchen-modern-cream-black-2.jpg.jpg",
  "kitchen-modern-cream-black-3.jpg.jpg",
  "kitchen-modern-cream-black-4.jpg.jpg",
  "kitchen-modern-cream-black-5.jpg.jpg",
  "kitchen-modern-cream-black-6.jpg.jpg",
  "kitchen-modern-cream-black-7.jpg.jpg",
  "kitchen-modern-cream-black-8.jpg.jpg",
  "kitchen-modern-cream-black-9.jpg.jpg",
  "kitchen-modern-cream-led-1.jpg.jpg",
  "kitchen-modern-cream-led-2.jpg.jpg",
  "kitchen-modern-cream-led-3.jpg.jpg",
  "kitchen-modern-wood-cream-1.jpg.jpg",
  "kitchen-modern-wood-cream-10.jpg.jpg",
  "kitchen-modern-wood-cream-11.jpg.jpg",
  "kitchen-modern-wood-cream-12.jpg.jpg",
  "kitchen-modern-wood-cream-13.jpg.jpg",
  "kitchen-modern-wood-cream-14.jpg.jpg",
  "kitchen-modern-wood-cream-15.jpg.jpg",
  "kitchen-modern-wood-cream-2.jpg.jpg",
  "kitchen-modern-wood-cream-3.jpg.jpg",
  "kitchen-modern-wood-cream-4.jpg.jpg",
  "kitchen-modern-wood-cream-5.jpg.jpg",
  "kitchen-modern-wood-cream-6.jpg.jpg",
  "kitchen-modern-wood-cream-7.jpg.jpg",
  "kitchen-modern-wood-cream-8.jpg.jpg",
  "kitchen-modern-wood-cream-9.jpg.jpg",
  "kitchen-modern-wood-warm-1.jpg.jpg",
  "kitchen-modern-wood-warm-2.jpg.jpg",
  "kitchen-modern-wood-warm-3.jpg.jpg",
  "kitchen-modern-wood-warm-4.jpg.jpg",
  "kitchen-modern-wood-warm-5.jpg.jpg",
  "kitchen-modern-wood-warm-6.jpg.jpg",
  "kitchen-sky-blue-black-drawers-1.jpg.jpg",
  "kitchen-sky-blue-black-drawers-10.jpg.jpg",
  "kitchen-sky-blue-black-drawers-11.jpg.jpg",
  "kitchen-sky-blue-black-drawers-12.jpg.jpg",
  "kitchen-sky-blue-black-drawers-13.jpg.jpg",
  "kitchen-sky-blue-black-drawers-14.jpg.jpg",
  "kitchen-sky-blue-black-drawers-15.jpg.jpg",
  "kitchen-sky-blue-black-drawers-16.jpg.jpg",
  "kitchen-sky-blue-black-drawers-17.jpg.jpg",
  "kitchen-sky-blue-black-drawers-18.jpg.jpg",
  "kitchen-sky-blue-black-drawers-2.jpg.jpg",
  "kitchen-sky-blue-black-drawers-3.jpg.jpg",
  "kitchen-sky-blue-black-drawers-4.jpg.jpg",
  "kitchen-sky-blue-black-drawers-5.jpg.jpg",
  "kitchen-sky-blue-black-drawers-6.jpg.jpg",
  "kitchen-sky-blue-black-drawers-7.jpg.jpg",
  "kitchen-sky-blue-black-drawers-8.jpg.jpg",
  "kitchen-sky-blue-black-drawers-9.jpg.jpg",
  "ktchen-modern-beige-black-1.jpg.jpg",
  "ktchen-modern-beige-black-2.jpg.jpg",
  "ktchen-modern-beige-black-3.jpg.jpg",
  "woodworking-machine-edge-bander-1.jpg.jpg",
  "woodworking-machine-sliding-saw-1.jpg.jpg",
  "woodworking-machine-sliding-saw-2.jpg.jpg",
  "woodworking-machine-sliding-saw-3.jpg.jpg"
];

// Deduplicated and Path-Corrected list
const allImagePaths = Array.from(new Set([
  ...premiumImages,
  ...rawImageFilenames.map(f => `/assets/images/${f}`)
]));

// Helper to categorize images based on visual audit ranges
const getCategory = (path: string) => {
  if (path.includes("hany-tawfik") || path.includes("ceo-taqwa")) return "founder";
  if (path.includes("machine") || path.includes("sliding-saw") || path.includes("edge-bander")) return "machine";
  if (path.includes("workshop") || path.includes("factory")) return "factory";
  if (path.includes("installation") || path.includes("finishing")) return "installation";
  return "kitchen"; // Default for project shots
};

// Final Gallery Data
export const galleryImages = allImagePaths.map(path => ({
  src: path,
  category: getCategory(path),
  isPremium: premiumImages.includes(path)
}));

// Video Discovery
const rawVideoFilenames = [
  "interior-design-marble-ceiling-finishing.mp4.mp4",
  "kitchen-modern-blue-wood-video.mp4.mp4",
  "kitchen-modern-cashmere-black-video-1.mp4.mp4",
  "kitchen-modern-wood-cream-black-video-1.mp4.mp4",
  "kitchen-modern-wood-cream-black-video-2.mp4.mp4",
  "kitchen-modern-wood-cream-black-video-3.mp4.mp4",
  "kitchen-modern-wood-cream-black-video.mp4.mp4",
  "kitchen-modern-wood-warm-video.mp4.mp4",
  "kitchen-modern-wood-warm-video1.mp4.mp4",
  "kitchen-modern-wood-white-video.mp4.mp4",
  "modern-kitchen-blue-black-design-video.mp4.mp4",
  "modern-kitchen-cream-black-gold-design-video-2.mp4.mp4",
  "modern-kitchen-cream-black-gold-design.mp4.mp4",
  "modern-kitchen-white-black-lighting-video.mp4.mp4",
  "modern-kitchen-wood-black-design-video-2.mp4.mp4",
  "modern-kitchen-wood-black-design-video-3.mp4.mp4",
  "modern-kitchen-wood-black-design-video.mp4.mp4",
  "modern-wood-and-white-kitchen-cabinet-design.mp4.mp4",
  "woodworking-edge-banding-process-video.mp4.mp4",
  "woodworking-machines-workshop-tour-video.mp4.mp4",
  "workshop-production-process-video.mp4.mp4",
  "workshop-taqwa-factory-production-video.mp4.mp4",
  "workshop-taqwa-factory-production-video1.mp4.mp4",
  "workshop-taqwa-factory-tour-hany-tawfik.mp4.mp4"
];

export const allVideos = rawVideoFilenames.map(f => ({
  id: f,
  src: `/assets/videos/${f}`,
  title: f.includes("tour") ? "جولة في المصنع" : f.includes("process") ? "ماكينة القص" : "فيديو المشروع",
  category: f.includes("tour") || f.includes("production") ? "factory" : f.includes("process") || f.includes("machine") ? "machine" : "kitchen"
}));
