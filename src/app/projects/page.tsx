import type { Metadata } from "next";
import { assetAudit } from "@/data/assetAudit";
import ProjectsClient, { ProjectData } from "./ProjectsClient";

export const metadata: Metadata = {
  title: "سابقة أعمالنا | مشاريع مطابخ ألوميتال وبولي لاك",
  description:
    "استعرض مشاريع مطابخ حقيقية نفذها مصنع التقوى بتشطيب فاخر وتصنيع مباشر في الدقهلية ومحافظات مصر بإشراف م/ هاني توفيق الفقي.",
  alternates: { canonical: "/projects" },
};

const orderIds = [
  "project-black-gold",
  "project-grey-luxury",
  "project-modern-white",
  "project-wooden-warmth",
];

type ProjectItem = Extract<(typeof assetAudit)[number], { id: string; images: readonly string[] }>;

function isProjectItem(item: (typeof assetAudit)[number]): item is ProjectItem {
  return "id" in item && "images" in item && item.category === "kitchen";
}

export default function ProjectsPage() {
  const projects: ProjectData[] = orderIds
    .map((id) => assetAudit.find((item) => isProjectItem(item) && item.id === id))
    .filter((item): item is ProjectItem => Boolean(item))
    .map((p) => ({
      id: p.id,
      title: p.title,
      location: p.location,
      category: p.category,
      images: p.images,
    }));

  return <ProjectsClient projects={projects} />;
}
