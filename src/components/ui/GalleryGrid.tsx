"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Sparkles } from "lucide-react";
import LightboxModal, { LightboxItem } from "@/components/ui/LightboxModal";

interface GalleryImage {
  src: string;
  category: string;
  alt?: string;
  title?: string;
}

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("الكل");

  const categories = ["الكل", ...new Set(images.map((img) => img.category))];

  const filteredImages =
    activeFilter === "الكل" ? images : images.filter((img) => img.category === activeFilter);

  const lightboxItems: LightboxItem[] = filteredImages.map((img) => ({
    src: img.src,
    alt: img.alt || `عمل من مصنع التقوى - ${img.category}`,
    title: img.title || `${img.category} - تشطيب مصنع التقوى`,
    category: img.category,
  }));

  return (
    <>
      {/* Category Filter Tabs */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isActive = activeFilter === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveFilter(cat);
                setSelectedImageIndex(null);
              }}
              className={`rounded-full px-5 py-2.5 text-sm font-black transition-all duration-300 ${
                isActive
                  ? "bg-gold-500 text-black-pure shadow-lg shadow-gold-500/20 scale-105"
                  : "border border-white/10 bg-white/[0.04] text-gray-300 hover:border-gold-500/40 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src + index}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-black-rich transition-all duration-500 hover:border-gold-500/50 hover:shadow-[0_10px_30px_rgba(209,141,24,0.15)]"
              onClick={() => setSelectedImageIndex(index)}
            >
              <Image
                src={image.src}
                alt={image.alt || `${image.category} - من تنفيذ مصنع التقوى`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-pure/90 via-black-pure/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span className="inline-flex items-center gap-1 rounded-full bg-gold-500 px-2.5 py-0.5 text-[11px] font-black text-black-pure">
                  <Sparkles className="h-3 w-3" />
                  {image.category}
                </span>
                <p className="mt-2 text-xs font-bold text-gray-200">انقر للمعاينة والتكبير</p>
              </div>

              <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black-pure/70 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-75">
                <Maximize2 className="h-4 w-4 text-gold-400" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Reusable Lightbox Modal */}
      {selectedImageIndex !== null && (
        <LightboxModal
          images={lightboxItems}
          currentIndex={selectedImageIndex}
          isOpen={selectedImageIndex !== null}
          onClose={() => setSelectedImageIndex(null)}
          onIndexChange={(newIndex) => setSelectedImageIndex(newIndex)}
        />
      )}
    </>
  );
}
