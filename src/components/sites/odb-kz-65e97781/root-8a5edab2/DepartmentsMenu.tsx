"use client";

import { useLang } from "@/lib/lang-context";

interface DepartmentData {
  slug: string;
  name: string;
  nameEn?: string;
  nameKz?: string;
}

function langName(dept: DepartmentData, lang: string) {
  switch (lang) {
    case "en": return dept.nameEn || dept.name;
    case "kz": return dept.nameKz || dept.name;
    default: return dept.name;
  }
}

export function DepartmentsMenu({ departments }: { departments: DepartmentData[] }) {
  const { lang, t } = useLang();

  return (
    <section className="bg-white rounded-lg sm:rounded-2xl p-3 sm:p-6 shadow-soft border border-border/50">
      <h2 className="text-base sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2 font-[family-name:var(--font-heading)]">
        <div className="w-1 h-5 sm:h-6 bg-primary rounded-full" aria-hidden="true" />
        {t("departmentsTitle")}
      </h2>
      <div className="grid sm:grid-cols-2 gap-1.5 sm:gap-3">
        {departments.map((dept) => (
          <a
            key={dept.slug}
            href={`/o-nas/otdeleniya#${dept.slug}`}
            className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-lg sm:rounded-xl hover:bg-primary/5 transition-colors group border border-transparent hover:border-primary/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary touch-manipulation"
          >
            <div className="size-8 sm:size-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
              <svg className="size-4 sm:size-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-tight">
              {langName(dept, lang)}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
