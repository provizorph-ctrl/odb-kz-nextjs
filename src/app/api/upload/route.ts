import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { query } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const filename = `${Date.now()}-${file.name}`;
    const uploadDir = join(process.cwd(), "public/uploads");
    await mkdir(uploadDir, { recursive: true });
    const filePath = join(uploadDir, filename);

    await writeFile(filePath, buffer);

    const result = await query(
      `INSERT INTO "Upload" (filename, "originalName", mimetype, size, path)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [filename, file.name, file.type, file.size, `/uploads/${filename}`]
    );

    return NextResponse.json({
      url: `/uploads/${filename}`,
      filename,
      upload: result[0],
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 }
    );
  }
}
