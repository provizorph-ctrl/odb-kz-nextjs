"use client";

import { useState, useEffect, useCallback } from "react";
import { useLang } from "@/lib/lang-context";
import type { SlideImage } from "@/types/odb-kz";

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { t } = useLang();

  const slides: SlideImage[] = [
    { src: "/sites/odb-kz-65e97781/root-8a5edab2/images/slide-1.jpg", alt: t("slide1"), width: 1200, height: 600 },
    { src: "/sites/odb-kz-65e97781/root-8a5edab2/images/slide-2.jpg", alt: t("slide2"), width: 1200, height: 600 },
    { src: "/sites/odb-kz-65e97781/root-8a5edab2/images/slide-3.jpg", alt: t("slide3"), width: 1200, height: 600 },
    { src: "/sites/odb-kz-65e97781/root-8a5edab2/images/slide-4.jpg", alt: t("slide4"), width: 1200, height: 600 },
    { src: "/sites/odb-kz-65e97781/root-8a5edab2/images/slide-5.jpg", alt: t("slide5"), width: 1200, height: 600 },
  ];

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
      className="relative w-full overflow-hidden rounded-lg sm:rounded-2xl bg-muted shadow-medium hero-slider"
      role="region"
      aria-roledescription="carousel"
      aria-label={t("slide1")}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="relative w-full hero-aspect-wrapper">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} / ${slides.length}`}
            className="absolute inset-0"
            style={{
              opacity: index === currentSlide ? 1 : 0,
              zIndex: index === currentSlide ? 10 : 0,
              transition: "opacity 0.7s ease-in-out",
              pointerEvents: index === currentSlide ? "auto" : "none",
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center">
              <div className="text-center px-4 min-w-0">
                <span className="text-primary/30 text-sm sm:text-2xl font-semibold tracking-wide font-[family-name:var(--font-heading)] break-words">{slide.alt}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-20 pointer-events-none" />

      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-foreground shadow-medium z-30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary touch-manipulation"
        aria-label={t("prevSlide")}
      >
        <svg className="size-4 sm:size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-foreground shadow-medium z-30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary touch-manipulation"
        aria-label={t("nextSlide")}
      >
        <svg className="size-4 sm:size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2.5 z-30" role="tablist" aria-label="Slides">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`${index + 1}`}
            className="h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white touch-manipulation"
            style={{
              width: index === currentSlide ? "24px" : "8px",
              backgroundColor: index === currentSlide ? "white" : "rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </div>

      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-30 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-medium" aria-live="polite">
        {currentSlide + 1} / {slides.length}
      </div>
    </section>
  );
}
