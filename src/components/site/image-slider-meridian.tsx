import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "@/assets/tfs/2025-11-19-3.webp";
import img2 from "@/assets/tfs/2025-11-19-5.webp";
import img3 from "@/assets/tfs/2025-11-19-6.webp";
import img4 from "@/assets/tfs/2025-11-19.webp";
import img5 from "@/assets/tfs/2026-03-19-1.webp";
import img6 from "@/assets/tfs/new-brand.webp";

const images = [img1, img2, img3, img4, img5, img6];

export function ImageSliderMeridian() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 backdrop-blur-sm p-2 shadow-lg hover:bg-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="size-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 backdrop-blur-sm p-2 shadow-lg hover:bg-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-4 right-4 z-10 rounded-full bg-white/80 backdrop-blur-sm px-3 py-1.5 text-xs font-medium shadow-lg">
        {String(currentIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </div>
    </div>
  );
}
