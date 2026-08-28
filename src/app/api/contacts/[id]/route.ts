import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const rows = await query('SELECT * FROM "Contact" WHERE id = $1', [id]);
  if (!rows[0]) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(rows[0]);
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json();
  const keys = Object.keys(body);
  const values = Object.values(body);
  if (keys.length === 0) return NextResponse.json({ error: "No data" }, { status: 400 });
  const setClauses = keys.map((k, i) => `"${k}" = $${i + 1}`);
  values.push(id);
  const result = await query(
    `UPDATE "Contact" SET ${setClauses.join(", ")} WHERE id = $${keys.length + 1} RETURNING *`,
    values
  );
  return NextResponse.json(result[0]);
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await query('DELETE FROM "Contact" WHERE id = $1', [id]);
  return NextResponse.json({ success: true });
}
