import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export function Lightbox({ images, isOpen, onClose, initialIndex = 0 }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
        onClick={onClose}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
          aria-label="Close lightbox"
        >
          <X className="size-6" />
        </button>

        {/* Navigation Buttons */}
        <button
          onClick={(e) => { e.stopPropagation(); prevImage(); }}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="size-6" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); nextImage(); }}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="size-6" />
        </button>

        {/* Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-[90vw] max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain"
          />
        </motion.div>

        {/* Image Counter */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
          {String(currentIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 mt-12">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
              className={`h-1.5 rounded-full transition-all ${
                index === currentIndex ? "w-6 bg-white" : "w-1.5 bg-white/50"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
