import { query } from "@/lib/db";
import Link from "next/link";

export const dynamic = "force-dynamic";

interface SettingRow {
  id: string;
  key: string;
  value: string;
}

export default async function AdminSettings() {
  const settings = await query<SettingRow>(
    'SELECT id, key, value FROM "Setting" ORDER BY key ASC'
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Настройки сайта</h1>
        <Link
          href="/admin/settings/new"
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
        >
          + Новая настройка
        </Link>
      </div>
      <div className="bg-white rounded-lg border border-gray-200">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left p-4">Ключ</th>
              <th className="text-left p-4">Значение</th>
              <th className="text-left p-4">Действия</th>
            </tr>
          </thead>
          <tbody>
            {settings.map((s) => (
              <tr key={s.id} className="border-b border-gray-100">
                <td className="p-4 font-mono text-sm font-medium">{s.key}</td>
                <td className="p-4 text-gray-600 truncate max-w-md">{s.value}</td>
                <td className="p-4">
                  <Link href={`/admin/settings/${s.id}`} className="text-primary hover:underline">Редактировать</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
