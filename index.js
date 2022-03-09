const mysql = require('mysql2-promise')();
var AWS = require("aws-sdk");
var SNS = new AWS.SNS();
mysql.configure({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database:process.env.RDS_DATABASE
});

const checkDonor = async(mobileNumber) => {
    const query = `SELECT count(id) as donationCount FROM donations WHERE mobile like '%${mobileNumber}%'`;
    return (await mysql.execute(query))[0];
};

const insertDonation = async(data) => {
    const query = `INSERT INTO donations(name,amount,mobile,email) VALUES ('${data.name}',${data.amount}, '${data.mobile}', '${data.email}')`;
    mysql.execute(query);
};

const publishSNS = async(data) => {
     return new Promise((resolve,reject) => {
         SNS.publish(data, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
     });
};

exports.handler = async function(event, context, callback) {
    const data = event;
    const checkUser = (await checkDonor(data.mobile))[0];
    insertDonation(data);
    if(checkUser.donationCount > 1) {
        // Publish SNS
        var params = {
            PhoneNumber: data.mobile,
            Message: 'Thank you for your donation at Cancer Reserach UK. You are such a human being!!'
        };
         publishSNS(params);
    }
     const response = {
        statusCode: 200,
        body: {msg:"Thank you for donation"},
    };
    return response;
};
