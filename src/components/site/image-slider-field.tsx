import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import img1 from "@/assets/sumeru/sumerustudio-branding-creative-10.webp";
import img2 from "@/assets/sumeru/sumerustudio-branding-creative-12.webp";
import img3 from "@/assets/sumeru/sumerustudio-branding-creative-13.webp";
import img4 from "@/assets/sumeru/sumerustudio-branding-creative-4.webp";
import img5 from "@/assets/sumeru/sumerustudio-branding-creative-5.webp";
import img6 from "@/assets/sumeru/sumerustudio-branding-creative-7.webp";
import img7 from "@/assets/sumeru/sumerustudio-branding-creative-9.webp";

const images = [img1, img2, img3, img4, img5, img6, img7];

export function ImageSliderField() {
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
