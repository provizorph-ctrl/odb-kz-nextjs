import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash("admin123", 12);
  await prisma.user.upsert({
    where: { email: "admin@odb.kz" },
    update: {},
    create: {
      email: "admin@odb.kz",
      name: "Администратор",
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  // Create menu items
  const menuItems = [
    { label: "Главная", url: "/", sortOrder: 0 },
    {
      label: "О нас",
      url: "/o-nas",
      sortOrder: 1,
      children: {
        create: [
          { label: "Миссия", url: "/o-nas/missiya", sortOrder: 0 },
          { label: "История", url: "/o-nas/istoriya", sortOrder: 1 },
          { label: "Отделения", url: "/o-nas/otdeleniya", sortOrder: 2 },
          { label: "Коллектив", url: "/o-nas/kollektiv", sortOrder: 3 },
        ],
      },
    },
    { label: "Новости", url: "/news-ru", sortOrder: 2 },
    { label: "Контакты", url: "/conact-ru", sortOrder: 3 },
    { label: "Фотогалерея", url: "/photogallery-1", sortOrder: 4 },
  ];

  for (const item of menuItems) {
    const { children, ...data } = item;
    await prisma.menuItem.create({
      data: {
        ...data,
        children: children ? { create: children.create } : undefined,
      },
    });
  }

  // Create contacts
  await prisma.contact.createMany({
    data: [
      { label: "Call-центр", value: "+7 (7252) 53-00-00", type: "phone", sortOrder: 0 },
      { label: "Телефон доверия", value: "+7 (7252) 53-00-01", type: "phone", sortOrder: 1 },
      { label: "Мобильный доверия", value: "+7 707 844 00 44", type: "phone", sortOrder: 2 },
    ],
  });

  // Create departments
  await prisma.department.createMany({
    data: [
      { slug: "pediatricheskoe", name: "Педиатрическое отделение", sortOrder: 0, isPublished: true },
      { slug: "hirurgicheskoe", name: "Хирургическое отделение", sortOrder: 1, isPublished: true },
      { slug: "konsultativno-diagnosticheskoe", name: "Консультативно-диагностическое отделение", sortOrder: 2, isPublished: true },
      { slug: "poliklinika", name: "Поликлиника", sortOrder: 3, isPublished: true },
    ],
  });

  // Create settings
  await prisma.setting.createMany({
    data: [
      { key: "siteName", value: "Областная детская больница" },
      { key: "siteNameEn", value: "Regional Children's Hospital" },
      { key: "siteNameKz", value: "Облыстық балалар ауруханасы" },
      { key: "siteDescription", value: "Многопрофильное медицинское учреждение для детей Туркестанской области" },
      { key: "address", value: "г. Туркестан, ул. Абая, 52" },
    ],
  });

  console.log("Seed completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
