import { Header } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Header";
import { Footer } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Footer";
import { getLayoutData } from "@/lib/layout-data";
import { query } from "@/lib/db";

interface DepartmentRow {
  slug: string;
  name: string;
  description: string | null;
}

export default async function DepartmentsPage() {
  const { menu, contacts, settingMap } = await getLayoutData();
  const departments = await query<DepartmentRow>(
    'SELECT slug, name, description FROM "Department" WHERE "isPublished" = true ORDER BY "sortOrder" ASC'
  );

  return (
    <>
      <Header menu={menu} contacts={contacts} />
      <main className="container mx-auto px-4 py-8">
        <div className="page-header mb-8">
          <h1 className="text-3xl font-bold text-foreground">Отделения</h1>
          <h2 className="text-xl text-primary mt-2">
            {settingMap.siteName || "Областная детская больница"}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {departments.map((dept) => (
            <div
              key={dept.slug}
              className="border border-border rounded-lg p-4 hover:border-primary/30 transition-colors"
            >
              <h3 className="font-semibold">{dept.name}</h3>
              {dept.description && (
                <p className="text-sm text-muted-foreground mt-2">{dept.description}</p>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer contacts={contacts} settingMap={settingMap} />
    </>
  );
}
