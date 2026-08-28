"use client";

import { useState } from "react";
import type { GovProgram } from "@/types/odb-kz";

const programs: GovProgram[] = [
  { id: "1", image: "/sites/odb-kz-65e97781/root-8a5edab2/images/gov-1.jpg", title: "Национальный проект Здоровье", url: "#" },
  { id: "2", image: "/sites/odb-kz-65e97781/root-8a5edab2/images/gov-2.jpg", title: "Государственная программа развития здравоохранения", url: "#" },
  { id: "3", image: "/sites/odb-kz-65e97781/root-8a5edab2/images/gov-3.jpg", title: "Программа Денсаулык", url: "#" },
  { id: "4", image: "/sites/odb-kz-65e97781/root-8a5edab2/images/gov-4.jpg", title: "Цифровизация здравоохранения", url: "#" },
];

export function GovProgramsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 3;
  const maxIndex = Math.max(0, programs.length - visibleCount);

  const goTo = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  const prev = () => goTo(currentIndex - 1);
  const next = () => goTo(currentIndex + 1);

  return (
    <section className="py-4">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-0.5 bg-primary rounded-full" />
          <h2 className="text-xl font-bold">Государственные программы</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="size-9 flex items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Предыдущий"
          >
            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="size-9 flex items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Следующий"
          >
            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
        >
          {programs.map((program) => (
            <div
              key={program.id}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <a href={program.url} className="group block rounded-2xl overflow-hidden bg-white border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {program.title}
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {programs.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary w-8"
                : "bg-primary/20 w-2 hover:bg-primary/40"
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
