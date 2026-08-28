import { Pool } from "pg";

const globalForPg = globalThis as unknown as {
  pool: Pool | undefined;
};

function getPool(): Pool {
  if (!globalForPg.pool) {
    globalForPg.pool = new Pool({
      host: "aws-0-ap-southeast-2.pooler.supabase.com",
      port: 6543,
      database: "postgres",
      user: "postgres.ftgyiwyttcwdyiqqnmmm",
      password: "QWer123456!@#Qw",
      ssl: { rejectUnauthorized: false },
    });
  }
  return globalForPg.pool;
}

export const db = getPool();

export async function query<T extends Record<string, unknown> = Record<string, unknown>>(
  text: string,
  params?: unknown[]
): Promise<T[]> {
  const pool = getPool();
  const result = await pool.query(text, params);
  const rows = result.rows;
  return rows as T[];
}

export async function queryOne<T extends Record<string, unknown> = Record<string, unknown>>(
  text: string,
  params?: unknown[]
): Promise<T | null> {
  const pool = getPool();
  const result = await pool.query(text, params);
  const rows = result.rows;
  return (rows[0] as T) ?? null;
}

export async function execute(
  text: string,
  params?: unknown[]
): Promise<{ rowCount: number }> {
  const pool = getPool();
  const result = await pool.query(text, params);
  return { rowCount: result.rowCount ?? 0 };
}
