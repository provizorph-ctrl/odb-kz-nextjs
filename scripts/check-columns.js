const { Pool } = require("pg");
const pool = new Pool({
  host: "aws-0-ap-southeast-2.pooler.supabase.com",
  port: 6543,
  user: "postgres.ftgyiwyttcwdyiqqnmmm",
  password: "QWer123456!@#Qw",
  database: "postgres",
  ssl: { rejectUnauthorized: false },
});

async function check() {
  const tables = ["News", "Department", "Contact", "MenuItem", "Setting"];
  for (const t of tables) {
    const r = await pool.query(
      `SELECT column_name FROM information_schema.columns WHERE table_name = '${t}' ORDER BY ordinal_position`
    );
    console.log(`${t}: ${r.rows.map(x => x.column_name).join(", ")}`);
  }
  await pool.end();
}

check();
