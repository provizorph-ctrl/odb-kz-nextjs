import { query } from "@/lib/db";
import Link from "next/link";

interface PageRow {
  id: string;
  title: string;
  slug: string;
  isPublished: boolean;
}

export default async function AdminPages() {
  const pages = await query<PageRow>(
    'SELECT id, title, slug, "isPublished" FROM "Page" ORDER BY "sortOrder" ASC'
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Страницы</h1>
        <Link
          href="/admin/pages/new"
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
        >
          + Новая страница
        </Link>
      </div>
      <div className="bg-white rounded-lg border border-gray-200">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left p-4">Название</th>
              <th className="text-left p-4">Slug</th>
              <th className="text-left p-4">Статус</th>
              <th className="text-left p-4">Действия</th>
            </tr>
          </thead>
          <tbody>
            {pages.length === 0 && (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">
                  Страниц пока нет
                </td>
              </tr>
            )}
            {pages.map((page) => (
              <tr key={page.id} className="border-b border-gray-100">
                <td className="p-4">{page.title}</td>
                <td className="p-4 text-gray-500">/{page.slug}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      page.isPublished
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {page.isPublished ? "Опубликовано" : "Черновик"}
                  </span>
                </td>
                <td className="p-4">
                  <Link
                    href={`/admin/pages/${page.id}`}
                    className="text-primary hover:underline"
                  >
                    Редактировать
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
