const mysql = require('mysql2-promise')();
const dotenv = require('dotenv');
dotenv.config();

mysql.configure({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database:process.env.RDS_DATABASE
});

const getAllDonations = async() => {
    return await mysql.query('SELECT * FROM donations')
}



