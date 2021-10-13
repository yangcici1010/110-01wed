const { Pool } = require('pg');


const isProduction = process.env.NODE_ENV === "production"

const pool = new Pool({
  // user: 'postgres',
  // host: 'localhost',
  // database: 'crown_81',
  // password: '0000',
  // port: 5432,
  connectionString: isProduction ? process.env.DATABASE_URL : postgresql://postgres:0000@localhost:5432/crown_06
});

pool.query('SELECT * from category_06', (err, res) => {
  console.log(JSON.stringify(res.rows));
  pool.end();
});

module.exports = pool;