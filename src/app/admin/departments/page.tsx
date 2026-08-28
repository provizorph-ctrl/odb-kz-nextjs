import { query } from "@/lib/db";
import Link from "next/link";

interface DeptRow {
  id: string;
  name: string;
  isPublished: boolean;
  doctor_count: string;
}

export default async function AdminDepartments() {
  const departments = await query<DeptRow>(
    `SELECT d.id, d.name, d."isPublished",
      (SELECT COUNT(*)::text FROM "Doctor" doc WHERE doc."departmentId" = d.id) as doctor_count
     FROM "Department" d ORDER BY d."sortOrder" ASC`
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Отделения</h1>
        <Link
          href="/admin/departments/new"
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
        >
          + Новое отделение
        </Link>
      </div>
      <div className="bg-white rounded-lg border border-gray-200">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left p-4">Название</th>
              <th className="text-left p-4">Врачи</th>
              <th className="text-left p-4">Статус</th>
              <th className="text-left p-4">Действия</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((dept) => (
              <tr key={dept.id} className="border-b border-gray-100">
                <td className="p-4">{dept.name}</td>
                <td className="p-4 text-gray-500">
                  {dept.doctor_count} врачей
                </td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      dept.isPublished
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {dept.isPublished ? "Опубликовано" : "Черновик"}
                  </span>
                </td>
                <td className="p-4">
                  <Link
                    href={`/admin/departments/${dept.id}`}
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
