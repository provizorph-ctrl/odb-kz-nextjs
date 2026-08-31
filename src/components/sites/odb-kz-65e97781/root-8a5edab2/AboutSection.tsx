"use client";

import { useLang } from "@/lib/lang-context";

interface AboutProps {
  description?: string;
  descriptionEn?: string;
  descriptionKz?: string;
}

export function AboutSection({ description, descriptionEn, descriptionKz }: AboutProps) {
  const { lang, t } = useLang();

  const desc = (() => {
    switch (lang) {
      case "en": return descriptionEn || description || t("aboutDescription");
      case "kz": return descriptionKz || description || t("aboutDescription");
      default: return description || t("aboutDescription");
    }
  })();

  const features = [
    { label: t("featureEquipment"), icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
    { label: t("featureStaff"), icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
    { label: t("featureWards"), icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" },
    { label: t("featurePlay"), icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  ];

  return (
    <section className="py-3 sm:py-4">
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-start">
        <div className="space-y-3 sm:space-y-5 min-w-0">
          <div className="flex items-center gap-2 mb-1 sm:mb-2">
            <div className="section-decoration" aria-hidden="true" />
            <span className="section-label">{t("aboutLabel")}</span>
          </div>
          <h2 className="text-lg sm:text-2xl font-bold text-foreground leading-tight text-balance font-[family-name:var(--font-heading)] break-words">
            {t("aboutTitle")}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base break-words">
            {desc}
          </p>
          <a href="/o-nas" className="cta-primary text-sm">
            {t("readMore")}
            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-4">
          {features.map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center text-center gap-1.5 sm:gap-3 p-2.5 sm:p-5 rounded-lg sm:rounded-2xl bg-white shadow-card border border-border/50 min-w-0 overflow-hidden"
            >
              <div className="w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 shrink-0">
                <svg className="w-4.5 h-4.5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-medium text-foreground leading-tight break-words">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
