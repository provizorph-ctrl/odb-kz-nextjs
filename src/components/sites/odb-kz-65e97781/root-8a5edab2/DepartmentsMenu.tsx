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
  const { t } = useLang();

  return (
    <section className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-soft border border-border/50">
      <h2 className="section-heading mb-4 flex items-center gap-2">
        <div className="w-1 h-6 bg-primary rounded-full" aria-hidden="true" />
        {t("departmentsTitle")}
      </h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {departments.map((dept) => (
          <a
            key={dept.slug}
            href={`/o-nas/otdeleniya#${dept.slug}`}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors group border border-transparent hover:border-primary/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
              <svg className="size-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
              {langName(dept, useLang().lang)}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
