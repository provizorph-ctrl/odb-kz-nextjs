import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  const departments = await query(
    'SELECT d.*, COALESCE(doc.doctors, \'[]\'::json) as doctors FROM "Department" d LEFT JOIN (SELECT "departmentId", json_agg(json_build_object(\'id\', id, \'name\', name, \'position\', position, \'image\', image)) as doctors FROM "Doctor" GROUP BY "departmentId") doc ON doc."departmentId" = d.id ORDER BY d."sortOrder" ASC'
  );
  return NextResponse.json(departments);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      slug,
      name,
      nameEn,
      nameKz,
      nameQz,
      description,
      descriptionEn,
      descriptionKz,
      descriptionQz,
      icon,
      image,
      sortOrder,
      isPublished,
    } = body;

    const result = await query(
      `INSERT INTO "Department" (slug, name, "nameEn", "nameKz", "nameQz", description, "descriptionEn", "descriptionKz", "descriptionQz", icon, image, "sortOrder", "isPublished")
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *`,
      [
        slug,
        name,
        nameEn || null,
        nameKz || null,
        nameQz || null,
        description || null,
        descriptionEn || null,
        descriptionKz || null,
        descriptionQz || null,
        icon || null,
        image || null,
        sortOrder ?? 0,
        isPublished ?? false,
      ]
    );
    return NextResponse.json(result[0], { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create department" },
      { status: 500 }
    );
  }
}
