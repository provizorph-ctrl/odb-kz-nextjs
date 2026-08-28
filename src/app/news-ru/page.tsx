import { Header } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Header";
import { Footer } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Footer";
import { getLayoutData } from "@/lib/layout-data";
import { query } from "@/lib/db";

interface NewsRow {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  image: string | null;
  date: string;
}

export default async function NewsPage() {
  const { menu, contacts, settingMap } = await getLayoutData();
  const newsItems = await query<NewsRow>(
    'SELECT id, slug, title, description, image, "date" FROM "News" WHERE "isPublished" = true ORDER BY "date" DESC'
  );

  return (
    <>
      <Header menu={menu} contacts={contacts} />
      <main className="container mx-auto px-4 py-8">
        <div className="page-header mb-8">
          <h1 className="text-3xl font-bold text-foreground">Новости</h1>
        </div>
        <div className="space-y-6">
          {newsItems.length === 0 && (
            <p className="text-muted-foreground">Новостей пока нет</p>
          )}
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
            >
              <time className="text-sm text-muted-foreground">
                {new Date(item.date).toLocaleDateString("ru-RU", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <h2 className="text-xl font-semibold mt-1">
                <a
                  href={`/news-ru/${item.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {item.title}
                </a>
              </h2>
              {item.description && (
                <p className="text-muted-foreground mt-2">{item.description}</p>
              )}
              <a
                href={`/news-ru/${item.slug}`}
                className="inline-block mt-3 text-primary font-medium hover:underline"
              >
                Подробнее →
              </a>
            </article>
          ))}
        </div>
      </main>
      <Footer contacts={contacts} settingMap={settingMap} />
    </>
  );
}
