"use client";

import { useState, useEffect, useCallback } from "react";
import type { SlideImage } from "@/types/odb-kz";

const slides: SlideImage[] = [
  { src: "/sites/odb-kz-65e97781/root-8a5edab2/images/slide-1.jpg", alt: "Областная детская больница", width: 1200, height: 600 },
  { src: "/sites/odb-kz-65e97781/root-8a5edab2/images/slide-2.jpg", alt: "Современное оборудование", width: 1200, height: 600 },
  { src: "/sites/odb-kz-65e97781/root-8a5edab2/images/slide-3.jpg", alt: "Наши врачи", width: 1200, height: 600 },
  { src: "/sites/odb-kz-65e97781/root-8a5edab2/images/slide-4.jpg", alt: "Палаты для пациентов", width: 1200, height: 600 },
  { src: "/sites/odb-kz-65e97781/root-8a5edab2/images/slide-5.jpg", alt: "Детская больница", width: 1200, height: 600 },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-muted shadow-medium"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative aspect-[16/9] sm:aspect-[2.2/1] w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-105 z-0"
            }`}
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center">
              <div className="text-center px-4">
                <span className="text-primary/30 text-sm sm:text-2xl font-semibold tracking-wide">{slide.alt}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-20 pointer-events-none" />

      {/* Nav arrows - smaller on mobile */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 size-9 sm:size-11 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-foreground shadow-medium transition-all z-30 hover:scale-110"
        aria-label="Предыдущий слайд"
      >
        <svg className="size-4 sm:size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 size-9 sm:size-11 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-foreground shadow-medium transition-all z-30 hover:scale-110"
        aria-label="Следующий слайд"
      >
        <svg className="size-4 sm:size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-2.5 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-6 sm:w-8"
                : "bg-white/50 w-2 hover:bg-white/70"
            }`}
            aria-label={`Слайд ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-30 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/30 backdrop-blur-sm text-white text-[10px] sm:text-xs font-medium">
        {currentSlide + 1} / {slides.length}
      </div>
    </section>
  );
}
