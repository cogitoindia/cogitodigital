import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import img1 from "@/assets/luxuryliving/A-new-you-in-the-spotlight.webp";
import img2 from "@/assets/luxuryliving/Comfort-redefined-in-modern-living-room.webp";
import img3 from "@/assets/luxuryliving/Modern-dining-with-family-focus.webp";
import img4 from "@/assets/luxuryliving/Three-sofas-one-choice.webp";

const images = [img1, img2, img3, img4];

export function ImageSlider() {
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

    </div>
  );
}
