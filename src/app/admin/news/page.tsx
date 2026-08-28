import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function AdminNews() {
  const news = await prisma.news.findMany({
    orderBy: { date: "desc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Новости</h1>
        <Link
          href="/admin/news/new"
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
        >
          + Новая новость
        </Link>
      </div>
      <div className="bg-white rounded-lg border border-gray-200">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left p-4">Название</th>
              <th className="text-left p-4">Дата</th>
              <th className="text-left p-4">Статус</th>
              <th className="text-left p-4">Действия</th>
            </tr>
          </thead>
          <tbody>
            {news.map((item: { id: string; title: string; date: Date; isPublished: boolean }) => (
              <tr key={item.id} className="border-b border-gray-100">
                <td className="p-4">{item.title}</td>
                <td className="p-4 text-gray-500">
                  {item.date.toLocaleDateString("ru-RU")}
                </td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      item.isPublished
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {item.isPublished ? "Опубликовано" : "Черновик"}
                  </span>
                </td>
                <td className="p-4">
                  <Link
                    href={`/admin/news/${item.id}`}
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
