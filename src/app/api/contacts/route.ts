import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  const contacts = await query(
    'SELECT * FROM "Contact" ORDER BY "sortOrder" ASC'
  );
  return NextResponse.json(contacts);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { label, value, type, sortOrder } = body;

    const result = await query(
      `INSERT INTO "Contact" (label, value, type, "sortOrder")
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [label, value, type || "phone", sortOrder ?? 0]
    );
    return NextResponse.json(result[0], { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create contact" },
      { status: 500 }
    );
  }
}
