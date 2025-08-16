// import pkg from 'pg';
// const { Pool } = pkg;
// import dotenv from 'dotenv';
// dotenv.config();

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// pool.on('connect', () => {
//   console.log('Connected to PostgreSQL ✅');
// });

// export default pool;

import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
});

export default pool;
