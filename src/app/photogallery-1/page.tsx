import { Header } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Header";
import { Footer } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Footer";
import { getLayoutData } from "@/lib/layout-data";
import { query } from "@/lib/db";

interface GalleryImage {
  id: string;
  src: string;
  alt: string | null;
}

export default async function PhotoGalleryPage() {
  const { menu, contacts, settingMap } = await getLayoutData();
  const images = await query<GalleryImage>(
    'SELECT id, src, alt FROM "GalleryImage" ORDER BY "createdAt" DESC'
  );

  return (
    <>
      <Header menu={menu} contacts={contacts} />
      <main className="container mx-auto px-4 py-8">
        <div className="page-header mb-8">
          <h1 className="text-3xl font-bold text-foreground">Фотогалерея</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.length === 0 && (
            <p className="col-span-full text-muted-foreground text-center py-12">
              Фотографий пока нет
            </p>
          )}
          {images.map((img) => (
            <div
              key={img.id}
              className="aspect-square rounded-lg bg-muted hover:opacity-90 transition-opacity cursor-pointer overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.alt || ""}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </main>
      <Footer contacts={contacts} settingMap={settingMap} />
    </>
  );
}
