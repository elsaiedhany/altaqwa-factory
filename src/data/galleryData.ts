import { MEDIA } from "./mediaRegistry";

// Derived from verified mediaRegistry
export const projects = MEDIA.projects.map(p => ({
  id: p.id,
  title: p.title,
  location: "الدقهلية",
  category: "مطابخ",
  featuredImage: p.cover,
  images: p.images
}));

export const videos = [
  {
    id: "factory-tour",
    src: MEDIA.factory.videos[0],
    title: "جولة داخل مصنع التقوى",
    category: "جولة"
  },
  {
    id: "machine-cutting",
    src: MEDIA.factory.videos[1],
    title: "دقة القص الآلي",
    category: "المصنع"
  }
];

// Helper to get founder image
export const founderImage = MEDIA.founder.portrait;

