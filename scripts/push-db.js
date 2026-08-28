const { Client } = require('pg');

const client = new Client({
  host: 'aws-0-ap-southeast-2.pooler.supabase.com',
  port: 6543,
  database: 'postgres',
  user: 'postgres.ftgyiwyttcwdyiqqnmmm',
  password: 'QWer123456!@#Qw',
  ssl: { rejectUnauthorized: false }
});

const SQL = `
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS "User" (
  "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "email" TEXT UNIQUE NOT NULL,
  "name" TEXT,
  "password" TEXT NOT NULL,
  "role" TEXT NOT NULL DEFAULT 'ADMIN',
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "Page" (
  "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "slug" TEXT UNIQUE NOT NULL,
  "title" TEXT NOT NULL,
  "titleEn" TEXT,
  "titleKz" TEXT,
  "titleQz" TEXT,
  "content" TEXT NOT NULL,
  "contentEn" TEXT,
  "contentKz" TEXT,
  "contentQz" TEXT,
  "description" TEXT,
  "image" TEXT,
  "isPublished" BOOLEAN NOT NULL DEFAULT false,
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "News" (
  "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "slug" TEXT UNIQUE NOT NULL,
  "title" TEXT NOT NULL,
  "titleEn" TEXT,
  "titleKz" TEXT,
  "titleQz" TEXT,
  "content" TEXT NOT NULL,
  "contentEn" TEXT,
  "contentKz" TEXT,
  "contentQz" TEXT,
  "description" TEXT,
  "image" TEXT,
  "date" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "isPublished" BOOLEAN NOT NULL DEFAULT false,
  "isFeatured" BOOLEAN NOT NULL DEFAULT false,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "Department" (
  "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "slug" TEXT UNIQUE NOT NULL,
  "name" TEXT NOT NULL,
  "nameEn" TEXT,
  "nameKz" TEXT,
  "nameQz" TEXT,
  "description" TEXT,
  "descriptionEn" TEXT,
  "descriptionKz" TEXT,
  "descriptionQz" TEXT,
  "icon" TEXT,
  "image" TEXT,
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "isPublished" BOOLEAN NOT NULL DEFAULT false,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "Doctor" (
  "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "name" TEXT NOT NULL,
  "nameEn" TEXT,
  "nameKz" TEXT,
  "nameQz" TEXT,
  "position" TEXT NOT NULL,
  "positionEn" TEXT,
  "positionKz" TEXT,
  "positionQz" TEXT,
  "image" TEXT,
  "departmentId" TEXT REFERENCES "Department"("id") ON DELETE SET NULL,
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "GalleryCategory" (
  "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "name" TEXT NOT NULL,
  "nameEn" TEXT,
  "nameKz" TEXT,
  "nameQz" TEXT,
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "GalleryImage" (
  "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "src" TEXT NOT NULL,
  "alt" TEXT,
  "categoryId" TEXT NOT NULL REFERENCES "GalleryCategory"("id") ON DELETE CASCADE,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "Contact" (
  "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "label" TEXT NOT NULL,
  "value" TEXT NOT NULL,
  "type" TEXT NOT NULL DEFAULT 'phone',
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "SocialLink" (
  "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "platform" TEXT NOT NULL,
  "url" TEXT NOT NULL,
  "icon" TEXT,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "MenuItem" (
  "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "label" TEXT NOT NULL,
  "labelEn" TEXT,
  "labelKz" TEXT,
  "labelQz" TEXT,
  "url" TEXT NOT NULL,
  "parentId" TEXT REFERENCES "MenuItem"("id") ON DELETE SET NULL,
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "isPublished" BOOLEAN NOT NULL DEFAULT true,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "Setting" (
  "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "key" TEXT UNIQUE NOT NULL,
  "value" TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "Upload" (
  "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "filename" TEXT NOT NULL,
  "originalName" TEXT NOT NULL,
  "mimetype" TEXT NOT NULL,
  "size" INTEGER NOT NULL,
  "path" TEXT NOT NULL,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT now()
);
`;

async function main() {
  await client.connect();
  console.log('Connected to Supabase!');
  await client.query(SQL);
  console.log('All 12 tables created successfully!');

  const res = await client.query(`
    SELECT table_name FROM information_schema.tables
    WHERE table_schema = 'public' ORDER BY table_name
  `);
  console.log('Tables:', res.rows.map(r => r.table_name).join(', '));
  await client.end();
}

main().catch(e => { console.error(e); process.exit(1); });
