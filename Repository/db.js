import pg from "pg";
const { Pool } = pg;
import "dotenv/config";

// It is like a pool of connection. Instead of any time I need a connection I made a request, I will just use one of the connections here on the Pool
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  max: 10,
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 2000,
});

export default pool;
