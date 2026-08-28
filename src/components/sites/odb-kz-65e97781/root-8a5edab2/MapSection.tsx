export function MapSection() {
  return (
    <section className="py-4">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-8 h-0.5 bg-primary rounded-full" />
        <h2 className="text-xl font-bold">Расположение</h2>
      </div>
      <div className="rounded-2xl overflow-hidden border border-border/50 shadow-card">
        <div className="aspect-video bg-muted flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
          <div className="text-center relative z-10">
            <div className="size-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                className="size-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
            <p className="text-sm font-medium text-foreground">г. Туркестан, ул. Абая, 52</p>
            <p className="text-xs text-muted-foreground mt-1">Карта загружается...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
