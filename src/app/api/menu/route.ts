import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  const items = await query(
    'SELECT * FROM "MenuItem" WHERE "isPublished" = true ORDER BY "sortOrder" ASC'
  );
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { label, labelEn, labelKz, labelQz, url, parentId, sortOrder, isPublished } = body;

    const result = await query(
      `INSERT INTO "MenuItem" (label, "labelEn", "labelKz", "labelQz", url, "parentId", "sortOrder", "isPublished")
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,
      [
        label,
        labelEn || null,
        labelKz || null,
        labelQz || null,
        url,
        parentId || null,
        sortOrder ?? 0,
        isPublished ?? true,
      ]
    );
    return NextResponse.json(result[0], { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create menu item" },
      { status: 500 }
    );
  }
}
