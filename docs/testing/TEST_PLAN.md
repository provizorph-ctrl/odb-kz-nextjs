# Тест-план: Областная детская больница (odb.kz)

## 1. Введение

### 1.1 Цель
Документ описывает цели, подходы, ресурсы и график тестирования веб-сайта "Областная детская больница" (odb.kz), построенного на Next.js с PostgreSQL.

### 1.2 Объект тестирования
- Веб-сайт: https://ai-website-cloner-template-master-r44y7dtj1-odb3.vercel.app
- Репозиторий: provizorph-ctrl/odb-kz-nextjs
- Стек: Next.js 16, React 19, Tailwind CSS v4, PostgreSQL (Supabase)

### 1.3 Окружение
- **Production**: Vercel (ai-website-cloner-template-master-r44y7dtj1-odb3.vercel.app)
- **Database**: Supabase PostgreSQL (aws-0-ap-southeast-2.pooler.supabase.com)
- **Браузеры**: Chrome 120+, Firefox 120+, Safari 17+, Edge 120+
- **Устройства**: Desktop (1920x1080, 1366x768), Tablet (768x1024), Mobile (375x667)

---

## 2. Тестовая стратегия

### 2.1 Уровни тестирования
| Уровень | Покрытие | Приоритет |
|---------|----------|-----------|
| Smoke | Главная, О нас, Новости, Контакты, Вход в админку | Высокий |
| Functional | Навигация, CRUD операции, Формы, Авторизация | Высокий |
| UI/UX | Дизайн, Адаптивность, Кроссбраузерность | Средний |
| API | REST endpoints, Аутентификация | Высокий |
| Security | XSS, SQL Injection, CSRF | Высокий |
| Performance | Время загрузки, Оптимизация | Средний |

### 2.2 Критерии входа
- Все страницы доступны (HTTP 200)
- База данных доступна и содержит тестовые данные
- Нет критических багов в предыдущем релизе

### 2.3 Критерии выхода
- 100% smoke тестов пройдены
- 0 критических/высоких багов
- Все средние баги исправлены или имеют план исправления

---

## 3. Функциональные модули

### 3.1 Публичные страницы
| # | Страница | URL | Тип |
|---|----------|-----|-----|
| 1 | Главная | / | Динамическая (DB) |
| 2 | О нас | /o-nas | CMS (DB) |
| 3 | Миссия | /o-nas/missiya | CMS (DB) |
| 4 | История | /o-nas/istoriya | CMS (DB) |
| 5 | Отделения | /o-nas/otdeleniya | CMS (DB) |
| 6 | Коллектив | /o-nas/kollektiv | CMS (DB) |
| 7 | Галерея | /o-nas/galereya | CMS (DB) |
| 8 | Отчёты | /o-nas/otchety | CMS (DB) |
| 9 | Видео | /o-nas/video | CMS (DB) |
| 10 | Новости | /news-ru | Динамическая (DB) |
| 11 | Контакты | /conact-ru | Динамическая (DB) |
| 12 | Госзакупки | /gosudarstvennye-zakupki-ru | CMS (DB) |
| 13 | Комплаенс | /komplaens-sluzhba | CMS (DB) |
| 14 | Советы врача | /sovety-detskogo-vracha | CMS (DB) |
| 15 | Фотогалерея | /photogallery-1 | Динамическая (DB) |

### 3.2 Админ-панель
| # | Раздел | URL | Тип |
|---|--------|-----|-----|
| 1 | Дашборд | /admin | Серверный |
| 2 | Вход | /admin/login | Форма |
| 3 | Страницы (список) | /admin/pages | Серверный |
| 4 | Страница (создание) | /admin/pages/new | Клиентский |
| 5 | Страница (редактирование) | /admin/pages/[id] | Клиентский |
| 6 | Новости (список) | /admin/news | Серверный |
| 7 | Новость (создание) | /admin/news/new | Клиентский |
| 8 | Новость (редактирование) | /admin/news/[id] | Клиентский |
| 9 | Отделения (список) | /admin/departments | Серверный |
| 10 | Отделение (создание) | /admin/departments/new | Клиентский |
| 11 | Отделение (редактирование) | /admin/departments/[id] | Клиентский |
| 12 | Контакты (список) | /admin/contacts | Серверный |
| 13 | Настройки (список) | /admin/settings | Серверный |

### 3.3 API Endpoints
| # | Метод | URL | Назначение |
|---|-------|-----|------------|
| 1 | GET | /api/auth/[...nextauth] | Аутентификация |
| 2 | POST | /api/auth/register | Регистрация |
| 3 | GET | /api/pages | Список страниц |
| 4 | POST | /api/pages | Создание страницы |
| 5 | GET | /api/pages/[id] | Страница по ID |
| 6 | PUT | /api/pages/[id] | Обновление страницы |
| 7 | DELETE | /api/pages/[id] | Удаление страницы |
| 8 | GET | /api/news | Список новостей |
| 9 | POST | /api/news | Создание новости |
| 10 | GET | /api/news/[id] | Новость по ID |
| 11 | PUT | /api/news/[id] | Обновление новости |
| 12 | DELETE | /api/news/[id] | Удаление новости |
| 13 | GET | /api/departments | Список отделений |
| 14 | POST | /api/departments | Создание отделения |
| 15 | GET | /api/departments/[id] | Отделение по ID |
| 16 | PUT | /api/departments/[id] | Обновление отделения |
| 17 | DELETE | /api/departments/[id] | Удаление отделения |
| 18 | GET | /api/contacts | Список контактов |
| 19 | POST | /api/contacts | Создание контакта |
| 20 | PUT | /api/contacts/[id] | Обновление контакта |
| 21 | DELETE | /api/contacts/[id] | Удаление контакта |
| 22 | GET | /api/settings | Список настроек |
| 23 | PUT | /api/settings/[id] | Обновление настройки |
| 24 | GET | /api/menu | Список меню |
| 25 | GET | /api/gallery | Список галереи |

---

## 4. Риски

| Риск | Вероятность | Влияние | Митигация |
|------|-------------|---------|-----------|
| Node.js v24 OOM на Windows | Высокая | Среднее | Использовать Turbopack, не Vercel CLI |
| Prisma postinstall ломает билд | Высокая | Высокое | Удалить prisma из package.json |
| Supabase pooler SSL timeout | Низкая | Среднее | rejectUnauthorized: false |
| Нет хранения файлов (uploads) | Средняя | Низкое | Добавить Supabase Storage |

---

## 5. График тестирования

| Фаза | Длительность | Описание |
|------|-------------|----------|
| Smoke | 1 час | Проверка доступности всех страниц |
| Functional | 4 часа | CRUD операции, навигация, формы |
| API | 2 часа | Все endpoints, аутентификация |
| UI/UX | 2 часа | Адаптивность, кроссбраузерность |
| Security | 1 час | XSS, SQL Injection |
| Regression | 1 час | Повторная проверка после фиксов |
| **Итого** | **11 часов** | |

---

## 6. Контакты

| Роль | Имя |
|------|-----|
| Тестировщик | AI Assistant |
| Разработчик | provizorph |
| Заказчик | odb.kz |
