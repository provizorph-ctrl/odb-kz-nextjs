"use client";

import { useState } from "react";
import { useLang } from "@/lib/lang-context";

const NAV_LINKS = [
  {
    id: "2gis",
    label: "2ГИС",
    url: "https://2gis.kz",
    color: "#2ba470",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
      </svg>
    ),
  },
  {
    id: "yandex",
    label: "Яндекс.Карты",
    url: "https://yandex.ru",
    color: "#fc3f1d",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
      </svg>
    ),
  },
  {
    id: "google",
    label: "Google Карты",
    url: "https://google.com",
    color: "#4285f4",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
      </svg>
    ),
  },
];

export function MapSection() {
  const { t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="py-3 sm:py-4">
      <div className="flex items-center gap-2 mb-3 sm:mb-5">
        <div className="section-decoration shrink-0" aria-hidden="true" />
        <h2 className="text-base sm:text-2xl font-bold text-foreground font-[family-name:var(--font-heading)] truncate">
          {t("mapTitle")}
        </h2>
      </div>

      <div className="relative rounded-lg sm:rounded-2xl overflow-hidden border border-border/50 shadow-card">
        {/* Map-like background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" aria-hidden="true">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Main clickable area */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-10 w-full text-left px-4 py-6 sm:px-8 sm:py-10 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary touch-manipulation group"
          aria-expanded={menuOpen}
          aria-label={t("mapAddress")}
        >
          {/* Pin icon */}
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
              <svg
                className="w-5 h-5 sm:w-7 sm:h-7 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm sm:text-lg font-bold text-foreground font-[family-name:var(--font-heading)] break-words">
                г. Шымкент, микрорайон Нурсат, 125/1
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
                {menuOpen ? t("mapClose") : t("mapHint")}
              </p>
            </div>
          </div>
        </button>

        {/* Navigation menu */}
        <div
          className="relative z-10 overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: menuOpen ? "300px" : "0px",
            opacity: menuOpen ? 1 : 0,
          }}
        >
          <div className="px-4 pb-4 sm:px-8 sm:pb-6 pt-0">
            <div className="border-t border-border/50 pt-3 sm:pt-4">
              <p className="text-xs text-muted-foreground mb-2 sm:mb-3 font-medium uppercase tracking-wider">
                {t("mapChoose")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 sm:gap-3 px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-white border border-border/50 hover:border-current shadow-sm hover:shadow-card transition-all duration-200 group/btn touch-manipulation"
                    style={{ color: link.color }}
                  >
                    <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-current/10 flex items-center justify-center shrink-0 transition-colors duration-200 group-hover/btn:bg-current/20">
                      {link.icon}
                    </span>
                    <span className="text-sm sm:text-sm font-semibold text-foreground truncate">
                      {link.label}
                    </span>
                    <svg
                      className="w-3.5 h-3.5 text-muted-foreground ml-auto shrink-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
