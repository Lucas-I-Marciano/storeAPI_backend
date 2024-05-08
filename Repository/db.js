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
});

// console.log(process.env.DB_HOST);
console.log((await pool.query("SELECT * FROM users")).rows);
// console.log(pool);

export default pool;
