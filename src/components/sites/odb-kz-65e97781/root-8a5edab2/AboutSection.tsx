interface AboutProps {
  description?: string;
}

export function AboutSection({ description }: AboutProps) {
  return (
    <section className="py-4">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
        <div className="space-y-4 sm:space-y-5">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 sm:w-10 h-1 rounded-full bg-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">О нас</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-tight text-balance">
            Туркестанская областная многопрофильная детская больница
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {description || "Информация о деятельности Областной детской больницы. Областная детская больница Туркестанской области — крупный многопрофильный стационар на 422 коек, в котором сосредоточены все виды специализированной медицинской помощи детям."}
          </p>
          <a
            href="/o-nas"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary/90 transition-all shadow-soft hover:shadow-medium hover:-translate-y-0.5"
          >
            Подробнее
            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Современное оборудование" },
            { label: "Квалифицированный персонал" },
            { label: "Комфортные палаты" },
            { label: "Детская зона отдыха" },
          ].map((item, i) => (
            <div
              key={i}
              className="group aspect-video rounded-xl overflow-hidden bg-muted border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover cursor-pointer"
            >
              <div className="w-full h-full bg-gradient-to-br from-primary/15 to-primary/5 flex items-end p-3">
                <span className="text-xs font-medium text-primary/70 group-hover:text-primary transition-colors">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
