import { Header } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Header";
import { Footer } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Footer";
import { getLayoutData } from "@/lib/layout-data";

export default async function TipsPage() {
  const { menu, contacts, settingMap } = await getLayoutData();

  return (
    <>
      <Header menu={menu} contacts={contacts} />
      <main className="container mx-auto px-4 py-8">
        <div className="page-header mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            Советы детского врача
          </h1>
        </div>
        <p className="text-muted-foreground">
          Полезные советы от наших специалистов.
        </p>
      </main>
      <Footer contacts={contacts} settingMap={settingMap} />
    </>
  );
}
