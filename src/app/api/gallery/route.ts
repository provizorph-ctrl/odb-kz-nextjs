import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  const categories = await query(
    `SELECT gc.*, COALESCE(imgs.images, '[]'::json) as images
     FROM "GalleryCategory" gc
     LEFT JOIN (
       SELECT "categoryId", json_agg(json_build_object('id', id, 'src', src, 'alt', alt)) as images
       FROM "GalleryImage"
       GROUP BY "categoryId"
     ) imgs ON imgs."categoryId" = gc.id
     ORDER BY gc."sortOrder" ASC`
  );
  return NextResponse.json(categories);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, nameEn, nameKz, nameQz, sortOrder } = body;

    const result = await query(
      `INSERT INTO "GalleryCategory" (name, "nameEn", "nameKz", "nameQz", "sortOrder")
       VALUES ($1,$2,$3,$4,$5) RETURNING *`,
      [name, nameEn || null, nameKz || null, nameQz || null, sortOrder ?? 0]
    );
    return NextResponse.json(result[0], { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create gallery category" },
      { status: 500 }
    );
  }
}
