import { Header } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Header";
import { HeroSlider } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/HeroSlider";
import { Statistics } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Statistics";
import { AboutSection } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/AboutSection";
import { DepartmentsMenu } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/DepartmentsMenu";
import { NewsModule } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/NewsModule";
import { PhotoGallery } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/PhotoGallery";
import { GovProgramsCarousel } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/GovProgramsCarousel";
import { QuickLinksMenu } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/QuickLinksMenu";
import { MapSection } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/MapSection";
import { Sidebar } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Sidebar";
import { Footer } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Footer";
import { getLayoutData } from "@/lib/layout-data";
import { query } from "@/lib/db";

export const dynamic = "force-dynamic";

interface DepartmentRow { slug: string; name: string; }
interface NewsRow { slug: string; title: string; description: string | null; date: string; }

export default async function Home() {
  const { menu, contacts, settingMap } = await getLayoutData();

  let departments: DepartmentRow[] = [];
  let news: NewsRow[] = [];
  try {
    [departments, news] = await Promise.all([
      query<DepartmentRow>('SELECT slug, name FROM "Department" WHERE "isPublished" = true ORDER BY "sortOrder" ASC'),
      query<NewsRow>('SELECT slug, title, description, "date" FROM "News" WHERE "isPublished" = true ORDER BY "date" DESC LIMIT 6'),
    ]);
  } catch {}

  return (
    <>
      <Header menu={menu} contacts={contacts} />
      <main id="main-content" className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-6">
        <HeroSlider />
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-8 mt-3 sm:mt-6 lg:mt-8">
          <div className="flex-1 min-w-0 space-y-3 sm:space-y-4 lg:space-y-8">
            <Statistics />
            <AboutSection description={settingMap.site_description} descriptionEn={settingMap.site_description_en} descriptionKz={settingMap.site_description_kz} />
            <DepartmentsMenu departments={departments} />
            <NewsModule news={news} />
            <PhotoGallery />
            <GovProgramsCarousel />
            <QuickLinksMenu />
            <MapSection />
          </div>
          <div className="w-full lg:w-[320px] lg:shrink-0">
            <Sidebar contacts={contacts} />
          </div>
        </div>
      </main>
      <Footer contacts={contacts} settingMap={settingMap} />
    </>
  );
}
