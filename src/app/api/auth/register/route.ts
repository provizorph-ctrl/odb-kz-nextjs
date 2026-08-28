import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { queryOne } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password required" },
        { status: 400 }
      );
    }

    const existingUser = await queryOne(
      'SELECT id FROM "User" WHERE email = $1',
      [email]
    );

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await queryOne<{ id: string; email: string; name: string | null }>(
      'INSERT INTO "User" (email, name, password) VALUES ($1, $2, $3) RETURNING id, email, name',
      [email, name || null, hashedPassword]
    );

    return NextResponse.json({ user }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
