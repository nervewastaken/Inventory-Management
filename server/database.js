const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'database-1.cf6cg2ekwucq.ap-south-1.rds.amazonaws.com',
  database: 'test',
  password: process.env.PASSWORD,
  port: 5432,
  ssl: false, // Use SSL in production with a valid certificate
});

module.exports = pool;
