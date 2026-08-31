export type Lang = "ru" | "en" | "kz";

export const translations = {
  // Header
  schedule: { ru: "Пн-Пт: 8:00 - 17:00", en: "Mon-Fri: 8:00 - 17:00", kz: "Дс-Жм: 8:00 - 17:00" },
  hospitalShort: { ru: "ОДБ", en: "ODB", kz: "ОДБ" },
  hospitalFullName: { ru: "Областная детская больница", en: "Regional Children's Hospital", kz: "Облыстық балалар ауруханасы" },
  menuLabel: { ru: "Меню", en: "Menu", kz: "Мәзір" },

  // Navigation
  navHome: { ru: "Главная", en: "Home", kz: "Басты бет" },
  navAbout: { ru: "О нас", en: "About", kz: "Біз туралы" },
  navNews: { ru: "Новости", en: "News", kz: "Жаңалықтар" },
  navContacts: { ru: "Контакты", en: "Contacts", kz: "Байланыстар" },
  navDepartments: { ru: "Отделения", en: "Departments", kz: "Бөлімшелер" },

  // Footer
  navigation: { ru: "Навигация", en: "Navigation", kz: "Навигация" },
  feedback: { ru: "Обратная связь", en: "Feedback", kz: "Кері байланыс" },
  writeUs: { ru: "Написать нам", en: "Write to us", kz: "Бізге жазыңыз" },
  development: { ru: "Разработка", en: "Development by", kz: "Әзірлеу" },
  siteDescription: {
    ru: "Многопрофильное медицинское учреждение для детей Туркестанской области",
    en: "Multi-specialty medical facility for children of Turkestan region",
    kz: "Түркістан облысының балаларына арналған көпсалалы медициналық мекеме",
  },

  // Hero slider
  slide1: { ru: "Областная детская больница", en: "Regional Children's Hospital", kz: "Облыстық балалар ауруханасы" },
  slide2: { ru: "Современное оборудование", en: "Modern Equipment", kz: "Заманауи жабдықтар" },
  slide3: { ru: "Наши врачи", en: "Our Doctors", kz: "Біздің дәрігерлер" },
  slide4: { ru: "Палаты для пациентов", en: "Patient Rooms", kz: "Науқастар бөлмелері" },
  slide5: { ru: "Детская больница", en: "Children's Hospital", kz: "Балалар ауруханасы" },
  prevSlide: { ru: "Предыдущий слайд", en: "Previous slide", kz: "Алдыңғы слайд" },
  nextSlide: { ru: "Следующий слайд", en: "Next slide", kz: "Келесі слайд" },

  // Statistics
  beds: { ru: "коек", en: "beds", kz: "кереует" },
  treated: { ru: "пролечено", en: "treated", kz: "емделді" },
  admitted: { ru: "принято", en: "admitted", kz: "қабылданды" },

  // About
  aboutLabel: { ru: "О нас", en: "About us", kz: "Біз туралы" },
  aboutTitle: {
    ru: "Туркестанская областная многопрофильная детская больница",
    en: "Turkestan Regional Multi-specialty Children's Hospital",
    kz: "Түркістан облыстық көпсалалы балалар ауруханасы",
  },
  aboutDescription: {
    ru: "Информация о деятельности Областной детской больницы Туркестанской области. Мы предоставляем качественную медицинскую помощь детям с использованием современных технологий и оборудования.",
    en: "Information about the activities of the Regional Children's Hospital of Turkestan region. We provide quality pediatric healthcare using modern technologies and equipment.",
    kz: "Түркістан облыстық балалар ауруханасының қызметі туралы ақпарат. Біз заманауи технологиялар мен жабдықтарды қолдана отырып, балаларға сапалы медициналық көмек көрсетеміз.",
  },
  readMore: { ru: "Подробнее", en: "Learn more", kz: "Толығырақ" },
  featureEquipment: { ru: "Современное оборудование", en: "Modern Equipment", kz: "Заманауи жабдықтар" },
  featureStaff: { ru: "Квалифицированный персонал", en: "Qualified Staff", kz: "Білікті персонал" },
  featureWards: { ru: "Комфортные палаты", en: "Comfortable Rooms", kz: "Жайлы бөлмелер" },
  featurePlay: { ru: "Детская зона отдыха", en: "Children's Recreation Area", kz: "Балалар демалыс аймағы" },

  // Departments
  departmentsTitle: { ru: "Отделения", en: "Departments", kz: "Бөлімшелер" },

  // News
  newsTitle: { ru: "Новости", en: "News", kz: "Жаңалықтар" },
  allNews: { ru: "Все новости", en: "All news", kz: "Барлық жаңалықтар" },
  noNews: { ru: "Новостей пока нет", en: "No news yet", kz: "Әлі жаңалық жоқ" },

  // Photo Gallery
  galleryTitle: { ru: "Фотогалерея", en: "Photo Gallery", kz: "Фотогалерея" },
  allPhotos: { ru: "Все фото", en: "All photos", kz: "Барлық суреттер" },
  catAbout: { ru: "О поликлинике", en: "About clinic", kz: "Поликлиника туралы" },
  catStaff: { ru: "Персонал", en: "Staff", kz: "Персонал" },
  catRecommendations: { ru: "Рекомендации специалистов", en: "Specialist Recommendations", kz: "Мамандардың ұсыныстары" },
  catEvents: { ru: "Мероприятия", en: "Events", kz: "Іс-шаралар" },

  // Gov Programs
  govProgramsTitle: { ru: "Государственные программы", en: "Government Programs", kz: "Мемлекеттік бағдарламалар" },
  gov1: { ru: "Национальный проект Здоровье", en: "National Project Health", kz: "Денсаулық ұлттық жобасы" },
  gov2: { ru: "Государственная программа развития здравоохранения", en: "Healthcare Development Program", kz: "Денсаулық сақтауды дамыту бағдарламасы" },
  gov3: { ru: "Программа Денсаулык", en: "Densaulyk Program", kz: "Денсаулық бағдарламасы" },
  gov4: { ru: "Цифровизация здравоохранения", en: "Healthcare Digitalization", kz: "Денсаулық сақтауды цифрландыру" },
  prevSlideShort: { ru: "Назад", en: "Back", kz: "Артқа" },
  nextSlideShort: { ru: "Вперёд", en: "Forward", kz: "Алға" },

  // Quick Links
  qlSchedule: { ru: "Расписание приема", en: "Appointment Schedule", kz: "Қабылдау кестесі" },
  qlDoctors: { ru: "Наши врачи", en: "Our Doctors", kz: "Біздің дәрігерлер" },
  qlDepartments: { ru: "Отделения", en: "Departments", kz: "Бөлімшелер" },
  qlServices: { ru: "Услуги", en: "Services", kz: "Қызметтер" },
  qlNews: { ru: "Новости", en: "News", kz: "Жаңалықтар" },
  qlGallery: { ru: "Фотогалерея", en: "Photo Gallery", kz: "Фотогалерея" },
  qlVideo: { ru: "Видеогалерея", en: "Video Gallery", kz: "Бейнегалерея" },
  qlContacts: { ru: "Контакты", en: "Contacts", kz: "Байланыстар" },
  qlProcurement: { ru: "Государственные закупки", en: "Government Procurement", kz: "Мемлекеттік сатып алулар" },
  qlCompliance: { ru: "Комплаенс-служба", en: "Compliance Service", kz: "Комплаенс қызметі" },
  qlPatients: { ru: "Пациентам", en: "For Patients", kz: "Науқастарға" },
  qlReports: { ru: "Отчеты", en: "Reports", kz: "Есептер" },
  qlEthics: { ru: "Этический кодекс", en: "Code of Ethics", kz: "Этикалық кодекс" },

  // Map
  mapTitle: { ru: "Расположение", en: "Location", kz: "Орналасуы" },
  mapAddress: { ru: "г. Туркестан, ул. Абая, 52", en: "52 Abay St, Turkestan", kz: "Түркістан қ., Абай к., 52" },
  mapLoading: { ru: "Карта загружается...", en: "Map loading...", kz: "Карта жүктелуде..." },

  // Sidebar
  contactsTitle: { ru: "Контакты", en: "Contacts", kz: "Байланыстар" },
  bookAppointment: { ru: "Запишитесь на приём", en: "Book an Appointment", kz: "Қабылдауға жазылыңыз" },
  callToBook: { ru: "Позвоните нам для записи к специалисту", en: "Call us to book an appointment", kz: "Маманға жазылу үшін бізге қоңырау шалыңыз" },
  call: { ru: "Позвонить", en: "Call", kz: "Қоңырау шалу" },

  // CMS Page
  pageInDevelopment: { ru: "Страница в разработке", en: "Page under development", kz: "Бет әзірленуде" },

  // Admin
  adminDashboard: { ru: "Дашборд", en: "Dashboard", kz: "Басқару панелі" },
  adminPages: { ru: "Страницы", en: "Pages", kz: "Беттер" },
  adminNews: { ru: "Новости", en: "News", kz: "Жаңалықтар" },
  adminDepartments: { ru: "Отделения", en: "Departments", kz: "Бөлімшелер" },
  adminContacts: { ru: "Контакты", en: "Contacts", kz: "Байланыстар" },
  adminSettings: { ru: "Настройки", en: "Settings", kz: "Параметрлер" },
  adminPanel: { ru: "Админ-панель", en: "Admin Panel", kz: "Әкімшілік панель" },
  backToSite: { ru: "На сайт", en: "To site", kz: "Сайтқа" },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(lang: Lang, key: TranslationKey): string {
  return translations[key][lang] || translations[key]["ru"];
}
