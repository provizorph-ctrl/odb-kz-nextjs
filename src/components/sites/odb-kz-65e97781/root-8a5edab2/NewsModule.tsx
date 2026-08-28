interface NewsData {
  slug: string;
  title: string;
  description: string | null;
  date: string;
}

export function NewsModule({ news }: { news: NewsData[] }) {
  return (
    <section className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-soft border border-border/50">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <div className="w-1 h-6 bg-primary rounded-full" />
          Новости
        </h2>
        <a href="/news-ru" className="text-sm text-primary hover:underline">
          Все новости →
        </a>
      </div>
      <div className="space-y-4">
        {news.length === 0 && (
          <p className="text-sm text-muted-foreground">Новостей пока нет</p>
        )}
        {news.map((item) => (
          <a
            key={item.slug}
            href={`/news-ru/${item.slug}`}
            className="block p-4 rounded-xl hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20"
          >
            <div className="text-xs text-muted-foreground mb-1">
              {new Date(item.date).toLocaleDateString("ru-RU", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
            <h3 className="text-sm font-semibold mb-1 group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-xs text-muted-foreground line-clamp-2">
                {item.description}
              </p>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
