import { Header } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Header";
import { HeroSlider } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/HeroSlider";
import { Statistics } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Statistics";
import { AboutSection } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/AboutSection";
import { DepartmentsMenu } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/DepartmentsMenu";

export const dynamic = "force-dynamic";
import { NewsModule } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/NewsModule";
import { PhotoGallery } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/PhotoGallery";
import { GovProgramsCarousel } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/GovProgramsCarousel";
import { QuickLinksMenu } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/QuickLinksMenu";
import { MapSection } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/MapSection";
import { Sidebar } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Sidebar";
import { Footer } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Footer";
import { getLayoutData } from "@/lib/layout-data";
import { query } from "@/lib/db";

interface DepartmentRow {
  slug: string;
  name: string;
}

interface NewsRow {
  slug: string;
  title: string;
  description: string | null;
  date: string;
}

export default async function Home() {
  const { menu, contacts, settingMap } = await getLayoutData();

  const [departments, news] = await Promise.all([
    query<DepartmentRow>(
      'SELECT slug, name FROM "Department" WHERE "isPublished" = true ORDER BY "sortOrder" ASC'
    ),
    query<NewsRow>(
      'SELECT slug, title, description, "date" FROM "News" WHERE "isPublished" = true ORDER BY "date" DESC LIMIT 6'
    ),
  ]);

  return (
    <>
      <Header menu={menu} contacts={contacts} />
      <main className="container mx-auto px-4 py-6">
        <HeroSlider />
        <div className="grid lg:grid-cols-[1fr_320px] gap-8 mt-8">
          <div className="space-y-8">
            <Statistics />
            <AboutSection />
            <DepartmentsMenu departments={departments} />
            <NewsModule news={news} />
            <PhotoGallery />
            <GovProgramsCarousel />
            <QuickLinksMenu />
            <MapSection />
          </div>
          <Sidebar contacts={contacts} />
        </div>
      </main>
      <Footer contacts={contacts} settingMap={settingMap} />
    </>
  );
}
