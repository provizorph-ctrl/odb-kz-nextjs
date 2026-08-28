import { Header } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Header";
import { Footer } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Footer";
import { getLayoutData } from "@/lib/layout-data";
import { queryOne } from "@/lib/db";

export const dynamic = "force-dynamic";

interface PageData {
  title: string;
  content: string;
  titleEn?: string;
  contentEn?: string;
  titleKz?: string;
  contentKz?: string;
  titleQz?: string;
  contentQz?: string;
}

export default async function CmsPage({ params, slug }: { params?: Promise<{ slug?: string }>; slug: string }) {
  const { menu, contacts, settingMap } = await getLayoutData();
  const page = await queryOne<PageData>('SELECT title, content, "titleEn", "contentEn", "titleKz", "contentKz", "titleQz", "contentQz" FROM "Page" WHERE slug = $1 AND "isPublished" = true', [slug]);

  return (
    <>
      <Header menu={menu} contacts={contacts} />
      <main className="container mx-auto px-4 py-8">
        <div className="page-header mb-8">
          <h1 className="text-3xl font-bold text-foreground">{page?.title || slug}</h1>
          <h2 className="text-xl text-primary mt-2">
            {settingMap.hospital_name || "Областная детская больница"}
          </h2>
        </div>
        {page?.content ? (
          <div className="prose prose-lg max-w-4xl" dangerouslySetInnerHTML={{ __html: page.content }} />
        ) : (
          <p className="text-muted-foreground">Страница в разработке</p>
        )}
      </main>
      <Footer contacts={contacts} settingMap={settingMap} />
    </>
  );
}
