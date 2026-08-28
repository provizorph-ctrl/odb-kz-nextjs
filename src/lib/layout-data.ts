import { query } from "@/lib/db";

interface MenuRow {
  id: string;
  label: string;
  labelEn?: string;
  labelKz?: string;
  url: string;
  parentId: string | null;
  sortOrder: number;
}

interface ContactRow {
  label: string;
  value: string;
}

interface SettingRow {
  key: string;
  value: string;
}

export interface LayoutData {
  menu: (MenuRow & { children: MenuRow[] })[];
  contacts: ContactRow[];
  settingMap: Record<string, string>;
}

export async function getLayoutData(): Promise<LayoutData> {
  const [menuItems, contacts, settings] = await Promise.all([
    query<MenuRow>(
      'SELECT id, label, "labelEn", "labelKz", url, "parentId", "sortOrder" FROM "MenuItem" WHERE "isPublished" = true ORDER BY "sortOrder" ASC'
    ),
    query<ContactRow>(
      'SELECT label, value FROM "Contact" ORDER BY "sortOrder" ASC'
    ),
    query<SettingRow>('SELECT key, value FROM "Setting"'),
  ]);

  const settingMap = Object.fromEntries(settings.map((s) => [s.key, s.value]));
  const topLevel = menuItems.filter((m) => !m.parentId);
  const menu = topLevel.map((item) => ({
    ...item,
    children: menuItems.filter((child) => child.parentId === item.id),
  }));

  return { menu, contacts, settingMap };
}
