"use client";

import { useLang } from "@/lib/lang-context";

interface StatData {
  title: string;
  titleEn?: string;
  titleKz?: string;
  count: number;
  icon: string;
}

function langTitle(stat: StatData, lang: string) {
  switch (lang) {
    case "en": return stat.titleEn || stat.title;
    case "kz": return stat.titleKz || stat.title;
    default: return stat.title;
  }
}

const iconSvgs: Record<string, string> = {
  bed: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1",
  heart: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  users: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",
};

const defaultStats: StatData[] = [
  { title: "коек", titleEn: "beds", titleKz: "кереует", count: 350, icon: "bed" },
  { title: "пролечено", titleEn: "treated", titleKz: "емделді", count: 15000, icon: "heart" },
  { title: "принято", titleEn: "admitted", titleKz: "қабылданды", count: 50000, icon: "users" },
];

export function Statistics({ stats }: { stats?: StatData[] }) {
  const { lang, locale, t } = useLang();
  const items = stats || defaultStats;

  return (
    <section className="py-4 sm:py-6" aria-label={t("statsLabel") || "Statistics"}>
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {items.map((stat) => {
          const path = iconSvgs[stat.icon] || iconSvgs.bed;
          return (
            <div
              key={stat.title}
              className="relative flex flex-col items-center text-center gap-1.5 sm:gap-3 p-2 sm:p-6 rounded-lg sm:rounded-2xl bg-white shadow-card border border-border/50 min-w-0 overflow-hidden"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-lg sm:rounded-2xl bg-primary/10 shrink-0">
                <svg className="w-5 h-5 sm:w-7 sm:h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={path} />
                </svg>
              </div>
              <div className="text-lg sm:text-3xl font-bold text-primary tracking-tight font-[family-name:var(--font-heading)]" aria-label={`${stat.count.toLocaleString(locale)} ${langTitle(stat, lang)}`}>
                {stat.count.toLocaleString(locale)}
              </div>
              <div className="text-xs sm:text-sm font-medium text-muted-foreground leading-tight break-words">
                {langTitle(stat, lang)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
