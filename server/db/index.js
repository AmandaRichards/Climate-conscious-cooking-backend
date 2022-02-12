import pg from "pg";
import  { db  }   from "../config.js"

const pool = new pg.Pool({
  user: db.user,
  host: db.host,
  port: db.port,
  database: db.database,
  password: db.password,
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

function query(text, params) {
  return pool.query(text, params);
}

export default query;
