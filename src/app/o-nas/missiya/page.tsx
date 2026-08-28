import { Header } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Header";
import { Footer } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Footer";
import { getLayoutData } from "@/lib/layout-data";

export const dynamic = "force-dynamic";

export default async function MissionPage() {
  const { menu, contacts, settingMap } = await getLayoutData();

  return (
    <>
      <Header menu={menu} contacts={contacts} />
      <main className="container mx-auto px-4 py-8">
        <div className="page-header mb-8">
          <h1 className="text-3xl font-bold text-foreground">Миссия</h1>
          <h2 className="text-xl text-primary mt-2">
            {settingMap.siteName || "Областная детская больница"}
          </h2>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          Наша миссия — предоставление высококачественной медицинской помощи
          детям Туркестанской области с использованием современного
          оборудования и высококвалифицированного персонала.
        </p>
      </main>
      <Footer contacts={contacts} settingMap={settingMap} />
    </>
  );
}
