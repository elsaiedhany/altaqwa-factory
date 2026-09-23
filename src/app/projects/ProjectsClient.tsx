"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Image as ImageIcon, MapPin, MessageCircle, Sparkles } from "lucide-react";
import PageHeader, { PrimaryLink, SecondaryAnchor } from "@/components/shared/PageHeader";
import LightboxModal, { LightboxItem } from "@/components/ui/LightboxModal";
import { siteInfo } from "@/data/siteData";

export interface ProjectData {
  id: string;
  title: string;
  location: string;
  category: string;
  images: readonly string[];
  description?: string;
  specs?: string[];
}

export default function ProjectsClient({ projects }: { projects: ProjectData[] }) {
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const openProjectLightbox = (project: ProjectData, initialIdx: number = 0) => {
    setActiveProject(project);
    setActiveImageIndex(initialIdx);
  };

  const closeLightbox = () => {
    setActiveProject(null);
    setActiveImageIndex(0);
  };

  const currentLightboxItems: LightboxItem[] = activeProject
    ? activeProject.images.map((img) => ({
        src: `/assets/images/${img}`,
        alt: `${activeProject.title} - ${activeProject.location}`,
        title: activeProject.title,
        category: activeProject.location,
      }))
    : [];

  return (
    <div className="bg-black-pure">
      <PageHeader
        eyebrow="سابقة الأعمال"
        title="مشاريع واقعية توضح جودة التشطيب قبل الاتفاق"
        description="اختر مستوى التنفيذ الذي يناسب منزلك من خلال صور حقيقية لمطابخ تم تصنيعها وتركيبها بواسطة مصنع التقوى بإشراف م/ هاني توفيق الفقي."
        actions={
          <>
            <PrimaryLink href="/quote">احجز مقايسة مجانية</PrimaryLink>
            <SecondaryAnchor href={`https://wa.me/${siteInfo.whatsapp}`}>
              واتساب مباشر
            </SecondaryAnchor>
          </>
        }
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gold-500">
                أعمال حصرية من موقع العميل
              </p>
              <h2 className="mt-1 text-2xl font-black text-white md:text-3xl">
                أحدث مشاريعنا المنفذة في محافظات مصر
              </h2>
            </div>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold text-gray-300">
              انقر على أي صورة لفتح الألبوم الكامل بالتكبير
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project, index) => {
              const coverImage = `/assets/images/${project.images[0]}`;
              const message = encodeURIComponent(
                `أريد معاينة واستفسار عن مطبخ بتصميم مشابه لمشروع: ${project.title} في ${project.location}`
              );

              return (
                <article
                  key={project.id}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] shadow-xl transition-all duration-500 hover:border-gold-500/50 hover:shadow-[0_15px_40px_rgba(209,141,24,0.15)]"
                >
                  {/* Clickable Main Cover Image */}
                  <div
                    onClick={() => openProjectLightbox(project, 0)}
                    className="relative aspect-[16/10] cursor-pointer overflow-hidden bg-black-rich"
                  >
                    <Image
                      src={coverImage}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black-pure/95 via-black-pure/20 to-transparent" />

                    <div className="absolute right-5 top-5 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-3.5 py-1.5 text-xs font-black text-black-pure shadow-md">
                        <Sparkles className="h-3 w-3" />
                        تشطيب مصنع التقوى
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black-pure/80 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
                        <ImageIcon className="h-3.5 w-3.5 text-gold-400" />
                        {project.images.length} صور
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-400">
                        <MapPin className="h-3.5 w-3.5" />
                        {project.location}
                      </span>
                      <h3 className="mt-1 text-2xl font-black text-white md:text-3xl">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Project Details and Thumbnails strip */}
                  <div className="p-6 md:p-8">
                    <p className="leading-8 text-gray-300">
                      {project.description ||
                        "تنفيذ هندسي يجمع بين قوة التحمل، العزل التام للمياه والرطوبة، وتوزيع إضاءة ليد بروفايل مريحة للعين مع استغلال كل سنتيمتر للتخزين."}
                    </p>

                    {/* Small Thumbnails Carousel to view other photos */}
                    <div className="mt-5">
                      <p className="mb-2 text-xs font-bold text-gray-400">
                        لقطات المشروع (انقر للتكبير):
                      </p>
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {project.images.map((img, imgIdx) => (
                          <button
                            key={img + imgIdx}
                            type="button"
                            onClick={() => openProjectLightbox(project, imgIdx)}
                            className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl border border-white/10 transition hover:border-gold-500 hover:scale-105"
                          >
                            <Image
                              src={`/assets/images/${img}`}
                              alt={`${project.title} - لقطة ${imgIdx + 1}`}
                              fill
                              className="object-cover"
                              sizes="80px"
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={`https://wa.me/${siteInfo.whatsapp}?text=${message}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-sm font-black text-black-pure shadow-lg shadow-gold-500/20 transition hover:bg-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-300"
                      >
                        <MessageCircle className="h-4 w-4" />
                        استفسر عن تكلفة هذا التصميم
                      </a>
                      <Link
                        href="/gallery"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-gold-500/60 focus:outline-none focus:ring-2 focus:ring-gold-300"
                      >
                        المعرض العام
                        <ArrowLeft className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox for clicked project */}
      {activeProject && (
        <LightboxModal
          images={currentLightboxItems}
          currentIndex={activeImageIndex}
          isOpen={Boolean(activeProject)}
          onClose={closeLightbox}
          onIndexChange={(idx) => setActiveImageIndex(idx)}
        />
      )}
    </div>
  );
}
