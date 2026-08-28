import { Header } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Header";
import { Footer } from "@/components/sites/odb-kz-65e97781/root-8a5edab2/Footer";
import { getLayoutData } from "@/lib/layout-data";
import { query } from "@/lib/db";

interface ContactRow {
  label: string;
  value: string;
  type: string;
}

interface SettingRow {
  key: string;
  value: string;
}

export default async function ContactsPage() {
  const { menu, contacts: layoutContacts, settingMap } = await getLayoutData();
  const contacts = await query<ContactRow>(
    'SELECT label, value, type FROM "Contact" ORDER BY "sortOrder" ASC'
  );
  const address = settingMap.address || "г. Туркестан, ул. Абая, 52";

  return (
    <>
      <Header menu={menu} contacts={layoutContacts} />
      <main className="container mx-auto px-4 py-8">
        <div className="page-header mb-8">
          <h1 className="text-3xl font-bold text-foreground">Контакты</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Адрес</h2>
            <p className="text-muted-foreground">{address}</p>
            <div className="mt-6 space-y-3">
              {contacts.map((c) => (
                <div key={c.label}>
                  <span className="text-sm text-muted-foreground">{c.label}:</span>
                  <p className="font-semibold">{c.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border border-border">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Карта загружается...</p>
            </div>
          </div>
        </div>
      </main>
      <Footer contacts={layoutContacts} settingMap={settingMap} />
    </>
  );
}
