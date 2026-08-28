import { Header } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Header";
import { Footer } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Footer";
import { getLayoutData } from "@/lib/layout-data";

export default async function VideoGalleryPage() {
  const { menu, contacts, settingMap } = await getLayoutData();

  return (
    <>
      <Header menu={menu} contacts={contacts} />
      <main className="container mx-auto px-4 py-8">
        <div className="page-header mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            Видеогалерея
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-video rounded-lg bg-muted hover:opacity-90 transition-opacity cursor-pointer"
            />
          ))}
        </div>
      </main>
      <Footer contacts={contacts} settingMap={settingMap} />
    </>
  );
}
