import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const [pages, news, departments, doctors] = await Promise.all([
    prisma.page.count(),
    prisma.news.count(),
    prisma.department.count(),
    prisma.doctor.count(),
  ]);

  const stats = [
    { label: "Страницы", value: pages, icon: "📄", href: "/admin/pages" },
    { label: "Новости", value: news, icon: "📰", href: "/admin/news" },
    { label: "Отделения", value: departments, icon: "🏥", href: "/admin/departments" },
    { label: "Врачи", value: doctors, icon: "👨‍⚕️", href: "/admin/departments" },
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
