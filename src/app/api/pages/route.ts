import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  const pages = await query(
    'SELECT * FROM "Page" ORDER BY "sortOrder" ASC'
  );
  return NextResponse.json(pages);
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
      isPublished,
      sortOrder,
    } = body;

    const page = await query(
      `INSERT INTO "Page" (slug, title, "titleEn", "titleKz", "titleQz", content, "contentEn", "contentKz", "contentQz", description, image, "isPublished", "sortOrder")
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *`,
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
        isPublished ?? false,
        sortOrder ?? 0,
      ]
    );
    return NextResponse.json(page[0], { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create page" },
      { status: 500 }
    );
  }
}
