import { Header } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Header";
import { Footer } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Footer";
import { getLayoutData } from "@/lib/layout-data";
import { queryOne } from "@/lib/db";
import { CmsContent } from "@/components/cms-content";

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

export default async function CmsPage({ slug }: { slug: string }) {
  const { menu, contacts, settingMap } = await getLayoutData();
  const page = await queryOne<PageData>(
    'SELECT title, content, "titleEn", "contentEn", "titleKz", "contentKz", "titleQz", "contentQz" FROM "Page" WHERE slug = $1 AND "isPublished" = true',
    [slug]
  );

  return (
    <>
      <Header menu={menu} contacts={contacts} />
      <main className="container mx-auto px-4 py-8">
        <div className="page-header mb-8">
          <CmsContent
            title={page?.title || slug}
            titleEn={page?.titleEn}
            titleKz={page?.titleKz}
            titleQz={page?.titleQz}
            hospitalName={settingMap.hospital_name}
          />
        </div>
        {page?.content ? (
          <CmsContent
            content={page.content}
            contentEn={page.contentEn}
            contentKz={page.contentKz}
            contentQz={page.contentQz}
          />
        ) : (
          <p className="text-muted-foreground">Страница в разработке</p>
        )}
      </main>
      <Footer contacts={contacts} settingMap={settingMap} />
    </>
  );
}
