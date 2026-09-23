"use client";

import { useState } from "react";
import { Play, Video as VideoIcon, Sparkles, MessageCircle, Factory, Cog, CheckCircle2 } from "lucide-react";
import PageHeader, { PrimaryLink, SecondaryAnchor } from "@/components/shared/PageHeader";
import { siteInfo } from "@/data/siteData";

export interface VideoItem {
  id: string;
  src: string;
  title: string;
  category: string;
  desc?: string;
}

export default function VideosClient({ videos }: { videos: VideoItem[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("الكل");
  const [playingId, setPlayingId] = useState<string | null>(null);

  const categories = [
    { id: "الكل", label: "جميع الفيديوهات" },
    { id: "kitchen", label: "تسليم مطابخ واقعية" },
    { id: "factory", label: "جولات خط الإنتاج" },
    { id: "machine", label: "دقة الماكينات والقص" },
  ];

  const filteredVideos =
    activeCategory === "الكل" ? videos : videos.filter((v) => v.category === activeCategory);

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case "factory":
        return "جولة في المصنع";
      case "machine":
        return "تكنولوجيا التصنيع";
      default:
        return "تسليم مشروع حي";
    }
  };

  return (
    <div className="bg-black-pure">
      <PageHeader
        eyebrow="فيديوهات حقيقية"
        title="شاهد الجودة والتشطيب مباشرة من أرض الواقع"
        description="لقطات حية من داخل صالة تصنيع مصنع التقوى، ماكينات القص والتجميع، ولحظات تسليم وتركيب المطابخ في منازل عملائنا."
        actions={
          <>
            <PrimaryLink href="/quote">اطلب مقايسة مجانية</PrimaryLink>
            <SecondaryAnchor href={`https://wa.me/${siteInfo.whatsapp}`}>
              تواصل عبر واتساب
            </SecondaryAnchor>
          </>
        }
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Category Filter Tabs */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-6 py-2.5 text-sm font-black transition-all duration-300 ${
                    isActive
                      ? "bg-gold-500 text-black-pure shadow-lg shadow-gold-500/25 scale-105"
                      : "border border-white/10 bg-white/[0.04] text-gray-300 hover:border-gold-500/40 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredVideos.map((video) => {
              const isPlaying = playingId === video.id;
              const inquiryMsg = encodeURIComponent(
                `أريد الاستفسار عن تفاصيل المطبخ أو العمل المعروض في هذا الفيديو: ${video.title}`
              );

              return (
                <div
                  key={video.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] shadow-xl transition-all duration-500 hover:border-gold-500/40 hover:shadow-[0_15px_35px_rgba(209,141,24,0.15)]"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-black-pure">
                    <video
                      src={video.src}
                      className="h-full w-full object-cover"
                      controls
                      playsInline
                      preload="metadata"
                      onPlay={() => setPlayingId(video.id)}
                      onPause={() => {
                        if (playingId === video.id) setPlayingId(null);
                      }}
                    />
                    {!isPlaying && (
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black-pure/30 transition-opacity group-hover:bg-black-pure/10">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-black-pure shadow-xl shadow-gold-500/40 transition-transform group-hover:scale-110">
                          <Play className="h-6 w-6 fill-current pr-0.5" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6 md:p-7">
                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-[11px] font-bold text-gold-400">
                          {video.category === "factory" ? (
                            <Factory className="h-3 w-3" />
                          ) : video.category === "machine" ? (
                            <Cog className="h-3 w-3" />
                          ) : (
                            <VideoIcon className="h-3 w-3" />
                          )}
                          {getCategoryLabel(video.category)}
                        </span>
                      </div>

                      <h3 className="text-xl font-black leading-snug text-white transition-colors group-hover:text-gold-300">
                        {video.title}
                      </h3>
                      <p className="mt-2 text-xs leading-5 text-gray-400">
                        معاينة تفاصيل التشطيب ونعومة الفتح والغلق ومقاومة العوامل اليومية.
                      </p>
                    </div>

                    <div className="mt-6 border-t border-white/10 pt-5">
                      <a
                        href={`https://wa.me/${siteInfo.whatsapp}?text=${inquiryMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-3 text-xs font-black text-white transition-all duration-300 hover:border-gold-500 hover:bg-gold-500 hover:text-black-pure focus:outline-none focus:ring-2 focus:ring-gold-300"
                      >
                        <MessageCircle className="h-4 w-4" />
                        استفسر عن هذا التصميم
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
