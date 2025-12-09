import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false,
});

pool
  .connect()
  .then(() => console.log("PostgreSQL Connected"))
  .catch((err) => console.error("DB Error:", err));

export default pool;
