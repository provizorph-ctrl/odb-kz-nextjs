"use client";

import { useLang } from "@/lib/lang-context";

interface NewsData {
  slug: string;
  title: string;
  titleEn?: string;
  titleKz?: string;
  description: string | null;
  descriptionEn?: string | null;
  descriptionKz?: string | null;
  date: string;
}

export function NewsModule({ news }: { news: NewsData[] }) {
  const { lang, locale, t } = useLang();

  function langField(item: NewsData, field: "title" | "description") {
    const suffix = lang === "en" ? "En" : lang === "kz" ? "Kz" : "";
    const val = item[field + suffix as keyof NewsData];
    return (typeof val === "string" ? val : null) || item[field];
  }

  return (
    <section className="bg-white rounded-lg sm:rounded-2xl p-3 sm:p-6 shadow-soft border border-border/50">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h2 className="text-base sm:text-2xl font-bold text-foreground flex items-center gap-2 font-[family-name:var(--font-heading)]">
          <div className="w-1 h-5 sm:h-6 bg-primary rounded-full" aria-hidden="true" />
          {t("newsTitle")}
        </h2>
        <a href="/news-ru" className="text-xs sm:text-sm text-primary hover:underline font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
          {t("allNews")}
        </a>
      </div>
      <div className="space-y-2 sm:space-y-4">
        {news.length === 0 && (
          <p className="text-xs sm:text-sm text-muted-foreground">{t("noNews")}</p>
        )}
        {news.map((item) => (
          <a
            key={item.slug}
            href={`/news-ru/${item.slug}`}
            className="block p-2.5 sm:p-4 rounded-lg sm:rounded-xl hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary touch-manipulation"
          >
            <div className="text-[11px] sm:text-xs text-muted-foreground mb-0.5 sm:mb-1">
              {new Date(item.date).toLocaleDateString(locale, {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
            <h3 className="text-xs sm:text-sm font-semibold mb-0.5 sm:mb-1 leading-tight">
              {langField(item, "title")}
            </h3>
            {item.description && (
              <p className="text-[11px] sm:text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                {langField(item, "description")}
              </p>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
