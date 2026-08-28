import { query } from "@/lib/db";

export const dynamic = "force-dynamic";

interface CountResult {
  count: string;
}

export default async function AdminDashboard() {
  const [pages, news, departments, doctors] = await Promise.all([
    query<CountResult>('SELECT COUNT(*) as count FROM "Page"'),
    query<CountResult>('SELECT COUNT(*) as count FROM "News"'),
    query<CountResult>('SELECT COUNT(*) as count FROM "Department"'),
    query<CountResult>('SELECT COUNT(*) as count FROM "Doctor"'),
  ]);

  const stats = [
    { label: "Страницы", value: pages[0]?.count || "0", icon: "📄", href: "/admin/pages" },
    { label: "Новости", value: news[0]?.count || "0", icon: "📰", href: "/admin/news" },
    { label: "Отделения", value: departments[0]?.count || "0", icon: "🏥", href: "/admin/departments" },
    { label: "Врачи", value: doctors[0]?.count || "0", icon: "👨‍⚕️", href: "/admin/departments" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Дашборд</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <a
            key={stat.label}
            href={stat.href}
            className="p-6 bg-white rounded-lg border border-gray-200 hover:border-primary transition-colors"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
