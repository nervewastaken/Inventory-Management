require('dotenv').config();
const { Pool } = require('pg');


const pool = new Pool({
  user: 'postgres',
  host: 'database-1.cf6cg2ekwucq.ap-south-1.rds.amazonaws.com',
  database: 'test',
  password: process.env.PASSWORD,
  port: 5432,
  ssl: false, // Use SSL in production with a valid certificate
});

// SQL query to create the proddeets table
const createTableQuery = `
CREATE TABLE proddeets (
    prodid SERIAL PRIMARY KEY,
    prodname VARCHAR(255) NOT NULL,
    prodprice DECIMAL(10, 2) NOT NULL,
    invsize INT,
    comments TEXT,
    supervisor VARCHAR(255),
    dateup TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

pool.query(createTableQuery, (err, res) => {
  if (err) {
    console.error('Failed to create table:', err);
  } else {
    console.log('Table created successfully:', res);
  }
  pool.end();
});

