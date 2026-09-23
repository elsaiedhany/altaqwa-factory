"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronLeft, MessageCircle, ZoomIn, ZoomOut } from "lucide-react";
import { siteInfo } from "@/data/siteData";

export interface LightboxItem {
  src: string;
  alt?: string;
  title?: string;
  category?: string;
}

interface LightboxModalProps {
  images: LightboxItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export default function LightboxModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onIndexChange,
}: LightboxModalProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const currentItem = images[currentIndex];

  const handleNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setIsZoomed(false);
      onIndexChange((currentIndex + 1) % images.length);
    },
    [currentIndex, images.length, onIndexChange]
  );

  const handlePrev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setIsZoomed(false);
      onIndexChange((currentIndex - 1 + images.length) % images.length);
    },
    [currentIndex, images.length, onIndexChange]
  );

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setIsZoomed(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !currentItem) return null;

  const inquiryMessage = encodeURIComponent(
    `السلام عليكم م/ هاني، استفسر عن تفاصيل وسعر تنفيذ هذا التصميم:\n` +
      `${currentItem.title || currentItem.category || "تصميم مطبخ فاخر"}\n` +
      `من معرض أعمال مصنع التقوى.`
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[120] flex flex-col justify-between bg-black-pure/95 p-4 backdrop-blur-2xl md:p-6"
        onClick={onClose}
      >
        {/* Top Header Bar */}
        <div
          className="relative z-10 flex items-center justify-between gap-4 border-b border-white/10 pb-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-gold-500/20 px-3 py-1 text-xs font-bold text-gold-400 border border-gold-500/30">
              {currentItem.category || "مشروع مميز"}
            </span>
            <span className="text-sm font-medium text-gray-300">
              صورة <strong className="text-white">{currentIndex + 1}</strong> من{" "}
              <strong className="text-white">{images.length}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsZoomed((prev) => !prev)}
              className="rounded-full border border-white/15 bg-white/10 p-2.5 text-white transition hover:bg-white/20"
              aria-label={isZoomed ? "تصغير الصورة" : "تكبير الصورة"}
            >
              {isZoomed ? <ZoomOut className="h-4 w-4" /> : <ZoomIn className="h-4 w-4" />}
            </button>
            <a
              href={`https://wa.me/${siteInfo.whatsapp}?text=${inquiryMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-4 py-2 text-xs font-black text-black-pure transition hover:bg-gold-400"
            >
              <MessageCircle className="h-4 w-4" />
              استفسر عن هذا التصميم
            </a>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/15 bg-white/10 p-2.5 text-white transition hover:bg-red-500/20 hover:text-red-400"
              aria-label="إغلاق العارض"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Center Image Display */}
        <div className="relative flex flex-1 items-center justify-center overflow-hidden py-4">
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-black-pure/80 p-3 text-white backdrop-blur transition hover:border-gold-500/60 hover:text-gold-400 md:left-6"
            aria-label="الصورة السابقة"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-black-pure/80 p-3 text-white backdrop-blur transition hover:border-gold-500/60 hover:text-gold-400 md:right-6"
            aria-label="الصورة التالية"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <motion.div
            key={currentItem.src}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: isZoomed ? 1.4 : 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className={`relative h-full w-full max-w-5xl transition-transform duration-300 ${
              isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed((prev) => !prev);
            }}
          >
            <Image
              src={currentItem.src}
              alt={currentItem.alt || currentItem.title || "مشروع من مصنع التقوى"}
              fill
              className="object-contain"
              priority
              sizes="100vw"
            />
          </motion.div>
        </div>

        {/* Bottom Thumbnail Strip */}
        <div
          className="relative z-10 border-t border-white/10 pt-3"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mx-auto flex max-w-3xl items-center justify-center gap-2 overflow-x-auto py-1">
            {images.map((item, idx) => (
              <button
                key={item.src + idx}
                type="button"
                onClick={() => {
                  setIsZoomed(false);
                  onIndexChange(idx);
                }}
                className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border transition ${
                  idx === currentIndex
                    ? "border-gold-500 ring-2 ring-gold-500/50 scale-105"
                    : "border-white/15 opacity-50 hover:opacity-100"
                }`}
              >
                <Image
                  src={item.src}
                  alt={`صورة ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
