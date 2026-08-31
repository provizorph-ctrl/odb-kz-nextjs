"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/lib/lang-context";
import type { GovProgram } from "@/types/odb-kz";

const programs: GovProgram[] = [
  { id: "1", image: "/sites/odb-kz-65e97781/root-8a5edab2/images/gov-1.jpg", title: "Национальный проект Здоровье", titleEn: "National Project Health", titleKz: "Денсаулық ұлттық жобасы", url: "#" },
  { id: "2", image: "/sites/odb-kz-65e97781/root-8a5edab2/images/gov-2.jpg", title: "Государственная программа развития здравоохранения", titleEn: "Healthcare Development Program", titleKz: "Денсаулық сақтауды дамыту бағдарламасы", url: "#" },
  { id: "3", image: "/sites/odb-kz-65e97781/root-8a5edab2/images/gov-3.jpg", title: "Программа Денсаулык", titleEn: "Densaulyk Program", titleKz: "Денсаулық бағдарламасы", url: "#" },
  { id: "4", image: "/sites/odb-kz-65e97781/root-8a5edab2/images/gov-4.jpg", title: "Цифровизация здравоохранения", titleEn: "Healthcare Digitalization", titleKz: "Денсаулық сақтауды цифрландыру", url: "#" },
];

function langTitle(p: GovProgram, lang: string) {
  switch (lang) {
    case "en": return p.titleEn || p.title;
    case "kz": return p.titleKz || p.title;
    default: return p.title;
  }
}

export function GovProgramsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const { lang, t } = useLang();

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, programs.length - visibleCount);
  const goTo = (index: number) => setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  const prev = () => goTo(currentIndex - 1);
  const next = () => goTo(currentIndex + 1);

  return (
    <section className="py-4" aria-label={t("govProgramsTitle")}>
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <div className="flex items-center gap-2">
          <div className="section-decoration" aria-hidden="true" />
          <h2 className="section-heading">{t("govProgramsTitle")}</h2>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={prev} disabled={currentIndex === 0} className="size-8 sm:size-9 flex items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-all disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" aria-label={t("prevSlideShort")}>
            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={next} disabled={currentIndex >= maxIndex} className="size-8 sm:size-9 flex items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-all disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" aria-label={t("nextSlideShort")}>
            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}>
          {programs.map((program) => (
            <div key={program.id} className="flex-shrink-0 px-1.5 sm:px-2" style={{ width: `${100 / visibleCount}%` }}>
              <a href={program.url} className="group block rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-3 sm:p-4">
                  <span className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">{langTitle(program, lang)}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="Program slides">
        {programs.map((_, index) => (
          <button key={index} onClick={() => goTo(index)} role="tab" aria-selected={index === currentIndex} className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${index === currentIndex ? "bg-primary w-6 sm:w-8" : "bg-primary/20 w-2 hover:bg-primary/40"}`} />
        ))}
      </div>
    </section>
  );
}
