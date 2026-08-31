"use client";

import { useLang } from "@/lib/lang-context";

export function MapSection() {
  const { t } = useLang();

  return (
    <section className="py-3 sm:py-4">
      <div className="flex items-center gap-2 mb-3 sm:mb-5">
        <div className="section-decoration shrink-0" aria-hidden="true" />
        <h2 className="text-base sm:text-2xl font-bold text-foreground font-[family-name:var(--font-heading)] truncate">{t("mapTitle")}</h2>
      </div>
      <div className="rounded-lg sm:rounded-2xl overflow-hidden border border-border/50 shadow-card">
        <div className="aspect-video bg-muted flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
          <div className="text-center relative z-10 px-4 min-w-0">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-xs sm:text-sm font-medium text-foreground break-words">{t("mapAddress")}</p>
            <p className="text-xs sm:text-xs text-muted-foreground mt-0.5 sm:mt-1">{t("mapLoading")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
