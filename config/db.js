const mysql = require('mysql2-promise')();
require("dotenv").config();

mysql.configure({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database:process.env.RDS_DATABASE
});

// Utility function to query the database
async function query(sql) {
  const [rows, fields] = await mysql.execute(sql);
  return rows;
}

module.exports =  query;