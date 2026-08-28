interface DepartmentData {
  slug: string;
  name: string;
}

export function DepartmentsMenu({ departments }: { departments: DepartmentData[] }) {
  return (
    <section className="bg-white rounded-2xl p-6 shadow-soft border border-border/50">
      <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
        <div className="w-1 h-6 bg-primary rounded-full" />
        Отделения
      </h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {departments.map((dept) => (
          <a
            key={dept.slug}
            href={`/o-nas/otdeleniya#${dept.slug}`}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors group border border-transparent hover:border-primary/20"
          >
            <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
              <svg className="size-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
              {dept.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
