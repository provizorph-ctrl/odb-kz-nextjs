import { query } from "@/lib/db";
import Link from "next/link";

export const dynamic = "force-dynamic";

interface ContactRow {
  id: string;
  label: string;
  value: string;
  type: string;
  sortOrder: number;
}

export default async function AdminContacts() {
  const contacts = await query<ContactRow>(
    'SELECT id, label, value, type, "sortOrder" FROM "Contact" ORDER BY "sortOrder" ASC'
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Контакты</h1>
        <Link
          href="/admin/contacts/new"
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
        >
          + Новый контакт
        </Link>
      </div>
      <div className="bg-white rounded-lg border border-gray-200">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left p-4">Название</th>
              <th className="text-left p-4">Значение</th>
              <th className="text-left p-4">Тип</th>
              <th className="text-left p-4">Порядок</th>
              <th className="text-left p-4">Действия</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c.id} className="border-b border-gray-100">
                <td className="p-4 font-medium">{c.label}</td>
                <td className="p-4 text-gray-600">{c.value}</td>
                <td className="p-4"><span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">{c.type}</span></td>
                <td className="p-4 text-gray-500">{c.sortOrder}</td>
                <td className="p-4">
                  <Link href={`/admin/contacts/${c.id}`} className="text-primary hover:underline">Редактировать</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
