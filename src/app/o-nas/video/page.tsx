import { Header } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Header";
import { Footer } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Footer";
import { getLayoutData } from "@/lib/layout-data";

export const dynamic = "force-dynamic";

export default async function VideoPage() {
  const { menu, contacts, settingMap } = await getLayoutData();

  return (
    <>
      <Header menu={menu} contacts={contacts} />
      <main className="container mx-auto px-4 py-8">
        <div className="page-header mb-8">
          <h1 className="text-3xl font-bold text-foreground">Видео</h1>
          <h2 className="text-xl text-primary mt-2">
            {settingMap.siteName || "Областная детская больница"}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="aspect-video rounded-lg bg-muted" />
          ))}
        </div>
      </main>
      <Footer contacts={contacts} settingMap={settingMap} />
    </>
  );
}
