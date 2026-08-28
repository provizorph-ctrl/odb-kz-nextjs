const { Pool } = require("pg");

const pool = new Pool({
  host: "aws-0-ap-southeast-2.pooler.supabase.com",
  port: 6543,
  user: "postgres.ftgyiwyttcwdyiqqnmmm",
  password: "QWer123456!@#Qw",
  database: "postgres",
  ssl: { rejectUnauthorized: false },
});

async function seed() {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    // 1. Update settings with real data
    const settings = [
      ["site_title", "Областная детская больница"],
      ["site_description", "Государственное коммунальное предприятие на праве хозяйственного ведения \"Областная детская больница\" управления здравоохранения Туркестанской области"],
      ["hospital_name", "Областная детская больница"],
      ["hospital_full_name", "ГКП на ПХВ \"Областная детская больница\" УЗ Туркестанской области"],
      ["hospital_address", "г. Шымкент, микрорайон НУРСАТ, 125/1"],
      ["phone_main", "+7 (7252) 77-31-47"],
      ["phone_call_center", "+7 (7252) 77-31-47"],
      ["phone_hotline", "Телефон доверия"],
      ["phone_mobile", "Мобильный доверия"],
      ["email", "info@odb.kz"],
      ["director_name", "Досанова Алтын Мейрамбаевна"],
      ["director_title", "Руководитель ГКП на ПХВ Областная детская больница УЗ ТО"],
      ["beds_count", "422"],
      ["treated_2025", "20332"],
      ["kdc_patients", "75929"],
      ["doctors_count", "168"],
      ["nurses_count", "507"],
      ["footer_text", "© 2021-2025 Все права защищены"],
    ];

    for (const [key, value] of settings) {
      await client.query(
        `INSERT INTO "Setting" ("key", value)
         VALUES ($1, $2)
         ON CONFLICT ("key") DO UPDATE SET value = $2`,
        [key, value]
      );
    }
    console.log("Settings updated");

    // 2. Update contacts
    await client.query('DELETE FROM "Contact"');
    const contacts = [
      ["Главный вход", "+7 (7252) 77-31-47", "main", 1],
      ["Call-центр", "+7 (7252) 77-31-47", "call-center", 2],
      ["Поликлиника", "+7 (7252) 77-31-47", "clinic", 3],
      ["Регистратура", "+7 (7252) 77-31-47", "registry", 4],
      ["Приёмное отделение", "+7 (7252) 77-31-47", "admission", 5],
      ["Адрес", "г. Шымкент, микрорайон НУРСАТ, 125/1", "address", 6],
      ["Email", "info@odb.kz", "email", 7],
      ["Телефон доверия", "+7 (7252) 77-31-47", "hotline", 8],
    ];
    for (const [label, value, type, sort] of contacts) {
      await client.query(
        `INSERT INTO "Contact" (label, value, type, "sortOrder")
         VALUES ($1, $2, $3, $4)`,
        [label, value, type, sort]
      );
    }
    console.log("Contacts updated");

    // 3. Add real news from odb.kz
    await client.query('DELETE FROM "News"');
    const news = [
      {
        slug: "diagnostika-vrozhdennykh-immunodefitsitov",
        title: "Данная диагностика врождённых иммунодефицитов для профилактики ранней детской смертности и инвалидности",
        description: "Диагностика врождённых иммунодефицитов направлена на профилактику ранней детской смертности и инвалидности.",
        content: "Областная детская больница Turкестанской области внедряет новейшие методы диагностики врождённых иммунодефицитов. Данные технологии позволяют выявлять заболевания на ранних стадиях и значительно снижать уровень детской смертности и инвалидности.",
        date: "2026-07-09",
        isPublished: true,
      },
      {
        slug: "razvivaetsya-otechestvennaya-medicina",
        title: "Развивается и отечественная медицина",
        description: "Развитие отечественной медицины в Туркестанской области.",
        content: "Туркестанская область активно развивает медицинскую инфраструктуру. Областная детская больница является одним из ведущих многопрофильных стационаров, предоставляющих все виды специализированной медицинской помощи детям.",
        date: "2026-07-01",
        isPublished: true,
      },
      {
        slug: "obrashchenie-golovy-gosudarstva",
        title: "Обращение Главы государства Касым-Жомарта Токаева по случаю вступления в силу Новой Конституции Казахстана",
        description: "Обращение Президента РК по случаю Новой Конституции.",
        content: "Уважаемые соотечественники! Вступление в силу Новой Конституции Казахстана ознаменовало важный этап в развитии нашего государства. Мы продолжаем совершенствовать систему здравоохранения, включая детскую медицину.",
        date: "2026-07-01",
        isPublished: true,
      },
    ];
    for (const n of news) {
      await client.query(
        `INSERT INTO "News" (slug, title, description, content, date, "isPublished", "isFeatured")
         VALUES ($1, $2, $3, $4, $5, $6, false)`,
        [n.slug, n.title, n.description, n.content, n.date, n.isPublished]
      );
    }
    console.log("News added");

    // 4. Add real departments from odb.kz
    await client.query('DELETE FROM "Department"');
    const departments = [
      { slug: "khirurgiya", name: "Отделение хирургии", description: "Хирургическое отделение оказывает высокоспециализированную помощь детям по кардиохирургии, нейрохирургии, неонатальной хирургии, травматологии и ортопедии.", icon: "🔬", sortOrder: 1 },
      { slug: "nevropatologiya", name: "Отделение невропатологии", description: "Неврологическое отделение обеспечивает диагностику и лечение неврологических заболеваний у детей.", icon: "🧠", sortOrder: 2 },
      { slug: "rentgenologiya", name: "Рентгенологическая диагностика", description: "Отделение рентгенологической диагностики提供ляет полный спектр лучевой диагностики.", icon: "📡", sortOrder: 3 },
      { slug: "uzi", name: "Ультразвуковая диагностика", description: "Отделение ультразвуковой диагностики проводит обследование детей с использованием современного оборудования.", icon: "🔊", sortOrder: 4 },
      { slug: "konsultativno-diagnosticheskaya-poliklinika", name: "Консультативно-диагностическая поликлиника", description: "Поликлиника на 420 посещений оказывает консультативную и диагностическую помощь детям.", icon: "🏥", sortOrder: 5 },
      { slug: "surdologicheskiy-centr", name: "Сурдологический центр", description: "Сурдологический центр提供ляет помощь детям с нарушениями слуха.", icon: "👂", sortOrder: 6 },
      { slug: "telemedicinskiy-centr", name: "Телемедицинский центр", description: "Телемедицинский центр обеспечивает дистанционные консультации с ведущими специалистами.", icon: "💻", sortOrder: 7 },
      { slug: "dnevnoy-statsionar", name: "Дневной стационар", description: "Дневной стационар на 50 коек提供ляет стационарную помощь без круглосуточного пребывания.", icon: "🛏️", sortOrder: 8 },
    ];
    for (const d of departments) {
      await client.query(
        `INSERT INTO "Department" (slug, name, description, icon, "sortOrder", "isPublished")
         VALUES ($1, $2, $3, $4, $5, true)`,
        [d.slug, d.name, d.description, d.icon, d.sortOrder]
      );
    }
    console.log("Departments added");

    // 5. Update menu with real structure
    await client.query('DELETE FROM "MenuItem"');
    const menuItems = [
      { label: "Главная", url: "/", sortOrder: 1 },
      { label: "О нас", url: "/o-nas", sortOrder: 2 },
      { label: "Отделения", url: "/departments", sortOrder: 3 },
      { label: "Новости", url: "/news-ru", sortOrder: 4 },
      { label: "Информация", url: "/informatsiya", sortOrder: 5 },
      { label: "Государственные закупки", url: "/gosudarstvennye-zakupki-ru", sortOrder: 6 },
      { label: "Комплаенс-служба", url: "/komplaens-sluzhba", sortOrder: 7 },
      { label: "Фотогалерея", url: "/photogallery-1", sortOrder: 8 },
      { label: "Пациентам", url: "/patsientam", sortOrder: 9 },
      { label: "Контакты", url: "/conact-ru", sortOrder: 10 },
    ];
    for (const m of menuItems) {
      await client.query(
        `INSERT INTO "MenuItem" (label, url, "sortOrder", "isPublished")
         VALUES ($1, $2, $3, true)`,
        [m.label, m.url, m.sortOrder]
      );
    }
    console.log("Menu items added");

    await client.query("COMMIT");
    console.log("All data seeded successfully!");
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("Error seeding:", err);
  } finally {
    client.release();
    await pool.end();
  }
}

seed();
