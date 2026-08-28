import { Header } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Header";
import { Footer } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Footer";
import { getLayoutData } from "@/lib/layout-data";

export default async function AboutPage() {
  const { menu, contacts, settingMap } = await getLayoutData();

  return (
    <>
      <Header menu={menu} contacts={contacts} />
      <main className="container mx-auto px-4 py-8">
        <div className="page-header mb-8">
          <h1 className="text-3xl font-bold text-foreground">О нас</h1>
          <h2 className="text-xl text-primary mt-2">
            {settingMap.siteName || "Областная детская больница"}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Миссия</h3>
            <p className="text-muted-foreground leading-relaxed">
              Providing high-quality medical care for children in the Turkestan
              region with modern equipment and highly qualified specialists.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">История</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our hospital has been serving children since 2021, becoming a
              leading multi-profile medical facility in the region.
            </p>
          </div>
        </div>
      </main>
      <Footer contacts={contacts} settingMap={settingMap} />
    </>
  );
}
