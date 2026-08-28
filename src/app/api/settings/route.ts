import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  const settings = await query('SELECT * FROM "Setting" ORDER BY key ASC');
  return NextResponse.json(settings);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { key, value } = body;
    if (!key || value === undefined) {
      return NextResponse.json({ error: "key and value required" }, { status: 400 });
    }
    const result = await query(
      `INSERT INTO "Setting" (id, key, value) VALUES (gen_random_uuid()::text, $1, $2) RETURNING *`,
      [key, value]
    );
    return NextResponse.json(result[0], { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create setting" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { key, value } = body;

    if (!key || value === undefined) {
      return NextResponse.json(
        { error: "key and value required" },
        { status: 400 }
      );
    }

    await query(
      `INSERT INTO "Setting" (id, key, value) VALUES (gen_random_uuid()::text, $1, $2)
       ON CONFLICT (key) DO UPDATE SET value = $2`,
      [key, value]
    );
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to update setting" },
      { status: 500 }
    );
  }
}
