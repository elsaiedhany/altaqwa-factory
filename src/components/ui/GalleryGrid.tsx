"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronLeft, Maximize2 } from "lucide-react";

interface GalleryImage {
  src: string;
  category: string;
}

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState("الكل");

  const categories = ["الكل", ...new Set(images.map(img => img.category))];
  
  const filteredImages = filter === "الكل" 
    ? images 
    : images.filter(img => img.category === filter);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === cat 
                ? "bg-gold-500 text-black-pure shadow-lg shadow-gold-500/20" 
                : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-gold-500/30 transition-all"
              onClick={() => openLightbox(index)}
            >
                <Image 
                src={image.src}
                alt={`${image.category} - من تنفيذ مصنع التقوى`}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black-pure/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-black-pure scale-50 group-hover:scale-100 transition-transform duration-500">
                  <Maximize2 className="w-6 h-6" />
                </div>
                <span className="text-white font-bold tracking-wider">{image.category}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black-pure/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-gold-500 transition-all z-[110]"
              onClick={nextImage}
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-gold-500 transition-all z-[110]"
              onClick={prevImage}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full max-w-5xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={filteredImages[selectedImage].src}
                alt={`معاينة عمل ${filteredImages[selectedImage].category} - مصنع التقوى`}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute -bottom-12 left-0 right-0 text-center">
                <span className="text-gold-500 font-bold text-lg">{filteredImages[selectedImage].category}</span>
                <p className="text-gray-500 text-sm mt-1">صورة {selectedImage + 1} من {filteredImages.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
