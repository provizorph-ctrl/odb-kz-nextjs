import { Header } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Header";
import { Footer } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Footer";
import { getLayoutData, type LayoutData } from "@/lib/layout-data";

export async function SiteLayout({ children }: { children: React.ReactNode }) {
  const { menu, contacts, settingMap } = await getLayoutData();
  return (
    <>
      <Header menu={menu} contacts={contacts} />
      {children}
      <Footer contacts={contacts} settingMap={settingMap} />
    </>
  );
}
