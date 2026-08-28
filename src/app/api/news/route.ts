import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  const news = await query(
    'SELECT * FROM "News" ORDER BY "date" DESC'
  );
  return NextResponse.json(news);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      slug,
      title,
      titleEn,
      titleKz,
      titleQz,
      content,
      contentEn,
      contentKz,
      contentQz,
      description,
      image,
      date,
      isPublished,
      isFeatured,
    } = body;

    const result = await query(
      `INSERT INTO "News" (slug, title, "titleEn", "titleKz", "titleQz", content, "contentEn", "contentKz", "contentQz", description, image, date, "isPublished", "isFeatured")
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14) RETURNING *`,
      [
        slug,
        title,
        titleEn || null,
        titleKz || null,
        titleQz || null,
        content || "",
        contentEn || null,
        contentKz || null,
        contentQz || null,
        description || null,
        image || null,
        date || new Date().toISOString(),
        isPublished ?? false,
        isFeatured ?? false,
      ]
    );
    return NextResponse.json(result[0], { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create news" },
      { status: 500 }
    );
  }
}
