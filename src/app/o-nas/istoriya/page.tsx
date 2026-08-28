import { Header } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Header";
import { Footer } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Footer";
import { getLayoutData } from "@/lib/layout-data";

export default async function HistoryPage() {
  const { menu, contacts, settingMap } = await getLayoutData();

  return (
    <>
      <Header menu={menu} contacts={contacts} />
      <main className="container mx-auto px-4 py-8">
        <div className="page-header mb-8">
          <h1 className="text-3xl font-bold text-foreground">История</h1>
          <h2 className="text-xl text-primary mt-2">
            {settingMap.siteName || "Областная детская больница"}
          </h2>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          Наша больница была основана в 2021 году и с того времени является
          ведущим медицинским учреждением региона.
        </p>
      </main>
      <Footer contacts={contacts} settingMap={settingMap} />
    </>
  );
}
